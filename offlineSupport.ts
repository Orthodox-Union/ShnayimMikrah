import Axios from "axios";
import { parshiotArray } from "./parshiot";
import {
  AliyahNumber, BookName, ChumashTextResponse, DownloadArgs, EnglishTextVersionOptions,
  HebrewTextVersionOptions, OfflineArgs, Parsha,
  ParshaName, RashiVersionOptions, RawFileDownloadResponse, ShnayimMikrahVerse, TargumVersionOptions
} from "./types";
import { parseRange } from "./utils";

const baseChumashLink = 'https://www.sefaria.org/api/texts/$book?vhe=$hebrewVersion&ven=$englishVersion&context=0&pad=0';
const getChumashLink = (book: BookName, hebrewVersion: HebrewTextVersionOptions, englishVersion: EnglishTextVersionOptions) =>
  baseChumashLink
    .replace('$book', book)
    .replace('$hebrewVersion', hebrewVersion)
    .replace('$englishVersion', englishVersion);

// For right now Targum and Rashi versions are hardcoded
const targumVersion: TargumVersionOptions = 'Sifsei Chachomim Chumash, Metsudah Publications, 2009';
const baseTargumLink = `https://raw.githubusercontent.com/Orthodox-Union/ShnayimMikrah-Files/master/Targum/$book/Hebrew/${targumVersion}.json`;
const getTargumLink = (book: BookName) => encodeURI(baseTargumLink.replace('$book', book));
const targumLinks = {
  [BookName.Genesis]: getTargumLink(BookName.Genesis),
  [BookName.Exodus]: getTargumLink(BookName.Exodus),
  [BookName.Leviticus]: getTargumLink(BookName.Leviticus),
  [BookName.Numbers]: getTargumLink(BookName.Numbers),
  [BookName.Deuteronomy]: getTargumLink(BookName.Deuteronomy),
};

const rashiVersion: RashiVersionOptions = 'Rashi Chumash, Metsudah Publications, 2009';
const baseRashiLink = `https://raw.githubusercontent.com/Orthodox-Union/ShnayimMikrah-Files/master/Rashi/$book/Hebrew/${rashiVersion}.json`;
const getRashiLink = (book: BookName) => encodeURI(baseRashiLink.replace('$book', book));
const rashiLinks = {
  [BookName.Genesis]: getRashiLink(BookName.Genesis),
  [BookName.Exodus]: getRashiLink(BookName.Exodus),
  [BookName.Leviticus]: getRashiLink(BookName.Leviticus),
  [BookName.Numbers]: getRashiLink(BookName.Numbers),
  [BookName.Deuteronomy]: getRashiLink(BookName.Deuteronomy),
};

const rashiEnglishVersion: RashiVersionOptions = 'Rashi Chumash, Metsudah Publications, 2009';
const baseRashiEnglishLink = `https://raw.githubusercontent.com/Orthodox-Union/ShnayimMikrah-Files/master/Rashi/$book/English/${rashiEnglishVersion}.json`;
const getRashiEnglishLink = (book: BookName) => encodeURI(baseRashiEnglishLink.replace('$book', book));
const rashiEnglishLinks = {
  [BookName.Genesis]: getRashiEnglishLink(BookName.Genesis),
  [BookName.Exodus]: getRashiEnglishLink(BookName.Exodus),
  [BookName.Leviticus]: getRashiEnglishLink(BookName.Leviticus),
  [BookName.Numbers]: getRashiEnglishLink(BookName.Numbers),
  [BookName.Deuteronomy]: getRashiEnglishLink(BookName.Deuteronomy),
};

/**
 * Will download a book with commentaries.
 * @param {DownloadArgs} args Options to be used while downloading the Book
 */
async function downloadBook(args: DownloadArgs) {
  const { book, hebrewTextVersion, englishTextVersion, save } = args;
  const { data: { text: englishBookText, he: hebrewBookText } } = await Axios.get<ChumashTextResponse>(getChumashLink(book, hebrewTextVersion, englishTextVersion));
  const { data: { text: targumText } } = await Axios.get<RawFileDownloadResponse<string[][]>>(targumLinks[book]);
  const { data: { text: rashiText } } = await Axios.get<RawFileDownloadResponse<string[][][]>>(rashiLinks[book]);
  const { data: { text: rashiEnglishText } } = await Axios.get<RawFileDownloadResponse<string[][][]>>(rashiEnglishLinks[book]);

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
 * Indicates if a new version of the libary was released and therfore data should be redownloaded since it might be stale
 */
const version: number = 4;
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