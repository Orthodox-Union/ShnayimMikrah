import Axios from "axios";
import { parshiotArray } from "./parshiot";
import { AliyahNumber, BookName, OfflineArgs, OfflineStorage, Parsha, ParshaName, RawFileDownloadResponse, ShnayimMikrahVerse } from "./types";
import { parseRange } from "./utils";

const baseChumashLink = 'https://raw.githubusercontent.com/Sefaria/Sefaria-Export/master/json/Tanakh/Torah/$book/$language/merged.json';
const getChumashLink = (book: BookName, language: 'Hebrew' | 'English') =>
  baseChumashLink
    .replace('$book', book)
    .replace('$language', language);
const bookLinks = {
  [BookName.Genesis]: {
    en: getChumashLink(BookName.Genesis, 'English'),
    he:  getChumashLink(BookName.Genesis, 'Hebrew')
  },
  [BookName.Exodus]: {
    en: getChumashLink(BookName.Exodus, 'English'),
    he:  getChumashLink(BookName.Exodus, 'Hebrew')
  },
  [BookName.Leviticus]: {
    en: getChumashLink(BookName.Leviticus, 'English'),
    he:  getChumashLink(BookName.Leviticus, 'Hebrew')
  },
  [BookName.Numbers]: {
    en: getChumashLink(BookName.Numbers, 'English'),
    he:  getChumashLink(BookName.Numbers, 'Hebrew')
  },
  [BookName.Deuteronomy]: {
    en: getChumashLink(BookName.Deuteronomy, 'English'),
    he:  getChumashLink(BookName.Deuteronomy, 'Hebrew')
  },
};

const baseTargumLink = 'https://raw.githubusercontent.com/Sefaria/Sefaria-Export/master/json/Tanakh/Targum/Onkelos/Torah/Onkelos%20$book/Hebrew/merged.json';
const getTargumLink = (book: BookName) =>
  baseTargumLink
    .replace('$book', book);
const targumLinks = {
  [BookName.Genesis]: getTargumLink(BookName.Genesis),
  [BookName.Exodus]: getTargumLink(BookName.Exodus),
  [BookName.Leviticus]: getTargumLink(BookName.Leviticus),
  [BookName.Numbers]: getTargumLink(BookName.Numbers),
  [BookName.Deuteronomy]: getTargumLink(BookName.Deuteronomy),
};

const baseRashiLink = 'https://raw.githubusercontent.com/Sefaria/Sefaria-Export/master/json/Tanakh/Commentary/Rashi/Torah/Rashi%20on%20$book/Hebrew/merged.json';
const getRashiLink = (book: BookName) =>
  baseRashiLink
    .replace('$book', book);
const rashiLinks = {
  [BookName.Genesis]: getRashiLink(BookName.Genesis),
  [BookName.Exodus]: getRashiLink(BookName.Exodus),
  [BookName.Leviticus]: getRashiLink(BookName.Leviticus),
  [BookName.Numbers]: getRashiLink(BookName.Numbers),
  [BookName.Deuteronomy]: getRashiLink(BookName.Deuteronomy),
};

/**
 * Will download a book with commentaries.
 * @param book The Book you want to download.
 * @param save A function to save the downloaded content.
 */
async function downloadBook(book: BookName, save: (data: OfflineStorage) => void) {
  const {
    0: { data: { text: hebrewBookText } },
    1: { data: { text: englishBookText } }
  } = await Promise.all([
    Axios.get<RawFileDownloadResponse<string[][]>>(bookLinks[book].he),
    Axios.get<RawFileDownloadResponse<string[][]>>(bookLinks[book].en)
  ]);
  const { data: { text: targumText } } = await Axios.get<RawFileDownloadResponse<string[][]>>(targumLinks[book]);
  const { data: { text: rashiText } } = await Axios.get<RawFileDownloadResponse<string[][][]>>(rashiLinks[book]);

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
        rashi: rashiText[i][ii]
      }
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
          aliyah: i as AliyahNumber,
          verses: verses.slice(
            verseIndexMapper[`${chapterAndVerse.start[0]}-${chapterAndVerse.start[1]}`],
            verseIndexMapper[`${chapterAndVerse.end[0]}-${chapterAndVerse.end[1]}`]
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
 * @param book The Book you want to download.
 * @param save A function to save the downloaded content.
 */
async function downloadChumash(save: (data: OfflineStorage) => void) {
  return Promise.all([
    downloadBook(BookName.Genesis, save),
    downloadBook(BookName.Exodus, save),
    downloadBook(BookName.Leviticus, save),
    downloadBook(BookName.Numbers, save),
    downloadBook(BookName.Deuteronomy, save),
  ])
}

/**
 * Get Shnayim Mikrah for an Aliyah with Targum and Rashi using offline data.
 * @param args Options to control what data is returned.
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
  downloadBook,
  downloadChumash,
  getShnayimMikrahOffline
};