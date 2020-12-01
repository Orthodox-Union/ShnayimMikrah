export interface CalendarResponse {
	date: string;
	timezone: string;
	calendar_items: calendarItem[];
}

export interface calendarItem {
	displayValue: { en: string; he: string };
	extraDetails: { aliyot: string[] };
}

export interface RashiResponse {
	text: string[] | Array<string[]> | Array<Array<string[]>>;
	he: string[] | Array<string[]> | Array<Array<string[]>>;
}

export interface TargumResponse {
	he: string | string[] | Array<string[]>;
}
export enum BookName {
	Genesis = 'Genesis',
	Exodus = 'Exodus',
	Leviticus = 'Leviticus',
	Numbers = 'Numbers',
	Deuteronomy = 'Deuteronomy'
}
export type AliyahNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7;

export interface TextResponse {
	book: BookName;
	text: string | string[] | Array<string[]>;
	he: string | string[] | Array<string[]>;
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

export enum ParshaName {
  Bereshit = 'Bereshit',
	Noach = 'Noach',
	LechLecha = 'LechLecha',
	Vayera = 'Vayera',
	ChayeiSara = 'ChayeiSara',
	Toldot = 'Toldot',
	Vayetzei = 'Vayetzei',
	Vayishlach = 'Vayishlach',
	Vayeshev = 'Vayeshev',
	Miketz = 'Miketz',
	Vayigash = 'Vayigash',
	Vayechi = 'Vayechi',
  
  Shemot = 'Shemot',
	Vaera = 'Vaera',
	Bo = 'Bo',
	Beshalach = 'Beshalach',
	Yitro = 'Yitro',
	Mishpatim = 'Mishpatim',
	Terumah = 'Terumah',
	Tetzaveh = 'Tetzaveh',
	KiTisa = 'KiTisa',
  Vayakhel = 'Vayakhel',
	Pekudei = 'Pekudei',
  VayakhelPekudei = 'VayakhelPekudei',
  
  Vayikra = 'Vayikra',
	Tzav = 'Tzav',
  Shmini = 'Shmini',
  Tazria = 'Tazria',
	Metzora = 'Metzora',
	TazriaMetzora = 'TazriaMetzora',
	AchreiMot = 'AchreiMot',
	Kedoshim = 'Kedoshim',
	AchreiMotKedoshim = 'AchreiMotKedoshim',
  Emor = 'Emor',
  Behar = 'Behar',
	Bechukotai = 'Bechukotai',
	BeharBechukotai = 'BeharBechukotai',
  
  Bamidbar = 'Bamidbar',
	Nasso = 'Nasso',
	Behaalotcha = 'Behaalotcha',
	Shlach = 'Shlach',
	Korach = 'Korach',
	Chukat = 'Chukat',
	Balak = 'Balak',
	ChukatBalak = 'ChukatBalak',
	Pinchas = 'Pinchas',
	Matot = 'Matot',
	Masei = 'Masei',
	MatotMasei = 'MatotMasei',
  
  Devarim = 'Devarim',
	Vaetchanan = 'Vaetchanan',
	Eikev = 'Eikev',
	Reeh = 'Reeh',
	Shoftim = 'Shoftim',
	KiTeitzei = 'KiTeitzei',
	KiTavo = 'KiTavo',
	NitzavimVayeilech = 'NitzavimVayeilech',
	Nitzavim = 'Nitzavim',
  Vayeilech = 'Vayeilech',
  HaAzinu = 'HaAzinu',
	VZotHaBerachah = 'VZotHaBerachah'
}
export interface OfflineArgs {
	/**
   * Tells the package how to get the data.
   */
  getData: (book: BookName) => Promise<OfflineStorage>;
  /**
   * The book the Parsha is in.
   * Used in the getData function
   */
  book: BookName;
	/**
   * The Parsha to return.
   */
	parsha: ParshaName;
	/**
   * Used to control what ALiyah is returned. Default is the Aliyah for the day of the week.
   */
	aliyah?: AliyahNumber;
	/**
   * If true, the entire Parsha of the week will be returned.
   */
	wholeParsha?: boolean;
}

export interface ShnayimMikrahVerse {
	book: BookName;
	chapter: number;
	verse: number;
	hebrewText: string;
	englishText: string;
	targum: string;
	rashi: string[];
}
export interface Aliyah {
	book: BookName;
	aliyah: AliyahNumber;
	/**
   * Chapter + verse range.
   */
	verseRange: string;
	verses: ShnayimMikrahVerse[];
}

export interface RawFileDownloadResponse<TextType> {
	title: string;
	text: TextType;
}

export interface Parsha {
	name: ParshaName;
	book: BookName;
	fullRef: string;
	aliyot: Aliyah[];
}

export interface OfflineStorage {
  book: BookName,
	parshiot: Record<ParshaName, Parsha>;
}
