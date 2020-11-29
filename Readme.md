# Shnayim Mikrah
This project serves as a wrapper over the [Sefaria](https://github.com/Sefaria/Sefaria-Project/wiki/API-Documentation) api to enable presenting Shnayim Mikrah text by Aliyah.

# Request
The following arguments can be set to control what data is returned:
```ts
interface Args {
  /**
   * Used to determine what date we need to look at in order to return the correct Aliyah
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
  aliyah?: 1 | 2 | 3 | 4 | 5 | 6 | 7; 
}
```

```ts
import getShnayimMikrah from '@orthodox-union/shnayimmikrah';

// This will return the Shnayim Mikrah for todays aliyah as would be leined in the America/New_York timezone.
await getShnayimMikrah({
  timezone: 'America/New_York'
});
```

# Response
The data returned will have the following shape:
```ts
interface Aliyah {
    book: 'Genesis' | 'Exodus' | 'Leviticus' | 'Numbers' | 'Deuteronomy';
    aliyah: 1 | 2 | 3 | 4 | 5 | 6 | 7;
    verseRange: string; // Genesis 30:14-30:27
    verses: Array<{
      book: 'Genesis' | 'Exodus' | 'Leviticus' | 'Numbers' | 'Deuteronomy';
      chapter: number;
      verse: number;
      hebrewText: string;
      englishText: string;
      targum: string;
      rashi: string[];
    }>;
}
```
