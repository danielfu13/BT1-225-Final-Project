/* ********* 

  songs.js

  The app's list of Songs.  Each song will be represented as an object, for example:

  { 
    id: "A1S1",
    artistId: "A1",
    title: "Burn",
    album: {name: "The Crow: Original Motion Picture Soundtrack", imageURL: "https://upload.wikimedia.org/wikipedia/en/7/72/The_Crow_soundtrack_album_cover.jpg"},
    year: "1994",
    duration: 398
  }

 ********* */

window.songs = [
  { 
    id: "A1S1",
    artistId: "A1",
    title: "Jimmy Cooks(ft. 21 Savage)",
    album: {name: "Honestly, Nevermind", imageURL: "https://i.scdn.co/image/ab67616d0000b2738dc0d801766a5aa6a33cbe37"},
    year: "2022",
    duration: 338
  },
  { 
    id: "A1S2",
    artistId: "A1",
    title: "One Dance",
    album: {name: "Views", imageURL: "https://i.ytimg.com/vi/iAbnEUA0wpA/maxresdefault.jpg"},
    year: "2016",
    duration: 253
  },
  { 
    id: "A1S3",
    artistId: "A1",
    title: "Rich Flex",
    album: {name: "Her Loss", imageURL: "https://i.scdn.co/image/ab67616d0000b27302854a7060fccc1a66a4b5ad"},
    year: "2022",
    duration: 359
  },
  { 
    id: "A1S4",
    artistId: "A1",
    title: "Search & Rescue",
    album: {name: "Search & Rescue", imageURL: "https://upload.wikimedia.org/wikipedia/en/5/58/Drake_-_Search_%26_Rescue.png"},
    year: "2023",
    duration: 432
  },
  { 
    id: "A1S5",
    artistId: "A1",
    title: "Who Told You",
    album: {name: "Beautiful and Brutal Yard", imageURL: "https://i.ytimg.com/vi/FlJQudt_OtU/maxresdefault.jpg"},
    year: "2023",
    duration: 328
  },
  { 
    id: "A1S6",
    artistId: "A1",
    title: "God's Plan",
    album: {name: "Scorpion", imageURL: "https://i.ytimg.com/vi/FrsOnNxIrg8/maxresdefault.jpg"},
    year: "2018",
    duration: 318
  },
  { 
    id: "A1S7",
    artistId: "A1",
    title: "Passionfruit",
    album: {name: "More Life", imageURL: "https://i1.sndcdn.com/artworks-000383534739-k04zep-t500x500.jpg"},
    year: "2017",
    duration: 458
  },
  { 
    id: "A2S1",
    artistId: "A2",
    title: "Mockingbird",
    album: {name: "Encore", imageURL: "https://i.scdn.co/image/ab67616d0000b273726d48d93d02e1271774f023"},
    year: "2004",
    duration: 410
  },
  { 
    id: "A2S2",
    artistId: "A2",
    title: "Evil Deeds",
    album: {name: "Encore", imageURL: "https://i.scdn.co/image/ab67616d0000b273726d48d93d02e1271774f023"},
    year: "2004",
    duration: 419
  },
  { 
    id: "A2S3",
    artistId: "A2",
    title: "Without Me",
    album: {name: "The Eminem Show", imageURL: "https://i.ytimg.com/vi/tqxRidAWER8/maxresdefault.jpg"},
    year: "2002",
    duration: 450
  },
  { 
    id: "A2S4",
    artistId: "A2",
    title: "Superman",
    album: {name: "The Eminem Show", imageURL: "https://i.ytimg.com/vi/tqxRidAWER8/maxresdefault.jpg"},
    year: "2002",
    duration: 550
  },
  { 
    id: "A2S5",
    artistId: "A2",
    title: "Lose Yourself",
    album: {name: "Curtain Call: The Hits", imageURL: "https://upload.wikimedia.org/wikipedia/en/d/d6/Lose_Yourself.jpg"},
    year: "2005",
    duration: 526
  },
  { 
    id: "A2S6",
    artistId: "A2",
    title: "Love The Way You Lie",
    album: {name: "Recovery", imageURL: "https://i1.sndcdn.com/artworks-hby4il9cghCL-0-t500x500.jpg"},
    year: "2010",
    duration: 423
  },
  { 
    id: "A2S7",
    artistId: "A2",
    title: "Space Bound",
    album: {name: "Recovery", imageURL: "https://i1.sndcdn.com/artworks-hby4il9cghCL-0-t500x500.jpg"},
    year: "2010",
    duration: 428
  },
  { 
    id: "A3S1",
    artistId: "A3",
    title: "Empire State Of Mind",
    album: {name: "The Blueprint 3", imageURL: "https://i.scdn.co/image/ab67616d0000b273fec1b815bb3c50a64a90fd10"},
    year: "2009",
    duration: 436
  },
  { 
    id: "A3S2",
    artistId: "A3",
    title: "Run This Town",
    album: {name: "Recovery", imageURL: "https://i.scdn.co/image/ab67616d0000b273fec1b815bb3c50a64a90fd10"},
    year: "2009",
    duration: 427
  },
  { 
    id: "A3S3",
    artistId: "A3",
    title: "Numb/Encore",
    album: {name: "Numb/Encore", imageURL: "https://i.scdn.co/image/ab67616d0000b2737819342878db1d38b1cd6061"},
    year: "2004",
    duration: 325
  },
  { 
    id: "A3S4",
    artistId: "A3",
    title: "No Church In The Wild",
    album: {name: "Watch The Throne", imageURL: "https://upload.wikimedia.org/wikipedia/en/e/ee/Watch_The_Throne.jpg"},
    year: "2009",
    duration: 427
  },
  { 
    id: "A3S5",
    artistId: "A3",
    title: "Why I Love You",
    album: {name: "Watch The Throne", imageURL: "https://upload.wikimedia.org/wikipedia/en/e/ee/Watch_The_Throne.jpg"},
    year: "2011",
    duration: 321
  },
  { 
    id: "A3S6",
    artistId: "A3",
    title: "Gotta Have It",
    album: {name: "Watch The Throne", imageURL: "https://upload.wikimedia.org/wikipedia/en/e/ee/Watch_The_Throne.jpg"},
    year: "2011",
    duration: 220
  },
];
