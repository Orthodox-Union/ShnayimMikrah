import Axios from "axios";
import { CalendarResponse, TextResponse, TargumResponse, RashiResponse, AliyahNumber, Aliyah, Args } from "./types";
import { parseRange } from "./utils";

/**
 * Get Shnayim Mikrah for an Aliyah with Targum and Rashi.
 * @param {Args} args Options to control what data is returned.
 */
async function getShnayimMikrah(args: Args) {
  const diaspora = args.diaspora ?? 1;
  const { data: calendar } = await Axios.get<CalendarResponse>(`https://www.sefaria.org/api/calendars?timezone=${args.timezone}&diaspora=${diaspora}`);
  const aliyahIndex = args.aliyah ? args.aliyah - 1 : new Date().getDay();
  const range = calendar.calendar_items[0].extraDetails.aliyot[aliyahIndex];
  const chapterAndVerse = parseRange(range);

  const {
    0: { data: chumash },
    1: { data: targum },
    2: { data: rashi },
    3: { data: rashiEnglish },
  } = await Promise.all([
    Axios.get<TextResponse>(`https://www.sefaria.org/api/texts/${range}?context=0&ven=${args.englishTextVersion}&vhe=${args.hebrewTextVersion}`),
    Axios.get<TargumResponse>(`https://www.sefaria.org/api/texts/Onkelos_${range}?context=0`),
    Axios.get<RashiResponse>(`https://www.sefaria.org/api/texts/Rashi_on_${range}?context=0`),
    Axios.get<RashiResponse>(`https://www.sefaria.org/api/texts/Rashi_on_${range}?context=0&lang=en`)
  ]);
  let aliyah: Aliyah = {
    verseRange: range,
    book: chumash.book,
    aliyah: aliyahIndex as AliyahNumber,
    verses: []
  };

  // Single Pasuk
  if (!Array.isArray(chumash.text)) {
    aliyah.verses.push({
      book: chumash.book,
      chapter: chapterAndVerse.start[0],
      verse: chapterAndVerse.start[1],
      englishText: chumash.text,
      hebrewText: chumash.he as string,
      rashi: rashi.he as string[],
      targum: targum.he as string,
      rashiEnglish: rashiEnglish.text as string[]
    })
  }
  // All Pasukim are in the same perek.
  else if (Array.isArray(chumash.text) && !Array.isArray(chumash.text[0])) {
    (chumash.text as string[]).map((t, i) => aliyah.verses.push({
      book: chumash.book,
      chapter: chapterAndVerse.start[0],
      verse: chapterAndVerse.start[1] + i,
      englishText: t,
      hebrewText: chumash.he[i] as string,
      rashi: rashi.he[i] as string[],
      targum: targum.he[i] as string,
      rashiEnglish: rashiEnglish.text[i] as string[]
    }));
  }
  // Multiple Perakim
  else if (Array.isArray(chumash.text) && Array.isArray(chumash.text[0])) {
    let verse = chapterAndVerse.start[1];
    (chumash.text as string[][]).map((ot, oi) => {
      ot.map((t, i) => {
        if (i === 0 && oi !== 0) {
          verse = 1;
        }
        aliyah.verses.push({
          book: chumash.book,
          chapter: chapterAndVerse.start[0] + oi,
          verse: verse + i,
          englishText: t,
          hebrewText: (chumash.he as string[][])[oi][i],
          rashi: (rashi.he as string[][][])[oi][i],
          targum: (targum.he as string[][])[oi][i],
          rashiEnglish: (rashiEnglish.text as string[][][])[oi][i]
        })
      });
    });
  }
  return aliyah;
}

export default getShnayimMikrah;
