import { BookName, Parsha, ParshaName } from "./types";

export const parshiot: { [key in ParshaName]: { fullRef: string, name: ParshaName, book: BookName, aliyot: string[]}} = {
  "Bereshit": {
    fullRef: "Genesis 1:1-6:8",
    name: ParshaName.Bereshit,
    book: BookName.Genesis,
    aliyot: [
      "Genesis 1:1-2:3",
      "Genesis 2:4-2:19",
      "Genesis 2:20-3:21",
      "Genesis 3:22-4:18",
      "Genesis 4:19-4:22",
      "Genesis 4:23-5:24",
      "Genesis 5:25-6:8"
    ]
  },
  "Noach": {
    fullRef: "Genesis 6:9-11:32",
    name: ParshaName.Noach,
    book: BookName.Genesis,
    aliyot: [
      "Genesis 6:9-6:22",
      "Genesis 7:1-7:16",
      "Genesis 7:17-8:14",
      "Genesis 8:15-9:7",
      "Genesis 9:8-9:17",
      "Genesis 9:18-10:32",
      "Genesis 11:1-11:32"
    ]
  },
  "LechLecha": {
    fullRef: "Genesis 12:1-17:27",
    name: ParshaName.LechLecha,
    book: BookName.Genesis,
    aliyot: [
      "Genesis 12:1-12:13",
      "Genesis 12:14-13:4",
      "Genesis 13:5-13:18",
      "Genesis 14:1-14:20",
      "Genesis 14:21-15:6",
      "Genesis 15:7-17:6",
      "Genesis 17:7-17:27"
    ]
  },
  "Vayera": {
    fullRef: "Genesis 18:1-22:24",
    name: ParshaName.Vayera,
    book: BookName.Genesis,
    aliyot: [
      "Genesis 18:1-18:14",
      "Genesis 18:15-18:33",
      "Genesis 19:1-19:20",
      "Genesis 19:21-21:4",
      "Genesis 21:5-21:21",
      "Genesis 21:22-21:34",
      "Genesis 22:1-22:24"
    ]
  },
  "ChayeiSara": {
    fullRef: "Genesis 23:1-25:18",
    name: ParshaName.ChayeiSara,
    book: BookName.Genesis,
    aliyot: [
      "Genesis 23:1-23:16",
      "Genesis 23:17-24:9",
      "Genesis 24:10-24:26",
      "Genesis 24:27-24:52",
      "Genesis 24:53-24:67",
      "Genesis 25:1-25:11",
      "Genesis 25:12-25:18"
    ]
  },
  "Toldot": {
    fullRef: "Genesis 25:19-28:9",
    name: ParshaName.Toldot,
    book: BookName.Genesis,
    aliyot: [
      "Genesis 25:19-26:5",
      "Genesis 26:6-26:12",
      "Genesis 26:13-26:22",
      "Genesis 26:23-26:29",
      "Genesis 26:30-27:27",
      "Genesis 27:28-28:4",
      "Genesis 28:5-28:9"
    ]
  },
  "Vayetzei": {
    fullRef: "Genesis 28:10-32:3",
    name: ParshaName.Vayetzei,
    book: BookName.Genesis,
    aliyot: [
      "Genesis 28:10-28:22",
      "Genesis 29:1-29:17",
      "Genesis 29:18-30:13",
      "Genesis 30:14-30:27",
      "Genesis 30:28-31:16",
      "Genesis 31:17-31:42",
      "Genesis 31:43-32:3"
    ]
  },
  "Vayishlach": {
    fullRef: "Genesis 32:4-36:43",
    name: ParshaName.Vayishlach,
    book: BookName.Genesis,
    aliyot: [
      "Genesis 32:4-32:13",
      "Genesis 32:14-32:30",
      "Genesis 32:31-33:5",
      "Genesis 33:6-33:20",
      "Genesis 34:1-35:11",
      "Genesis 35:12-36:19",
      "Genesis 36:20-36:43"
    ]
  },
  "Vayeshev": {
    fullRef: "Genesis 37:1-40:23",
    name: ParshaName.Vayeshev,
    book: BookName.Genesis,
    aliyot: [
      "Genesis 37:1-37:11",
      "Genesis 37:12-37:22",
      "Genesis 37:23-37:36",
      "Genesis 38:1-38:30",
      "Genesis 39:1-39:6",
      "Genesis 39:7-39:23",
      "Genesis 40:1-40:23"
    ]
  },
  "Miketz": {
    fullRef: "Genesis 41:1-44:17",
    name: ParshaName.Miketz,
    book: BookName.Genesis,
    aliyot: [
      "Genesis 41:1-41:14",
      "Genesis 41:15-41:38",
      "Genesis 41:39-41:52",
      "Genesis 41:53-42:18",
      "Genesis 42:19-43:15",
      "Genesis 43:16-43:29",
      "Genesis 43:30-44:17"
    ]
  },
  "Vayigash": {
    fullRef: "Genesis 44:18-47:27",
    name: ParshaName.Vayigash,
    book: BookName.Genesis,
    aliyot: [
      "Genesis 44:18-44:30",
      "Genesis 44:31-45:7",
      "Genesis 45:8-45:18",
      "Genesis 45:19-45:27",
      "Genesis 45:28-46:27",
      "Genesis 46:28-47:10",
      "Genesis 47:11-47:27"
    ]
  },
  "Vayechi": {
    fullRef: "Genesis 47:28-50:26",
    name: ParshaName.Vayechi,
    book: BookName.Genesis,
    aliyot: [
      "Genesis 47:28-48:9",
      "Genesis 48:10-48:16",
      "Genesis 48:17-48:22",
      "Genesis 49:1-49:18",
      "Genesis 49:19-49:26",
      "Genesis 49:27-50:20",
      "Genesis 50:21-50:26"
    ]
  },
  "Shemot": {
    fullRef: "Exodus 1:1-6:1",
    name: ParshaName.Shemot,
    book: BookName.Exodus,
    aliyot: [
      "Exodus 1:1-1:17",
      "Exodus 1:18-2:10",
      "Exodus 2:11-2:25",
      "Exodus 3:1-3:15",
      "Exodus 3:16-4:17",
      "Exodus 4:18-4:31",
      "Exodus 5:1-6:1"
    ]
  },
  "Vaera": {
    fullRef: "Exodus 6:2-9:35",
    name: ParshaName.Vaera,
    book: BookName.Exodus,
    aliyot: [
      "Exodus 6:2-6:13",
      "Exodus 6:14-6:28",
      "Exodus 6:29-7:7",
      "Exodus 7:8-8:6",
      "Exodus 8:7-8:18",
      "Exodus 8:19-9:16",
      "Exodus 9:17-9:35"
    ]
  },
  "Bo": {
    fullRef: "Exodus 10:1-13:16",
    name: ParshaName.Bo,
    book: BookName.Exodus,
    aliyot: [
      "Exodus 10:1-10:11",
      "Exodus 10:12-10:23",
      "Exodus 10:24-11:3",
      "Exodus 11:4-12:20",
      "Exodus 12:21-12:28",
      "Exodus 12:29-12:51",
      "Exodus 13:1-13:16"
    ]
  },
  "Beshalach": {
    fullRef: "Exodus 13:17-17:16",
    name: ParshaName.Beshalach,
    book: BookName.Exodus,
    aliyot: [
      "Exodus 13:17-14:8",
      "Exodus 14:9-14:14",
      "Exodus 14:15-14:25",
      "Exodus 14:26-15:26",
      "Exodus 15:27-16:10",
      "Exodus 16:11-16:36",
      "Exodus 17:1-17:16"
    ]
  },
  "Yitro": {
    fullRef: "Exodus 18:1-20:23",
    name: ParshaName.Yitro,
    book: BookName.Exodus,
    aliyot: [
      "Exodus 18:1-18:12",
      "Exodus 18:13-18:23",
      "Exodus 18:24-18:27",
      "Exodus 19:1-19:6",
      "Exodus 19:7-19:19",
      "Exodus 19:20-20:14",
      "Exodus 20:15-20:23"
    ]
  },
  "Mishpatim": {
    fullRef: "Exodus 21:1-24:18",
    name: ParshaName.Mishpatim,
    book: BookName.Exodus,
    aliyot: [
      "Exodus 21:1-21:19",
      "Exodus 21:20-22:3",
      "Exodus 22:4-22:26",
      "Exodus 22:27-23:5",
      "Exodus 23:6-23:19",
      "Exodus 23:20-23:25",
      "Exodus 23:26-24:18"
    ]
  },
  "Terumah": {
    fullRef: "Exodus 25:1-27:19",
    name: ParshaName.Terumah,
    book: BookName.Exodus,
    aliyot: [
      "Exodus 25:1-25:16",
      "Exodus 25:17-25:30",
      "Exodus 25:31-26:14",
      "Exodus 26:15-26:30",
      "Exodus 26:31-26:37",
      "Exodus 27:1-27:8",
      "Exodus 27:9-27:19"
    ]
  },
  "Tetzaveh": {
    fullRef: "Exodus 27:20-30:10",
    name: ParshaName.Tetzaveh,
    book: BookName.Exodus,
    aliyot: [
      "Exodus 27:20-28:12",
      "Exodus 28:13-28:30",
      "Exodus 28:31-28:43",
      "Exodus 29:1-29:18",
      "Exodus 29:19-29:37",
      "Exodus 29:38-29:46",
      "Exodus 30:1-30:10"
    ]
  },
  "KiTisa": {
    fullRef: "Exodus 30:11-34:35",
    name: ParshaName.KiTisa,
    book: BookName.Exodus,
    aliyot: [
      "Exodus 30:11-31:17",
      "Exodus 31:18-33:11",
      "Exodus 33:12-33:16",
      "Exodus 33:17-33:23",
      "Exodus 34:1-34:9",
      "Exodus 34:10-34:26",
      "Exodus 34:27-34:35"
    ]
  },
  "Vayakhel": {
    fullRef: "Exodus 35:1-38:20",
    name: ParshaName.Vayakhel,
    book: BookName.Exodus,
    aliyot: [
      "Exodus 35:1-35:20",
      "Exodus 35:21-35:29",
      "Exodus 35:30-36:7",
      "Exodus 36:8-36:19",
      "Exodus 36:20-37:16",
      "Exodus 37:17-37:29",
      "Exodus 38:1-38:20"
    ]
  },
  "Pekudei": {
    fullRef: "Exodus 38:21-40:38",
    name: ParshaName.Pekudei,
    book: BookName.Exodus,
    aliyot: [
      "Exodus 38:21-39:1",
      "Exodus 39:2-39:21",
      "Exodus 39:22-39:32",
      "Exodus 39:33-39:43",
      "Exodus 40:1-40:16",
      "Exodus 40:17-40:27",
      "Exodus 40:28-40:38"
    ]
  },
  "VayakhelPekudei": {
    fullRef: "Exodus 35:1-40:38",
    name: ParshaName.VayakhelPekudei,
    book: BookName.Exodus,
    aliyot: [
      "Exodus 35:1-35:29",
      "Exodus 35:30-37:16",
      "Exodus 37:17-37:29",
      "Exodus 38:1-39:1",
      "Exodus 39:2-39:21",
      "Exodus 39:22-39:43",
      "Exodus 40:1-40:38"
    ]
  },
  "Vayikra": {
    fullRef: "Leviticus 1:1-5:26",
    name: ParshaName.Vayikra,
    book: BookName.Leviticus,
    aliyot: [
      "Leviticus 1:1-1:13",
      "Leviticus 1:14-2:6",
      "Leviticus 2:7-2:16",
      "Leviticus 3:1-3:17",
      "Leviticus 4:1-4:26",
      "Leviticus 4:27-5:10",
      "Leviticus 5:11-5:26"
    ]
  },
  "Tzav": {
    fullRef: "Leviticus 6:1-8:36",
    name: ParshaName.Tzav,
    book: BookName.Leviticus,
    aliyot: [
      "Leviticus 6:1-6:11",
      "Leviticus 6:12-7:10",
      "Leviticus 7:11-7:38",
      "Leviticus 8:1-8:13",
      "Leviticus 8:14-8:21",
      "Leviticus 8:22-8:29",
      "Leviticus 8:30-8:36"
    ]
  },
  "Shmini": {
    fullRef: "Leviticus 9:1-11:47",
    name: ParshaName.Shmini,
    book: BookName.Leviticus,
    aliyot: [
      "Leviticus 9:1-9:16",
      "Leviticus 9:17-9:23",
      "Leviticus 9:24-10:11",
      "Leviticus 10:12-10:15",
      "Leviticus 10:16-10:20",
      "Leviticus 11:1-11:32",
      "Leviticus 11:33-11:47"
    ]
  },
  "Tazria": {
    fullRef: "Leviticus 12:1-28:15",
    name: ParshaName.Tazria,
    book: BookName.Leviticus,
    aliyot: [
      "Leviticus 12:1-13:5",
      "Leviticus 13:6-13:17",
      "Leviticus 13:18-13:23",
      "Leviticus 13:24-13:28",
      "Leviticus 13:29-13:39",
      "Leviticus 13:40-13:54",
      "Leviticus 13:55-13:59"
    ]
  },
  "Metzora": {
    fullRef: "Leviticus 14:1-15:33",
    name: ParshaName.Metzora,
    book: BookName.Leviticus,
    aliyot: [
      "Leviticus 14:1-14:12",
      "Leviticus 14:13-14:20",
      "Leviticus 14:21-14:32",
      "Leviticus 14:33-14:53",
      "Leviticus 14:54-15:15",
      "Leviticus 15:16-15:28",
      "Leviticus 15:29-15:33"
    ]
  },
  "TazriaMetzora": {
    fullRef: "Leviticus 12:1-15:33",
    name: ParshaName.TazriaMetzora,
    book: BookName.Leviticus,
    aliyot: [
      "Leviticus 12:1-13:23",
      "Leviticus 13:24-13:39",
      "Leviticus 13:40-13:54",
      "Leviticus 13:55-14:20",
      "Leviticus 14:21-14:32",
      "Leviticus 14:33-15:15",
      "Leviticus 15:16-15:33"
    ]
  },
  "AchreiMot": {
    fullRef: "Leviticus 16:1-18:30",
    name: ParshaName.AchreiMot,
    book: BookName.Leviticus,
    aliyot: [
      "Leviticus 16:1-16:17",
      "Leviticus 16:18-16:24",
      "Leviticus 16:25-16:34",
      "Leviticus 17:1-17:7",
      "Leviticus 17:8-18:5",
      "Leviticus 18:6-18:21",
      "Leviticus 18:22-18:30"
    ]
  },
  "Kedoshim": {
    fullRef: "Leviticus 19:1-20:27",
    name: ParshaName.Kedoshim,
    book: BookName.Leviticus,
    aliyot: [
      "Leviticus 19:1-19:14",
      "Leviticus 19:15-19:22",
      "Leviticus 19:23-19:32",
      "Leviticus 19:33-19:37",
      "Leviticus 20:1-20:7",
      "Leviticus 20:8-20:22",
      "Leviticus 20:23-20:27"
    ]
  },
  "AchreiMotKedoshim": {
    fullRef: "Leviticus 16:1-20:27",
    name: ParshaName.AchreiMotKedoshim,
    book: BookName.Leviticus,
    aliyot: [
      "Leviticus 16:1-16:24",
      "Leviticus 16:25-17:7",
      "Leviticus 17:8-18:21",
      "Leviticus 18:22-19:14",
      "Leviticus 19:15-19:32",
      "Leviticus 19:33-20:7",
      "Leviticus 20:8-20:27"
    ]
  },
  "Emor": {
    fullRef: "Leviticus 21:1-24:23",
    name: ParshaName.Emor,
    book: BookName.Leviticus,
    aliyot: [
      "Leviticus 21:1-21:15",
      "Leviticus 21:16-22:16",
      "Leviticus 22:17-22:33",
      "Leviticus 23:1-23:22",
      "Leviticus 23:23-23:32",
      "Leviticus 23:33-23:44",
      "Leviticus 24:1-24:23"
    ]
  },
  "Behar": {
    fullRef: "Leviticus 25:1-26:2",
    name: ParshaName.Behar,
    book: BookName.Leviticus,
    aliyot: [
      "Leviticus 25:1-25:13",
      "Leviticus 25:14-25:18",
      "Leviticus 25:19-25:24",
      "Leviticus 25:25-25:28",
      "Leviticus 25:29-25:38",
      "Leviticus 25:39-25:46",
      "Leviticus 25:47-26:2"
    ]
  },
  "Bechukotai": {
    fullRef: "Leviticus 26:3-27:34",
    name: ParshaName.Bechukotai,
    book: BookName.Leviticus,
    aliyot: [
      "Leviticus 26:3-26:5",
      "Leviticus 26:6-26:9",
      "Leviticus 26:10-26:46",
      "Leviticus 27:1-27:15",
      "Leviticus 27:16-27:21",
      "Leviticus 27:22-27:28",
      "Leviticus 27:29-27:34"
    ]
  },
  "BeharBechukotai": {
    fullRef: "Leviticus 25:1-27:34",
    name: ParshaName.BeharBechukotai,
    book: BookName.Leviticus,
    aliyot: [
      "Leviticus 25:1-25:18",
      "Leviticus 25:19-25:28",
      "Leviticus 25:29-25:38",
      "Leviticus 25:39-26:9",
      "Leviticus 26:10-26:46",
      "Leviticus 27:1-27:15",
      "Leviticus 27:16-27:34"
    ]
  },
  "Bamidbar": {
    fullRef: "Numbers 1:1-4:20",
    name: ParshaName.Bamidbar,
    book: BookName.Numbers,
    aliyot: [
      "Numbers 1:1-1:19",
      "Numbers 1:20-1:54",
      "Numbers 2:1-2:34",
      "Numbers 3:1-3:13",
      "Numbers 3:14-3:39",
      "Numbers 3:40-3:51",
      "Numbers 4:1-4:20"
    ]
  },
  "Nasso": {
    fullRef: "Numbers 4:21-7:89",
    name: ParshaName.Nasso,
    book: BookName.Numbers,
    aliyot: [
      "Numbers 4:21-4:37",
      "Numbers 4:38-4:49",
      "Numbers 5:1-5:10",
      "Numbers 5:11-6:27",
      "Numbers 7:1-7:41",
      "Numbers 7:42-7:71",
      "Numbers 7:72-7:89"
    ]
  },
  "Behaalotcha": {
    fullRef: "Numbers 8:1-12:16",
    name: ParshaName.Behaalotcha,
    book: BookName.Numbers,
    aliyot: [
      "Numbers 8:1-8:14",
      "Numbers 8:15-8:26",
      "Numbers 9:1-9:14",
      "Numbers 9:15-10:10",
      "Numbers 10:11-10:34",
      "Numbers 10:35-11:29",
      "Numbers 11:30-12:16"
    ]
  },
  "Shlach": {
    fullRef: "Numbers 13:1-15:41",
    name: ParshaName.Shlach,
    book: BookName.Numbers,
    aliyot: [
      "Numbers 13:1-13:20",
      "Numbers 13:21-14:7",
      "Numbers 14:8-14:25",
      "Numbers 14:26-15:7",
      "Numbers 15:8-15:16",
      "Numbers 15:17-15:26",
      "Numbers 15:27-15:41"
    ]
  },
  "Korach": {
    fullRef: "Numbers 16:1-18:32",
    name: ParshaName.Korach,
    book: BookName.Numbers,
    aliyot: [
      "Numbers 16:1-16:13",
      "Numbers 16:14-16:19",
      "Numbers 16:20-17:8",
      "Numbers 17:9-17:15",
      "Numbers 17:16-17:24",
      "Numbers 17:25-18:20",
      "Numbers 18:21-18:32"
    ]
  },
  "Chukat": {
    fullRef: "Numbers 19:1-22:1",
    name: ParshaName.Chukat,
    book: BookName.Numbers,
    aliyot: [
      "Numbers 19:1-19:17",
      "Numbers 19:18-20:6",
      "Numbers 20:7-20:13",
      "Numbers 20:14-20:21",
      "Numbers 20:22-21:9",
      "Numbers 21:10-21:20",
      "Numbers 21:21-22:1"
    ]
  },
  "Balak": {
    fullRef: "Numbers 22:2-25:9",
    name: ParshaName.Balak,
    book: BookName.Numbers,
    aliyot: [
      "Numbers 22:2-22:12",
      "Numbers 22:13-22:20",
      "Numbers 22:21-22:38",
      "Numbers 22:39-23:12",
      "Numbers 23:13-23:26",
      "Numbers 23:27-24:13",
      "Numbers 24:14-25:9"
    ]
  },
  "ChukatBalak": {
    fullRef: "Numbers 19:1-25:9",
    name: ParshaName.ChukatBalak,
    book: BookName.Numbers,
    aliyot: [
      "Numbers 19:1-20:6",
      "Numbers 20:7-20:21",
      "Numbers 20:22-21:20",
      "Numbers 21:21-22:12",
      "Numbers 22:13-22:38",
      "Numbers 22:39-23:26",
      "Numbers 23:27-25:9"
    ]
  },
  "Pinchas": {
    fullRef: "Numbers 25:10-30:1",
    name: ParshaName.Pinchas,
    book: BookName.Numbers,
    aliyot: [
      "Numbers 25:10-26:4",
      "Numbers 26:5-26:51",
      "Numbers 26:52-27:5",
      "Numbers 27:6-27:23",
      "Numbers 28:1-28:15",
      "Numbers 28:16-29:11",
      "Numbers 29:12-30:1"
    ]
  },
  "Matot": {
    fullRef: "Numbers 30:2-32:42",
    name: ParshaName.Matot,
    book: BookName.Numbers,
    aliyot: [
      "Numbers 30:2-30:17",
      "Numbers 31:1-31:12",
      "Numbers 31:13-31:24",
      "Numbers 31:25-31:41",
      "Numbers 31:42-31:54",
      "Numbers 32:1-32:19",
      "Numbers 32:20-32:42"
    ]
  },
  "Masei": {
    fullRef: "Numbers 33:1-36:13",
    name: ParshaName.Masei,
    book: BookName.Numbers,
    aliyot: [
      "Numbers 33:1-33:10",
      "Numbers 33:11-33:49",
      "Numbers 33:50-34:15",
      "Numbers 34:16-34:29",
      "Numbers 35:1-35:8",
      "Numbers 35:9-35:34",
      "Numbers 36:1-36:13"
    ]
  },
  "MatotMasei": {
    fullRef: "Numbers 30:2-36:13",
    name: ParshaName.MatotMasei,
    book: BookName.Numbers,
    aliyot: [
      "Numbers 30:2-31:12",
      "Numbers 31:13-31:54",
      "Numbers 32:1-32:19",
      "Numbers 32:20-33:49",
      "Numbers 33:50-34:15",
      "Numbers 34:16-35:8",
      "Numbers 35:9-36:13"
    ]
  },
  "Devarim": {
    fullRef: "Deuteronomy 1:1-3:22",
    name: ParshaName.Devarim,
    book: BookName.Deuteronomy,
    aliyot: [
      "Deuteronomy 1:1-1:10",
      "Deuteronomy 1:11-1:21",
      "Deuteronomy 1:22-1:38",
      "Deuteronomy 1:39-2:1",
      "Deuteronomy 2:2-2:30",
      "Deuteronomy 2:31-3:14",
      "Deuteronomy 3:15-3:22"
    ]
  },
  "Vaetchanan": {
    fullRef: "Deuteronomy 3:23-7:11",
    name: ParshaName.Vaetchanan,
    book: BookName.Deuteronomy,
    aliyot: [
      "Deuteronomy 3:23-4:4",
      "Deuteronomy 4:5-4:40",
      "Deuteronomy 4:41-4:49",
      "Deuteronomy 5:1-5:18",
      "Deuteronomy 5:19-6:3",
      "Deuteronomy 6:4-6:25",
      "Deuteronomy 7:1-7:11"
    ]
  },
  "Eikev": {
    fullRef: "Deuteronomy 7:12-11:25",
    name: ParshaName.Eikev,
    book: BookName.Deuteronomy,
    aliyot: [
      "Deuteronomy 7:12-8:10",
      "Deuteronomy 8:11-9:3",
      "Deuteronomy 9:4-9:29",
      "Deuteronomy 10:1-10:11",
      "Deuteronomy 10:12-11:9",
      "Deuteronomy 11:10-11:21",
      "Deuteronomy 11:22-11:25"
    ]
  },
  "Reeh": {
    fullRef: "Deuteronomy 11:26-16:17",
    name: ParshaName.Reeh,
    book: BookName.Deuteronomy,
    aliyot: [
      "Deuteronomy 11:26-12:10",
      "Deuteronomy 12:11-12:28",
      "Deuteronomy 12:29-13:19",
      "Deuteronomy 14:1-14:21",
      "Deuteronomy 14:22-14:29",
      "Deuteronomy 15:1-15:18",
      "Deuteronomy 15:19-16:17"
    ]
  },
  "Shoftim": {
    fullRef: "Deuteronomy 16:18-21:9",
    name: ParshaName.Shoftim,
    book: BookName.Deuteronomy,
    aliyot: [
      "Deuteronomy 16:18-17:13",
      "Deuteronomy 17:14-17:20",
      "Deuteronomy 18:1-18:5",
      "Deuteronomy 18:6-18:13",
      "Deuteronomy 18:14-19:13",
      "Deuteronomy 19:14-20:9",
      "Deuteronomy 20:10-21:9"
    ]
  },
  "KiTeitzei": {
    fullRef: "Deuteronomy 21:10-25:19",
    name: ParshaName.KiTeitzei,
    book: BookName.Deuteronomy,
    aliyot: [
      "Deuteronomy 21:10-21:21",
      "Deuteronomy 21:22-22:7",
      "Deuteronomy 22:8-23:7",
      "Deuteronomy 23:8-23:24",
      "Deuteronomy 23:25-24:4",
      "Deuteronomy 24:5-24:13",
      "Deuteronomy 24:14-25:19"
    ]
  },
  "KiTavo": {
    fullRef: "Deuteronomy 26:1-29:8",
    name: ParshaName.KiTavo,
    book: BookName.Deuteronomy,
    aliyot: [
      "Deuteronomy 26:1-26:11",
      "Deuteronomy 26:12-26:15",
      "Deuteronomy 26:16-26:19",
      "Deuteronomy 27:1-27:10",
      "Deuteronomy 27:11-28:6",
      "Deuteronomy 28:7-28:69",
      "Deuteronomy 29:1-29:8"
    ]
  },
  "Nitzavim": {
    fullRef: "Deuteronomy 29:9-30:20",
    name: ParshaName.Nitzavim,
    book: BookName.Deuteronomy,
    aliyot: [
      "Deuteronomy 29:9-29:11",
      "Deuteronomy 29:12-29:14",
      "Deuteronomy 29:15-29:28",
      "Deuteronomy 30:1-30:6",
      "Deuteronomy 30:7-30:10",
      "Deuteronomy 30:11-30:14",
      "Deuteronomy 30:15-30:20"
    ]
  },
  "Vayeilech": {
    fullRef: "Deuteronomy 31:1-31:30",
    name: ParshaName.Vayeilech,
    book: BookName.Deuteronomy,
    aliyot: [
      "Deuteronomy 31:1-31:3",
      "Deuteronomy 31:4-31:6",
      "Deuteronomy 31:7-31:9",
      "Deuteronomy 31:10-31:13",
      "Deuteronomy 31:14-31:19",
      "Deuteronomy 31:20-31:24",
      "Deuteronomy 31:25-31:30"
    ]
  },
  "NitzavimVayeilech": {
    fullRef: "Deuteronomy 29:9-31:30",
    name: ParshaName.NitzavimVayeilech,
    book: BookName.Deuteronomy,
    aliyot: [
      "Deuteronomy 29:9-29:28",
      "Deuteronomy 30:1-30:6",
      "Deuteronomy 30:7-30:14",
      "Deuteronomy 30:15-31:6",
      "Deuteronomy 31:7-31:13",
      "Deuteronomy 31:14-31:19",
      "Deuteronomy 31:20-31:30"
    ]
  },
  "HaAzinu": {
    fullRef: "Deuteronomy 32:1-32:52",
    name: ParshaName.HaAzinu,
    book: BookName.Deuteronomy,
    aliyot: [
      "Deuteronomy 32:1-32:6",
      "Deuteronomy 32:7-32:12",
      "Deuteronomy 32:13-32:18",
      "Deuteronomy 32:19-32:28",
      "Deuteronomy 32:29-32:39",
      "Deuteronomy 32:40-32:43",
      "Deuteronomy 32:44-32:52"
    ]
  },
  "VZotHaBerachah": {
    fullRef: "Deuteronomy 33:1-12",
    name: ParshaName.VZotHaBerachah,
    book: BookName.Deuteronomy,
    aliyot: [
      "Deuteronomy 33:1-7",
      "Deuteronomy 33:8-12",
      "Deuteronomy 33:13-17",
      "Deuteronomy 33:18-21",
      "Deuteronomy 33:22-26",
      "Deuteronomy 33:27-29",
      "Deuteronomy 34:1-12"
    ]
  }
}

export const parshiotArray = Object.keys(parshiot).map(k => parshiot[k as ParshaName]);
