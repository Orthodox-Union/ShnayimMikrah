import Axios from "axios";
import { parshiotArray } from "./parshiot";
import {
  AliyahNumber, BookName, ChumashTextResponse, DownloadArgs, EnglishTextVersionOptions,
  HebrewTextVersionOptions, OfflineArgs, Parsha,
  ParshaName, RawFileDownloadResponse, ShnayimMikrahVerse
} from "./types";
import { parseRange } from "./utils";

import targumGenesis from "./data/targum/Genesis.json";
import targumExodus from "./data/targum/Exodus.json";
import targumLeviticus from "./data/targum/Leviticus.json";
import targumNumbers from "./data/targum/Numbers.json";
import targumDeuteronomy from "./data/targum/Deuteronomy.json";

import rashiHebrewGenesis from "./data/rashi-hebrew/Genesis.json";
import rashiHebrewExodus from "./data/rashi-hebrew/Exodus.json";
import rashiHebrewLeviticus from "./data/rashi-hebrew/Leviticus.json";
import rashiHebrewNumbers from "./data/rashi-hebrew/Numbers.json";
import rashiHebrewDeuteronomy from "./data/rashi-hebrew/Deuteronomy.json";

import rashiEnglishGenesis from "./data/rashi-english/Genesis.json";
import rashiEnglishExodus from "./data/rashi-english/Exodus.json";
import rashiEnglishLeviticus from "./data/rashi-english/Leviticus.json";
import rashiEnglishNumbers from "./data/rashi-english/Numbers.json";
import rashiEnglishDeuteronomy from "./data/rashi-english/Deuteronomy.json";

const baseChumashLink = 'https://www.sefaria.org/api/texts/$book?vhe=$hebrewVersion&ven=$englishVersion&context=0&pad=0';
const getChumashLink = (book: BookName, hebrewVersion: HebrewTextVersionOptions, englishVersion: EnglishTextVersionOptions) =>
  baseChumashLink
    .replace('$book', book)
    .replace('$hebrewVersion', hebrewVersion)
    .replace('$englishVersion', englishVersion);

/**
 * Targum, Rashi (Hebrew) and Rashi (English) data is static and bundled with the
 * package under ./data. It is imported statically (rather than read from disk with
 * `fs`) so it works both in Node and when the package is bundled for the browser
 * (e.g. by Vite/webpack), since `fs`/`path`/`__dirname` are not available client-side.
 */
const bundledData: Record<'targum' | 'rashi-hebrew' | 'rashi-english', Record<BookName, unknown>> = {
  targum: {
    [BookName.Genesis]: targumGenesis,
    [BookName.Exodus]: targumExodus,
    [BookName.Leviticus]: targumLeviticus,
    [BookName.Numbers]: targumNumbers,
    [BookName.Deuteronomy]: targumDeuteronomy,
  },
  'rashi-hebrew': {
    [BookName.Genesis]: rashiHebrewGenesis,
    [BookName.Exodus]: rashiHebrewExodus,
    [BookName.Leviticus]: rashiHebrewLeviticus,
    [BookName.Numbers]: rashiHebrewNumbers,
    [BookName.Deuteronomy]: rashiHebrewDeuteronomy,
  },
  'rashi-english': {
    [BookName.Genesis]: rashiEnglishGenesis,
    [BookName.Exodus]: rashiEnglishExodus,
    [BookName.Leviticus]: rashiEnglishLeviticus,
    [BookName.Numbers]: rashiEnglishNumbers,
    [BookName.Deuteronomy]: rashiEnglishDeuteronomy,
  },
};

function readBundledData<TextType>(folder: 'targum' | 'rashi-hebrew' | 'rashi-english', book: BookName): RawFileDownloadResponse<TextType> {
  return bundledData[folder][book] as RawFileDownloadResponse<TextType>;
}

/**
 * Will download a book with commentaries.
 * @param {DownloadArgs} args Options to be used while downloading the Book
 */
async function downloadBook(args: DownloadArgs) {
  const { book, hebrewTextVersion, englishTextVersion, save } = args;
  const { data: { text: englishBookText, he: hebrewBookText } } = await Axios.get<ChumashTextResponse>(getChumashLink(book, hebrewTextVersion, englishTextVersion));
  const { text: targumText } = readBundledData<string[][]>('targum', book);
  const { text: rashiText } = readBundledData<string[][][]>('rashi-hebrew', book);
  const { text: rashiEnglishText } = readBundledData<string[][][]>('rashi-english', book);

  const verseIndexMapper: Record<string, number> = {};
  let k = 0;

  const verses: ShnayimMikrahVerse[] = hebrewBookText.flatMap((d, i) =>
    d.map((id, ii) => {
      verseIndexMapper[`${i}-${ii}`] = k;
      k++;
      return {
        book,
        chapter: i + 1,
        verse: ii + 1,
        hebrewText: id,
        englishText: englishBookText[i][ii],
        targum: targumText[i][ii],
        rashi: rashiText[i][ii],
        rashiEnglish: rashiEnglishText[i][ii]
      };
    })
  );
  const parshiot = parshiotArray
    .filter(p => p.book === book);

  const mappedParshiot: Record<ParshaName, Parsha> = parshiot.reduce((prev, p) => ({
    ...prev,
    [p.name]: {
      ...p,
      aliyot: p.aliyot.map((a, i) => {
        const chapterAndVerse = parseRange(a);
    
        return {
          parshaName: p.name,
          book: p.book,
          verseRange: a,
          aliyah: i + 1 as AliyahNumber,
          verses: verses.slice(
            verseIndexMapper[`${chapterAndVerse.start[0] - 1}-${chapterAndVerse.start[1] - 1}`],
            verseIndexMapper[`${chapterAndVerse.end[0] - 1}-${chapterAndVerse.end[1] - 1}`] + 1
          )
        }
      })
    }
  }), {} as Record<ParshaName, Parsha>);
  return save({
    book,
    parshiot: mappedParshiot
  });
}

/**
 * Will download the entire Chumash with commentaries.
 * @param {DownloadArgs} args Options to be used while downloading the Book
 */
async function downloadChumash(args: DownloadArgs) {
  return Promise.all([
    downloadBook({ ...args, book: BookName.Genesis }),
    downloadBook({ ...args, book: BookName.Exodus }),
    downloadBook({ ...args, book: BookName.Leviticus }),
    downloadBook({ ...args, book: BookName.Numbers }),
    downloadBook({ ...args, book: BookName.Deuteronomy }),
  ])
}

/**
 * Will download the requested Book, or the whole Chumash per the option selected
 * @param {DownloadArgs} args Options to be used when saving the data for offline use.
 */
async function download(args: DownloadArgs) {
  if (args.all) {
    return downloadChumash(args);
  }
  else { 
    return downloadBook(args);
  }
}

/**
 * Indicates if a new version of the libary was released and therefore data should be redownloaded since it might be stale
 */
const version: number = 7;
/**
 * Get Shnayim Mikrah for an Aliyah with Targum and Rashi using offline data.
 * @param {OfflineArgs} args Options to control what data is returned.
 */
async function getShnayimMikrahOffline(args: OfflineArgs) {
  const book = await args.getData(args.book);
  const parsha = book.parshiot[args.parsha];

  if (args.wholeParsha) {
    return parsha;
  } else {
    const aliyahIndex = args.aliyah ? args.aliyah - 1 : new Date().getDay();
    return parsha.aliyot[aliyahIndex];
  }
}

export {
  version,
  download,
  getShnayimMikrahOffline
};