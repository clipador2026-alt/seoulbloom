export type Soundtrack={drama:string,year:number,tracks:{title:string,artist:string;youtubeUrl?:string}[]};
export const soundtracks:Soundtrack[]=[
{drama:"Goblin (Guardian: The Lonely and Great God)",year:2016,tracks:[{title:"Stay With Me",artist:"CHANYEOL & Punch",youtubeUrl:"https://www.youtube.com/watch?v=pcKR0LPwoYs"},{title:"Beautiful",artist:"Crush",youtubeUrl:"https://www.youtube.com/watch?v=htrq00qxCbk"},{title:"I Will Go to You Like the First Snow",artist:"Ailee",youtubeUrl:"https://www.youtube.com/watch?v=G5Lj9tsCK6A"}]},
{drama:"Descendants of the Sun",year:2016,tracks:[{title:"Everytime",artist:"CHEN & Punch",youtubeUrl:"https://www.youtube.com/watch?v=WYB01Biw4RM"},{title:"You Are My Everything",artist:"Gummy"},{title:"This Love",artist:"Davichi",youtubeUrl:"https://www.youtube.com/watch?v=-tCUWBHihu4"}]},
{drama:"Crash Landing on You",year:2019,tracks:[{title:"Here I Am Again",artist:"Baek Yerin"},{title:"Flower",artist:"Yoon Mirae",youtubeUrl:"https://www.youtube.com/watch?v=pF5Ot4i9Szw"},{title:"Give You My Heart",artist:"IU"}]},
{drama:"Itaewon Class",year:2020,tracks:[{title:"Start",artist:"Gaho",youtubeUrl:"https://www.youtube.com/watch?v=O0StKlRHVeE"},{title:"Sweet Night",artist:"V"},{title:"Someday, The Boy",artist:"Kim Feel"}]},
{drama:"Hotel del Luna",year:2019,tracks:[{title:"Another Day",artist:"Monday Kiz & Punch"},{title:"All About You",artist:"Taeyeon"},{title:"Can You See My Heart",artist:"Heize"}]}
];
export function youtubeSearch(title:string,artist:string,drama:string){return "https://www.youtube.com/results?search_query="+encodeURIComponent([title,artist,drama,"official OST"].join(" "));}
export function spotifySearch(title:string,artist:string){return "https://open.spotify.com/search/"+encodeURIComponent(title+" "+artist);}
