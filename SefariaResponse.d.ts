interface CalendarResponse {
  date: string;
  timezone: string;
  calendar_items: calendarItem[];
}

interface calendarItem {
  title: { en: string, he: string};
  extraDetails: { aliyot: string[] };
}

interface RashiResponse {
  text: string[] | Array<string[]> | Array<Array<string[]>>;
  he: string[] | Array<string[]> | Array<Array<string[]>>;
}

interface TargumResponse {
  he: string | string[] | Array<string[]>;
}
type Book = 'Genesis' | 'Exodus' | 'Leviticus' | 'Numbers' | 'Deuteronomy';

interface TextResponse {
  book: Book;
  text: string | string[] | Array<string[]>
  he:  string | string[] | Array<string[]>;
}