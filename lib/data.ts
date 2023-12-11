import aboutMeImg1 from "@/public/about-me-img1.jpeg";
import aboutMeImg2 from "@/public/about-me-img2.jpeg";

export const links = [
  {
    name: "Odlingsdagbok",
    hash: "odlingsdagbok",
  },
  {
    name: "Tomaterna",
    hash: "tomaterna",
  },
  {
    name: "Om mig",
    hash: "about-me",
  },
  {
    name: "Tjänster",
    hash: "tjanster",
  },
  {
    name: "Kontakt",
    hash: "kontakt",
  },
] as const;

export const aboutMeData = [
  {
    id: 0,
    text: "Jag började odla för 35 år sedan. När jag började testade jag allt möjligt, men märkte snart att det var tomaterna som var roligast det gav mycket mat och det var relativt enkelt. Min mamma, som också odlade i sin trädgård, gick tidigt med i Åke Troedssons Tomatklubben, vilket gjorde att vi delade fröer. En helt ny tomatvärld öppnade sig. Jag minns när jag för första gången skar upp en hjärtformad tomat och hur oerhört vackert jag tyckte det var. Mitt största fokus i odlingen är tomater, men jag odlar väldigt mycket annat också. Odlingen har blivit en allt större del av min vardag och nu ägnar jag mycket tid och fokus på det. Glädjen med egenodlat är enorm. Och i takt med medvetenheten om vikten av bra ekologisk och närodlad mat samt klimatkrisen påtaglighet har odlingen blivit viktig på flera sätt.",
    imageUrl: aboutMeImg1,
  },
  {
    id: 1,
    text: "Jag arbetar som psykolog. Är gift och har två vuxna barn. Bor i ett hus på Hisingen i Göteborg som har funnits i släkten sedan 30-talet. Hela familjen har musik som stort intresse och både man och barn är aktiva musiker. Förutom musik och odling tycker jag mycket om att laga och äta god mat. Jag gillar att dricka bubbel och te. Jag gillar att vandra, att åka till London och jag uppskattar kloka och varma människor och solidaritet. Mitt mål är att odlandet ska vara kravlöst och vilsamt även om det kanske inte alltid blir så. Min man brukar säga att jag är lite hejsan-hoppsan och privat stämmer det nog rätt bra. Det får vara gott så.",
    imageUrl: aboutMeImg2,
  },
] as const;
