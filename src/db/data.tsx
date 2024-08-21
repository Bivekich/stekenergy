export const heroImgs: string[] = [
  "/Hero1.webp",
  "/Hero2.webp",
  "/Hero3.webp",
  "/Hero4.webp",
  "/Hero5.webp",
];

export const heroImgsMobile: string[] = [
  "/banner_phone-750-600.webp",
  "/banner_phone1-750-600.webp",
  "/banner_phone2-750-600.webp",
  "/banner_phone4-750-600.webp",
  "/banner_phone3-750-600.webp",
];
/*  {
    id: "",
    mainImg: "",
    name: "",
    shortDescription: "",
    productsType: "",
    type: "",
    qrCode: "",
    fullDescription: "",
    descriptionImg: "",
    hoverImage: "",
    imgsCatalog: "",
    Model: "",
    Brand: "",
  },*/
interface Param {
  id: number;
  mainImg: string;
  name: string;
  shortDescription: string;
  qrCode: string;
  fullDescription: string;
  descriptionImg: string;
  category: string;
  brand: string;
}
export const products: Array<Param> = [
  {
    id: 1,
    mainImg: "/bismain.webp",
    name: "2,5-Бис(трет-бутилперокси)-2,5-диметилгексан",
    shortDescription:
      "Chemical Name: 2,5-Bis(tert-butylperoxy)-2,5-dimethylhexane 2,5-Bis(tert-butylperoxy)-2,5-dimethylhexane is a low volatile, light yellow transparent liquid, is a dialkyl organic peroxide. Used for crosslinking of polymers (such as silicone rubber, EPDM, polyethylene, etc.) and degradation of polypropylene.",
    qrCode:
      "https://www.cnroyalpower.com/phoenix/admin/prod/qrcode/redirect/oCKBDiGMZHwE",
    fullDescription:
      "Химическое название: 2,5-Бис(трет-бутилперокси)-2,5-диметилгексан 2,5-Бис(трет-бутилперокси)-2,5-диметилгексан — это низколетучая, светло-желтая прозрачная жидкость, являющаяся диалкилорганическим пероксидом. Используется для сшивания полимеров (таких как силиконовая резина, EPDM, полиэтилен и др.) и деградации полипропилена.",
    descriptionImg: "/bis.webp",
    category: "Chemicals",
    brand: "RubberAndPlasticAdditives",
  },
  {
    id: 2,
    mainImg: "/CDG.webp",
    name: "Дизельный генератор Cummins",
    shortDescription: `Cummins has invested more than 140 million US dollars in China. As a foreign investor in China's Industrial Generators industry, Cummins has eight joint ventures and wholly-owned manufacturing enterprises in China. Among them, Dongfeng Cummins produces B, C and L series diesel engines, Industrial Type Diesel Generator Production of M, N and K series diesel engines. The products comply with ISO 3046, ISO 4001, ISO 8525, IEC 34-1, GB1105, GB/T 2820, CSH 22-2, VDE 0530 and YD/T502-2000 "Technical Requirements for Diesel Generator Sets for Communication" and other standards.`,

    qrCode:
      "https://www.cnroyalpower.com/phoenix/admin/prod/qrcode/redirect/sIUqpbaiQYmj",
    fullDescription: `Description 
      ROYAL POWER Cummins open type Diesel Generator Set selects DCEC、CCEC and USA Cummins engines. The CCEC、DCEC and USA Cummins engine with excellent quality and reliable performance, coupled with brush-less generator, applying integral salient pole rotor technique, Class H insulation, ensuring its advanced performance, steady and reliable operation. Our controller adopts multifunctional control module which is specially for diesel gen-set.
      This diesel generator set has advanced economy, reliability, durability and environmental safety , be generally welcomed by users at home and abroad; its series of diesel generator set ranges from 20KW to 2000KW, with strong power, stable and reliable performance, low fuel consumption and low operating costs.
      Main Features
      1. Use of electrical components of well-known international and domestic brands to ensure high reliability of power generation equipment;
      2. The integral structure of internal shock isolation, convenient use and maintenance, strong versatility of accessories, and low after-sales maintenance cost;
      3. Low noise, easy to operate, durable;
      4. The fully functional alarm protection system + Internet of Things after-sales service system ensures stable and reliable quality of diesel generator sets.
      5. Spare parts are easy to get from worldwide market with much cheaper price.`,
    descriptionImg: "",
    category: "DieselGenerator",
    brand: "CumminsSeries",
  },
  {
    id: 3,
    mainImg: "/PG.webp",
    name: "Дизельный генератор Perkins",
    shortDescription: "",
    qrCode: "",
    fullDescription: "",
    descriptionImg: "",
    category: "DieselGenerator",
    brand: "PerkinsSeries",
  },
  {
    id: 4,
    mainImg: "/INNIO.webp",
    name: "Газовый генератор Jenbacher",
    shortDescription: "",
    qrCode: "",
    fullDescription: "",
    descriptionImg: "",
    category: "GasGenerator",
    brand: "JenbacherSeries",
  },
  {
    id: 5,
    mainImg: "/SG.webp",
    name: "Бесшумный генераторКонтейнерный генератор",
    shortDescription: "",
    qrCode: "",
    fullDescription: "",
    descriptionImg: "",
    category: "DieselGenerator",
    brand: "SilentContainerzied",
  },
];
interface NewsDataParam {
  id: number;
  title: string;
  des: string;
  img: string;
  isIndustry: boolean;
  isCompany: boolean;
  date: Date;
}
export const NewsData: Array<NewsDataParam> = [
  {
    id: 1,
    title:
      "Газогенератор для попутного нефтяного газа Jenbacher на месторождении Акондо, Габон",
    des: "3 установки газогенераторов Jenbacher JGS312GS-S.L для попутного нефтяного газа работают параллельно, с общей выходной мощностью 2 МВт. Генератор контейнерного типа, с низким уровнем шума, используется на нефтяном месторождении.",
    img: "/news1.webp",
    isIndustry: false,
    isCompany: true,
    date: new Date(2023, 6, 4),
  },
  {
    id: 2,
    title:
      "10-мегаваттный газовый генератор Jenbacher, установленный в Шаньси, Китай",
    des: "Местоположение проекта: Шаньси, Китай Размеры: 8xJGS420GS-S.L 8 генераторов по 1.25 МВт каждый Источник газа для проекта: газ низкой концентрации Форма выработки энергии: комбинированное производство тепла и электроэнергии (ТЭЦ) Основное оборудование: Газовая установка внутреннего сгорания Котел утилизатор тепла Оборудование SCR для денитрификации",
    img: "/news2.webp",
    isIndustry: false,
    isCompany: false,
    date: new Date(2022, 6, 24),
  },
  {
    id: 1,
    title: "33-мегаваттный газовый генератор Jenbacher в Шаньси, Китай",
    des: "Местоположение проекта: Шаньси, Китай Масштаб объекта: 9xJGS620GS-S.L9 комплектов генераторов Jenbacher по 3600 кВт каждый Источник газа для проекта: газ высокой концентрации Форма выработки энергии: парогазовый циклОновне оборудование:Газовая установка внутреннего сгорания Конденсационная паровая турбогенераторная установка Котел утилизатор тепла",
    img: "/news3.webp",
    isIndustry: true,
    isCompany: false,
    date: new Date(2022, 9, 8),
  },
  {
    id: 1,
    title: "33-мегаваттный газовый генератор Jenbacher в Шаньси, Китай",
    des: "Местоположение проекта: Шаньси, Китай Масштаб объекта: 9xJGS620GS-S.L9 комплектов генераторов Jenbacher по 3600 кВт каждый Источник газа для проекта: газ высокой концентрации Форма выработки энергии: парогазовый циклОновне оборудование:Газовая установка внутреннего сгорания Конденсационная паровая турбогенераторная установка Котел утилизатор тепла",
    img: "/news3.webp",
    isIndustry: true,
    isCompany: false,
    date: new Date(2022, 9, 8),
  },
];
