export interface CalendarResponse {
  date: string;
  timezone: string;
  calendar_items: calendarItem[];
}

export interface calendarItem {
  title: { en: string, he: string};
  extraDetails: { aliyot: string[] };
}

export interface RashiResponse {
  text: string[] | Array<string[]> | Array<Array<string[]>>;
  he: string[] | Array<string[]> | Array<Array<string[]>>;
}

export interface TargumResponse {
  he: string | string[] | Array<string[]>;
}
export type Book = 'Genesis' | 'Exodus' | 'Leviticus' | 'Numbers' | 'Deuteronomy';
export type AliyahNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7;

export interface TextResponse {
  book: Book;
  text: string | string[] | Array<string[]>
  he:  string | string[] | Array<string[]>;
}

export interface Args {
  /**
   * Used to determine what date we need to look at in order to return the correct Aliyah.
   * Must be a valid IANA time zone string, such as Asia/Jerusalem, America/New_York, Europe/Paris, etc.
   */
  timezone: string;
  /**
   * Used to specify if you want the parasha according to the diaspora calendar or according to the Israel calendar. 
   * Default is diaspora=1 to get the diaspora version.
   */
  diaspora?: number;
  /**
   * Used to control what ALiyah is returned. Default is the Aliyah for the day of the week.
   */
  aliyah?: AliyahNumber; 
}
export interface ShnayimMikrahVerse {
  book: Book;
  chapter: number;
  verse: number;
  hebrewText: string;
  englishText: string;
  targum: string;
  rashi: string[];
}
export interface Aliyah {
  book: Book;
  aliyah: AliyahNumber;
  /**
   * Chapter + verse range.
   */
  verseRange: string;
  verses: ShnayimMikrahVerse[];
}