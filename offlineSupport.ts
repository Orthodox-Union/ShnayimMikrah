import Axios from "axios";
import * as fs from "fs";
import * as path from "path";
import { parshiotArray } from "./parshiot";
import {
  AliyahNumber, BookName, ChumashTextResponse, DownloadArgs, EnglishTextVersionOptions,
  HebrewTextVersionOptions, OfflineArgs, Parsha,
  ParshaName, RawFileDownloadResponse, ShnayimMikrahVerse
} from "./types";
import { parseRange } from "./utils";

const baseChumashLink = 'https://www.sefaria.org/api/texts/$book?vhe=$hebrewVersion&ven=$englishVersion&context=0&pad=0';
const getChumashLink = (book: BookName, hebrewVersion: HebrewTextVersionOptions, englishVersion: EnglishTextVersionOptions) =>
  baseChumashLink
    .replace('$book', book)
    .replace('$hebrewVersion', hebrewVersion)
    .replace('$englishVersion', englishVersion);

/**
 * Targum, Rashi (Hebrew) and Rashi (English) data is static and bundled with the
 * package under ./data so it can be read from disk instead of being fetched over
 * the network on every call (see ./data and the `files` entry in package.json).
 */
function readBundledData<TextType>(folder: 'targum' | 'rashi-hebrew' | 'rashi-english', book: BookName): RawFileDownloadResponse<TextType> {
  const filePath = path.join(__dirname, '..', 'data', folder, `${book}.json`);
  const fileContents = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(fileContents);
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
const version: number = 6;
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