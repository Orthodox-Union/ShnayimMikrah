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

export interface TextResponse {
  book: Book;
  text: string | string[] | Array<string[]>
  he:  string | string[] | Array<string[]>;
}