import aboutMeImg1 from "@/public/about-me-img1.jpeg";
import aboutMeImg2 from "@/public/about-me-img2.jpeg";
import contactImage1 from "@/public/contact/contact_img1.jpg";
import contactImage2 from "@/public/contact/contact_img2.jpg";
import contactImage3 from "@/public/contact/contact_img3.jpg";
import contactImage4 from "@/public/contact/contact_img4.jpg";
import contactImage5 from "@/public/contact/contact_img5.jpg";
import contactImage6 from "@/public/contact/contact_img6.jpg";
import contactImage7 from "@/public/contact/contact_img7.jpg";
import contactImage8 from "@/public/contact/contact_img8.jpg";
import contactImage9 from "@/public/contact/contact_img9.jpg";
import contactImage10 from "@/public/contact/contact_img10.jpg";
import contactImage11 from "@/public/contact/contact_img11.jpg";
import contactImage12 from "@/public/contact/contact_img12.jpg";
import contactImage13 from "@/public/contact/contact_img13.jpg";
import contactImage14 from "@/public/contact/contact_img14.jpg";
import contactImage15 from "@/public/contact/contact_img15.jpg";
import contactImage16 from "@/public/contact/contact_img16.jpg";
import contactImage17 from "@/public/contact/contact_img17.jpg";
import contactImage18 from "@/public/contact/contact_img18.jpg";
import contactImage19 from "@/public/contact/contact_img19.jpg";
import contactImage20 from "@/public/contact/contact_img20.jpg";
import contactImage21 from "@/public/contact/contact_img21.jpg";
import contactImage22 from "@/public/contact/contact_img22.jpg";
import contactImage23 from "@/public/contact/contact_img23.jpg";
import contactImage24 from "@/public/contact/contact_img24.jpg";
import { MdPersonOutline } from "react-icons/md";
import { MdOutlineAlternateEmail } from "react-icons/md";

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
    hash: "contact",
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

export const contactInputData = [
  {
    id: 0,
    name: "Namn",
    type: "text",
    placeholder: "Namn",
    icon: MdPersonOutline,
    lowercase: false,
  },
  {
    id: 1,
    name: "email",
    type: "text",
    placeholder: "Email",
    icon: MdOutlineAlternateEmail,
    lowercase: true,
  },
] as const;

export const contactImages = [
  contactImage1,
  contactImage2,
  contactImage3,
  contactImage4,
  contactImage5,
  contactImage6,
  contactImage7,
  contactImage8,
  contactImage9,
  contactImage10,
  contactImage11,
  contactImage12,
  contactImage13,
  contactImage14,
  contactImage15,
  contactImage16,
  contactImage17,
  contactImage18,
  contactImage19,
  contactImage20,
  contactImage21,
  contactImage22,
  contactImage23,
  contactImage24,
] as const;
