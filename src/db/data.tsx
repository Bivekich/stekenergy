import { ReactElement } from "react";

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
/*{
    id: ,
    mainImg: "",
    name: "",
    shortDescription:
      "",
    qrCode:
      "https://www.cnroyalpower.com/phoenix/admin/prod/qrcode/redirect/oCKBDiGMZHwE",
    fullDescription:
      "",
    descriptionImg: "",
    category: "",
    brand: "",
},*/
interface Param {
  id: number;
  mainImg: string;
  name: string;
  shortDescription: string;
  qrCode: string;
  fullDescription: ReactElement;
  descriptionImg: string;
  category: string;
  brand: string;
}
export const products: Array<Param> = [
  {
    id: 1,
    mainImg: "/CDG.webp",
    name: "Дизельный генератор Cummins",
    shortDescription: `Камминс инвестировал более 140 миллионов долларов США в Китай. Как иностранный инвестор в промышленной генераторной отрасли Китая, Камминс имеет восемь совместных предприятий и полностью принадлежащих производственных компаний в Китае. Среди них Dongfeng Cummins производит дизельные двигатели серий B, C и L, а также промышленные дизельные генераторы серий M, N и K. Продукция соответствует стандартам ISO 3046, ISO 4001, ISO 8525, IEC 34-1, GB1105, GB/T 2820, CSH 22-2, VDE 0530 и YD/T502-2000 «Технические требования к дизельным генераторным установкам для связи» и другим стандартам.`,

    qrCode:
      "https://www.cnroyalpower.com/phoenix/admin/prod/qrcode/redirect/sIUqpbaiQYmj",
    fullDescription: (
      <div>
        <p>
          ROYAL POWER Cummins дизельный генератор открытого типа выбрал
          двигатели DCEC, CCEC и американского производства Cummins. Двигатели
          производства CCEC, DCEC и США Cummins отличаются отличным качеством и
          надежной работой, в сочетании с бесщеточным генератором, применяющим
          технологию целостного ярко выраженного полюсного ротора, класс
          изоляции H, что обеспечивает его передовые характеристики и стабильную
          и надежную работу. Наш контроллер использует многофункциональный
          модуль управления, специально разработанный для дизельных генераторов.
          Этот дизельный генератор обладает выдающейся экономичностью,
          надежностью, долговечностью и экологической безопасностью и пользуется
          популярностью у пользователей как в стране, так и за рубежом; серия
          дизельных генераторов варьируется от 20 кВт до 2000 кВт, обеспечивая
          мощную энергию, стабильную и надежную работу, низкий расход топлива и
          низкие эксплуатационные расходы.
        </p>
        <p>
          <span className="text-xl">Главные Достижения:</span>
          <p>
            1. Использование электрических компонентов известных международных и
            отечественных брендов для обеспечения высокой надежности
            оборудования для генерации энергии;
          </p>{" "}
          <p>
            {" "}
            2. Цельная конструкция внутренней изоляции от вибраций, удобство
            использования и обслуживания, высокая универсальность комплектующих
            и низкие затраты на послепродажное обслуживание;
          </p>
          <p>3. Низкий уровень шума, простота в эксплуатации, долговечность;</p>
          <p>
            {" "}
            4. Полнофункциональная система сигнализации и защиты + система
            послепродажного обслуживания с использованием Интернета вещей
            обеспечивают стабильное и надежное качество комплектов дизельных
            генераторов.
          </p>
          <p>
            {" "}
            5. Запасные части легко доступны на мировом рынке по гораздо более
            низкой цене.
          </p>
        </p>
        <div className="mb-32 flex overflow-scroll">
          <div>
            <table className="border border-gray-400">
              {" "}
              <tbody>
                {" "}
                <tr className="w-full">
                  {" "}
                  <td className="border border-gray-400">
                    <p className="w-full">
                      <span>
                        <strong>Royal &nbsp; Power/Cummins Series</strong>
                        <strong> </strong>
                      </span>
                    </p>
                  </td>{" "}
                </tr>{" "}
                <tr className="border border-gray-400">
                  {" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>
                          50Hz cosØ=0.8(Lag) &nbsp; 3 phase and 4 wire "Y" type
                          connection
                        </strong>
                      </span>
                    </p>
                  </td>{" "}
                </tr>{" "}
                <tr className="border border-gray-400">
                  {" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong> </strong>
                      </span>
                    </p>
                    <p>
                      <span>
                        <strong>Вес генераторной установки</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>Output power </strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>Diesel Engine</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>Dimension</strong>
                      </span>
                    </p>
                    <p>
                      <span>
                        <strong>L × W × H</strong>
                      </span>
                    </p>
                    <p>
                      <span>
                        <strong>( m m )</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>Вес</strong>
                      </span>
                    </p>
                    <p>
                      <span>
                        <strong>( k g )</strong>
                      </span>
                    </p>
                  </td>{" "}
                </tr>{" "}
                <tr className="border border-gray-400">
                  {" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>Standby Power</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>Prime Power</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>Вес</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>Power</strong>
                      </span>
                    </p>
                    <p>
                      <span>
                        <strong>( KW )</strong>
                      </span>
                    </p>
                  </td>{" "}
                </tr>{" "}
                <tr className="border border-gray-400">
                  {" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>KW</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>KW</strong>
                      </span>
                    </p>
                  </td>{" "}
                </tr>{" "}
                <tr className="border border-gray-400">
                  {" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>RYLC20P</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>18</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>16</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>4B3.9-G11</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>20</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>1650×720×1300</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>550</strong>
                      </span>
                    </p>
                  </td>{" "}
                </tr>{" "}
                <tr className="border border-gray-400">
                  {" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>RYLC25P</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>22 </strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>20</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>4B3.9-G2</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>27</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>1650×720×1300</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>600</strong>
                      </span>
                    </p>
                  </td>{" "}
                </tr>{" "}
                <tr className="border border-gray-400">
                  {" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>RYLC30P</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>30</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>24</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>4B3.9-G12</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>30</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>1700×750×1300</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>620</strong>
                      </span>
                    </p>
                  </td>{" "}
                </tr>{" "}
                <tr className="border border-gray-400">
                  {" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>RYLC40P</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>35</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>32</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>4BT3.9-G2</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>40</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>1700×750×1300</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>660</strong>
                      </span>
                    </p>
                  </td>{" "}
                </tr>{" "}
                <tr className="border border-gray-400">
                  {" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>RYLC50P</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>44</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>40</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>4BTA3.9-G2</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>55</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>1750×750×1300</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>800</strong>
                      </span>
                    </p>
                  </td>{" "}
                </tr>{" "}
                <tr className="border border-gray-400">
                  {" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>RYLC60P</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>52</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>48</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>4BTA3.9-G2</strong>
                      </span>
                    </p>
                    <p>
                      <span>
                        <strong>QSB3.9-G2</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>67</strong>
                      </span>
                    </p>
                    <p>
                      <span>
                        <strong>70</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>1750×750×1300</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>800</strong>
                      </span>
                    </p>
                  </td>{" "}
                </tr>{" "}
                <tr className="border border-gray-400">
                  {" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>RYLC80P</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>70</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>64</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>4BTA3.9-G11</strong>
                      </span>
                    </p>
                    <p>
                      <span>
                        <strong>QSB3.9-G3</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>80</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>1950×750×1300</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>860</strong>
                      </span>
                    </p>
                  </td>{" "}
                </tr>{" "}
                <tr className="border border-gray-400">
                  {" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>RYLC100P</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>88</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>80</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>6BT5.9-G2</strong>
                      </span>
                    </p>
                    <p>
                      <span>
                        <strong>QSB5.9-G2</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>106</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>2200×850×1440</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>1450</strong>
                      </span>
                    </p>
                  </td>{" "}
                </tr>{" "}
                <tr className="border border-gray-400">
                  {" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>RYLC120P</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>104</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>96</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>6BTA5.9-G2</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>116</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>2200×850×1440</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>1650</strong>
                      </span>
                    </p>
                  </td>{" "}
                </tr>{" "}
                <tr className="border border-gray-400">
                  {" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>RYLC125P</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>114</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>100</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>6BTAA5.9-G2</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>130</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>2250×900×1450</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>1650</strong>
                      </span>
                    </p>
                  </td>{" "}
                </tr>{" "}
                <tr className="border border-gray-400">
                  {" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>RYLC140P</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>120</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>112</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>QSB5.9-G3</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>132</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>2250×900×1450</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>1650</strong>
                      </span>
                    </p>
                  </td>{" "}
                </tr>{" "}
                <tr className="border border-gray-400">
                  {" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>RYLC160P</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>140</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>128</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>6BTAA5.9-G12</strong>
                      </span>
                    </p>
                    <p>
                      <span>
                        <strong>QSB6.7-G3</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>155</strong>
                      </span>
                    </p>
                    <p>
                      <span>
                        <strong>166</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>2250×900×1450</strong>
                      </span>
                    </p>
                    <p>
                      <span>
                        <strong>2400×960×1550</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>1700</strong>
                      </span>
                    </p>
                    <p>
                      <span>
                        <strong>1930</strong>
                      </span>
                    </p>
                  </td>{" "}
                </tr>{" "}
                <tr className="border border-gray-400">
                  {" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>RYLC180P</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>160</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>144</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>6CTA8.3-G2</strong>
                      </span>
                    </p>
                    <p>
                      <span>
                        <strong>QSB6.7-G4</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>180</strong>
                      </span>
                    </p>
                    <p>
                      <span>
                        <strong>185</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>2400×960×1550</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>2100</strong>
                      </span>
                    </p>
                  </td>{" "}
                </tr>{" "}
                <tr className="border border-gray-400">
                  {" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>RYLC200P</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>180</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>160</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>6CTAA8.3-G2</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>203</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>2500×1100×1600</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>2200</strong>
                      </span>
                    </p>
                  </td>{" "}
                </tr>{" "}
                <tr className="border border-gray-400">
                  {" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>RYLC225P</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>200</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>180</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>QSL8.9-G2</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>226</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>2500×1100×1600</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>2250</strong>
                      </span>
                    </p>
                  </td>{" "}
                </tr>{" "}
                <tr className="border border-gray-400">
                  {" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong> </strong>
                      </span>
                    </p>
                    <p>
                      <span>
                        <strong>RYLC250P</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong> </strong>
                      </span>
                    </p>
                    <p>
                      <span>
                        <strong>220</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong> </strong>
                      </span>
                    </p>
                    <p>
                      <span>
                        <strong>200</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>6LTAA8.9-G2</strong>
                      </span>
                    </p>
                    <p>
                      <span>
                        <strong>QSL8.9-G3</strong>
                      </span>
                    </p>
                    <p>
                      <span>
                        <strong>NT855-GA</strong>
                      </span>
                    </p>
                    <p>
                      <span>
                        <strong>MTA11-G2</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>240</strong>
                      </span>
                    </p>
                    <p>
                      <span>
                        <strong>240</strong>
                      </span>
                    </p>
                    <p>
                      <span>
                        <strong>250</strong>
                      </span>
                    </p>
                    <p>
                      <span>
                        <strong>250</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong> </strong>
                      </span>
                    </p>
                    <p>
                      <span>
                        <strong>2550×1100×1600</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong> </strong>
                      </span>
                    </p>
                    <p>
                      <span>
                        <strong>2250</strong>
                      </span>
                    </p>
                  </td>{" "}
                </tr>{" "}
                <tr className="border border-gray-400">
                  {" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>RYLC300P</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>280</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>240</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>MTAA11-G3</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>310</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>3100×980×1750</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>2900</strong>
                      </span>
                    </p>
                  </td>{" "}
                </tr>{" "}
                <tr className="border border-gray-400">
                  {" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>RYLC350P</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>320</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>280</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>NTA855-G2A</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>343</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>3200×980×1750</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>3100</strong>
                      </span>
                    </p>
                  </td>{" "}
                </tr>{" "}
                <tr className="border border-gray-400">
                  {" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong> </strong>
                      </span>
                    </p>
                    <p>
                      <span>
                        <strong>RYLC375P</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong> </strong>
                      </span>
                    </p>
                    <p>
                      <span>
                        <strong>330</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong> </strong>
                      </span>
                    </p>
                    <p>
                      <span>
                        <strong>300</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>NTAA855-G7</strong>
                      </span>
                    </p>
                    <p>
                      <span>
                        <strong>6ZTAA13-G3</strong>
                      </span>
                    </p>
                    <p>
                      <span>
                        <strong>QSZ13-G6</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>377</strong>
                      </span>
                    </p>
                    <p>
                      <span>
                        <strong>380</strong>
                      </span>
                    </p>
                    <p>
                      <span>
                        <strong>374</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong> </strong>
                      </span>
                    </p>
                    <p>
                      <span>
                        <strong>3300×1330×1850</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong> </strong>
                      </span>
                    </p>
                    <p>
                      <span>
                        <strong>3300</strong>
                      </span>
                    </p>
                  </td>{" "}
                </tr>{" "}
                <tr className="border border-gray-400">
                  {" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>RYLC400P</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>360</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>320</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>6ZTAA13-G2</strong>
                      </span>
                    </p>
                    <p>
                      <span>
                        <strong>QSNT-G3</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>415</strong>
                      </span>
                    </p>
                    <p>
                      <span>
                        <strong>393</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>2900×1100×1850</strong>
                      </span>
                    </p>
                    <p>
                      <span>
                        <strong>3300×1330×1850</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>3100</strong>
                      </span>
                    </p>
                    <p>
                      <span>
                        <strong>3350</strong>
                      </span>
                    </p>
                  </td>{" "}
                </tr>{" "}
                <tr className="border border-gray-400">
                  {" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>RYLC450P</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>400</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>360</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>QSZ13-G2</strong>
                      </span>
                    </p>
                    <p>
                      <span>
                        <strong>QSNT-G4X</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>440</strong>
                      </span>
                    </p>
                    <p>
                      <span>
                        <strong>448</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>3050×1100×1850</strong>
                      </span>
                    </p>
                    <p>
                      <span>
                        <strong>3300×1330×1850</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>3400</strong>
                      </span>
                    </p>
                    <p>
                      <span>
                        <strong>3400</strong>
                      </span>
                    </p>
                  </td>{" "}
                </tr>{" "}
                <tr className="border border-gray-400">
                  {" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>RYLC450P</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>400</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>360</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>QSNT-G4X</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>448</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>3300×1330×1850</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>3400</strong>
                      </span>
                    </p>
                  </td>{" "}
                </tr>{" "}
                <tr className="border border-gray-400">
                  {" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>RYLC500P</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>440</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>400</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>QSZ13-G3</strong>
                      </span>
                    </p>
                    <p>
                      <span>
                        <strong>KTA19-G3A</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>470</strong>
                      </span>
                    </p>
                    <p>
                      <span>
                        <strong>504</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>3050×1100×1850</strong>
                      </span>
                    </p>
                    <p>
                      <span>
                        <strong>3400×1350×1980</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>3500</strong>
                      </span>
                    </p>
                    <p>
                      <span>
                        <strong>4000</strong>
                      </span>
                    </p>
                  </td>{" "}
                </tr>{" "}
                <tr className="border border-gray-400">
                  {" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>RYLC563P</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>500</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>450</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>KTA19-G8</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>575</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>3500×1580×2050</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>4450</strong>
                      </span>
                    </p>
                  </td>{" "}
                </tr>{" "}
                <tr className="border border-gray-400">
                  {" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>RYLC625P</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>550</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>500</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>KTAA19-G6A</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>610</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>3700×1580×2080</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>4550</strong>
                      </span>
                    </p>
                  </td>{" "}
                </tr>{" "}
                <tr className="border border-gray-400">
                  {" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>RYLC687P</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>600</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>550</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>QSK19-G11</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>667</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>3700×1580×2080</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>4700</strong>
                      </span>
                    </p>
                  </td>{" "}
                </tr>{" "}
                <tr className="border border-gray-400">
                  {" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>RYLC750P</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>660</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>600</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>KTA38-G2</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>731</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>4370×2060×2430</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>6850</strong>
                      </span>
                    </p>
                  </td>{" "}
                </tr>{" "}
                <tr className="border border-gray-400">
                  {" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>RYLC800P</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>700</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>640</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>KTA38-G2B</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>789</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>4350×2060×2430</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>7000</strong>
                      </span>
                    </p>
                  </td>{" "}
                </tr>{" "}
                <tr className="border border-gray-400">
                  {" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>RYLC910P</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>800</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>728</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>KTA38-G2A</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>895</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>4350×2060×2430</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>7200</strong>
                      </span>
                    </p>
                  </td>{" "}
                </tr>{" "}
                <tr className="border border-gray-400">
                  {" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>RYLC1000P</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>880</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>800</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>KTA38-G5</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>970</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>4350×2060×2430</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>7450</strong>
                      </span>
                    </p>
                  </td>{" "}
                </tr>{" "}
                <tr className="border border-gray-400">
                  {" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>RYLC1125P</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>1000</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>900</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>KTA38-G9</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>1089</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>4400×2100×2200</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>7800</strong>
                      </span>
                    </p>
                  </td>{" "}
                </tr>{" "}
                <tr className="border border-gray-400">
                  {" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>RYLC1250P</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>1100</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>1000</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>QSK38-G5</strong>
                      </span>
                    </p>
                    <p>
                      <span>
                        <strong>KTA50-G3</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>1224</strong>
                      </span>
                    </p>
                    <p>
                      <span>
                        <strong>1227</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>4950×2260×2550</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>9600</strong>
                      </span>
                    </p>
                  </td>{" "}
                </tr>{" "}
                <tr className="border border-gray-400">
                  {" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>RYLC1500P</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>1320</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>1200</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>KTA50-GS8</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>1429</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>5280×2200×2580</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>11000</strong>
                      </span>
                    </p>
                  </td>{" "}
                </tr>{" "}
                <tr className="border border-gray-400">
                  {" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>RYLC1875P</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>1650</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>1500</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>QSK60-G3</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>1790</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>5820×2200×2800</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>15200</strong>
                      </span>
                    </p>
                  </td>{" "}
                </tr>{" "}
                <tr className="border border-gray-400">
                  {" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>RYLC2050P</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>1800</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>1640</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>QSK60-G4</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>1915</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>5820×2200×2800</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>15500</strong>
                      </span>
                    </p>
                  </td>{" "}
                </tr>{" "}
                <tr className="border border-gray-400">
                  {" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>RYLC2250P</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>2000</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>1800</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>QSK60-G21</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>2164</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>5820×2200×2800</strong>
                      </span>
                    </p>
                  </td>{" "}
                  <td className="border border-gray-400">
                    <p>
                      <span>
                        <strong>16000</strong>
                      </span>
                    </p>
                  </td>{" "}
                </tr>{" "}
              </tbody>{" "}
            </table>
          </div>
          <span>
            <i></i>
          </span>
        </div>

        <div className="mb-10 flex overflow-scroll">
          <table className="border border-grey-400">
            {" "}
            <tbody>
              {" "}
              <tr className="border border-grey-400">
                {" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>
                        60H cosØ=0.8(Lag) &nbsp; 3 phase and 4 wire "Y" type
                        connection
                      </strong>
                    </span>
                  </p>
                </td>{" "}
              </tr>{" "}
              <tr className="border border-grey-400">
                {" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>Вес</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>Prime Power</strong>
                    </span>
                  </p>
                  <p>
                    <span>
                      <strong>(KVA/KW)</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>Standby Power</strong>
                    </span>
                  </p>
                  <p>
                    <span>
                      <strong>(KVA/KW)</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>Engine</strong>
                    </span>
                  </p>
                </td>{" "}
                <td width="88.33333333333333">
                  <p>
                    <span>
                      <strong>Deminsions</strong>
                    </span>
                  </p>
                  <p>
                    <span>
                      <strong>（</strong>
                      <strong>MM)</strong>
                    </span>
                  </p>
                </td>{" "}
                <td width="27.333333333333332">
                  <p>
                    <span>
                      <strong>Вес</strong>
                    </span>
                  </p>
                  <p>
                    <span>
                      <strong>(KG)</strong>
                    </span>
                  </p>
                </td>{" "}
              </tr>{" "}
              <tr className="border border-grey-400">
                {" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>RYLC23C6</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>23</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>18</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>25</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>20</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>4B3.9-G2</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>1550×735×1420</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>765</strong>
                    </span>
                  </p>
                </td>{" "}
              </tr>{" "}
              <tr className="border border-grey-400">
                {" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>RYLC34C6</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>34</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>27</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>38</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>30</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>4BT3.9-G2</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>1680×735×1420</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>770</strong>
                    </span>
                  </p>
                </td>{" "}
              </tr>{" "}
              <tr className="border border-grey-400">
                {" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>RYLC68C6</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>68</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>55</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>75</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>60</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>4BTA3.9-G2</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>1880×805×1450</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>824</strong>
                    </span>
                  </p>
                </td>{" "}
              </tr>{" "}
              <tr className="border border-grey-400">
                {" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>RYLC90C6</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>90</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>72</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>100</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>80</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>4BTA3.9-G11</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>2180×805×1450</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>980</strong>
                    </span>
                  </p>
                </td>{" "}
              </tr>{" "}
              <tr className="border border-grey-400">
                {" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>RYLC114C6</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>114</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>91</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>125</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>100</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>6BT5.9-G2</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>2475×800×1470</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>1185</strong>
                    </span>
                  </p>
                </td>{" "}
              </tr>{" "}
              <tr className="border border-grey-400">
                {" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>RYLC130C6</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>130</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>104</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>143</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>115</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>6BTA5.9-G2</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>2620×800×1495</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>1185</strong>
                    </span>
                  </p>
                </td>{" "}
              </tr>{" "}
              <tr className="border border-grey-400">
                {" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>RYLC150C6</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>150</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>120</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>165</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>132</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>6BTAA5.9-G2</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>2620×800×1495</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>1185</strong>
                    </span>
                  </p>
                </td>{" "}
              </tr>{" "}
              <tr className="border border-grey-400">
                {" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>RYLC170C6</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>170</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>136</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>188</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>150</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>6BTAA5.9-G12</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>2620×800×1495</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>1300</strong>
                    </span>
                  </p>
                </td>{" "}
              </tr>{" "}
              <tr className="border border-grey-400">
                {" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>RYLC193C6</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>193</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>154</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>212</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>170</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>6CTA8.3-G2</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>2680×855×1560</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>1550</strong>
                    </span>
                  </p>
                </td>{" "}
              </tr>{" "}
              <tr className="border border-grey-400">
                {" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>RYLC216C6</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>216</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>173</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>238</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>190</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>6CTAA8.3-G2</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>2790×1045×1640</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>1700</strong>
                    </span>
                  </p>
                </td>{" "}
              </tr>{" "}
              <tr className="border border-grey-400">
                {" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>RYLC275C6</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>N/A</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>N/A</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>275</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>220</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>NT855-GA</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>2900×1050×1780</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>2800</strong>
                    </span>
                  </p>
                </td>{" "}
              </tr>{" "}
              <tr className="border border-grey-400">
                {" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>RYLC265C6</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>265</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>212</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>290</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>233</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>6LTAA8.9-G2</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>2890×1080×1780</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>2200</strong>
                    </span>
                  </p>
                </td>{" "}
              </tr>{" "}
              <tr className="border border-grey-400">
                {" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>RYLC313C6</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>313</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>250</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>344</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>275</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>NTA855-G1</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>2900×1050×1780</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>2900</strong>
                    </span>
                  </p>
                </td>{" "}
              </tr>{" "}
              <tr className="border border-grey-400">
                {" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>RYLC288C6</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>288</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>230</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>316</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>253</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>6LTAA8.9-G3</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>2890×1055×1780</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>2250</strong>
                    </span>
                  </p>
                </td>{" "}
              </tr>{" "}
              <tr className="border border-grey-400">
                {" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>RYLC300C6</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>300</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>240</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>330</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>264</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>6LTAA9.5-G3</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>2890×1080×1780</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>2500</strong>
                    </span>
                  </p>
                </td>{" "}
              </tr>{" "}
              <tr className="border border-grey-400">
                {" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>RYLC344C6-1</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>344</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>275</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>375</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>300</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>NTA855-G1B</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>3000×1050×1780</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>2950</strong>
                    </span>
                  </p>
                </td>{" "}
              </tr>{" "}
              <tr className="border border-grey-400">
                {" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>RYLC344C6-2</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>344</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>275</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>375</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>300</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>NTA855-G2</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>3000×1050×1780</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>2950</strong>
                    </span>
                  </p>
                </td>{" "}
              </tr>{" "}
              <tr className="border border-grey-400">
                {" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>RYLC315C6</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>315</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>252</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>347</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>277</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>6LTAA9.5-G1</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>2900×1060×1780</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>2640</strong>
                    </span>
                  </p>
                </td>{" "}
              </tr>{" "}
              <tr className="border border-grey-400">
                {" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>RYLC398C6</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>398</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>318</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>438</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>350</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>NTA855-G3</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>3000×1050×1780</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>2950</strong>
                    </span>
                  </p>
                </td>{" "}
              </tr>{" "}
              <tr className="border border-grey-400">
                {" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>RYLC386C6</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>386</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>309</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>424</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>339</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>6ZTAA13-G3</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>3380×1360×2010</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>3220</strong>
                    </span>
                  </p>
                </td>{" "}
              </tr>{" "}
              <tr className="border border-grey-400">
                {" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>RYLC405C6</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>405</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>324</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>445</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>356</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>QSZ13-G6</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>3420×1150×2190</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>3140</strong>
                    </span>
                  </p>
                </td>{" "}
              </tr>{" "}
              <tr className="border border-grey-400">
                {" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>RYLC438C6</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>438</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>350</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>481</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>385</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>KTA19-G2</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>3700×1275×2100</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>2900</strong>
                    </span>
                  </p>
                </td>{" "}
              </tr>{" "}
              <tr className="border border-grey-400">
                {" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>RYLC443C6</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>443</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>354</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>487</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>389</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>6ZTAA13-G2</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>3380×1360×2010</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>3220</strong>
                    </span>
                  </p>
                </td>{" "}
              </tr>{" "}
              <tr className="border border-grey-400">
                {" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>RYLC455C6-1</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>455</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>364</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>500</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>400</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>6ZTAA13-G4</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>3380×1360×2010</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>3220</strong>
                    </span>
                  </p>
                </td>{" "}
              </tr>{" "}
              <tr className="border border-grey-400">
                {" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>RYLC455C6-2</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>455</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>364</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>500</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>400</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>QSZ13-G2</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>3390×1360×2010</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>3220</strong>
                    </span>
                  </p>
                </td>{" "}
              </tr>{" "}
              <tr className="border border-grey-400">
                {" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>RYLC465C6</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>465</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>372</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>511</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>409</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>QSZ13-G7</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>3390×1360×2010</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>3220</strong>
                    </span>
                  </p>
                </td>{" "}
              </tr>{" "}
              <tr className="border border-grey-400">
                {" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>RYLC512C6</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>512</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>410</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>564</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>451</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>KTA19-G3</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>3700×1275×2100</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>2900</strong>
                    </span>
                  </p>
                </td>{" "}
              </tr>{" "}
              <tr className="border border-grey-400">
                {" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>RYLC511C6-1</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>511</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>409</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>562</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>450</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>QSZ13-G5</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>3390×1360×2010</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>3220</strong>
                    </span>
                  </p>
                </td>{" "}
              </tr>{" "}
              <tr className="border border-grey-400">
                {" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>RYLC511C6-2</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>511</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>409</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>563</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>450</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>QSZ13-G3</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>3390×1360×2010</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>3220</strong>
                    </span>
                  </p>
                </td>{" "}
              </tr>{" "}
              <tr className="border border-grey-400">
                {" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>RYLC562C6-1</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>562</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>450</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>618</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>495</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>KTA19-G3A</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>3700×1275×2100</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>4250</strong>
                    </span>
                  </p>
                </td>{" "}
              </tr>{" "}
              <tr className="border border-grey-400">
                {" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>RYLC562C6-2</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>562</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>450</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>618</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>495</strong>
                    </span>
                  </p>
                </td>{" "}
                <td width="98.33333333333333">
                  <p>
                    <span>
                      <strong>KTA19-G4</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>3700×1275×2100</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>4300</strong>
                    </span>
                  </p>
                </td>{" "}
              </tr>{" "}
              <tr className="border border-grey-400">
                {" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>RYLC587C6</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>587</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>470</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>646</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>517</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>KTAA19-G5</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>3860×1735×2310</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>4550</strong>
                    </span>
                  </p>
                </td>{" "}
              </tr>{" "}
              <tr className="border border-grey-400">
                {" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>RYLC750C6</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>N/A</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>N/A</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>750</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>600</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>KTAA19-G6A</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>4055×1550×2235</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>4550</strong>
                    </span>
                  </p>
                </td>{" "}
              </tr>{" "}
              <tr className="border border-grey-400">
                {" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>RYLC775C6</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>775</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>620</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>850</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>680</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>KT38-G</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>4055×1550×2210</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>6000</strong>
                    </span>
                  </p>
                </td>{" "}
              </tr>{" "}
              <tr className="border border-grey-400">
                {" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>RYLC875C6</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>875</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>700</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>963</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>770</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>KTA38-G1</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>4200×1650×2210</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>6150</strong>
                    </span>
                  </p>
                </td>{" "}
              </tr>{" "}
              <tr className="border border-grey-400">
                {" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>RYLC906C6</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>906</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>725</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>997</strong>
                    </span>
                  </p>
                </td>{" "}
                <td width="45.33333333333333">
                  <p>
                    <span>
                      <strong>798</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>KTA38-G2</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>4350×1750×2210</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>6600</strong>
                    </span>
                  </p>
                </td>{" "}
              </tr>{" "}
              <tr className="border border-grey-400">
                {" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>RYLC938C6</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>938</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>750</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>1031</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>825</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>KTA38-G2B</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>4350×1750×2210</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>6700</strong>
                    </span>
                  </p>
                </td>{" "}
              </tr>{" "}
              <tr className="border border-grey-400">
                {" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>RYLC1000C6</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>1000</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>800</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>1100</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>880</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>KTA38-G2A</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>4350×1750×2210</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>6850</strong>
                    </span>
                  </p>
                </td>{" "}
              </tr>{" "}
              <tr className="border border-grey-400">
                {" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>RYLC1125C6</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>1125</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>900</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>1238</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>990</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>KTA38-G4</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>4350×2090×2210</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>7150</strong>
                    </span>
                  </p>
                </td>{" "}
              </tr>{" "}
              <tr className="border border-grey-400">
                {" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>RYLC1525C6</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>N/A</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>N/A</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>1525</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>1220</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>KTA38-G9</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>4350×2090×2210</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>7250</strong>
                    </span>
                  </p>
                </td>{" "}
              </tr>{" "}
              <tr className="border border-grey-400">
                {" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>RYLC1375C6</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>1375</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>1100</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>1513</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>1210</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>KTA50-G3</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>4960×2070×2330</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>9140</strong>
                    </span>
                  </p>
                </td>{" "}
              </tr>{" "}
              <tr className="border border-grey-400">
                {" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>RYLC1575C6</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>1575</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>1260</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>1733</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>1386</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>KTA50-G9</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>5050×2260×2455</strong>
                    </span>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <span>
                      <strong>9400</strong>
                    </span>
                  </p>
                </td>{" "}
              </tr>{" "}
            </tbody>{" "}
          </table>
        </div>
        <span>
          <i></i>
        </span>
        <img src="/1.webp" className="mb-5"></img>
        <img src="/2.webp" className="mb-5"></img>
      </div>
    ),
    descriptionImg: "",
    category: "DieselGenerator",
    brand: "Cummins Series",
  },
  {
    id: 2,
    mainImg: "/Mitsu.webp",
    name: "Дизельный генератор Mitsubishi",
    shortDescription:
      "Дизельные генераторы Mitsubishi с дизельными двигателями Mitsubishi С дизельными двигателями марки Mitsubishi, мощность которых варьируетсяот 0,5 до 56 400 лошадиных сил, компания предлагает сериюуниверсальных систем энергогенерации. Mitsubishi Heavy IndustriesEngine & Turbocharger, Ltd. постоянно модернизирует свои двигательные продукты с момента начала бизнеса в 1917 году, и теперь генератор Mitsubishi MGS предлагает более высокую мощность генерации и более продвинутые системы управления, чем когда-либо прежде, с подтвержденной надежностью благодаря постоянным исследованиям и разработкам. Идеально скомпонованная система двигателей, включающая дизельные двигатели Mitsubishi и турбокомпрессоры Mitsubishi, которые разрабатываются и производятся на одном и том же предприятии, гарантированно обеспечивает высокую продуктивность и улучшенную топливную эффективность. Каждый агрегат проходит осмотр и испытания перед отправкой с завода, а отчет об испытаниях отправляется вместе с генератором. MITSUBISHI MGS - Все собрано, протестировано и поддерживается Mitsubishi.",
    qrCode:
      "https://www.cnroyalpower.com/phoenix/admin/prod/qrcode/redirect/oCKBDiGMZHwE",
    fullDescription: (
      <div>
        <p>MITSUBISHI DIESEL ENGINES</p>
        <p>
          Дизельные двигатели марки Mitsubishi, мощность которых варьируется от
          0,5 до 56 400 лошадиных сил, предлагают серию универсальных систем
          энергогенерации. С момента начала бизнеса в 1917 году компания
          Mitsubishi Heavy Industries Engine & Turbocharger, Ltd. постоянно
          модернизирует свои двигательные продукты, и теперь генераторы
          MITSUBISHI MGS предлагают более высокую мощность генерации и более
          продвинутые системы управления, чем когда-либо прежде, с доказанной
          надежностью, основанной на постоянных исследованиях и разработках.
          Идеально подобранная система двигателей, сконфигурированная с
          использованием дизельных двигателей Mitsubishi и турбокомпрессоров
          Mitsubishi, которые разрабатываются и производятся на одном и том же
          заводе, безусловно, обеспечивает высокую продуктивность и улучшенную
          топливную эффективность. Каждый агрегат проходит осмотр и тестирование
          перед отправкой с завода, а отчет об испытаниях отправляется вместе с
          генератором. MITSUBISHI MGS - Все собрано, протестировано и
          поддерживается компанией Mitsubishi.
        </p>
        <img src="/3.webp"></img>
        <p>
          НАДЕЖНОСТЬ И ДОЛГОВЕЧНОСТЬ В ЭНЕРГОГЕНЕРАЦИИ Идеально сочетающиеся
          системы двигателей и генераторов обеспечивают производительность
          мирового класса Отклик и стабильность, разработанные для превосходства
          пользовательских ожиданий в различных приложениях ГЕНЕРАТОР
          ПОСТОЯННОГО ТОКА 4-полюсный, с защитой от повреждений и капель воды, с
          защитой типа IP23, самоусиливающийся, саморегулирующийся и бесщеточный
          с полностью подключенными успокоительными обмотками, с явнополюсными
          роторами, с А.С. возбудителем и блоком вращающихся выпрямителей.
          Система изоляции относится к классу ‘H’. Все обмотки пропитываются
          либо тройным слоем термоотверждаемого лака, устойчивого к влаге, маслу
          и кислотам, либо вакуумно-давления погружаются в специальную
          полиэфирную смолу. Электрическая конструкция соответствует стандартам
          BS5000 Часть 3, VDE0530, UTE51100, NEMA MG1-32, CEMA, IEC34-1, CSA22.2
          и AS1359.
        </p>
        <img src="/4.webp"></img>
        <img src="/5.jpg"></img>
        <p>
          6 и 12 проводные1 переподключаемые обмотки обеспечивают широкий
          диапазон трёхфазного напряжения. Система поля возбуждения остается на
          полной мощности, поддерживая высокий уровень тока короткого замыкания
          на выходных клеммах генератора переменного тока через напряжение
          возбуждения посредством автоматического регулятора напряжения (AVR),
          питаемого от независимой обмотки, постоянного магнитного генератора
          (PMG), являющегося стандартной функцией в электростанции MGS, который
          электрически изолирован от основных обмоток статора генератора.
          Полностью герметичный трехфазный2 регулятор напряжения RMS
          поддерживает напряжение в пределах +/-0.5%*3 от холостого хода до
          полной нагрузки, включая вариации от холодного до горячего состояния,
          при любом коэффициенте мощности между 0.8 отстающим и единицей,
          позволяя 4% вариацию скорости двигателя, что подходит для применений с
          сильно небалансированными или высоко нелинейными нагрузками,
          связанными с системами бесперебойного питания (UPS). AVR имеет
          встроенную защиту от длительного перенапряжения, вызванного
          внутренними или внешними неисправностями. Это отключает генератор
          спустя минимум пять секунд. КГФ (как определено BS4999 часть 40) лучше
          чем 2%, а ИФП (как определено ASA C50.12) лучше чем 50. Радиопомехи:
          подавление в соответствии с положениями BS800 и VDE Class G и N. 112
          проводные переподключаемые обмотки являются особенностями моделей до
          кода H6. До код K5 модели имеют однофазное измерение напряжения и
          регулирование напряжения в пределах +/-1.0%, для 4% вариации скорости
          двигателя.
        </p>
        <img src="/6.webp"></img>
        <img src="/7.jpg"></img>
        <p>
          <p>ПЕРЕДОВЫЕ РЕШЕНИЯ В ГЕНЕРАЦИИ ЭНЕРГИИ</p>
          “Полноразмерные” функции безопасности и автоматизации в серии цифровых
          систем управления Легкий интерфейс в сложной системе управления делает
          электростанцию дружественной для оператора. КОНТРОЛЬНАЯ ПАНЕЛЬ СЕРИИ
          MGS Стандартный программируемый микропроцессорный контроль MGS 7310 -
          панель автоматического запуска/остановки, управление выключателем
          генератора, индикация рабочего состояния и условий неисправности;
          автоматическое отключение двигателя и индикация неисправности
          двигателя с помощью ЖК-дисплея и светодиодов на передней панели.
          Электрическая схема в соответствии с Директивой по низкому напряжению
          BS EN 60950, Директивой по электромагнитной совместимости BS EN
          61006-2 и 61006-4. Опциональный интерфейс может предоставлять
          возможности для диагностики в реальном времени. Особенности MGS-C Для
          Высоконадежного и Стабильного Источника Электроснабжения
        </p>
        <div>
          <ul className="border border-grey-400 flex justify-center items-center h-10">
            <li className="border-r border-grey-400 flex justify-center items-center w-full">
              до MG-HC6K
            </li>
            <li className="flex flex-col justify-center items-center w-full">
              1 110 кВА при 220 В и 50 Гц 1 150 кВт при 240 В и 60 Гц
            </li>
          </ul>
        </div>
        <p>
          <p>Цифровая система управления дизельным генератором </p>
          <p>
            Стандарты: Панель управления MGS 7310 для
            локального/удаленногоуправления
          </p>
          <p>
            Опция: Система управления дизельным генератором DGICS-MIL
            Примененная конструкция систем распределения по всему миру без
            каких-либо модификаций Система возбуждения с постоянным магнитным
            генератором (PMG) Герметичный регулятор напряжения RMS для высокой
            надежности работы Обмотки с шагом 2/3 и системой изоляции класса H с
            методами пропитки VPI Встроенный токовый трансформатор для
            измерения, управления и защиты для приложений классов 400 В и 200 В
            Изоляционные материалы класса H с применением температурного
            повышения класса F
          </p>{" "}
          <p className="mb-10">
            <p>Особенности MGS-HV</p>
            <p>- Вакуумно-пропиточная с эпоксидной смолой (VPI).</p>
            <p>
              - Изоляция класса H по стандарту IEC для генераторов 3.3 кВ и 4.16
              кВ.
            </p>
            <p>
              - Изоляция класса F по стандарту IEC для генераторов 6.6 кВ, 10
              кВ, 11 кВ и 13.8 кВ.
            </p>
            <p>- Встроенный AVR для генераторов 3.3 кВ и 4.16 кВ. </p>
            <p>
              -Поставка AVR отдельно для генераторов 6.6 кВ, 10 кВ, 11 кВ и 13.8
              кВ.
            </p>
            <p>- Степень защиты: IP-22 для корпуса генератора.</p>
            <p>- Степень защиты: IP-44 для клеммной коробки.</p>
            <p>- Постоянный магнитный генератор (PMG, эксцитер).</p>
            <p>
              - 6 датчиков Pt 100 Ом RTD для статора. - 1 или 2 датчика Pt 100
              Ом RTD для подшипника(ов).
            </p>{" "}
            <p>- AVR с трехфазным датчиком и управлением V/Hz.</p>
            <p>- Коммерческий тип нагревателя пространства. </p>
            <p>- Статор с формованной обмоткой и явнополюсный ротор.</p>
            <p>- Стандартные условия по IEC: 40°C и 1000 м над уровнем моря.</p>
          </p>
        </p>
        <div>
          <div className=" flex overflow-scroll">
            <table className="border border-grey-400">
              {" "}
              <tbody>
                {" "}
                <tr className="border border-grey-400">
                  {" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>ROYALPOWER/ MITSUBISHI SERIES</strong>
                    </p>
                  </td>{" "}
                </tr>{" "}
                <tr className="border border-grey-400">
                  {" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>
                        50Hz &nbsp; &nbsp;400V &nbsp;cosØ=0.8(Lag) 3 phase and 4
                        wire "Y" type connection
                      </strong>
                    </p>
                  </td>{" "}
                </tr>{" "}
                <tr className="border border-grey-400">
                  {" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong> </strong>
                    </p>
                    <p>
                      <strong>Модель агрегата</strong>
                    </p>
                    <p>
                      <strong>Genset Вес</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>Выходная мощность</strong>
                    </p>
                    <p>
                      <strong>output power </strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>Двигатель</strong>
                    </p>
                    <p>
                      <strong>Diesel Engine</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>Габаритные размеры</strong>
                    </p>
                    <p>
                      <strong>Dimension</strong>
                    </p>
                    <p>
                      <strong>L × W × H</strong>
                    </p>
                    <p>
                      <strong>( m m )</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>Вес</strong>
                    </p>
                    <p>
                      <strong>Вес</strong>
                    </p>
                    <p>
                      <strong>( k g )</strong>
                    </p>
                  </td>{" "}
                </tr>{" "}
                <tr className="border border-grey-400">
                  {" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>Резервная мощность</strong>
                    </p>
                    <p>
                      <strong>Standby Power</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>Основная мощность</strong>
                    </p>
                    <p>
                      <strong>Prime Power</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>Модель</strong>
                    </p>
                    <p>
                      <strong>Вес</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>Мощь</strong>
                    </p>
                    <p>
                      <strong>Power</strong>
                    </p>
                    <p>
                      <strong>( KW )</strong>
                    </p>
                  </td>{" "}
                </tr>{" "}
                <tr className="border border-grey-400">
                  {" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>KW</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>KW</strong>
                    </p>
                  </td>{" "}
                </tr>{" "}
                <tr className="border border-grey-400">
                  {" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>RYJM750P</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>660</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>600</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>S6R2-PTAA-C</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>710</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>4080×1700×2000</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>5650</strong>
                    </p>
                  </td>{" "}
                </tr>{" "}
                <tr className="border border-grey-400">
                  {" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>RYJM1250P</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>1100</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>1000</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>S12R-PTA-C</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>1190</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>4520×2200×2500</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>10800</strong>
                    </p>
                  </td>{" "}
                </tr>{" "}
                <tr className="border border-grey-400">
                  {" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>RYJM1375P</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>1200</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>1100</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>S12R-PTA2-C</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>1285</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>4520×2200×2500</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>11000</strong>
                    </p>
                  </td>{" "}
                </tr>{" "}
                <tr className="border border-grey-400">
                  {" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>RYJM1500P</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>1320</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>1200</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>S12R-PTAA2-C</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>1404</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>4920×2200×3000</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>11300</strong>
                    </p>
                  </td>{" "}
                </tr>{" "}
                <tr className="border border-grey-400">
                  {" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>RYJM1750P</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>1520</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>1400</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>S16R-PTA-C</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>1590</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>5470×2200×2550</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>13000</strong>
                    </p>
                  </td>{" "}
                </tr>{" "}
                <tr className="border border-grey-400">
                  {" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>RYJM1900P</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>1680</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>1520</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>S16R-PTA2-C</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>1760</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>5470×2200×2550</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>13800</strong>
                    </p>
                  </td>{" "}
                </tr>{" "}
                <tr className="border border-grey-400">
                  {" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>RYJM2050P</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>1800</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>1640</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>S16RPTAA2-C</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>1895</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>5700×2400×2575</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>14500</strong>
                    </p>
                  </td>{" "}
                </tr>{" "}
                <tr className="border border-grey-400">
                  {" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>RYJM2250P</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>2000</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>1800</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>S16R2-PTAW-C</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>2167</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>5985×2555×2800</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>15500</strong>
                    </p>
                  </td>{" "}
                </tr>{" "}
              </tbody>{" "}
            </table>
          </div>
          <span>
            <i></i>
          </span>
        </div>
        <img src="/8.webp" className="mb-10"></img>
        <img src="/9.webp"></img>
      </div>
    ),
    descriptionImg: "",
    category: "DieselGenerator",
    brand: "Mitsubishi Series",
  },
  {
    id: 3,
    mainImg: "/10.webp",
    name: "Дизельный генератор Weichai",
    shortDescription:
      "Дизельный генератор Weichai Компания Weichai Power Co., Ltd. (HK2338, SZ000338) была основана в 2002 году при поддержке Weichai Holding Group Co., Ltd. и квалифицированных отечественных и зарубежных инвесторов. Это компания по производству двигателей внутреннего сгорания, акции которой котируются на Гонконгской фондовой бирже и вернулись на фондовый рынок материкового Китая. В 2022 году объем продаж Weichai достиг 175.16 млрд юаней, а чистая прибыль, относящаяся к материнской компании, составила 4.91 млрд юаней. Weichai всегда придерживается стратегии ведения бизнеса, основанной на продукте и капитале, и стремится разрабатывать продукты с тремя основными конкурентными преимуществами: качеством, технологией и стоимостью. Компания успешно построила синергетическую модель развития в сегментах силовых агрегатов (двигатель, трансмиссия, ось/гидравлика), автомобилей и техники, интеллектуальной логистики и других сегментах. Компания владеет известными брендами, такими как “Weichai Power Engine”, “Fast Gear”, “Hande Axle”, “Shacman Heavy Truck” и “Linder Hydraulics”.",
    qrCode:
      "https://www.cnroyalpower.com/phoenix/admin/prod/qrcode/redirect/oCKBDiGMZHwE",
    fullDescription: (
      <div>
        <span className="text-xl">
          Безопасность – Стабильность – Экономичность – Надежность питания
        </span>
        <p>
          1. Наше сотрудничество с известными производителями дизельных
          двигателей – Powered by Cummins, Perkins, Deutz, LovoL, Lister Petter,
          Doosan, Yanmar, Kubota, Shangchai, SDEC, Weichai, MTU, Ricardo,
          Jichai.
        </p>
        <p>
          2. Оснащение известными безщеточными альтернаторами – на выбор
          Stamford, Leroy Somer, Marathon, JET Power, Mecc alte.
        </p>
        <p>
          3. Оснащение радиатором на 50°C с вентилятором, обеспечивающим
          достаточное охлаждение двигателя для продолжительной работы.
        </p>
        <p>
          4. Оснащение современными системами управления генераторной
          установкой, системами ATS, удаленного управления, параллельной работы,
          на выбор модели управления, Deep Sea, Smartgen, ComAp.
        </p>
        <p>
          5. Генераторная установка использует высококачественную сталь с
          толщиной кожуха от 2 мм до 10 мм.
        </p>
        <p>
          6. Оснащение высокоплотным звукопоглощающим материалом –
          звукоизоляция, огнеупорность.
        </p>
        <p>
          7. Генератор оснащен аккумулятором на 12В/24В с зарядным устройством,
          соединительными проводами для аккумулятора.
        </p>
        <p>
          8. Генератор оснащен топливным баком на 10–12 часов с индикатором
          топлива, обеспечивающим долгую работу.
        </p>
        <p>
          9. Контрольный шкаф и коробка вывода мощности высокой степени защиты.
          IP55, водонепроницаемость, защита от утечек электричества,
          автоматический выключатель.
        </p>
        <p>
          10. Новый дизайн с обратной подачей воздуха и выводом воздуха, что
          снижает шум и повышает эффективность двигателя.
        </p>
        <p>
          11. Красивый и практичный дизайн, нижнее отверстие для вилочного
          погрузчика, выход для воды и масла для простоты технического
          обслуживания.
        </p>
        <p>
          12. Двойные двери с открыванием на обеих сторонах генераторной
          установки. Просторные двери обеспечивают доступ к каждой части
          двигателя и альтернатора.
        </p>
        <p>
          13. Все новые дизайны дизельной генераторной установки: “Silent”,
          “Supper Silent”, звукоизолированный, в виде прицепа, контейнерного
          типа.
        </p>
        <span className="text-xl">
          Diesel generator set Silent / Soundproof type / Trailer type /
          container generator
        </span>
        <p>
          Наши генераторные установки соответствуют всем основным стандартам,
          таким как: GB/T2820, ISO8528, IEC34, CE, стандарт EPA Tier 4.
          <p>
            Номинальная выходная мощность дизельного генератора: от 2 кВА до
            2500 кВА.
          </p>
          <p>
            Номинальное напряжение: 120В/240В, 220В/380В, 230В/400В, 254В/440В и
            другие напряжения по выбору.
          </p>
          <p>Фаза и подключение генератора: 3 фазы, 4 провода.</p>
          <p>
            Номинальная частота: 50 Гц при 1500 об/мин или 60 Гц при 1800
            об/мин.
          </p>
          <p>
            {" "}
            Тип возбуждения альтернатора: бесщеточный, с самовозбуждением или
            опционально с постоянным магнитным генератором (PMG).
          </p>
          <p>
            {" "}
            Изоляция альтернатора: класс H. Защита альтернатора: IP21 ~ IP23.
            Регулирование напряжения: автоматический контроль AVR 1%.
          </p>
          <p>Высота над уровнем моря: ≤1000 метров.</p>
          <p>Температура окружающего воздуха: ≤40°C.</p>
          <p> Относительная влажность воздуха: ≤ 90%.</p>
        </p>
        <span className="text-xl">Система управления</span>
        <span>
          <p>
            {" "}
            1. Стандартная панель управления модели DSE6020, HGM6120U, DSE7320
            (AMF), включая цифровую LED модель управления генераторной
            установкой: HGM6120U, DSE7320, DSE6020.
          </p>

          <p>
            {" "}
            2. Автоматический переключатель нагрузки (ATS) и система
            автоматической параллельной работы.
          </p>
        </span>
        <span className="text-xl">Аксессуары</span>
        <p>
          Стандартные аксессуары: Стандартный радиатор на 50, установленный на
          салазках. Общая стальная рама, автоматический выключатель, демпфер,
          глушитель, гибкая труба, аккумулятор и соединительные провода,
          стандартный набор инструментов, руководство по эксплуатации и тестовая
          документация.
        </p>
        <span className="text-xl">Стандарт производства</span>
        <p>
          GB/T2820, ISO8528, IEC34, CE, стандарт EPA Tier 4, GB755, BS 5000, VDE
          0530, NEMA MG1-22, IEC34.
        </p>
        <span>Гарантийная политика продукта</span>
        <p>
          Продукция Royal Power имеет гарантию на один год или 1000 часов в
          зависимости от того, что наступит раньше, начиная с даты выпуска с
          завода. В течение гарантийного периода мы предоставим бесплатные легко
          повреждающиеся запасные части для альтернатора, если повреждения
          вызваны качеством производства или сырьем. По окончании гарантийного
          срока мы предоставляем платные запчасти для обслуживания альтернатора.
          Если двигатель имеет международное гарантийное обслуживание, гарантия
          на продукт двигателя предоставляется местным уполномоченным сервисным
          агентом.
        </p>

        <div>
          <div className="flex overflow-scroll">
            <table className="border border-grey-400">
              {" "}
              <tbody>
                {" "}
                <tr className="border border-grey-400">
                  {" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>ROYALPOWER / &nbsp; WEICHAI SERIES</strong>
                    </p>
                  </td>{" "}
                </tr>{" "}
                <tr className="border border-grey-400">
                  {" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>
                        50Hz &nbsp; &nbsp;400V &nbsp;cosØ=0.8(Lag) 3 phase and 4
                        wire "Y" type connection
                      </strong>
                    </p>
                  </td>{" "}
                </tr>{" "}
                <tr className="border border-grey-400">
                  {" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>Genset Вес</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>output power </strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>Diesel Engine</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>Dimension</strong>
                    </p>
                    <p>
                      <strong>L × W × H</strong>
                    </p>
                    <p>
                      <strong>( m m )</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>Вес</strong>
                    </p>
                    <p>
                      <strong>( k g )</strong>
                    </p>
                  </td>{" "}
                </tr>{" "}
                <tr className="border border-grey-400">
                  {" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>Standby Power</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>Prime Power</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>Вес</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>Power</strong>
                    </p>
                    <p>
                      <strong>( KW )</strong>
                    </p>
                  </td>{" "}
                </tr>{" "}
                <tr className="border border-grey-400">
                  {" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>KW</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>KW</strong>
                    </p>
                  </td>{" "}
                </tr>{" "}
                <tr className="border border-grey-400">
                  {" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>RWP25P</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>20</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>22</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>WP2.3D25E200</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>25</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>1700×800×1300</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>620</strong>
                    </p>
                  </td>{" "}
                </tr>{" "}
                <tr className="border border-grey-400">
                  {" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>RWP30P</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>28</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>24</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>WP2.3D33E200</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>33</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>1700×800×1300</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>650</strong>
                    </p>
                  </td>{" "}
                </tr>{" "}
                <tr className="border border-grey-400">
                  {" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>RWP40P</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>36</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>32</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>WP2.3D40E200</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>40</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>1700×800×1300</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>680</strong>
                    </p>
                  </td>{" "}
                </tr>{" "}
                <tr className="border border-grey-400">
                  {" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>RWP50P</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>44</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>40</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>WP2.3D48E200</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>48.4</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>1700×800×1300</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>680</strong>
                    </p>
                  </td>{" "}
                </tr>{" "}
                <tr className="border border-grey-400">
                  {" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>RWP65P</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>60</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>52</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>WP4D66E200</strong>
                    </p>
                    <p>
                      <strong>WP4.1D66E200</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>66</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>1950×800×1600</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>950</strong>
                    </p>
                  </td>{" "}
                </tr>{" "}
                <tr className="border border-grey-400">
                  {" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>RWP80P</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>70</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>64</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>WP4.1D80E200</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>80</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>1950×800×1600</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>950</strong>
                    </p>
                  </td>{" "}
                </tr>{" "}
                <tr className="border border-grey-400">
                  {" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>RWP100P</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>88</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>80</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>WP4D100E200</strong>
                    </p>
                    <p>
                      <strong>WP4.1D100E200</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>100</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>2250×900×1600</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>1250</strong>
                    </p>
                  </td>{" "}
                </tr>{" "}
                <tr className="border border-grey-400">
                  {" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>RWP140P</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>120</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>112</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>WP6D132E200</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>132</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>2400×1000×1650</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>1550</strong>
                    </p>
                  </td>{" "}
                </tr>{" "}
                <tr className="border border-grey-400">
                  {" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>RWP160P</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>138</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>128</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>WP6D152E200</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>152</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>2550×1100×1650</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>1900</strong>
                    </p>
                  </td>{" "}
                </tr>{" "}
                <tr className="border border-grey-400">
                  {" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>RWP180P</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>160</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>144</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>WP6D167E200</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>167</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>2550×1100×1650</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>2000</strong>
                    </p>
                  </td>{" "}
                </tr>{" "}
                <tr className="border border-grey-400">
                  {" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>RWP200P</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>180</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>160</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>WP10D200E200</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>200</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>2850×1100×1950</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>2250</strong>
                    </p>
                  </td>{" "}
                </tr>{" "}
                <tr className="border border-grey-400">
                  {" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>RWP225P</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>200</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>180</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>WP10D238E200</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>238</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>2850×1100×1950</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>1850</strong>
                    </p>
                  </td>{" "}
                </tr>{" "}
                <tr className="border border-grey-400">
                  {" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>RWP250P</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>220</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>200</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>WP10D264E200</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>264</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>2950×1100×1950</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>2200</strong>
                    </p>
                  </td>{" "}
                </tr>{" "}
                <tr className="border border-grey-400">
                  {" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>RWP300P</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>280</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>240</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>WP12D317E200</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>317</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>3050×1250×1750</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>2650</strong>
                    </p>
                  </td>{" "}
                </tr>{" "}
                <tr className="border border-grey-400">
                  {" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>RWP400P</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>350</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>320</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>WP13D385E200</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>385</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>3050×1250×1750</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>2800</strong>
                    </p>
                  </td>{" "}
                </tr>{" "}
                <tr className="border border-grey-400">
                  {" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>RWP450P</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>400</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>360</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>WP13D440E310</strong>
                    </p>
                    <p>
                      <strong>6M26D447E200</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>440</strong>
                    </p>
                    <p>
                      <strong>447</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>3250×1250×1750</strong>
                    </p>
                    <p>
                      <strong>3600×1520×1900</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>2900</strong>
                    </p>
                    <p>
                      <strong>3800</strong>
                    </p>
                  </td>{" "}
                </tr>{" "}
                <tr className="border border-grey-400">
                  {" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>RWP500P</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>440</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>400</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>6M26D484E200</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>484</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>3600×1520×1900</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>3800</strong>
                    </p>
                  </td>{" "}
                </tr>{" "}
                <tr className="border border-grey-400">
                  {" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>RWP563P</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>500</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>450</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>6M33D572E200</strong>
                    </p>
                    <p>
                      <strong>6M33D572E310</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>572</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>3800×1600×2050</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>4200</strong>
                    </p>
                  </td>{" "}
                </tr>{" "}
                <tr className="border border-grey-400">
                  {" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>RWP625P</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>550</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>500</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>6M33D633E200</strong>
                    </p>
                    <p>
                      <strong>6M33D633E310</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>633</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>3800×1600×2050</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>4200</strong>
                    </p>
                  </td>{" "}
                </tr>{" "}
                <tr className="border border-grey-400">
                  {" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>RWP687P</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>600</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>550</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>6M33D670E200</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>670</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>3800×1600×2050</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>4200</strong>
                    </p>
                  </td>{" "}
                </tr>{" "}
                <tr className="border border-grey-400">
                  {" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>RWP750P</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>660</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>600</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>12M26D748E200</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>748</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>4500×2100×2080</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>6850</strong>
                    </p>
                  </td>{" "}
                </tr>{" "}
                <tr className="border border-grey-400">
                  {" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>RWP800P</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>700</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>640</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>12M26D792E200</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>792</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>4500×2100×2080</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>6900</strong>
                    </p>
                  </td>{" "}
                </tr>{" "}
                <tr className="border border-grey-400">
                  {" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>RWP910P</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>800</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>728</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>12M26D902E200</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>902</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>4500×2100×2080</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>6960</strong>
                    </p>
                  </td>{" "}
                </tr>{" "}
                <tr className="border border-grey-400">
                  {" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>RWP1000P</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>880</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>800</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>12M26D968E200</strong>
                    </p>
                    <p>
                      <strong>12M26D968E310</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>968</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>4500×2100×2080</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>7000</strong>
                    </p>
                  </td>{" "}
                </tr>{" "}
                <tr className="border border-grey-400">
                  {" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>RWP1125P</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>1000</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>900</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>12M33D1108E200</strong>
                    </p>
                    <p>
                      <strong>12M33D1108E310</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>1108</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>4800×2150×2450</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>9200</strong>
                    </p>
                  </td>{" "}
                </tr>{" "}
                <tr className="border border-grey-400">
                  {" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>RWP1250P</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>1100</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>1000</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>12M33D1210E200</strong>
                    </p>
                    <p>
                      <strong>12M33D1240E310</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>1210</strong>
                    </p>
                    <p>
                      <strong>1240</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>4800×2150×2450</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>9500</strong>
                    </p>
                  </td>{" "}
                </tr>{" "}
                <tr className="border border-grey-400">
                  {" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>RWP1400P</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>1280</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>1120</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>16M33D1320E200</strong>
                    </p>
                    <p>
                      <strong>16M33D1320E310</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>1320</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>5300×2200×2500</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>11500</strong>
                    </p>
                  </td>{" "}
                </tr>{" "}
                <tr className="border border-grey-400">
                  {" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>RWP1550P</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>1360</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>1240</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>16M33D1530E310</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>1530</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>5300×2200×2500</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>11500</strong>
                    </p>
                  </td>{" "}
                </tr>{" "}
                <tr className="border border-grey-400">
                  {" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>RWP1650P</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>1400</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>1320</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>16M33D1580E310</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>1580</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>5300×2200×2500</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>11500</strong>
                    </p>
                  </td>{" "}
                </tr>{" "}
                <tr className="border border-grey-400">
                  {" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>RWP1900P</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>1650</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>1520</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>12M55D2020E310</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>2020</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>5300×2200×2500</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>13000</strong>
                    </p>
                  </td>{" "}
                </tr>{" "}
                <tr className="border border-grey-400">
                  {" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>RWP2000P</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>1800</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>1600</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>12M55D2210E310</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>2210</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>5300×2200×2500</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>13000</strong>
                    </p>
                  </td>{" "}
                </tr>{" "}
                <tr className="border border-grey-400">
                  {" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>RWP2250P</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>2000</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>1800</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>12M55D2450E310</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400"></td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>5300×2200×2500</strong>
                    </p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>
                      <strong>13000</strong>
                    </p>
                  </td>{" "}
                </tr>{" "}
              </tbody>{" "}
            </table>
          </div>
          <span>
            <i></i>
          </span>
        </div>
        <img src="/8.webp" className="mb-10 mt-10"></img>
        <img src="/9.webp" className="mb-10"></img>
      </div>
    ),
    descriptionImg: "",
    category: "DieselGenerator",
    brand: "Weichai Series",
  },
  {
    id: 4,
    mainImg: "/11.webp",
    name: "Газовый генератор Cummins",
    shortDescription:
      "Дизельный генератор Yuchai Дизельный двигатель Yuchai для морских применений оборудован цельнокованым стальным коленчатым валом, корпусом и головкой цилиндра из легированного чугунного сплава. Морской генератор отличается небольшими размерами, легким весом и высокой надежностью. Период между капитальными ремонтами составляет более 12,000 часов; он характеризуется низкими выбросами и отличными экологическими характеристиками.",
    qrCode:
      "https://www.cnroyalpower.com/phoenix/admin/prod/qrcode/redirect/oCKBDiGMZHwE",
    fullDescription: (
      <div>
        <span>
          {" "}
          Дизельный двигатель Yuchai для морских применений оборудован
          цельнокованым стальным коленчатым валом, корпусом и головкой цилиндра
          из легированного чугуна. Морской генератор отличается небольшими
          размерами, легким весом и высокой надежностью. Период между
          капитальными ремонтами превышает 12,000 часов; он характеризуется
          низкими выбросами и отличными экологическими характеристиками.
        </span>
        <span className="text-xl">
          Открытого типа Yuchai - частота 50 Гц, выбросы T2
        </span>
        <div>
          <div className=" flex overflow-scroll">
            <table className="border border-grey-400">
              <tbody>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>Вес</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>Prime &nbsp; Power</p>
                    <p>(KVA/KW)</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>Standby &nbsp; Power</p>
                    <p>(KVA/KW)</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>Engine</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>Deminsions</p>
                    <p>（MM)</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>Вес</p>
                    <p>(KG)</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>RYYC45Y5</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>45</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>36</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>50</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>40</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>YC4D60-D21</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>1810×780×1120</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>740</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>RYYC63Y5</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>63</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>50</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>69</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>55</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>YC4D85Z-D20</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>1900×750×1120</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>780</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>RYYC68Y5</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>68</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>55</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>75</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>60</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>YC4D90Z-D21</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>1900×750×1120</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>800</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>RYYC80Y5</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>80</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>64</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>88</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>70</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>YC4A100Z-D20</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>1950×770×1230</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>1040</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>RYYC102Y5</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>102</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>82</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>113</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>90</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>YC6B135Z-D20</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>2150×850×1250</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>1180</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>RYYC117Y5</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>117</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>94</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>129</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>103</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>YC6B155L-D21</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>2320×900×1280</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>1250</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>RYYC136Y5</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>136</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>109</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>150</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>120</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>YC6B180L-D20</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>2430×900×1280</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>1320</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>RYYC157Y5</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>157</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>125</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>173</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>138</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>YC6B205L-D20</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>2430×900×1280</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>1350</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>RYYC176Y5</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>176</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>141</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>194</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>155</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>YC6A230L-D20</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>2460×960×1400</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>1460</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>RYYC188Y5</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>188</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>150</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>206</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>165</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>YC6A245L-D21</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>2490×960×1400</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>1500</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>RYYC267Y5</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>267</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>214</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>294</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>235</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>YC6MK350L-D20</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>2970×1125×1630</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>2060</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>RYYC319Y5</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>319</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>255</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>351</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>281</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>YC6MK420L-D20</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>2970×1125×1630</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>2240</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>RYYC365Y5</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>365</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>292</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>401</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>321</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>YC6MJ480L-D20</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>3060×1125×1650</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>2350</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>RYYC418Y5</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>418</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>335</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>460</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>368</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>YC6T550L-D21</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>3450×1240×1868</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>3380</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>RYYC456Y5</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>456</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>365</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>501</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>401</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>YC6T600L-D22</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>3520×1240×1868</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>3490</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>RYYC501Y5</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>501</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>401</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>551</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>441</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>YC6T660L-D20</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>3520×1240×1868</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>3620</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>RYYC591Y5</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>591</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>473</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>650</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>520</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>YC6TD780L-D20</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>3550×1260×1820</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>4050</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>RYYC636Y5</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>636</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>509</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>700</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>560</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>YC6TD840L-D20</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>3550×1260×1820</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>4190</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>RYYC773Y5</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>773</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>618</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>850</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>680</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>YC6C1020L-D20</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>4000×1500×2100</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>7100</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>RYYC813Y5</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>813</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>650</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>894</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>715</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>YC6C1070L-D20</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>4000×1500×2100</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>7200</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <span>
            <i></i>
          </span>
        </div>
        <span>Открытого типа Yuchai - частота 50 Гц, выбросы T3</span>
        <div className="mb-10 mt-10">
          <div className=" flex overflow-scroll">
            <table className="border border-grey-400">
              <tbody>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>Вес</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>Prime &nbsp; Power</p>
                    <p>(KVA/KW)</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>Standby &nbsp; Power</p>
                    <p>(KVA/KW)</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>Engine</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>Deminsions</p>
                    <p>（MM)</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>Вес</p>
                    <p>(KG)</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>RYYC20Y5</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>20</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>16</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>23</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>18</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>4D24G6</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>1300×550×900</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>450</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>RYYC25Y5</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>25</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>20</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>28</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>22</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>4D24G7</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>1340×550×900</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>480</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>RYYC30Y5</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>30</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>24</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>33</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>26</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>4D24TG2</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>1400×550×930</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>530</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>RYYC40Y5</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>40</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>32</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>44</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>35</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>4D24TG0</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>1450×550×930</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>550</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>RYYC50Y5</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>50</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>40</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>55</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>44</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>YC4D75-D34</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>1800×750×1140</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>760</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>RYYC56Y5</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>56</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>45</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>63</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>50</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>YC4D80-D34</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>1890×750×1140</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>790</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>RYYC63Y5</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>63</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>50</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>70</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>55</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>YC4D90-D34</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>1890×750×1140</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>790</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>RYYC73Y5</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>73</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>58</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>80</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>64</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>YC4D105-D34</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>1890×750×1140</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>820</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>RYYC88Y5</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>88</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>70</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>100</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>80</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>YC4D120-D30</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>1890×750×1140</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>900</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>RYYC100Y5</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>100</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>80</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>113</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>90</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>YC4D140-D30</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>1890×750×1140</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>900</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>RYYC113Y5</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>113</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>90</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>125</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>100</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>YC4D155-D30</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>1890×750×1140</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>930</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>RYYC100Y5</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>100</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>80</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>113</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>90</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>YC4A140-D30</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>2020×780×1250</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>1000</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>RYYC113Y5</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>113</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>90</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>125</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>100</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>YC4A155-D30</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>2020×780×1250</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>1030</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>RYYC113Y5</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>113</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>90</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>125</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>100</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>YC4A165-D30</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>2020×780×1250</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>1030</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>RYYC138Y5</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>138</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>110</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>150</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>120</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>YC4A190-D30</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>2140×780×1250</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>1100</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>RYYC138Y5</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>138</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>110</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>150</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>120</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>YC6A190-D30</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>2440×960×1380</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>1360</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>RYYC150Y5</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>150</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>120</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>165</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>132</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>YC6A205-D30</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>2440×960×1380</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>1420</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>RYYC175Y5</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>175</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>140</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>188</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>150</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>YC6A230-D30</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>2500×960×1380</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>1460</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>RYYC188Y5</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>188</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>150</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>200</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>160</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>YC6A245-D30</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>2530×960×1380</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>1500</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>RYYC200Y5</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>200</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>160</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>225</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>180</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>YC6A275-D30</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>2530×960×1380</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>1500</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>RYYC250Y5</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>250</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>200</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>275</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>220</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>YC6MK350-D30</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>2900×1130×1580</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>1960</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>RYYC313Y5</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>313</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>250</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>350</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>280</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>YC6MK420-D30</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>3000×1130×1580</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>2260</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>RYYC350Y5</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>350</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>280</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>375</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>300</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>YC6MK450-D30</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>3000×1130×1580</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>2260</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>RYYC375Y5</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>375</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>300</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>413</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>330</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>YC6K500-D31</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>3200×1200×1800</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>3100</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>RYYC375Y5</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>375</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>300</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>413</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>330</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>YC6K500-D30</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>3200×1200×1800</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>3100</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>RYYC400Y5</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>400</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>320</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>438</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>350</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>YC6K520-D30</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>3400×1200×1800</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>3200</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>RYYC438Y5</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>438</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>350</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>480</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>385</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>YC6K570-D30</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>3600×1200×1800</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>3400</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <span>
            <i></i>
          </span>
        </div>
        <span>Yuchai open type -60Hz T3 Emission</span>
        <div className="">
          <div className=" flex overflow-scroll">
            <table className="border border-grey-400 mb-10">
              <tbody>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>Вес</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>Prime &nbsp; Power</p>
                    <p>(KVA/KW)</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>Standby &nbsp; Power</p>
                    <p>(KVA/KW)</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>Engine</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>Deminsions</p>
                    <p>（MM)</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>Вес</p>
                    <p>(KG)</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>RYYC25Y6</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>25</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>20</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>28</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>22</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>4D24G3</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>1340×550×900</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>450</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>RYYC25Y6-A</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>25</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>20</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>28</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>22</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>4D24G3/A</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>1340×550×900</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>450</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>RYYC31Y6</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>31</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>25</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>34</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>27</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>4D24G1</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>1360×550×900</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>460</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>RYYC31Y6-A</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>31</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>25</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>34</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>27</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>4D24G1/A</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>1360×550×900</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>460</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>RYYC41Y6</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>41</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>33</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>45</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>36</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>4D24TG3</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>1420×550×950</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>530</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>RYYC41Y6A</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>41</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>33</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>45</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>36</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>4D24TG3/A</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>1420×550×950</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>530</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>RYYC45Y6</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>45</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>36</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>50</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>40</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>4D24TG4/N</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>1450×550×950</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>540</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>RYYC68Y6</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>68</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>55</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>75</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>60</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>YC4D90-D36</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>1890×750×1120</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>790</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>RYYC80Y6</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>80</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>64</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>88</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>70</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>YC4D105-D36</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>1890×750×1120</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>820</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>RYYC88Y6</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>88</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>70</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>97</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>77</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>YC4D115-D36</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>1890×750×1120</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>820</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>RYYC108Y6</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>108</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>86</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>119</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>95</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>YC4D140-D32</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>1890×750×1160</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>900</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>RYYC117Y6</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>117</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>94</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>128</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>103</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>YC4D155-D32</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>1890×750×1160</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>900</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>RYYC136Y6</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>136</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>109</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>150</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>120</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>YC4D180-D32</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>1890×750×1160</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>930</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>RYYC157Y6</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>157</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>125</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>173</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>138</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>YC4A205-D32</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>2140×780×1250</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>1150</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>RYYC188Y6</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>188</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>150</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>206</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>165</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>YC6A245-D32</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>2440×960×1380</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>1420</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>RYYC231Y6</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>231</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>185</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>253</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>203</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>YC6A305-D32</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>2500×960×1380</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>1470</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>RYYC273Y6</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>273</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>218</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>300</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>240</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>YC6MK360-D30</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>2900×1130×1580</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>1960</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>RYYC319Y6</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>319</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>255</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>351</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>281</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>YC6MK420-D31</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>3000×1130×1580</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>2080</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>RYYC381Y6</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>381</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>305</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>419</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>335</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>YC6MK500-D32</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>3000×1130×1580</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>2170</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    ),
    descriptionImg: "",
    category: "DieselGenerator",
    brand: "Yuchai Series",
  },
  {
    id: 5,
    mainImg: "/12.webp",
    name: "Газовый генератор Cummins",
    shortDescription:
      "Газовый генератор Cummins Генераторные установки являются сердцем любой системы электропитания на месте. Газовые генераторы с искровым зажиганием (стехиометрические и с низким уровнем сгорания) на природном газе от компании Cummins доступны в диапазоне мощностей от 55 кВт до 2000 кВт. Они подходят для применения в тех случаях, когда хранение топлива на месте ограничено, имеется постоянный доступ к природному газу, и/или существуют местные экологические соображения, которые делают предпочтительными газопотребляющие устройства.",
    qrCode:
      "https://www.cnroyalpower.com/phoenix/admin/prod/qrcode/redirect/oCKBDiGMZHwE",
    fullDescription: (
      <div>
        <span>
          Генераторные установки являются сердцем любой системы электроснабжения
          на месте. Газовые генераторы с искровым зажиганием (стехиометрические
          и с низким уровнем выбросов) на природном газе от компании Cummins
          доступны в диапазоне мощности от 55 кВт до 2000 кВт. Они подходят для
          использования в случаях, когда хранение топлива на месте ограничено,
          имеется постоянный доступ к природному газу, и/или существуют местные
          экологические требования, которые делают предпочтительным
          использование газового оборудования.
        </span>
        <img src="/12.webp"></img>
        <p>
          Газовые генераторные установки Cummins оснащены двигателями на
          природном газе или с двумя видами топлива, альтернаторами и системами
          управления PowerCommand™. Наши генераторные установки являются
          результатом интегрированного проектирования и производства,
          нацеленного на соответствие вашим требованиям по надежности, качеству
          электроэнергии, номинальной производительности и эффективности работы.
        </p>
        <p>
          Генераторные установки Cummins с искровым зажиганием предназначены как
          для резервного, так и для основного использования на рынках с частотой
          50 и 60 Гц. Мы также предлагаем полный ассортимент аксессуаров, чтобы
          адаптировать наши продукты в соответствии с вашими точными
          требованиями.
        </p>
        <p className="text-xl mt-10">ЛЮБОЙ ПОТРЕБНОСТИ</p>
        <img src="/13.JPG" className="mb-10"></img>
        <p>
          Наши продукты для энергетических систем включают в себя генераторные
          установки на дизельном и газовом топливе мощностью от 15 до 3750 кВА,
          альтернаторы, дизельные двигатели мощностью от 49 до 5500 л.с.,
          двигатели для привода генераторов, системы хранения энергии в батареях
          и интегрированные энергосистемы, которые объединяют генераторные
          установки, системы параллельного управления и технологии
          распределительных устройств, все это соединено с нашими передовыми
          цифровыми решениями для полного управления энергосистемой.
        </p>
        <p>
          Все аспекты проектирования, производства и обслуживания генераторных
          установок объединены в одной компании. Все основные компоненты -
          двигатель, альтернатор, системы управления и контейнеры - производятся
          и изготавливаются компанией Cummins. Такой интегрированный подход
          означает, что каждый элемент генераторной установки изначально
          согласован для работы в гармонии.
        </p>
        <p>
          Независимо от архитектуры энергосистемы, необходимой для
          удовлетворения ваших рыночных или эксплуатационных потребностей,
          Cummins предлагает превосходное сочетание экспертных знаний в области
          проектирования решений, интегрированного оборудования и программного
          обеспечения для связи, а также постоянные услуги по эксплуатации и
          обслуживанию генераторов, чтобы помочь вам поддерживать устойчивую
          работу на вашем объекте.
        </p>
        <p>
          <p>Генераторы по типу топлива</p>
          <p>-Дизельные генераторы</p>
          <p>-Генераторы на природном газе</p>
          <p>-Газовые генераторы</p>
          <p>-Пропановые генераторы</p>
        </p>
        <p>
          <p>Решения для генераторов по отраслям</p>
          <p>-Генераторы для жилых автофургонов(RV)</p>
          <p>-Судовые генераторные установки</p>
          <p>-Генераторы для здравоохранения</p>
          <p>-Резервное питание для центров обработки данных</p>
        </p>
        <p className="mt-10">ГЛОБАЛЬНОЕ ПОКРЫТИЕ. ЛОКАЛЬНАЯ ПОДДЕРЖКА.</p>
        <img src="/14.jpg"></img>
        <p>
          <p>
            Знания экспертов Cummins проявляются не только в превосходном
            дизайне продукции, но и в их сотрудничестве на всех этапах
            реализации, а также в постоянном обслуживании и поддержке клиентов.
          </p>
          <p className="mb-10">
            С 500 собственными и независимыми дистрибьюторскими центрами, более
            чем 9000 дилерскими точками в 190 странах и на 6 континентах, мы
            предлагаем глобальные возможности и местную поддержку, где и когда
            бы вы ни нуждались в нас.
          </p>
        </p>
      </div>
    ),
    descriptionImg: "",
    category: "GasGenerator",
    brand: "Cummins Series",
  },
  {
    id: 6,
    mainImg: "/15.webp",
    name: "Газовый генератор Weichai Baudouin",
    shortDescription:
      "Газовый генератор Weichai Baudouin Газовые двигатели Weichai включают модели WP4.1NG, WP5NG, WP7NG, WP10NG, WP12NG, WP13NG (производственные мощности от 74 кВт до 480 кВт), которые соответствуют требованиям пятого и шестого экологических стандартов Китая. Они широко применяются во многих отраслях, таких как автобусы длиной от 6 до 18 метров, различные грузовики, строительная техника, специальные транспортные средства, судовые силовые установки и другие индустрии, отличаясь высокой надежностью, мощностью, энергосбережением и экологичностью.",
    qrCode:
      "https://www.cnroyalpower.com/phoenix/admin/prod/qrcode/redirect/oCKBDiGMZHwE",
    fullDescription: (
      <div>
        <ul>
          Параметры продукта:
          <li>- Продукты M33/M55</li>
          <li>- Диапазон мощности: 1650 кВА ~ 2500 кВА</li>
          <li>- Номинальная скорость: 1500 об/мин</li>
          <li>- Регулятор скорости: ECU</li>
          <li>- Количество цилиндров: 12/16</li>
          <li>- Рабочий объем: 52,3/65,65 л</li>
          <li>
            - Метод охлаждения: Закрытое охлаждение вентилятором-радиатором
          </li>
          <li>- Расход топлива: 195 г/кВт.ч</li>
        </ul>
        <ul className="mt-10">
          Характеристики продукта:
          <li>- Французский бренд, военное качество</li>
          <li>
            - Высокопроизводительные дизельные генераторные установки,
            лидирующие в отрасли
          </li>
          <li>
            - Собственная разработка ключевой технологии ECU, гарантирующая
            безопасность информации
          </li>
          <li>
            - Высокая надежность, сверхдлительный межремонтный период в 32000
            часов, превосходные пусковые характеристики
          </li>
          <li>
            - Профессиональные возможности применения и интеграции для
            генераторных установок, удовлетворяющие потребности высококлассных
            пользователей, таких как центры обработки данных - Различные
            сертификаты на продукцию для внутреннего рынка
          </li>
          <li>
            - Благодаря использованию технологии электронного управления выбросы
            соответствуют национальному стандарту выбросов III
          </li>
        </ul>
        <img src="/16.webp" className="w-full"></img>
        <img src="/17.webp" className="w-full"></img>
        <img src="/18.webp" className="w-full mb-5"></img>
        <div className="mb-10">
          <div>
            <table className="border border-grey-400 w-full flex overflow-scroll">
              {" "}
              <tbody>
                {" "}
                <tr className="border border-grey-400">
                  {" "}
                  <td className="border border-grey-400">
                    <strong>Модель генераторной установки </strong>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <strong>Номинальная мощность(кВт)</strong>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <strong>Резервная мощность (кВА)</strong>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <strong>Двигатель E</strong>
                  </td>{" "}
                </tr>{" "}
                <tr className="border border-grey-400">
                  {" "}
                  <td className="border border-grey-400">
                    <strong>Модель двигателя </strong>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <strong>Номинальная мощность </strong>
                    <strong>(кВт)）</strong>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <strong>Резервная мощность </strong>
                    <strong>(кВт)</strong>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <strong>Количество цилиндров</strong>
                  </td>{" "}
                </tr>{" "}
                <tr className="border border-grey-400">
                  {" "}
                  <td className="border border-grey-400">WPG1650B73</td>{" "}
                  <td className="border border-grey-400">1200</td>{" "}
                  <td className="border border-grey-400">1650</td>{" "}
                  <td className="border border-grey-400">16M33D1530E310</td>{" "}
                  <td className="border border-grey-400">1390</td>{" "}
                  <td className="border border-grey-400">1530</td>{" "}
                  <td className="border border-grey-400">16</td>{" "}
                </tr>{" "}
                <tr className="border border-grey-400">
                  {" "}
                  <td className="border border-grey-400">WPG1650B53</td>{" "}
                  <td className="border border-grey-400">1200</td>{" "}
                  <td className="border border-grey-400">1650</td>{" "}
                  <td className="border border-grey-400">12WH17D1528-5</td>{" "}
                  <td className="border border-grey-400">1390</td>{" "}
                  <td className="border border-grey-400">1528</td>{" "}
                  <td className="border border-grey-400">12</td>{" "}
                </tr>{" "}
                <tr className="border border-grey-400">
                  {" "}
                  <td className="border border-grey-400">WPG1700B53</td>{" "}
                  <td className="border border-grey-400">/</td>{" "}
                  <td className="border border-grey-400">1650</td>{" "}
                  <td className="border border-grey-400">12WH17D1528-5</td>{" "}
                  <td className="border border-grey-400">1390</td>{" "}
                  <td className="border border-grey-400">1528</td>{" "}
                  <td className="border border-grey-400">12</td>{" "}
                </tr>{" "}
                <tr className="border border-grey-400">
                  {" "}
                  <td className="border border-grey-400">WPG1815B73</td>{" "}
                  <td className="border border-grey-400">1320</td>{" "}
                  <td className="border border-grey-400">1815</td>{" "}
                  <td className="border border-grey-400">16M33D1580E310</td>{" "}
                  <td className="border border-grey-400">1436</td>{" "}
                  <td className="border border-grey-400">1580</td>{" "}
                  <td className="border border-grey-400">16</td>{" "}
                </tr>{" "}
                <tr className="border border-grey-400">
                  {" "}
                  <td className="border border-grey-400">WPG1925B73</td>{" "}
                  <td className="border border-grey-400">1400</td>{" "}
                  <td className="border border-grey-400">1925</td>{" "}
                  <td className="border border-grey-400">16M33D1680E310</td>{" "}
                  <td className="border border-grey-400">1527</td>{" "}
                  <td className="border border-grey-400">1680</td>{" "}
                  <td className="border border-grey-400">16</td>{" "}
                </tr>{" "}
                <tr className="border border-grey-400">
                  {" "}
                  <td className="border border-grey-400">WPG2000B73</td>{" "}
                  <td className="border border-grey-400">/</td>{" "}
                  <td className="border border-grey-400">2000</td>{" "}
                  <td className="border border-grey-400">16M33D1680E310</td>{" "}
                  <td className="border border-grey-400">1527</td>{" "}
                  <td className="border border-grey-400">1680</td>{" "}
                  <td className="border border-grey-400">16</td>{" "}
                </tr>{" "}
                <tr className="border border-grey-400">
                  {" "}
                  <td className="border border-grey-400">WPG2062B73</td>{" "}
                  <td className="border border-grey-400">1500</td>{" "}
                  <td className="border border-grey-400">2062</td>{" "}
                  <td className="border border-grey-400">16M33D1800E310</td>{" "}
                  <td className="border border-grey-400">1630</td>{" "}
                  <td className="border border-grey-400">1800</td>{" "}
                  <td className="border border-grey-400">16</td>{" "}
                </tr>{" "}
                <tr className="border border-grey-400">
                  {" "}
                  <td className="border border-grey-400">WPG2100B73</td>{" "}
                  <td className="border border-grey-400">/</td>{" "}
                  <td className="border border-grey-400">2100</td>{" "}
                  <td className="border border-grey-400">16M33D1800E310</td>{" "}
                  <td className="border border-grey-400">1630</td>{" "}
                  <td className="border border-grey-400">1800</td>{" "}
                  <td className="border border-grey-400">16</td>{" "}
                </tr>{" "}
                <tr className="border border-grey-400">
                  {" "}
                  <td className="border border-grey-400">WPG2200B73</td>{" "}
                  <td className="border border-grey-400">1600</td>{" "}
                  <td className="border border-grey-400">2200</td>{" "}
                  <td className="border border-grey-400">12M55D2000E310</td>{" "}
                  <td className="border border-grey-400">1830</td>{" "}
                  <td className="border border-grey-400">2000</td>{" "}
                  <td className="border border-grey-400">12</td>{" "}
                </tr>{" "}
                <tr className="border border-grey-400">
                  {" "}
                  <td className="border border-grey-400">WPG2475B73</td>{" "}
                  <td className="border border-grey-400">1800</td>{" "}
                  <td className="border border-grey-400">2475</td>{" "}
                  <td className="border border-grey-400">12M55D2200E310</td>{" "}
                  <td className="border border-grey-400">2000</td>{" "}
                  <td className="border border-grey-400">2200</td>{" "}
                  <td className="border border-grey-400">12</td>{" "}
                </tr>{" "}
                <tr className="border border-grey-400">
                  {" "}
                  <td className="border border-grey-400">WPG2500B73</td>{" "}
                  <td className="border border-grey-400">/</td>{" "}
                  <td className="border border-grey-400">2500</td>{" "}
                  <td className="border border-grey-400">12M55D2200E310</td>{" "}
                  <td className="border border-grey-400">2000</td>{" "}
                  <td className="border border-grey-400">2200</td>{" "}
                  <td className="border border-grey-400">12</td>{" "}
                </tr>{" "}
                <tr className="border border-grey-400">
                  {" "}
                  <td className="border border-grey-400">WPG2750B73</td>{" "}
                  <td className="border border-grey-400">2000</td>{" "}
                  <td className="border border-grey-400">2750</td>{" "}
                  <td className="border border-grey-400">12M55D2400E310</td>{" "}
                  <td className="border border-grey-400">2200</td>{" "}
                  <td className="border border-grey-400">2400</td>{" "}
                  <td className="border border-grey-400">12</td>{" "}
                </tr>{" "}
                <tr className="border border-grey-400">
                  {" "}
                  <td className="border border-grey-400">WPG2800B73</td>{" "}
                  <td className="border border-grey-400">/</td>{" "}
                  <td className="border border-grey-400">2800</td>{" "}
                  <td className="border border-grey-400">12M55D2400E310</td>{" "}
                  <td className="border border-grey-400">2200</td>{" "}
                  <td className="border border-grey-400">2400</td>{" "}
                  <td className="border border-grey-400">12</td>{" "}
                </tr>{" "}
              </tbody>{" "}
            </table>
          </div>
        </div>
        <p>
          Примечание: Параметры и изображения продукта предназначены только для
          справки; изменения возможны без предварительного уведомления.
        </p>
        <ul>
          Параметры продукта:
          <li>- Продукты M33/M55</li>
          <li>- Диапазон мощности: 1650 кВА ~ 2500 кВА</li>
          <li>- Номинальная скорость: 1500 об/мин</li>
          <li>- Регулятор скорости: ECU</li>
          <li>- Количество цилиндров: 12/16</li>
          <li>- Рабочий объем: 52,3/65,65 л</li>
          <li>
            - Метод охлаждения: Закрытое охлаждение вентилятором-радиатором
          </li>
          <li>- Расход топлива: 195 г/кВт.ч</li>
        </ul>
        <ul className="mt-10 mb-10">
          Характеристики продукта:
          <li>- Французский бренд, военное качество</li>
          <li>
            - Высокопроизводительные дизельные генераторные установки,
            лидирующие в отрасли
          </li>
          <li>
            - Собственная разработка ключевой технологии ECU, гарантирующая
            безопасность информации
          </li>
          <li>
            - Высокая надежность, сверхдлительный межремонтный период в 32000
            часов, превосходные пусковые характеристики
          </li>
          <li>
            - Профессиональные возможности применения и интеграции для
            генераторных установок, удовлетворяющие потребности высококлассных
            пользователей, таких как центры обработки данных - Различные
            сертификаты на продукцию для внутреннего рынка
          </li>
          <li>
            - Благодаря использованию технологии электронного управления выбросы
            соответствуют национальному стандарту выбросов III
          </li>
        </ul>
      </div>
    ),
    descriptionImg: "",
    category: "GasGenerator",
    brand: "Weichai Series",
  },
  {
    id: 7,
    mainImg: "/20.webp",
    name: "Морской генератор Cummins",
    shortDescription:
      "Морской генератор Cummin Генераторные установки для морских судов с двигателями совместного производства Cummins - Мощные, надежные и высококачественные силовые установки- Полностью испытаны под нагрузкой и проверены в соответствии со стандартными процедурами - Возможности для дополнительной настройки в соответствии с конкретными потребностями в электроэнергии",
    qrCode:
      "https://www.cnroyalpower.com/phoenix/admin/prod/qrcode/redirect/oCKBDiGMZHwE",
    fullDescription: (
      <div>
        <p>
          Наша линейка морских генераторных установок включает генераторы
          Cummins Onan и C Power для обслуживания судов и аварийного
          электропитания, а также для дизель-электрического привода.
        </p>
        <p>
          С более чем 80-летним опытом в морской отрасли, полученным благодаря
          поставкам генераторов для коммерческих, развлекательных и
          государственных морских приложений по всему миру, морские генераторы
          Cummins предлагают такую же надежность и долговечность, которую
          операторы привыкли ожидать от Cummins.
        </p>
        <p>
          Каждый основной компонент наших морских генераторных установок,
          включая двигатель, альтернатор и систему управления, либо
          спроектирован и изготовлен, либо интегрирован подразделениями
          семейства Cummins. Это означает, что все элементы генераторной
          установки разработаны для работы в полной системной гармонии,
          обеспечивая оптимальную производительность и максимальную
          эффективность. И самое лучшее — это знать, что ваш генератор
          поддерживается полной мощью Cummins — поддержкой и обслуживанием от
          крупнейшей в мире сети дистрибьюторов/дилеров в отрасли и обширной
          глобальной гарантией.
        </p>
        <img src="/21.webp"></img>
        <img src="/22.webp" className="mb-10"></img>
        <ul className="border border-grey-400 flex flex-col mb-10">
          <li className="border border-grey-400">Royal Power/Cummins Series</li>
          <li className="border border-grey-400">
            50 Гц cosØ=0.8 (запаздывание) 3-фазное и 4-проводное соединение типа
            “Y”
          </li>
        </ul>
        <div className="flex overflow-scroll">
          <div>
            <table className="border border-grey-400">
              {" "}
              <tbody>
                {" "}
                <tr className="border border-grey-400">
                  {" "}
                  <td className="border border-grey-400">
                    <p>Спецификация генератора</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>Спецификация двигателя</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>Габариты</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>Вес</p>
                  </td>{" "}
                </tr>{" "}
                <tr className="border border-grey-400">
                  {" "}
                  <td className="border border-grey-400">
                    <p>Модель</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>Номинальная мощность</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p> Частота/напряжение</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>Модель двигателя</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>Мощность/скорость</p>
                  </td>{" "}
                </tr>{" "}
                <tr className="border border-grey-400">
                  {" "}
                  <td className="border border-grey-400">
                    <p>kW/RPM</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>L×W×H(mm)</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>(kg)</p>
                  </td>{" "}
                </tr>{" "}
                <tr className="border border-grey-400">
                  {" "}
                  <td className="border border-grey-400">
                    <p>kW</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>kVA</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>Hz/ V</p>
                  </td>{" "}
                </tr>{" "}
                <tr className="border border-grey-400">
                  {" "}
                  <td className="border border-grey-400">
                    <p>CCFJ40Y-WTP</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>40</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>50</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>50/400</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>4BTA3.9-GM47</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>47/1500</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>1810*760*1280</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>1000</p>
                  </td>{" "}
                </tr>{" "}
                <tr className="border border-grey-400">
                  {" "}
                  <td className="border border-grey-400">
                    <p>CCFJ64Y-WTP</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>64</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>80</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>50/400</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>6BT5.9-GM83</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>83/1500</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>2090*800*1280</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>1100</p>
                  </td>{" "}
                </tr>{" "}
                <tr className="border border-grey-400">
                  {" "}
                  <td className="border border-grey-400">
                    <p>CCFJ75Y-WTP</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>75</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>93.8</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>50/400</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>6BTAA5.9-GM115</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>115/1500</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>2200*800*1300</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>1450</p>
                  </td>{" "}
                </tr>{" "}
                <tr className="border border-grey-400">
                  {" "}
                  <td className="border border-grey-400">
                    <p>CCFJ100Y-WTP</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>100</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>125</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>50/400</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>6BTAA5.9-GM115</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>115/1500</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>2200*800*1300</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>1550</p>
                  </td>{" "}
                </tr>{" "}
                <tr className="border border-grey-400">
                  {" "}
                  <td className="border border-grey-400">
                    <p>CCFJ120Y-WTP</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>120</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>150</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>50/400</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>6CTA8.3-GM155</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>155/1500</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>2480*850*1300</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>1780</p>
                  </td>{" "}
                </tr>{" "}
                <tr className="border border-grey-400">
                  {" "}
                  <td className="border border-grey-400">
                    <p>CCFJ150Y-WTP</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>150</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>187.5</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>50/400</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>6LTAA8.9-GM</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>200/1500</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>2600*950*1350</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>1960</p>
                  </td>{" "}
                </tr>{" "}
                <tr className="border border-grey-400">
                  {" "}
                  <td className="border border-grey-400">
                    <p>CCFJ200Y-WTP</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>200</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>250</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>50/400</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>NTA855-DM</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>240/1500</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>2950*1100*1750</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>2750</p>
                  </td>{" "}
                </tr>{" "}
                <tr className="border border-grey-400">
                  {" "}
                  <td className="border border-grey-400">
                    <p>CCFJ250Y-WTP</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>250</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>312.5</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>50/400</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>NTA855-DM</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>284/1500</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>3020*1100*1750</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>2850</p>
                  </td>{" "}
                </tr>{" "}
                <tr className="border border-grey-400">
                  {" "}
                  <td className="border border-grey-400">
                    <p>CCFJ300Y-WTP</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>300</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>375</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>50/400</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>K19-DM</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>358/1500</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>3550*1300*2350</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>3100</p>
                  </td>{" "}
                </tr>{" "}
                <tr className="border border-grey-400">
                  {" "}
                  <td className="border border-grey-400">
                    <p>CCFJ350Y-WTP</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>350</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>437.5</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>50/400</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>K19-DM</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>410/1500</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>3550*1300*2350</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>3600</p>
                  </td>{" "}
                </tr>{" "}
                <tr className="border border-grey-400">
                  {" "}
                  <td className="border border-grey-400">
                    <p>CCFJ400Y-WTP</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>400</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>500</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>50/400</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>K19-DM</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>448/1500</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>3550*1300*2350</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>3800</p>
                  </td>{" "}
                </tr>{" "}
              </tbody>{" "}
            </table>
          </div>
        </div>
        <ul className="border border-grey-400 mt-5 mb-5">
          <li className="border border-grey-400">Серия Royal Power/Cummins</li>
          <li className="border border-grey-400">
            60 Гц cosØ=0.8 (запаздывание) 3-фазное и 4-проводное соединение типа
            “Y”
          </li>
        </ul>
        <div className="flex overflow-scroll mb-5">
          <div>
            <table className="border border-grey-400">
              {" "}
              <tbody>
                {" "}
                <tr className="border border-grey-400">
                  {" "}
                  <td className="border border-grey-400">
                    <p>Generator spec.</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>Engine Spec.</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>Dimensions</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>Weight</p>
                  </td>{" "}
                </tr>{" "}
                <tr className="border border-grey-400">
                  {" "}
                  <td className="border border-grey-400">
                    <p>Model</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>Rated power</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>Frenquency/voltage</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>Engine model</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>Power/Speed</p>
                  </td>{" "}
                </tr>{" "}
                <tr className="border border-grey-400">
                  {" "}
                  <td className="border border-grey-400">
                    <p>kW/RPM</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>L×W×H(mm)</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>(kg)</p>
                  </td>{" "}
                </tr>{" "}
                <tr className="border border-grey-400">
                  {" "}
                  <td className="border border-grey-400">
                    <p>kW</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>kVA</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>Hz/ V</p>
                  </td>{" "}
                </tr>{" "}
                <tr className="border border-grey-400">
                  {" "}
                  <td className="border border-grey-400">
                    <p>CCFJ40Y-WTP</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>40</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>50</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>60/440</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>4BTA3.9-GM65</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>65/1800</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>1810*760*1280</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>1000</p>
                  </td>{" "}
                </tr>{" "}
                <tr className="border border-grey-400">
                  {" "}
                  <td className="border border-grey-400">
                    <p>CCFJ50Y-WTP</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>50</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>62.5</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>60/440</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>4BTA3.9-GM65</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>65/1800</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>1810*760*1280</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>1100</p>
                  </td>{" "}
                </tr>{" "}
                <tr className="border border-grey-400">
                  {" "}
                  <td className="border border-grey-400">
                    <p>CCFJ64Y-WTP</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>64</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>80</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>60/440</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>6BT5.9-GM100</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>100/1800</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>2020*800*1300</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>1400</p>
                  </td>{" "}
                </tr>{" "}
                <tr className="border border-grey-400">
                  {" "}
                  <td className="border border-grey-400">
                    <p>CCFJ75Y-WTP</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>75</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>93.8</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>60/440</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>6BT5.9-GM100</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>100/1800</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>2320*800*1300</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>1450</p>
                  </td>{" "}
                </tr>{" "}
                <tr className="border border-grey-400">
                  {" "}
                  <td className="border border-grey-400">
                    <p>CCFJ90Y-WTP</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>90</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>112.5</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>60/440</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>6BTA5.9-GM120</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>120/1800</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>2380*800*1300</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>1500</p>
                  </td>{" "}
                </tr>{" "}
                <tr className="border border-grey-400">
                  {" "}
                  <td className="border border-grey-400">
                    <p>CCFJ100Y-WTP</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>100</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>125</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>60/440</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>6BTA5.9-GM120</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>120/1800</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>2420*800*1300</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>1550</p>
                  </td>{" "}
                </tr>{" "}
                <tr className="border border-grey-400">
                  {" "}
                  <td className="border border-grey-400">
                    <p>CCFJ120Y-WTP</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>120</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>150</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>60/440</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>6CTA8.3-GM175</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>175/1800</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>2480*850*1300</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>1780</p>
                  </td>{" "}
                </tr>{" "}
                <tr className="border border-grey-400">
                  {" "}
                  <td className="border border-grey-400">
                    <p>CCFJ150Y-WTP</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>150</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>187.5</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>60/440</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>6CTA8.3-GM175</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>175/1800</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>2480*850*1300</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>1830</p>
                  </td>{" "}
                </tr>{" "}
                <tr className="border border-grey-400">
                  {" "}
                  <td className="border border-grey-400">
                    <p>CCFJ200Y-WTP</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>200</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>250</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>60/440</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>NTA855-DM</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>287/1800</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>2950*1100*1750</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>2350</p>
                  </td>{" "}
                </tr>{" "}
                <tr className="border border-grey-400">
                  {" "}
                  <td className="border border-grey-400">
                    <p>CCFJ250Y-WTP</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>250</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>312.5</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>60/440</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>NTA855-DM</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>287/1800</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>3020*1100*1750</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>2500</p>
                  </td>{" "}
                </tr>{" "}
              </tbody>{" "}
            </table>
          </div>
          <span>
            <i></i>
          </span>
        </div>
      </div>
    ),
    descriptionImg: "",
    category: "MarineGenerator",
    brand: "Cummins Series",
  },
  {
    id: 8,
    mainImg: "/23.webp",
    name: "Морской генератор Weichai",
    shortDescription: "Weichai Marine Generator ",
    qrCode:
      "https://www.cnroyalpower.com/phoenix/admin/prod/qrcode/redirect/oCKBDiGMZHwE",
    fullDescription: (
      <div>
        <p className="text-xl mb-5">Атрибуты продукта:</p>
        <ul>
          <li>- Бренд: Weichai</li>
          <li>- Гарантийный срок: 3 месяца - 1 год</li>
          <li>- Страна происхождения: Китай</li>
          <li>- Частота: 50 Гц/60 Гц</li>
          <li>- Напряжение: 230/400 В (может быть отрегулировано)</li>
          <li>- Режим возбуждения: Аксиальный вращающийся возбудитель</li>
          <li>- Сертификаты инспекции судна: CCS, BV, ABS или по требованию</li>
          <li>
            - Бренд альтернатора: Stamford, Marathon, Faraday, Evotec и др.
          </li>
          <li>
            - Система охлаждения: охлаждение путем теплообмена с морской водой
          </li>
          <li>- Фаза и провод: 3p3w</li>
          <li>- Тип альтернатора: безщеточный, с самовозбуждением, AVR</li>
          <li>- Класс защиты: IP23</li>
          <li>- Класс изоляции: H</li>
        </ul>
        <p className="text-xl mb-5">
          Способность поставки и дополнительная информация:
        </p>
        <ul>
          <li>- Упаковка: стандартная морская упаковка</li>
          <li>- Производительность: 100 комплектов в месяц</li>
          <li>- Транспортировка: морем</li>
          <li>- Страна происхождения: Китай</li>
          <li>- Возможность поставки: 100 комплектов в месяц</li>
          <li>- Сертификат: ISO</li>
          <li>- Код ТН ВЭД: 8502120000</li>
          <li>- Способы оплаты: L/C, T/T</li>
          <li>- Инкотермы: FOB, CIF, EXW</li>
        </ul>
        <p className="text-xl mb-5">Упаковка и доставка:</p>
        <ul>
          <li>- Единицы продажи: Комплект/Комплекты</li>
          <li>- Тип упаковки: стандартная морская упаковка</li>
        </ul>
        <p className="text-xl mb-5">Описание:</p>
        <span>
          Weichai является первым предприятием в Китае, которое стало
          разрабатывать и производить генераторные установки, и обладает более
          чем 60-летней историей производства. Мощностной диапазон морских
          генераторных установок Weichai составляет 10-1500 кВт. Установки
          используют двигатели, самостоятельно разработанные и произведенные
          группой Weichai, в комплекте с генераторами и контроллерами известных
          брендов.
        </span>
        <p className="text-xl mb-5">Основные характеристики:</p>
        <ul className="mb-10">
          <li>
            1. Оригинальный двигатель Weichai наследует французское военное
            качество, долговечен и требует долгого времени до капитального
            ремонта.
          </li>
          <li>
            2. Надежная работа, непрерывная работа с номинальной мощностью
            каждые 12 часов, допускается превышение номинальной мощности до 110%
            в течение 1 часа.
          </li>
          <li>
            3. Компактная структура, красивый внешний вид, малое занимаемое
            пространство, что способствует расположению в машинном отсеке.
          </li>
          <li>
            4. Отличные показатели производительности, низкий расход топлива и
            высокая адаптивность к окружающей среде.
          </li>
          <li>
            5. Общая рама изготовлена из высококачественных стальных пластин
            толщиной 8-10 мм, с высокой прочностью и низкой вибрацией.
          </li>
          <li>
            6. Использование композитного хромированного амортизатора
            обеспечивает низкие вибрации и шум генераторной установки.
          </li>
          <li>
            7. Применение корабельного плоского масляного картера с цельным
            штампованным дизайном, с рациональным расположением ребер жесткости
            для повышения жесткости, без сварных швов на поверхности и
            одноразовое формирование для предотвращения утечек и повышения
            надежности.
          </li>
          <li>
            8. Все вращающиеся части генераторной установки оборудованы
            защитными кожухами, что обеспечивает безопасность и надежность
            эксплуатации.
          </li>
          <li>
            9. Судовая панель приборов оснащена интеллектуальными модулями, а
            интерфейс взаимодействия человек-компьютер прост и дружелюбен.
          </li>
          <li>
            10. Важные части и компоненты панели приборов импортированы или
            являются совместными брендами с надежной производительностью.
          </li>
          <li>
            11. Генераторная установка может настраивать панель приборов с
            автоматическими функциями в соответствии с потребностями клиента.
          </li>
          <li>
            12. Выбросы генераторной установки могут соответствовать требованиям
            IMO Фазы II.
          </li>
          <li>
            13. Сеть обслуживания охватывает весь мир, более 40 внутренних
            офисов, 4000 вертикальных сервисных центров с средним интервалом
            сервиса в 50 километров, и более 10 зарубежных офисов.
          </li>
        </ul>
        <p>Морской тип Weichai 50 Гц/1500 об/мин</p>
        <div className="mb-10 flex overflow-scroll">
          <div>
            <table className="border border-grey-400">
              <tbody>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>Generator spec.</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>Engine Spec.</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>Genset Data</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>Model</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>Rated Power</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>Frequency/</p>
                    <p>Voltage</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>Engine Model</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>Power/Speed</p>
                    <p>kW/RPM</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>Cylinder No.</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>Dimensions</p>
                    <p>L×W×H(mm)</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>Weight</p>
                    <p>(kg)</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>KW</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>KVA</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>Hz/ V</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>CCFJ10J-WTP</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>10</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>12.5</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>50/400</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>WP2.1CD18E1</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>17.5/1500</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>4</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>1240*700*1115</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>467</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>CCFJ12J-WTP</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>12</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>15</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>50/400</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>WP2.1CD18E1</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>17.5/1500</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>4</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>1240*700*1115</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>467</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>CCFJ16J-WTP</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>16</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>20</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>50/400</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>WP2.5CD22E1</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>22/1500</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>4</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>1240*700*1115</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>467</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>CCFJ20J-WTP</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>20</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>25</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>50/400</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>WP3.9CD33E1</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>33/1500</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>4</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>1314*700*1165</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>480</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>CCFJ24J-WTP</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>24</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>30</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>50/400</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>WP3.9CD33E1</p>
                    <p>D226B-3CD</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>33/1500</p>
                    <p>36/1500</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>4</p>
                    <p>3</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>1500*1080*1180</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>1130</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>CCFJ30J-WTP</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>30</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>37.5</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>50/400</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>WP3.9CD38E1</p>
                    <p>TD226B-3CD</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>38/1500</p>
                    <p>40/1500</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>4</p>
                    <p>3</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>1510*1080*1180</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>1150</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>CCFJ50J-WTP</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>50</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>62.5</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>50/400</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>WP4CD66E200</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>60/1500</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>4</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>1695*1250*1180</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>1250</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>CCFJ75J-WTP</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>75</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>93.8</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>50/400</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>WP4CD100E200</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>90/1500</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>4</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>1695*1250*1210</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>1350</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>CCFJ100J-WTP</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>100</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>125</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>50/400</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>WP6CD132E200</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>120/1500</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>6</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>2125*1250*1170</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>1640</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>CCFJ120J-WTP</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>120</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>150</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>50/400</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>WP6CD152E200</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>138/1500</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>6</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>2180*1250*1170</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>1650</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>CCFJ150J-WTP</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>150</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>187.5</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>50/400</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>WP10CD200E200</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>182/1500</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>6</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>2520*1250*1530</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>1950</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>CCFJ180J-WTP</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>180</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>225</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>50/400</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>WP10CD238E200</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>216/1500</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>6</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>2520*1250*1550</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>1980</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>CCFJ200J-WTP</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>200</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>250</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>50/400</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>WP10CD264E200</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>240/1500</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>6</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>2620*1250*1620</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>2100</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>CCFJ250J-WTP</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>250</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>312.5</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>50/400</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>WP12CD317E200</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>288/1500</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>6</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>2650*1250*1660</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>2180</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>CCFJ300J-WTP</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>300</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>375</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>50/400</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>WP13CD385E200</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>350/1500</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>6</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>2650*1250*1660</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>2300</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>CCFJ320J-WTP</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>320</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>400</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>50/400</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>WP13CD385E200</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>350/1500</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>6</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>2650*1250*1660</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>2300</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>CCFJ360J-WTP</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>360</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>450</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>50/400</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>6M26CD447E200</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>406/1500</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>6</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>3010*1040*1600</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>3844</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>CCFJ400J-WTP</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>400</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>500</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>50/400</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>6M26CD506E200</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>460/1500</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>6</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>3030*1040*1600</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>3874</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>CCFJ450J-WTP</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>450</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>562.5</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>50/400</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>6M33CD550E200</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>500/1500</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>6</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>3140*1040*1600</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>3896</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>CCFJ500J-WTP</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>500</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>625</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>50/400</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>12M26CD748E200</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>680/1500</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>12</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>3524*1521*1927</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>6263</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>CCFJ600J-WTP</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>600</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>750</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>50/400</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>12M26CD748E200</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>680/1500</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>12</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>3596*1521*1927</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>6413</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>CCFJ700J-WTP</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>700</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>875</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>50/400</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>12M26CD902E200</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>820/1500</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>12</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>3820*1521*1927</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>6841</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>CCFJ800J-WTP</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>800</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>1000</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>50/400</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>12M26CD1012E200</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>920/1500</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>12</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>3895*1521*1927</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>7060</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>CCFJ900J-WTP</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>900</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>1125</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>50/400</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>12M33CD1100E200</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>1000/1500</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>12</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>3914*1521*1927</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>7267</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <span>Морской тип Weichai 60 Гц/1800 об/мин</span>
        <div className="flex overflow-scroll">
          <div>
            <table className="border border-grey-400">
              <tbody>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>Generator spec.</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>Engine Spec.</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>Genset Data</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>Model</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>Rated Power</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>Frequency/</p>
                    <p>Voltage</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>Engine Model</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>Power/Speed</p>
                    <p>kW/RPM</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>Cylinder No.</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>Dimensions</p>
                    <p>L×W×H(mm)</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>Weight</p>
                    <p>(kg)</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>KW</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>KVA</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>Hz/ V</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>CCFJ10J-WTP</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>10</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>12.5</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>50/400</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>WP2.1CD18E1</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>17.5/1500</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>4</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>1240*700*1115</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>467</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>CCFJ12J-WTP</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>12</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>15</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>50/400</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>WP2.1CD18E1</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>17.5/1500</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>4</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>1240*700*1115</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>467</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>CCFJ16J-WTP</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>16</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>20</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>50/400</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>WP2.5CD22E1</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>22/1500</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>4</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>1240*700*1115</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>467</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>CCFJ20J-WTP</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>20</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>25</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>50/400</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>WP3.9CD33E1</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>33/1500</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>4</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>1314*700*1165</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>480</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>CCFJ24J-WTP</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>24</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>30</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>50/400</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>WP3.9CD33E1</p>
                    <p>D226B-3CD</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>33/1500</p>
                    <p>36/1500</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>4</p>
                    <p>3</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>1500*1080*1180</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>1130</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>CCFJ30J-WTP</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>30</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>37.5</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>50/400</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>WP3.9CD38E1</p>
                    <p>TD226B-3CD</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>38/1500</p>
                    <p>40/1500</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>4</p>
                    <p>3</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>1510*1080*1180</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>1150</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>CCFJ50J-WTP</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>50</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>62.5</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>50/400</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>WP4CD66E200</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>60/1500</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>4</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>1695*1250*1180</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>1250</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>CCFJ75J-WTP</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>75</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>93.8</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>50/400</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>WP4CD100E200</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>90/1500</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>4</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>1695*1250*1210</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>1350</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>CCFJ100J-WTP</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>100</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>125</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>50/400</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>WP6CD132E200</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>120/1500</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>6</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>2125*1250*1170</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>1640</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>CCFJ120J-WTP</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>120</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>150</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>50/400</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>WP6CD152E200</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>138/1500</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>6</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>2180*1250*1170</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>1650</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>CCFJ150J-WTP</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>150</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>187.5</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>50/400</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>WP10CD200E200</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>182/1500</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>6</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>2520*1250*1530</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>1950</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>CCFJ180J-WTP</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>180</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>225</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>50/400</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>WP10CD238E200</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>216/1500</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>6</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>2520*1250*1550</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>1980</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>CCFJ200J-WTP</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>200</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>250</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>50/400</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>WP10CD264E200</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>240/1500</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>6</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>2620*1250*1620</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>2100</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>CCFJ250J-WTP</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>250</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>312.5</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>50/400</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>WP12CD317E200</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>288/1500</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>6</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>2650*1250*1660</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>2180</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>CCFJ300J-WTP</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>300</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>375</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>50/400</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>WP13CD385E200</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>350/1500</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>6</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>2650*1250*1660</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>2300</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>CCFJ320J-WTP</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>320</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>400</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>50/400</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>WP13CD385E200</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>350/1500</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>6</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>2650*1250*1660</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>2300</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>CCFJ360J-WTP</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>360</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>450</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>50/400</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>6M26CD447E200</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>406/1500</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>6</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>3010*1040*1600</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>3844</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>CCFJ400J-WTP</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>400</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>500</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>50/400</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>6M26CD506E200</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>460/1500</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>6</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>3030*1040*1600</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>3874</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>CCFJ450J-WTP</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>450</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>562.5</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>50/400</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>6M33CD550E200</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>500/1500</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>6</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>3140*1040*1600</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>3896</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>CCFJ500J-WTP</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>500</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>625</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>50/400</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>12M26CD748E200</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>680/1500</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>12</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>3524*1521*1927</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>6263</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>CCFJ600J-WTP</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>600</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>750</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>50/400</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>12M26CD748E200</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>680/1500</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>12</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>3596*1521*1927</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>6413</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>CCFJ700J-WTP</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>700</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>875</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>50/400</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>12M26CD902E200</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>820/1500</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>12</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>3820*1521*1927</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>6841</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>CCFJ800J-WTP</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>800</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>1000</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>50/400</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>12M26CD1012E200</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>920/1500</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>12</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>3895*1521*1927</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>7060</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>CCFJ900J-WTP</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>900</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>1125</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>50/400</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>12M33CD1100E200</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>1000/1500</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>12</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>3914*1521*1927</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>7267</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="mt-10 mb-10">
          {" "}
          <span>
            Ищете идеального производителя и поставщика дизельного генератора
            мощностью 350 кВт MPS? У нас есть широкий выбор по хорошим ценам,
            чтобы помочь вам реализовать ваши идеи. Все дизельные генераторы
            мощностью 300 кВт гарантированно качественные. Мы являемся китайской
            фабрикой, производящей дизельные генераторы мощностью 275 кВт. Если
            у вас есть вопросы, пожалуйста, не стесняйтесь обращаться к нам.
          </span>
        </div>
      </div>
    ),
    descriptionImg: "",
    category: "MarineGenerator",
    brand: "Weichai Series",
  },
  {
    id: 9,
    mainImg: "/24.webp",
    name: "Морской генератор Yuchai",
    shortDescription:
      "Морской генератор Yuchai Морской двигатель Yuchai выбирает цельнокованый стальной коленчатый вал, сплавной чугунный блок и головку цилиндра. Морской генератор отличается небольшими размерами, малым весом и высокой надежностью. Межремонтный период составляет более 12 000 часов, его особенности включают низкие выбросы и отличные экологические показатели.",
    qrCode:
      "https://www.cnroyalpower.com/phoenix/admin/prod/qrcode/redirect/oCKBDiGMZHwE",
    fullDescription: (
      <div>
        <span>
          Дизельный генератор Yuchai для морских судов Морской двигатель Yuchai
          оснащен цельнокованым стальным коленчатым валом, корпусом из сплавного
          чугуна и головкой цилиндра. Генератор отличается компактными
          размерами, легким весом и высокой надежностью. Межремонтный период
          превышает 12 000 часов. Генератор характеризуется низкими выбросами и
          отличной экологической производительностью. Компания Yuchai обладает
          профессиональным опытом в области морских силовых установок, что
          позволяет удовлетворять индивидуальные требования клиентов. Выбросы
          всех серий продукции соответствуют национальным стандартам выбросов
          выше уровня 3. Yuchai является компанией с богатым и полным спектром
          продукции в дизельной промышленности Китая. Дизельные генераторы
          обладают характеристиками высокой мощности, низкой вибрации, низким
          расходом топлива, низкими выбросами, низким уровнем шума, высоким
          соотношением цены и качества, высокой надежностью, легкостью в
          приобретении запасных частей и длительным сроком службы. Они подходят
          для малых и средних рыболовных судов, буксиров, пассажирских судов,
          грузовых судов, круизных лайнеров, паромов и других типов судов.
        </span>
        <span className="text-xl">Основные характеристики</span>
        <div>
          <p>
            1. Выбор высоконапорного топливного насоса обеспечивает высокое
            давление впрыска топлива, а показатели расхода топлива значительно
            превосходят показатели отечественных продуктов с аналогичным
            диапазоном мощности.
          </p>
          <p>
            2. Использование запатентованной технологии уплотнения поршневых
            колец YUCHAI снижает расход смазки на более чем 50% по сравнению с
            отечественными продуктами с аналогичной мощностью.
          </p>
          <p>
            3. Полное электронное управление и система “общая топливная рампа”
            позволяют гибко контролировать впрыск топлива и привод выпускного
            клапана, эффективно снижая эксплуатационные расходы и соответствуя
            требованиям различных этапов экологических нормативов.
          </p>
          <p>
            4. Компактный конструктивный дизайн, высокая выходная мощность и
            отличные экологические характеристики при одинаковом рабочем объеме,
            безопасная и надежная работа, высокая эффективность и
            энергосбережение.
          </p>
          <p>
            5. Корпус и головка цилиндра изготовлены из сплавного чугуна,
            обладающего высокой степенью прочности. Используется общий
            коленчатый вал и скользящие подшипники, которые отличаются
            небольшими размерами, малым весом и высокой надежностью. Период
            межремонтной работы двигателя при нормальных условиях эксплуатации и
            обслуживания может превышать 10 000 часов.
          </p>
          <p>
            6. Оптимизированная мощность и скорость находят широкое применение
            на различных размерах и типах балкеров, контейнеровозов, танкеров и
            инженерных судов и т.д.
          </p>
          <p>
            7. Дизельный двигатель использует запатентованную технологию
            цельного картера и задней камеры передач, и уровень шума ниже по
            сравнению с аналогичными продуктами.
          </p>
          <p>
            8. Выбор высококлассного насоса типа P, инжектора типа P с низкой
            инерцией и узким каналом и нового типа высокоэффективного усилителя.
            Показатели расхода топлива значительно лучше, чем у отечественных
            продуктов.
          </p>
        </div>
        <span className="text-xl mb-5">
          Морской тип Yuchai 50 Гц/1500 об/мин
        </span>
        <div>
          <div className="flex overflow-scroll">
            <table className="mb-10 border border-grey-400">
              <tbody>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>Generator &nbsp; spec.</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>Engine &nbsp; Spec.</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>Genset &nbsp; Data</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>Model</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>Rated &nbsp; Power</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>Frequency/</p>
                    <p>Voltage</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>Engine &nbsp; Model</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>Power/Speed</p>
                    <p>kW/RPM</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>Cylinder &nbsp; No.</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>Dimensions</p>
                    <p>L×W×H(mm)</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>Weight</p>
                    <p>(kg)</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>KW</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>KVA</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>Hz/ V</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>CCFJ30J-WTP</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>30</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>37.5</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>50/400</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>YC4108C</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>40/1500</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>4</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>1780*780*1035</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>750</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>CCFJ40J-WTP</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>40</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>50</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>50/400</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>YC4108ZC</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>50/1500</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>4</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>1850*780*1035</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>785</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>CCFJ50J-WTP</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>50</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>62.5</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>50/400</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>YC6108CA</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>63/1500</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>6</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>1900*820*1080</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>1130</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>CCFJ64J-WTP</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>64</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>80</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>50/400</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>YC6108ZC</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>80/1500</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>6</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>2100*8201080</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>1260</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>CCFJ90J-WTP</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>90</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>113</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>50/400</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>YC6108ZLCB</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>112/1500</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>6</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>2300*850*1280</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>1400</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>CCFJ100J-WTP</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>100</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>125</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>50/400</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>YC6B165L-C22</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>120/1500</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>6</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>2300*850*1280</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>1355</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>CCFJ120J-WTP</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>120</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>150</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>50/400</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>YC6A200L-C20</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>145/1500</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>6</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>2365*960*1420</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>1450</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>CCFJ150J-WTP</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>150</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>188</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>50/400</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>YC6MK240L-C22</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>176/1500</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>6</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>2700*1100*1700</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>2230</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>CCFJ160J-WTP</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>160</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>200</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>50/400</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>YC6MK260L-C22</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>192/1500</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>6</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>2700*1100*1700</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>2230</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>CCFJ180J-WTP</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>180</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>225</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>50/400</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>YC6MK300L-C22</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>220/1500</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>6</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>2750*1100*1700</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>2550</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>CCFJ200J-WTP</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>200</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>250</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>50/400</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>YC6MK330C</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>240/1500</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>6</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>2750*1100*1700</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>2550</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>CCFJ220J-WTP</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>220</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>275</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>50/400</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>YC6K365L-C20</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>268/1500</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>6</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>2550*1050*1500</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>2550</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>CCFJ250J-WTP</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>250</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>313</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>50/400</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>YC6MJ400L-C22</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>295/1500</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>6</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>2830*1110*1750</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>2750</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>CCFJ250J-WTP</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>250</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>313</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>50/400</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>YC6T400C</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>295/1500</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>6</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>3000*1100*2160</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>3290</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>CCFJ280J-WTP</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>260</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>350</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>50/400</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>YC6K420L-C20</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>309/1500</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>6</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>2650*1050*1500</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>2700</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>CCFJ280J-WTP</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>280</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>350</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>50/400</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>YC6T450C</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>330/1500</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>6</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>3000*1100*2160</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>3290</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>CCFJ300J-WTP</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>300</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>375</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>50/400</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>YC6T490C</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>360/1500</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>6</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>3100*1100*2160</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>3420</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>CCFJ360J-WTP</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>350</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>437.5</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>50/400</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>YC6TD600L-C20</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>441/1500</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>6</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>3300*1050*1500</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>3750</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>CCFJ400J-WTP</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>400</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>500</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>50/400</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>YC6TD655L-C20</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>4801500</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>6</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>3300*1050*1500</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>3940</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>CCFJ480J-WTP</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>480</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>600</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>50/400</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>YC6C760L-C20</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>560/1500</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>6</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>4500*1400*2100</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>6950</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>CCFJ500J-WTP</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>500</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>625</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>50/400</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>YC6C820L-C21</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>600/1500</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>6</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>4500*1400*2100</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>7100</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>CCFJ600J-WTP</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>600</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>750</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>50/400</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>YC6C980L-C20</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>720/1500</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>6</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>4500*1400*2100</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>7300</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>CCFJ960J-WTP</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>960</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>1200</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>50/400</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>YC12VC1512L-C21</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>1120/1500</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>12</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>5160*1644*2218</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>12800</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>CCFJ1436J-WTP</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>1436</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>1795</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>50/400</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>YC12VC2430L-C21</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>1800/1500</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>12</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>5160*1644*2218</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>13500</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>CCFJ1500-WTP</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>1500</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>1875</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>50/400</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>YC16VC2700L-C21</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>2000/1500</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>16</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>5945*1644*2218</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>15800</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>CCFJ1750-WTP</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>1750</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>2188</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>50/400</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>YC16VC2970L-C21</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>2200/1500</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>16</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>5945*1644*2218</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>16300</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <span className="text-xl">Морской тип Yuchai 60 Гц/1800 об/мин</span>
        <div>
          <div className="flex overflow-scroll mb-10">
            <table className="border border-grey-400">
              <tbody>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>Generator &nbsp; spec.</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>Engine &nbsp; Spec.</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>Genset &nbsp; Data</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>Model</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>Rated &nbsp; Power</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>Frequency/</p>
                    <p>Voltage</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>Engine &nbsp; Model</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>Power/Speed</p>
                    <p>kW/RPM</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>Cylinder &nbsp; No.</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>Dimensions</p>
                    <p>L×W×H(mm)</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>Weight</p>
                    <p>(kg)</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>KW</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>KVA</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>Hz/ V</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>CCFJ40J-WTP</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>40</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>50</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>60/440</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>YC4D75C</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>55/1800</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>4</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>1780*750*1065</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>790</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>CCFJ64J-WTP</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>64</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>80</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>60/440</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>YC6B100-C20</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>74/1800</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>6</p>
                  </td>
                  <td className="border border-grey-400"></td>
                  <td className="border border-grey-400"></td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>CCFJ90J-WTP</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>90</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>113</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>60/440</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>YC6B150C</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>110/1800</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>6</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>1940*750*1125</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>1285</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>CCFJ100J-WTP</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>100</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>125</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>60/440</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>YC6B150C</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>110/1800</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>6</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>1900*750*1000</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>1300</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>CCFJ120J-WTP</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>120</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>150</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>60/440</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>YC6A190C</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>140/1800</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>6</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>1900*860*1000</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>1900</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>CCFJ150J-WTP</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>150</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>187.5</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>60/440</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>YC6MK240L-C23</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>176/1800</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>6</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>2285*1122*1420</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>1960</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>CCFJ180J-WTP</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>180</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>225</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>60/440</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>YC6MK300L-C20</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>219/1800</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>6</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>2465*1122*1420</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>2050</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>CCFJ200J-WTP</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>200</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>250</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>60/440</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>YC6T390C</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>287/1800</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>6</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>2930*1150*1850</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>2950</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>CCFJ220J-WTP</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>216</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>270</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>60/440</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>YC6T390C</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>287/1800</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>6</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>2930*1150*1850</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>3040</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>CCFJ250J-WTP</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>250</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>313</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>60/440</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>YC6T390C</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>287/1800</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>6</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>2930*1150*1850</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>3050</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>CCFJ270J-WTP</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>280</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>350</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>60/440</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>YC6T420C</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>3091800</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>6</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>2850*1150*1850</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>3200</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>CCFJ300J-WTP</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>300</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>375</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>60/440</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>YC6T480C</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>352/1800</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>6</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>2850*1150*1850</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>3280</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>CCFJ320J-WTP</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>320</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>400</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>60/440</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>YC6T510C</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>375/1800</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>6</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>2850*1150*1850</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>3300</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>CCFJ350J-WTP</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>350</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>437.5</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>60/440</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>YC6T540C</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>396/1800</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>6</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>3085*1150*1850</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>3500</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>CCFJ400J-WTP</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>400</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>500</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>60/440</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>YC6TD650L-C20</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>478/1800</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>6</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>3100*1250*1960</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>3700</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>CCFJ450J-WTP</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>450</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>562.5</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>60/440</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>YC6TD700L-C20</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>515/1800</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>6</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>3100*1250*1960</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>3750</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    ),
    descriptionImg: "",
    category: "MarineGenerator",
    brand: "Yuchai Series",
  },
  {
    id: 10,
    mainImg: "/35.webp",
    name: "Дизельный генератор MTU",
    shortDescription:
      "Дизельный генератор MTU Подразделение Power Systems компании Rolls-Royce сосредоточено на создании устойчивых, климатически нейтральных решений для привода, движения и генерации энергии. Мы вносим значительный вклад в энергетический переход с помощью экологически чистых технологий от нашего бренда продукции и решений mtu. Будучи лидерами в области резервного питания для критически важных объектов и интегрированных приводных систем для судов и тяжелой наземной техники, наши клиенты знают, что могут на нас положиться, и делают это уже более 110 лет. Высокая производительность, надежный дизайн и оптимальный расход топлива. Шесть различных мощностей для гибкой децентрализованной энергетики. Клиенты по всему миру доверяют нам обеспечение надежного электроснабжения для широкого спектра приложений, таких как здравоохранение, центры обработки данных, аэропорты, очистные сооружения, производственные предприятия и независимые электростанции. Наш портфель продукции охватывает дизельные генераторные установки мощностью до 3250 кВт (60 Гц) и до 4000 кВА (50 Гц).",
    qrCode:
      "https://www.cnroyalpower.com/phoenix/admin/prod/qrcode/redirect/oCKBDiGMZHwE",
    fullDescription: (
      <div className="flex overflow-scroll flex-col">
        <div>
          <table className="border border-grey-400">
            {" "}
            <tbody>
              {" "}
              <tr className="border border-grey-400">
                {" "}
                <td className="border border-grey-400">
                  <p>
                    <strong>ROYALPOWER /</strong>
                    <strong> MTU</strong>
                    <strong> SERIES</strong>
                  </p>
                </td>{" "}
              </tr>{" "}
              <tr className="border border-grey-400">
                {" "}
                <td className="border border-grey-400">
                  <p>
                    <strong>
                      50Hz &nbsp; &nbsp;400V &nbsp;cosØ=0.8(Lag) 3 phase and 4
                      wire "Y" type connection
                    </strong>
                  </p>
                </td>{" "}
              </tr>{" "}
              <tr className="border border-grey-400">
                {" "}
                <td className="border border-grey-400">
                  <p>
                    <strong> </strong>
                  </p>
                  <p>
                    <strong>Genset Model</strong>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <strong>output power</strong>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <strong>Diesel Engine</strong>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <strong>Dimension</strong>
                  </p>
                  <p>
                    <strong>L × W × H</strong>
                  </p>
                  <p>
                    <strong>( m m )</strong>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <strong>Weight</strong>
                  </p>
                  <p>
                    <strong>( k g )</strong>
                  </p>
                </td>{" "}
              </tr>{" "}
              <tr className="border border-grey-400">
                {" "}
                <td className="border border-grey-400">
                  <p>
                    <strong>Standby Power</strong>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <strong>Prime Power</strong>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <strong>Model</strong>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <strong>Power</strong>
                  </p>
                  <p>
                    <strong>( KW )</strong>
                  </p>
                </td>{" "}
              </tr>{" "}
              <tr className="border border-grey-400">
                {" "}
                <td className="border border-grey-400">
                  <p>
                    <strong>KW</strong>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <strong>KW</strong>
                  </p>
                </td>{" "}
              </tr>{" "}
              <tr className="border border-grey-400">
                {" "}
                <td className="border border-grey-400">
                  <p>
                    <strong>RYLM450P</strong>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <strong>400</strong>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <strong>360</strong>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <strong>10V1600G10F</strong>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <strong>448</strong>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <strong>3100×1650×2050</strong>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <strong>3800</strong>
                  </p>
                </td>{" "}
              </tr>{" "}
              <tr className="border border-grey-400">
                {" "}
                <td className="border border-grey-400">
                  <p>
                    <strong>RYLM500P</strong>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <strong>440</strong>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <strong>400</strong>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <strong>10V1600G20F</strong>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <strong>493</strong>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <strong>3100×1650×2050</strong>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <strong>3800</strong>
                  </p>
                </td>{" "}
              </tr>{" "}
              <tr className="border border-grey-400">
                {" "}
                <td className="border border-grey-400">
                  <p>
                    <strong>RYLM563P</strong>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <strong>500</strong>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <strong>450</strong>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <strong>12V1600G10F</strong>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <strong>576</strong>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <strong>3400×1650×2150</strong>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <strong>4500</strong>
                  </p>
                </td>{" "}
              </tr>{" "}
              <tr className="border border-grey-400">
                {" "}
                <td className="border border-grey-400">
                  <p>
                    <strong>RYLM625P</strong>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <strong>550</strong>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <strong>500</strong>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <strong>12V1600G20F</strong>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <strong>634</strong>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <strong>3650×1650×2150</strong>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <strong>4500</strong>
                  </p>
                </td>{" "}
              </tr>{" "}
              <tr className="border border-grey-400">
                {" "}
                <td className="border border-grey-400">
                  <p>
                    <strong>RYLM800P</strong>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <strong>700 </strong>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <strong>640</strong>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <strong>12V2000G65</strong>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <strong>765</strong>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <strong>4000×1750×2160</strong>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <strong>6200</strong>
                  </p>
                </td>{" "}
              </tr>{" "}
              <tr className="border border-grey-400">
                {" "}
                <td className="border border-grey-400">
                  <p>
                    <strong>RYLM910P</strong>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <strong>800 </strong>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <strong>728 </strong>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <strong>16V2000G25</strong>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <strong>891</strong>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <strong>4350×1750×2300</strong>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <strong>7100</strong>
                  </p>
                </td>{" "}
              </tr>{" "}
              <tr className="border border-grey-400">
                {" "}
                <td className="border border-grey-400">
                  <p>
                    <strong>RYLM1000P</strong>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <strong>880</strong>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <strong>800 </strong>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <strong>16V2000G65</strong>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <strong>979</strong>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <strong>4350×1750×2300</strong>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <strong>7250</strong>
                  </p>
                </td>{" "}
              </tr>{" "}
              <tr className="border border-grey-400">
                {" "}
                <td className="border border-grey-400">
                  <p>
                    <strong>RYLM1125P</strong>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <strong>1000 </strong>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <strong>900</strong>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <strong>18V2000G65</strong>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <strong>1100</strong>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <strong>4550×1850×2500</strong>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <strong>8000</strong>
                  </p>
                </td>{" "}
              </tr>{" "}
              <tr className="border border-grey-400">
                {" "}
                <td className="border border-grey-400">
                  <p>
                    <strong>RYLM1250P</strong>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <strong>1100</strong>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <strong>1000</strong>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <strong>18V2000G26F</strong>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <strong>1258</strong>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <strong>4850×1850×2500</strong>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <strong>9300</strong>
                  </p>
                </td>{" "}
              </tr>{" "}
              <tr className="border border-grey-400">
                {" "}
                <td className="border border-grey-400">
                  <p>
                    <strong>RYLM1250P*</strong>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <strong>1100</strong>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <strong>1000</strong>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <strong>12V4000G14RF</strong>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <strong>1325</strong>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <strong>5770×2100×2500</strong>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <strong>11700</strong>
                  </p>
                </td>{" "}
              </tr>{" "}
              <tr className="border border-grey-400">
                {" "}
                <td className="border border-grey-400">
                  <p>
                    <strong>RYLM1550P</strong>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <strong>1320</strong>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <strong>1240</strong>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <strong>12V4000G23</strong>
                  </p>
                  <p>
                    <strong>12V4000G14F</strong>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <strong>1420</strong>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <strong>5770×2100×2500</strong>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <strong>12250</strong>
                  </p>
                </td>{" "}
              </tr>{" "}
              <tr className="border border-grey-400">
                {" "}
                <td className="border border-grey-400">
                  <p>
                    <strong>RYLM1775P</strong>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <strong>1600</strong>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <strong>1420</strong>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <strong>12V4000G63</strong>
                  </p>
                  <p>
                    <strong>12V4000G24F</strong>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <strong>1733</strong>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <strong>5770×2100×2500</strong>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <strong>12450</strong>
                  </p>
                </td>{" "}
              </tr>{" "}
              <tr className="border border-grey-400">
                {" "}
                <td className="border border-grey-400">
                  <p>
                    <strong>RYLM2050P</strong>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <strong>1800</strong>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <strong>1640</strong>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <strong>16V4000G23</strong>
                  </p>
                  <p>
                    <strong>16V4000G14F</strong>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <strong>1978</strong>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <strong>6320×2600×2650</strong>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <strong>14400</strong>
                  </p>
                </td>{" "}
              </tr>{" "}
              <tr className="border border-grey-400">
                {" "}
                <td className="border border-grey-400">
                  <p>
                    <strong>RYLM2250P</strong>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <strong>2000</strong>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <strong>1800</strong>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <strong>16V4000G63</strong>
                  </p>
                  <p>
                    <strong>16V4000G24F</strong>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <strong>2162</strong>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <strong>6600×2600×2650</strong>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <strong>14950</strong>
                  </p>
                </td>{" "}
              </tr>{" "}
              <tr className="border border-grey-400">
                {" "}
                <td className="border border-grey-400">
                  <p>
                    <strong>RYLM2500P</strong>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <strong>2200</strong>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <strong>2000</strong>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <strong>20V4000G23</strong>
                  </p>
                  <p>
                    <strong>20V4000G14F</strong>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <strong>2420</strong>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <strong>7950×2600×2700</strong>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <strong>17420</strong>
                  </p>
                </td>{" "}
              </tr>{" "}
              <tr className="border border-grey-400">
                {" "}
                <td className="border border-grey-400">
                  <p>
                    <strong>RYLM2800P</strong>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <strong>2400</strong>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <strong>2240</strong>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <strong>20V4000G63</strong>
                  </p>
                  <p>
                    <strong>20V4000G24F</strong>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <strong>2670</strong>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <strong>7950×2600×2700</strong>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <strong>176000</strong>
                  </p>
                </td>{" "}
              </tr>{" "}
              <tr className="border border-grey-400">
                {" "}
                <td className="border border-grey-400">
                  <p>
                    <strong>RYLM3000P</strong>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <strong>2600</strong>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <strong>2400</strong>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <strong>20V4000G63L</strong>
                  </p>
                  <p>
                    <strong>20V4000G34F</strong>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <strong>2850</strong>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <strong>8000×3100×3100</strong>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <strong>182000</strong>
                  </p>
                </td>{" "}
              </tr>{" "}
              <tr className="border border-grey-400">
                {" "}
                <td className="border border-grey-400">
                  <p>
                    <strong>RYLM3250P</strong>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <strong>2800</strong>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <strong>2600</strong>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <strong>20V4000G44F</strong>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <strong>2850</strong>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <strong>8000×3100×3100</strong>
                  </p>
                </td>{" "}
                <td className="border border-grey-400">
                  <p>
                    <strong>182000</strong>
                  </p>
                </td>{" "}
              </tr>{" "}
              <tr className="border border-grey-400">
                {" "}
                <td className="border border-grey-400"></td>{" "}
                <td className="border border-grey-400"></td>{" "}
                <td className="border border-grey-400"></td>{" "}
                <td className="border border-grey-400"></td>{" "}
                <td className="border border-grey-400"></td>{" "}
                <td className="border border-grey-400"></td>{" "}
                <td className="border border-grey-400"></td>{" "}
              </tr>{" "}
            </tbody>{" "}
          </table>
        </div>
        <img src="/36.webp"></img>
        <img src="/37.webp"></img>
        <div className="mb-20"></div>
      </div>
    ),
    descriptionImg: "",
    category: "DieselGenerator",
    brand: "MTU Series",
  },
  {
    id: 11,
    mainImg: "/SG.webp",
    name: "Тихий генератор Контейнеризированный генератор",
    shortDescription:
      "Тихий генератор/Контейнеризированный генератор В 2021 году мы стали авторизованным экспортным агентом и подрядчиком зарубежных проектов группы Jereh и работаем в соответствии с такими стандартами, как IEC 34-1, GB1105, GB/T 2820, CSH 22-2, VDE 0530 и YD/T502-2000 “Технические требования к дизельным генераторным установкам для связи”. Jereh также является авторизованным поставщиком Siemens для аэродеривационной газовой турбины SGT-A05 (Industrial 501-K), золотым сертифицированным интегратором Jenbacher и Waukesha. Siemens, как один из ведущих мировых поставщиков газотурбинного оборудования, предлагает аэродеривационные газовые турбины серии SGT-A05 с проверенными технологиями, передовыми материалами и техническими решениями. Эти продукты отличаются эффективностью, гибкостью и надежностью, подходящими для различных приложений генерации энергии, таких как когенерация, морские платформы и аварийные источники питания. Газовый генератор Jenbacher является мировым лидером в области двигателей с возвратно-поступательным движением, работающих на горючем газе, полных комплектов генераторных установок и когенерационных систем. Это один из немногих производителей в мире, посвятивших себя развитию технологии газовых двигателей. Мощностной диапазон газовых генераторных установок Jenbacher составляет от 0,2 МВт до 10,4 МВт. Они обладают высокой адаптивностью к различным видам газа и соответствуют наиболее строгим стандартам выбросов. Производительность этих продуктов эффективна, долговечна и надежна, что позволяет удовлетворять разнообразные потребности пользователей в охлаждении, тепле и электроэнергии. Они широко используются в коммерческих, промышленных и муниципальных приложениях.",
    qrCode:
      "https://www.cnroyalpower.com/phoenix/admin/prod/qrcode/redirect/oCKBDiGMZHwE",
    fullDescription: (
      <div>
        <p className="text-xl">Контейнерная генераторная установка:</p>
        <p>
          Генераторные установки Royal Power производятся в соответствии с
          стандартным размером ISO/TC104, имеют рациональную конструкцию, что
          обеспечивает защиту генераторной установки от повреждений из-за
          высокого давления при транспортировке и делают ее пригодной для
          перевозки на судне. Мы можем предоставить контейнеры длиной 20 футов,
          40 футов, а также расширенные или увеличенные контейнеры. Они делятся
          на обычные и тихие типы. Генераторные установки этой серии могут быть
          легко перемещены в нужное место и способны работать в самых сложных
          условиях. Эти генераторы оснащены высококачественным и надежным
          дизельным двигателем в качестве источника привода, а также с
          международным качеством бесщеточного синхронного генератора.
        </p>
        <p className="text-xl">Характеристики производительности:</p>
        <ul>
          <li>
            - Соответствие международным стандартным размерам контейнера,
            легкость транспортировки.
          </li>
          <li>
            - Сохранение основной структуры стандартного контейнера, прочность и
            устойчивость к износу.
          </li>
          <li>
            - Высокая степень защиты, подходит для использования в
            неблагоприятной среде.
          </li>
          <li>
            - Более разумный дизайн выхлопной системы, чтобы обеспечить
            непрерывное питание генераторной установки.
          </li>
        </ul>
        <img src="/SG.webp" className="lg:w-1/2 w-full"></img>
        <img src="/40.webp"></img>
        <img src="/41.webp"></img>
      </div>
    ),
    descriptionImg: "",
    category: "DieselGenerator",
    brand: "Тихий Контейнеризированный",
  },
  {
    id: 12,
    mainImg: "/42.webp",
    name: "Дизельный генератор Perkins",
    shortDescription:
      "Дизельный генератор Perkins Дизельные генераторы Perkins обладают мощностью от 7 кВт до 1800 кВт. Это двигатель британской марки, который может быть сопряжен с альтернаторами Stamford, Leroy Somer, Marathon и Mecc Alte.",
    qrCode:
      "https://www.cnroyalpower.com/phoenix/admin/prod/qrcode/redirect/oCKBDiGMZHwE",
    fullDescription: (
      <div>
        <span className="text-xl">О дизельных генераторах серии PERKINS</span>
        <span>
          Дизельные генераторы серии ROYAL PERKINS оснащены двигателями PERKINS,
          которые отличаются высокой стабильностью, надежностью, долговечностью
          и долгим сроком службы, а также широким диапазоном выходной мощности.
          Компания Royal сотрудничает с производителями двигателей PERKINS в
          течение нескольких лет и получила высокие отзывы клиентов по всему
          миру, например, в сферах связи, промышленности, проектов, добычи
          полезных ископаемых, спасательных работ, военных и других отраслях.
        </span>
        <ul>
          Преимущества дизельных генераторов PERKINS:
          <li>1. Маленький размер</li>
          <li>2. Отличная производительность</li>
          <li>3. Обслуживание в течение 24 часов</li>
          <li>4. Экологичность</li>
          <li>5. Международная гарантия</li>
          <li>6. Европейский стандарт выбросов</li>
          <li>
            7. Запасные части легко доступны на мировом рынке по
            конкурентоспособной цене.
          </li>
        </ul>
        <span>Стандартная комплектация открытого типа Perkins:</span>
        <ul>
          <li>1. Двигатель Perkins</li>
          <li>2. Альтернатор Stamford/Marathon/Kaihua</li>
          <li>3. Система управления DSE6020, Smartgen</li>
          <li>4. Опционально топливный бак на базе</li>
          <li>5. Автоматический выключатель ABB, Schneider, Chint</li>
          <li>6. Аккумулятор и выключатель аккумулятора</li>
          <li>7. Промышленный глушитель и гибкий выхлопной шланг</li>
        </ul>
        <div>
          <div className="flex overflow-scroll mb-10">
            <table className="border border-grey-400">
              <tbody>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>
                      <strong>ROYALPOWER/PERKINS &nbsp; SERIES</strong>
                    </p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>
                      <strong>
                        50Hz &nbsp;400V &nbsp;cosØ=0.8(Lag) 3 phase and 4 &nbsp;
                        wire "Y" type connection
                      </strong>
                    </p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>
                      <strong> </strong>
                    </p>
                    <p>
                      <strong>Genset Model</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>output power </strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>Diesel Engine</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>Dimension</strong>
                    </p>
                    <p>
                      <strong>L × W × H</strong>
                    </p>
                    <p>
                      <strong>( m m )</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>Weight</strong>
                    </p>
                    <p>
                      <strong>( k g )</strong>
                    </p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>
                      <strong>Standby Power</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>Prime Power</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>Model</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>Power</strong>
                    </p>
                    <p>
                      <strong>( KW )</strong>
                    </p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>
                      <strong>KW</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>KW</strong>
                    </p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>
                      <strong>RYLP9P</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>8</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>7</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>403D-11G</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>9.2</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>1350×500×1090</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>335</strong>
                    </p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>
                      <strong>RYLP12P</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>12</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>10</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>403A-15G1</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>13.5</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>1450×500×1150</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>400</strong>
                    </p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>
                      <strong>RYLP15P</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>13</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>12</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>403A-15G2</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>15</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>1450×500×1150</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>415</strong>
                    </p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>
                      <strong>RYLP20P</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>18</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>16</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>404A-22G1</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>20.6</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>1600×560×1200</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>530</strong>
                    </p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>
                      <strong>RYLP30P</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>26</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>24</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>1103A-33G</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>30</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>1850×700×1280</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>860</strong>
                    </p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>
                      <strong>RYLP45P</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>40</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>36</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>1103A-33TG1</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>46.5</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>1950×700×1340</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>870</strong>
                    </p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>
                      <strong>RYLP60P</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>52</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>48</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>1104D-44TG2</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>64</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>2050×700×1350</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>970</strong>
                    </p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>
                      <strong>RYLP65P</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>56</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>52</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>1104A-44TG1</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>65.5</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>2200×700×1350</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>1050</strong>
                    </p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>
                      <strong>RYLP80P</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong> 70</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>64</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>1104A-44TG2</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>80.7</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>2200×700×1350</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>1080</strong>
                    </p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>
                      <strong>RYLP100P</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>88</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>80</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>1104C-44TAG2</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>103</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>2280×700×1380</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>1250</strong>
                    </p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>
                      <strong>RYLP135P</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>120</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>108</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>1106A-70TAG1</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>135.8</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>2550×850×1430</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>1550</strong>
                    </p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>
                      <strong>RYLP150P</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>132</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>120</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>1106A-70TAG2</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>153.6</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>2750×850×1350</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>1580</strong>
                    </p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>
                      <strong>RYLP180P</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>160</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>144</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>1106A-70TAG3</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>175.8</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>2850×850×1350</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>1600</strong>
                    </p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>
                      <strong>RYLP200P</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>176</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>160</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>1106A-70TAG4</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>199</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>2850×1050×1850</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>1700</strong>
                    </p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>
                      <strong>RYLP230P</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>200</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>184</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>1206A-E70TTAG2</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>223</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>3000×1050×1700</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>2350</strong>
                    </p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>
                      <strong>RYLP250P</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>220</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>200</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>1206A-E70TTAG3</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>248</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>3000×1050×1700</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>2350</strong>
                    </p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>
                      <strong>RYLP300P</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>264</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>240</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>1506A-E88TAG5</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>293</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>3080×1090×1700</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>2550</strong>
                    </p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>
                      <strong>RYLP475P</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>308</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>280</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>2206C-E13TAG2</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>368</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>3460×1150×2050</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>3000</strong>
                    </p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>
                      <strong>RYLP400P</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>360</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>320</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>2206C-E13TAG3</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>413</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>3460×1150×2030</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>3150</strong>
                    </p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>
                      <strong>RYLP450P</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>400</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>360</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>2506C-E15TAG1</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>451</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>3780×1280×2020</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>3750</strong>
                    </p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>
                      <strong>RYLP500P</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>440</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>400</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>2506C-E15TAG2</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>495</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>3780×1280×2020</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>3880</strong>
                    </p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>
                      <strong>RYLP563P</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>500</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>450</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>2806C-E18TAG1</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>593</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>3780×1550×2200</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>4560</strong>
                    </p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>
                      <strong>RYLP625P</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>550</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>500</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>2806A-E18TAG2</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>609</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>3780×1550×2200</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>4650</strong>
                    </p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>
                      <strong>RYLP750P</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>660</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>600</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>4006-23TAG2A</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>695</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>4250×1700×2150</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>6450</strong>
                    </p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>
                      <strong>RYLP800P</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>700</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>640</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>4006-23TAG3A</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>760</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>4250×1700×2150</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>6500</strong>
                    </p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>
                      <strong>RYLP900P</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>800</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>720</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>4008TAG1A</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>844</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>4750×2270×2250</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>7400</strong>
                    </p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>
                      <strong>RYLP1000P</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>880</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>800</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>4008TAG2A</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>947</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>4750×2270×2250</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>7500</strong>
                    </p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>
                      <strong>RYLP1125P</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>1000</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>900</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>4008-30TAG3</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>1055</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>4750×2270×2250</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>8500</strong>
                    </p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>
                      <strong>RYLP1250P</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>1100</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>1000</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>4012-46TWG2A</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>1166</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>4800×2100×2300</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>9050</strong>
                    </p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>
                      <strong>RYLP1400P</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>1200</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>1120</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>4012-46TWG3A</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>1263</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>4800×2100×2300</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>9050</strong>
                    </p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>
                      <strong>RYLP1550P</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>1320</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>1240</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>4012-46TAG2A</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>1395</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>4800×2100×2300</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>9150</strong>
                    </p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>
                      <strong>RYLP1650P</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>1440</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>1320</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>4012-46TAG3A</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>1583</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>4900×2100×2300</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>9750</strong>
                    </p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>
                      <strong>RYLP1775P</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>1640</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>1420</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>4016TAG1A</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>1690</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>5050×2600×2150</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>10500</strong>
                    </p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>
                      <strong>RYLP2050P</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>1800</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>1640</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>4016TAG2A</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>1715</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>5300×2600×2150</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>10300</strong>
                    </p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>
                      <strong>RYLP2250P</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>2000</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>1800</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>4016-61TRG3</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>2083</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>5300×2600×2150</strong>
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      <strong>11000</strong>
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    ),
    descriptionImg: "",
    category: "DieselGenerator",
    brand: "Perkins Series",
  },
  {
    id: 13,
    mainImg: "/43.webp",
    name: "Дизельный генератор VOLVO PENTA",
    shortDescription:
      "Дизельный генератор VOLVO PENTA дежные генераторные двигатели Volvo Penta для основного электропитания созданы для работы в сложных условиях. Благодаря непревзойденной способности принимать нагрузку, низкому расходу топлива и простоте установки, вы получаете надежное и экономичное решение для основного электропитания, которое обеспечит максимальное время работы без простоев.",
    qrCode:
      "https://www.cnroyalpower.com/phoenix/admin/prod/qrcode/redirect/oCKBDiGMZHwE",
    fullDescription: (
      <div>
        <p>Дизельные генераторы Volvo Penta</p>
        <p>
          Надежные генераторные двигатели Volvo Penta для основного
          электропитания созданы для работы в сложных условиях. Благодаря
          непревзойденной способности принимать нагрузку, низкому расходу
          топлива и простоте установки, вы получаете надежное и экономичное
          решение для основного электропитания, гарантирующее максимальное время
          безотказной работы.
        </p>
        <p>Топливная эффективность</p>
        <p>Решения для основного электропитания с низким расходом топлива</p>
        <p>
          Генераторы для основного электропитания Volvo Penta разработаны с
          использованием крайне эффективной стратегии сгорания, включая систему
          “общая топливная рампа”, которая минимизирует расход топлива. Мы также
          добавили эффективную систему последующей обработки для двигателей
          уровня Tier IV Final и Stage V, что увеличивает экономию топлива.
        </p>
        <p>Общая стоимость владения</p>
        <p>Контроль общей стоимости владения</p>
        <p>
          Топливная эффективность генераторов для основного электропитания Volvo
          Penta способствует снижению общей стоимости владения. Интервалы
          технического обслуживания и замены масла увеличены, низкое тепловое
          воздействие, удобное обслуживание и взаимозаменяемость запчастей также
          способствуют снижению затрат.
        </p>
        <p>Высокая мощность</p>
        <p>Оптимизированные операции</p>
        <p>
          Генераторы для основного электропитания с высокой плотностью мощности
        </p>
        <p>
          Генераторы основного электропитания Volvo Penta обеспечивают высокую
          плотность мощности для повышения эффективности вашей работы.
          Компактный дизайн снижает затраты на хранение, а небольшой вес и
          простая установка облегчают транспортировку и обслуживание.
        </p>
        <p>Преимущества сходства</p>
        <p>Технологии снижения выбросов и гибкие установки</p>
        <p>
          Наши двигатели генераторов для основного электропитания соответствуют
          региональным требованиям от Stage II до Stage V и построены на
          одинаковой платформе. Это дает преимущество в виде взаимозаменяемости
          запчастей и единообразия установки по всему миру. Поставка двигателя в
          собранном виде упрощает установку, и она поддерживается нашими
          инженерами-приложениями.
        </p>
        <p>Выгоды для промышленности</p>
        <p>Служба действий Volvo Penta</p>
        <p>Глобальная поддержка</p>
        <p>
          С 900 дилерами в 130 странах вы можете воспользоваться глобальной
          дилерской сетью с местными специалистами. Вместе с нашей сетью
          распространения запчастей и службой действий Volvo Penta, предлагающей
          поддержку 24/7, у вас всегда будет кто-то, готовый помочь.
        </p>
        <span>Серия ROYALPOWER / VOLVO PENTA</span>
        <div>
          <img src="/44.png"></img>
        </div>
      </div>
    ),
    descriptionImg: "",
    category: "DieselGenerator",
    brand: "Volvo Series",
  },
  {
    id: 14,
    mainImg: "/45.webp",
    name: "Морской генератор Perkins",
    shortDescription:
      "Морской генератор Perkins Морские дизельные генераторные установки Royal Perkins используют оригинальные немецкие дизельные двигатели Perkins, обеспечивая сборку с передовой технологией. Эти установки отличаются небольшими размерами, низким расходом топлива, малым весом, высокой надежностью и долговечностью, низкими вибрациями, низким уровнем шума, а также удобством в использовании и обслуживании. Они широко применяются на быстроходных катерах, пассажирских судах, рыболовных лодках, балкерах, океанских рыболовных судах, служебных и инженерных судах.",
    qrCode:
      "https://www.cnroyalpower.com/phoenix/admin/prod/qrcode/redirect/oCKBDiGMZHwE",
    fullDescription: (
      <div>
        <p>
          Опираясь на британские технологии, дизельный двигатель Perkins
          сочетает в себе компактную конструкцию, высокую мощность,
          экономичность, сильную адаптивность к окружающей среде и высокую
          надежность, что позволяет пользователям постоянно наслаждаться
          множеством убедительных характеристик и завоевало доверие большинства
          пользователей.
        </p>
        <p>
          Морские дизельные генераторные установки Royal Perkins используют
          оригинальные немецкие дизельные двигатели Perkins, обеспечивая сборку
          с передовой технологией. Эти установки отличаются небольшими
          размерами, низким расходом топлива, малым весом, высокой надежностью и
          долговечностью, низкими вибрациями, низким уровнем шума, а также
          удобством в использовании и обслуживании. Они широко применяются на
          быстроходных катерах, пассажирских судах, рыболовных лодках, балкерах,
          океанских рыболовных судах, служебных и инженерных судах.
        </p>
        <img src="/46.webp"></img>
        <span className="text-xl">Main features </span>
        <img src="/47.webp"></img>
        <ul>
          <li>
            1. Полная серия продуктов, широкий охват мощности, отличная
            стабильность и срок службы, что позволяет удовлетворить потребности
            различных клиентов.
          </li>
          <li>
            2. Легкий вес, высокая мощность, что приносит огромную выгоду для
            энергосбережения и защиты окружающей среды.
          </li>
          <li>
            3. Независимая система впрыска топлива, низкое загрязнение
            выхлопными газами (двигатель EFI соответствует стандарту Euro III),
            более соответствует экономическим и экологическим тенденциям.
          </li>
          <li>
            4. Встроенный демпфер для борьбы с вибрацией в воздухоохлаждаемом
            морском двигателе.
          </li>
          <li>
            5. Двигатель использует новейшие европейские и американские
            технологии и высокопрочные, износостойкие материалы для обеспечения
            первоклассного качества.
          </li>
          <li>
            6. Широкий выбор фланцевых адаптеров и муфт с одинарными
            подшипниками.
          </li>
          <li>
            7. Небольшой размер, компактная конструкция, красивый внешний вид,
            стабильная работа, низкий расход топлива, удобство установки и
            простота технического обслуживания.
          </li>
          <li>
            8. Оптимальный дизайн системы снижения вибрации на основе
            компьютерного динамического моделирования.
          </li>
          <li>
            9. Стратегия управления полной системой мониторинга на основе
            надежностного проектирования.
          </li>
          <li>
            10. Простая установка и техническое обслуживание, легкий доступ к
            клеммам и вращающимся диодам.
          </li>
          <li>
            11. Отличная производительность, стабильная работа, низкие вибрации,
            долгий срок эксплуатации и длительное время до капитального ремонта.
          </li>
          <li>
            12. Индивидуально настроенная система глушителей выхлопа для каждого
            агрегата.
          </li>
          <li>
            13. Достаточное количество запасных частей и более 4000 точек
            технической поддержки по всему миру.
          </li>
          <li>
            14. Оптимизированные мощность и скорость широко применимы к
            различным размерам и типам балкеров, контейнеровозов, танкеров и
            инженерных судов.
          </li>
        </ul>
        <span className="text-xl">Морской тип Perkins 50 Гц/1500 об/мин</span>
        <div>
          <div className="flex overflow-scroll mb-10">
            <table className="border border-grey-400">
              {" "}
              <tbody>
                {" "}
                <tr className="border border-grey-400">
                  {" "}
                  <td className="border border-grey-400">
                    <p>Generator &nbsp; spec.</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>Engine &nbsp; Spec.</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>Genset &nbsp; Data</p>
                  </td>{" "}
                </tr>{" "}
                <tr className="border border-grey-400">
                  {" "}
                  <td className="border border-grey-400">
                    <p>Model</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>Rated &nbsp; Power</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>Frequency/</p>
                    <p>Voltage</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>Engine &nbsp; Model</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>Power/Speed</p>
                    <p>kW/RPM</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>Cylinder &nbsp; No.</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>Dimensions</p>
                    <p>L×W×H(mm)</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>Weight</p>
                    <p>(kg)</p>
                  </td>{" "}
                </tr>{" "}
                <tr className="border border-grey-400">
                  {" "}
                  <td className="border border-grey-400">
                    <p>kW</p>
                  </td>{" "}
                  <td width="5">
                    <p>kVA</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>Hz/ V</p>
                  </td>{" "}
                </tr>{" "}
                <tr className="border border-grey-400">
                  {" "}
                  <td className="border border-grey-400">
                    <p>CCFJ10J-WTP</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>10</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>13</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>50/400</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>415 GM</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>12.3/1500</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>3</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>1076*520*700</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>409</p>
                  </td>{" "}
                </tr>{" "}
                <tr className="border border-grey-400">
                  {" "}
                  <td className="border border-grey-400">
                    <p>CCFJ16J-WTP</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>16</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>20</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>50/400</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>422 GM</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>18.4/1500</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>4</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>1258*500*780</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>512</p>
                  </td>{" "}
                </tr>{" "}
                <tr className="border border-grey-400">
                  {" "}
                  <td className="border border-grey-400">
                    <p>CCFJ20J-WTP</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>20</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>25</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>50/400</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>422 TGM</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>25.2/1500</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>4</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>1312*560*800</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>545</p>
                  </td>{" "}
                </tr>{" "}
                <tr className="border border-grey-400">
                  {" "}
                  <td className="border border-grey-400">
                    <p>CCFJ24J-WTP</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>24</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>30</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>50/400</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>4.4 GM</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>42.7/1500</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>4</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>1490*700*920</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>762</p>
                  </td>{" "}
                </tr>{" "}
                <tr className="border border-grey-400">
                  {" "}
                  <td className="border border-grey-400">
                    <p>CCFJ38J-WTP</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>38</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>48</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>50/400</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>4.4 GM</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>42.71500</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>4</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>1644*700*920</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>859</p>
                  </td>{" "}
                </tr>{" "}
                <tr className="border border-grey-400">
                  {" "}
                  <td className="border border-grey-400">
                    <p>CCFJ50J-WTP</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>50</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>63</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>50/400</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>4.4 TGM</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>56.4/1500</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>4</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>1644*700*980</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>965</p>
                  </td>{" "}
                </tr>{" "}
                <tr className="border border-grey-400">
                  {" "}
                  <td className="border border-grey-400">
                    <p>CCFJ65J-WTP</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>64</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>80</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>50/400</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>4.4 TWGM</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>75/1500</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>4</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>1644*760*1340</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>1058</p>
                  </td>{" "}
                </tr>{" "}
                <tr className="border border-grey-400">
                  {" "}
                  <td className="border border-grey-400">
                    <p>CCFJ80J-WTP</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>80</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>100</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>50/400</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>4.4TW2GM</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>93.6/1500</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>4</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>1644*760*1340</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>1078</p>
                  </td>{" "}
                </tr>{" "}
                <tr className="border border-grey-400">
                  {" "}
                  <td className="border border-grey-400">
                    <p>CCFJ100J-WTP</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>100</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>125</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>50/400</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>E70TAG1M</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>109/1500</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>6</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>2013*1000*1350</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>1868</p>
                  </td>{" "}
                </tr>{" "}
                <tr className="border border-grey-400">
                  {" "}
                  <td className="border border-grey-400">
                    <p>CCFJ115J-WTP</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>115</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>144</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>50/400</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>E70TAG2M</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>129/1500</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>6</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>2013*1000*1350</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>1912</p>
                  </td>{" "}
                </tr>{" "}
                <tr className="border border-grey-400">
                  {" "}
                  <td className="border border-grey-400">
                    <p>CCFJ128J-WTP</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>128</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>160</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>50/400</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>E70TAG3M</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>164/1500</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>6</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>2063*1000*1350</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>1960</p>
                  </td>{" "}
                </tr>{" "}
                <tr className="border border-grey-400">
                  {" "}
                  <td className="border border-grey-400">
                    <p>CCFJ150J-WTP</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>150</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>188</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>50/400</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>E70TAG3M</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>164/1500</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>6</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>2162*1000*1350</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>2130</p>
                  </td>{" "}
                </tr>{" "}
              </tbody>{" "}
            </table>
          </div>
        </div>
        <span className="text-xl">Морской тип Perkins 60 Гц/1800 об/мин</span>
        <div>
          <div className="flex overflow-scroll">
            <table className="border border-grey-400">
              {" "}
              <tbody>
                {" "}
                <tr className="border border-grey-400">
                  {" "}
                  <td className="border border-grey-400">
                    <p>Generator &nbsp; spec.</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>Engine &nbsp; Spec.</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>Genset &nbsp; Data</p>
                  </td>{" "}
                </tr>{" "}
                <tr className="border border-grey-400">
                  {" "}
                  <td className="border border-grey-400">
                    <p>Model</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>Rated &nbsp; Power</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>Frequency/</p>
                    <p>Voltage</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>Engine &nbsp; Model</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>Power/Speed</p>
                    <p>kW/RPM</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>Cylinder &nbsp; No.</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>Dimensions</p>
                    <p>L×W×H(mm)</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>Weight</p>
                    <p>(kg)</p>
                  </td>{" "}
                </tr>{" "}
                <tr className="border border-grey-400">
                  {" "}
                  <td width="27">
                    <p>kW</p>
                  </td>{" "}
                  <td width="15">
                    <p>kVA</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>Hz/ V</p>
                  </td>{" "}
                </tr>{" "}
                <tr className="border border-grey-400">
                  {" "}
                  <td width="27">
                    <p>CCFJ12J-WTP</p>
                  </td>{" "}
                  <td width="5">
                    <p>12.5</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>16</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>60/440</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>415 GM</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>14.7/1800</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>3</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>1076*520*700</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>409</p>
                  </td>{" "}
                </tr>{" "}
                <tr className="border border-grey-400">
                  {" "}
                  <td width="27">
                    <p>CCFJ20J-WTP</p>
                  </td>{" "}
                  <td width="5">
                    <p>20</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>25</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>60/440</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>422 GM</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>22/1800</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>4</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>1258*500*780</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>512</p>
                  </td>{" "}
                </tr>{" "}
                <tr className="border border-grey-400">
                  {" "}
                  <td width="111">
                    <p>CCFJ27J-WTP</p>
                  </td>{" "}
                  <td width="5">
                    <p>27</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>34</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>60/440</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>422 TGM</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>30.3/1800</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>4</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>1338*560*800</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>558</p>
                  </td>{" "}
                </tr>{" "}
                <tr className="border border-grey-400">
                  {" "}
                  <td width="27">
                    <p>CCFJ36J-WTP</p>
                  </td>{" "}
                  <td width="5">
                    <p>36</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>45</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>60/440</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>4.4 GM</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>49.1/1800</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>4</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>1535*700*920</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>780</p>
                  </td>{" "}
                </tr>{" "}
                <tr className="border border-grey-400">
                  {" "}
                  <td width="27">
                    <p>CCFJ42J-WTP</p>
                  </td>{" "}
                  <td width="5">
                    <p>42</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>52.5</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>60/440</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>4.4 GM</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>49.1/1800</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>4</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>1554*700*920</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>840</p>
                  </td>{" "}
                </tr>{" "}
                <tr className="border border-grey-400">
                  {" "}
                  <td width="27">
                    <p>CCFJ55J-WTP</p>
                  </td>{" "}
                  <td width="5">
                    <p>55</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>69</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>60/440</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>4.4 TGM</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>63.6/1800</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>4</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>1644*700*980</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>960</p>
                  </td>{" "}
                </tr>{" "}
                <tr className="border border-grey-400">
                  {" "}
                  <td width="27">
                    <p>CCFJ70J-WTP</p>
                  </td>{" "}
                  <td width="5">
                    <p>70</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>87.5</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>60/440</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>4.4 TWGM</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>82.7/1800</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>4</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>1689*760*1340</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>1020</p>
                  </td>{" "}
                </tr>{" "}
                <tr className="border border-grey-400">
                  {" "}
                  <td width="27">
                    <p>CCFJ90J-WTP</p>
                  </td>{" "}
                  <td width="5">
                    <p>90</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>112.5</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>60/440</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>4.4TW2GM</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>106.8/1800</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>4</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>1644*760*1340</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>1080</p>
                  </td>{" "}
                </tr>{" "}
                <tr className="border border-grey-400">
                  {" "}
                  <td width="27">
                    <p>CCFJ110J-WTP</p>
                  </td>{" "}
                  <td width="5">
                    <p>110</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>137.5</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>60/440</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>E70TAG1M</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>129/1800</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>6</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>2013*1000*1350</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>1860</p>
                  </td>{" "}
                </tr>{" "}
                <tr className="border border-grey-400">
                  {" "}
                  <td width="27">
                    <p>CCFJ150J-WTP</p>
                  </td>{" "}
                  <td width="5">
                    <p>150</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>187.5</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>60/440</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>E70TAG2M</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>164/1800</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>6</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>2063*1000*1350</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>1960</p>
                  </td>{" "}
                </tr>{" "}
                <tr className="border border-grey-400">
                  {" "}
                  <td width="27">
                    <p>CCFJ175J-WTP</p>
                  </td>{" "}
                  <td width="5">
                    <p>175</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>219</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>60/440</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>E70TAG3M</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>191/1800</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>6</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>2103*1000*1350</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>2020</p>
                  </td>{" "}
                </tr>{" "}
                <tr className="border border-grey-400">
                  {" "}
                  <td width="27">
                    <p>CCFJ200J-WTP</p>
                  </td>{" "}
                  <td width="5">
                    <p>200</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>250</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>60/440</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>E70TAG4M</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>218/1800</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>6</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>2162*1000*1350</p>
                  </td>{" "}
                  <td className="border border-grey-400">
                    <p>2130</p>
                  </td>{" "}
                </tr>{" "}
              </tbody>{" "}
            </table>
          </div>
        </div>
      </div>
    ),
    descriptionImg: "",
    category: "MarineGenerator",
    brand: "Perkins Series",
  },
  {
    id: 15,
    mainImg: "/45.webp",
    name: "Морской генератор Doosan",
    shortDescription:
      "Морской генератор Doosan Двигатели Doosan Infracore для генерации энергии разработаны для обеспечения максимальной выходной мощности и долговечности. Эти двигатели устанавливаются в основных и резервных генераторах по всему миру. Генераторы Doosan, произведенные в Корее, отличаются низким расходом топлива и эффективной работой в широком диапазоне мощностей от 165 кВА до 825 кВА. Двигатели Doosan имеют рабочий объем от 3,4 до 22 литров и являются экологически безопасными. Doosan Infracore поставляет высококачественные дизельные двигатели для использования в широком спектре промышленных приложений, строительной техники и генерации энергии.",
    qrCode:
      "https://www.cnroyalpower.com/phoenix/admin/prod/qrcode/redirect/oCKBDiGMZHwE",
    fullDescription: (
      <div>
        <span>
          {" "}
          Морские дизельные генераторы Doosan, производимые нашей компанией,
          изготавливаются строго в соответствии со стандартами основных
          международных классификационных обществ и комплектуются альтернаторами
          таких брендов, как Marathon, Stamford, Siemens. Эти генераторы
          обладают широким диапазоном мощностей и сертифицированы такими
          классификационными обществами, как CCS, ZY, RS, BV, ABS и другие.
          Продукция хорошо продается как на внутреннем, так и на зарубежных
          рынках.
        </span>
        <ul>
          Основные характеристики
          <li>
            1. Высококачественные компоненты от ведущих международных
            производителей, обеспечивающие высокую надежность и превосходную
            производительность.
          </li>
          <li>
            2. Разработан для жестких условий морских применений с превосходной
            долговечностью и высоким временем безотказной работы.
          </li>
          <li>
            3. Интегрированные системы сигнализации могут быть настроены для
            цифровой связи с центральной системой обработки данных и
            сигнализации судна.
          </li>
          <li>
            4. Низкие затраты на обслуживание и длительный ремонтный цикл.
          </li>
          <li>
            5. Все элементы генераторной установки разработаны для работы в
            полной системной гармонии, обеспечивая оптимальную
            производительность и максимальную эффективность.
          </li>
          <li>
            6. Оснащен электронным регулированием для оптимального принятия
            ступенчатых нагрузок.
          </li>
          <li>7. Быстрый холодный запуск и встроенный набор характеристик.</li>
          <li>
            8. Высокая надежность и низкие затраты в течение жизненного цикла.
          </li>
          <li>
            9. Оборудованная интеллектуальная система управления может
            автоматически обнаруживать рабочее состояние установки, запускать и
            останавливать установку, быстро и надежно запускаться, чтобы
            гарантировать безопасность и эффективность работы.
          </li>
        </ul>
        <p>Морской тип Doosan 50 Гц/1500 об/мин</p>
        <div>
          <div className="flex overflow-scroll">
            <table className="border border-grey-400">
              <tbody>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>Generator spec.</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>Engine Spec.</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>Genset Data</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>Model</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>Rated Power</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>Frequency/</p>
                    <p>Voltage</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>Engine Model</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>Power/Speed</p>
                    <p>kW/RPM</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>Cylinder No.</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>Dimensions</p>
                    <p>L×W×H(mm)</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>Weight</p>
                    <p>(kg)</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>kW</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>kVA</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>Hz/ V</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>CCFJ80J-WTP</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>80</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>100</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>50/400</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>AD066TI</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>96/1500</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>6</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>1841*800*1090</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>1040</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>CCFJ64J-WTP</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>64</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>80</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>50/400</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>AD136</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>77/1500</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>6</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>1981*770*1125</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>1220</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>CCFJ90J-WTP</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>90</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>112.5</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>50/400</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>AD136T</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>107/1500</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>6</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>1992*770*1125</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>1270</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>CCFJ100J-WTP</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>100</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>125</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>50/400</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>AD136TI</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>115/1500</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>6</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>2096*825*1125</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>1330</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>CCFJ128J-WTP</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>128</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>160</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>50/400</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>AD086TI</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>151/1500</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>6</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>2146*825*1162</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>1490</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>CCFJ150J-WTP</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>150</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>187.5</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>50/400</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>AD196TI</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>173/1500</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>6</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>2152*854*1272</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>1800</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>CCFJ180J-WTP</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>180</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>225</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>50/400</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>AD126TI</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>206/1500</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>6</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>2256*854*1272</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>1950</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>CCFJ250J-WTP</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>250</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>312.5</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>50/400</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>AD158TI</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>302/1500</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>8</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>2209*1222*1274</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>2440</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>CCFJ320J-WTP</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>320</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>400</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>50/400</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>AD180TI</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>357/1500</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>10</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>2532*1222*1369</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>3000</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>CCFJ400J-WTP</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>400</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>500</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>50/400</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>AD222TI</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>446/1500</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>12</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>2704*1222*1400</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>3180</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>CCFJ280J-WTP</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>280</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>350</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>50/400</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>4AD158TI</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>325/1500</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>8</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>2467*1237*1317</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>2860</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>CCFJ440J-WTP</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>440</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>550</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>50/400</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>4AD222TI</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>491/1500</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>12</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>2858*1243*1436</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>3600</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <p className="mt-10">Морской тип Doosan 60 Гц/1800 об/мин</p>
        <div>
          <div className="flex overflow-scroll">
            <table className="border border-grey-400">
              <tbody>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>Generator spec.</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>Engine Spec.</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>Genset Data</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>Model</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>Rated Power</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>Frequency/</p>
                    <p>Voltage</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>Engine Model</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>Power/Speed</p>
                    <p>kW/RPM</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>Cylinder No.</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>Dimensions</p>
                    <p>L×W×H(mm)</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>Weight</p>
                    <p>(kg)</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>kW</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>kVA</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>Hz/ V</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>CCFJ95J-WTP</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>95</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>119</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>60/440</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>AD066TI</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>110/1800</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>6</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>1841*800*1090</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>1050</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>CCFJ84J-WTP</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>84</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>105</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>60/440</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>AD136</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>93/1800</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>6</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>1981*770*1125</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>1230</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>CCFJ110J-WTP</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>110</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>137.5</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>60/440</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>AD136T</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>125/1800</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>6</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>2096*770*1125</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>1320</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>CCFJ120J-WTP</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>120</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>150</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>60/440</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>AD136TI</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>138/1800</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>6</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>2096*825*1125</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>1400</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>CCFJ150J-WTP</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>150</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>187.5</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>60/440</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>AD086TI</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>186/1800</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>6</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>2146*825*1162</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>1480</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>CCFJ180J-WTP</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>180</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>225</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>60/440</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>AD196TI</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>199/1800</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>6</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>2197*854*1272</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>1760</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>CCFJ216J-WTP</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>216</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>270</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>60/440</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>AD126TI</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>247/1800</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>6</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>2256*854*1272</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>1980</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>CCFJ320J-WTP</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>320</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>400</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>60/440</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>AD158TI</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>353/1800</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>8</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>2299*1222*1274</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>2600</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>CCFJ400J-WTP</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>400</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>500</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>60/440</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>AD180TI</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>441/1800</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>10</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>2532*1222*1369</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>3060</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>CCFJ480J-WTP</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>480</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>600</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>60/440</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>AD222TI</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>530/1800</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>12</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>2690*1222*1399</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>3500</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>CCFJ335J-WTP</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>335</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>418</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>60/440</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>4AD158TI</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>390/1800</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>8</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>2467*1237*1317</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>2950</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>CCFJ515J-WTP</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>515</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>644</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>60/440</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>4AD222TI</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>588/1800</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>12</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>2858*1243*1436</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>3780</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="mb-10"></div>
      </div>
    ),
    descriptionImg: "",
    category: "MarineGenerator",
    brand: "Doosan Series",
  },
  {
    id: 16,
    mainImg: "/48.webp",
    name: "Газовый генератор Waukesha",
    shortDescription:
      "Газовый генератор Waukesha Специально разработан для самых сложных и удаленных условий нефтегазовой промышленности, наши ранние технологии до сих пор остаются одними из лучших. Сегодня мы продолжаем развивать эти наработки, совершенствуем технологии двигателей, создаем новые сервисные инновации и расширяем влияние нашей растущей сети каналов. В компании Waukesha мы ежедневно работаем над проектированием и созданием двигателей и программ, которые помогут максимально повысить эффективность вашей работы и строить ваше будущее.",
    qrCode:
      "https://www.cnroyalpower.com/phoenix/admin/prod/qrcode/redirect/oCKBDiGMZHwE",
    fullDescription: (
      <div>
        <p>
          Газовые двигатели Waukesha спроектированы для надежной работы в
          изолированных, критически важных и сложных приложениях.
          Распространение продукции Waukesha компанией Clarke Energy ограничено
          территорией Индии. Благодаря прочной конструкции и непревзойденной
          гибкости, наши двигатели с богатым и обедненным горением охватывают
          широкий спектр применений и уровней соответствия различным
          экологическим стандартам. Предлагая обе конструкции, с богатым и
          обедненным горением, индийская команда Clarke Energy предоставляет ряд
          продуктов, чтобы помочь нашим клиентам делать разумный выбор для
          будущего.
        </p>
        <p>
          Разработанный для требовательной отрасли и опирающийся на более чем
          вековой опыт в производстве двигателей, двигатель Waukesha является
          надежной инвестицией, обеспечивающей душевное спокойствие благодаря
          многочисленным преимуществам.
        </p>
        <img src="/49.png"></img>
        <p>Преимущества</p>
        <ul>
          <li>
            - Прочные конструкции, которые обеспечивают крайнее доверие в
            удаленных, сложных и часто критически важных приложениях.
          </li>
          <li>
            - Непревзойденная толерантность к изменению качества топлива,
            которая максимизирует выходную мощность, время безотказной работы и
            прибыльность.
          </li>
          <li>
            - Портфель моделей с гибкими уровнями выбросов, чтобы
            соответствовать местным требованиям к качеству воздуха, даже когда
            двигатели перемещаются на новые объекты.
          </li>
          <li>
            - Модели для использования биогаза для наилучшего использования
            доступных видов топлива.
          </li>
          <li>
            - Clarke Energy предоставляет запчасти и обслуживание для двигателей
            Waukesha круглосуточно.
          </li>
          <li>
            - Стратегически расположенное обучение с авторизацией завода,
            которое обеспечивает знания для защиты и увеличения стоимости
            двигателя Waukesha.
          </li>
        </ul>
        <p>Диапазон электрической мощности</p>
        <ul>
          <li>- Waukesha VGF (220 кВт – 830 кВт)</li>
          <li>- Waukesha VHP (540 кВт – 1600 кВт)</li>
          <li>- Waukesha 275GL+ (2,415 кВт – 3,605 кВт)</li>
          <li>- Waukesha Mobiflex (943 кВт и 1,680 кВт)</li>
        </ul>
        <img src="/50.webp"></img>
        <img src="/51.webp"></img>
        <p>Помощь в планировании на будущее</p>
        <p>
          При выборе типа двигателя, который наилучшим образом соответствует
          вашим потребностям, необходимо учитывать множество факторов. Описав
          некоторые из этих ключевых аспектов, мы надеемся, что вы получите
          представление и перспективу для принятия наилучшего решения в вашей
          текущей ситуации, принимая во внимание будущее.
        </p>
        <ul className="mb-10">
          Три критически важных аспекта<li>- Регулирование выбросов</li>
          <li>- Экономическая эффективность</li>
          <li>- Углеродный след</li>
        </ul>
      </div>
    ),
    descriptionImg: "",
    category: "GasGenerator",
    brand: "Waukesha Series",
  },
  {
    id: 17,
    mainImg: "/INNIO.webp",
    name: "Газовый генератор Jenbacher",
    shortDescription:
      "Газовый генератор Jenbacher Газовый генератор Jenbacher был непрерывно усовершенствован на основе обширного полевого опыта и достижений в технологии проектирования двигателей для повышения эффективности. Оснащенный 8-цилиндровым рядным двигателем, он способствует оптимизированному сгоранию для выработки электроэнергии с высокой эффективностью в диапазоне 335 кВт.",
    qrCode:
      "https://www.cnroyalpower.com/phoenix/admin/prod/qrcode/redirect/oCKBDiGMZHwE",
    fullDescription: (
      <div>
        <p className="text-xl">Бренд</p>
        <p>INNIO</p>
        <p>
          INNIO находится в деревне Йенбах, Австрия, где также расположен центр
          производства газовых двигателей Jenbacher. На предприятии площадью
          65,000 квадратных метров работают более 1,600 человек. Эта отмеченная
          наградами фабрика является лидером в области экологической
          устойчивости, обучения на производстве, профессиональной подготовки и
          энергосбережения.
        </p>
        <p className="text-xl">Бизнес JENBACHER компании INNIO</p>
        <p>
          Подразделение газовых двигателей Jenbacher в компании INNIO является
          мировым лидером в производстве газовых двигателей, комплектных
          генераторных установок и когенерационных установок для генерации
          энергии. Газовые двигатели Jenbacher, мощностью от 200 кВт до 10 МВт,
          работают на природном газе или различных других газах, включая биогаз,
          свалочный газ, газ из сточных вод, синтетические газы и водород.
          Подразделение газовых двигателей Jenbacher компании INNIO поставляет
          инновационные газовые двигатели Jenbacher в Европу, Америку, Азию,
          Южную Африку и Южную Америку. Во всем мире используется примерно
          20,000 газовых двигателей Jenbacher, производящих почти 28 ГВт общей
          выходной мощности.
        </p>
        <img src="/52.webp"></img>
        <p className="text-xl">ПРОГРАММА</p>
        <p>
          Газовые двигатели Jenbacher известны во всем мире своей
          производительностью и надежностью. Более 80 лет Jenbacher признан
          производителем, разрабатывающим и производящим газовые двигатели для
          эффективной генерации тепла и электроэнергии. Продукция компании
          хорошо развита и протестирована, что позволяет точно соответствовать
          специфическим требованиям каждого клиента. Основные компоненты,
          необходимые для надежной работы двигателя, такие как свечи зажигания,
          газовые миксеры и системы управления двигателем, разрабатываются
          непосредственно в Йенбахе. Это позволяет Jenbacher контролировать
          разработку и строительство, системную интеграцию и тестирование полных
          установок.
        </p>
        <p>
          Газовые двигатели Jenbacher предоставляют диапазон мощности от 200 кВт
          до 10 МВт с гибкостью топлива для работы на природном газе или ряде
          других газов. Двигатели Jenbacher обеспечивают местное снабжение
          электроэнергией, теплом и охлаждением для различных коммерческих,
          промышленных и муниципальных приложений, особенно для производства
          возобновляемой энергии и энергии из отходов, промышленной генерации
          энергии и когенерации/ТЭЦ (совмещенная генерация тепла и
          электроэнергии) и генерации энергии на нефтяных месторождениях. Более
          20,000 газовых двигателей Jenbacher работают в более чем 100 странах.
        </p>
        <p>
          Через местных партнеров по каналам Jenbacher может помочь вам выбрать
          из обширного портфолио газовых двигателей Jenbacher компании INNIO,
          чтобы удовлетворить ваши специфические потребности с точки зрения
          электрической мощности, а также тепловой или охлаждающей способности.
          Но если энергия является наследием мира, то цифровизация — это его
          будущее. Благодаря цифровизации, Jenbacher постоянно улучшает дизайн и
          конструкцию продукции на фабриках нового поколения, квалифицированно
          выполняет услуги компании и выходит за рамки реактивных решений
          данных, переходя к прогнозным решениям.
        </p>
        <img src="/53.webp"></img>
        <img src="/54.webp"></img>
        <p className="text-xl">ПОРТФОЛИО</p>
        <ul>
          Газовые двигатели Jenbacher компании INNIO имеют диапазон мощности от
          200 кВт до 10 МВт, обеспечивая гибкость в выборе топлива для работы
          как на природном газе, так и на различных других газах, таких как:
          <li>- Попутный / факельный газ</li>
          <li>- Биогаз</li>
          <li>- Полигонный газ</li>
          <li>- Природный газ</li>
          <li>- Газ из сточных вод</li>
          <li>- Пропан</li>
          <li>
            - Специальные газы (например, газ угольных шахт, коксовый газ,
            пиролизный газ, стальной газ, древесный газ и т.д.)
          </li>
        </ul>
        <p>
          С более чем 16,000 действующими газовыми двигателями Jenbacher,
          компания обеспечивает местное снабжение электроэнергией, теплом и
          охлаждением для различных коммерческих, промышленных и муниципальных
          приложений в более чем 100 странах. Фактически, Jenbacher имеет одну
          из крупнейших установленных баз газовых двигателей для совмещенной
          генерации тепла и электроэнергии (ТЭЦ) в мире.
        </p>
        <img src="/55.webp"></img>
        <img src="/56.webp" className="mb-10"></img>
      </div>
    ),
    descriptionImg: "",
    category: "GasGenerator",
    brand: "Jenbacher Series",
  },
  {
    id: 18,
    mainImg: "/57.webp",
    name: "Газовый генератор Jichai",
    shortDescription:
      "Газовый генератор Jichai У нас многолетний опыт производства метанового генератора мощностью 1000 кВт, запасных частей к двигателю, а также запасных частей для газового двигателя Jichai 12V190, благодаря которому мы можем предложить вам лучшие продукты и услуги, чтобы вы могли быть спокойны. Наша компания придерживается принципа «постоянного совершенствования, клиент прежде всего, ориентированность на честность», и предоставляет клиентам высококачественные газовые электростанции и услуги. Мы стремимся улучшить деловую репутацию предприятия и создать положительный социальный имидж компании. Мы придерживаемся политики качества «для пользователей» и предоставляем клиентам в стране и за рубежом более экономичные продукты, конкурентоспособные цены, своевременную доставку и высококачественные услуги. Чтобы хорошо выполнить работу, предприятие должно нести ответственность за проект и удовлетворять пользователей. В рамках бизнес-философии, заключающейся в использовании технологических инноваций в качестве ориентира, опираясь на талантливых специалистов и рыночный спрос как на средство, мы внедряем инновации в технологии и совершенствуем услуги. Мы углубляемся на все уровни предприятия, во все аспекты, тщательно и совершенным образом, чтобы производительность продуктов и услуг достигла наилучших результатов.",
    qrCode:
      "https://www.cnroyalpower.com/phoenix/admin/prod/qrcode/redirect/oCKBDiGMZHwE",
    fullDescription: (
      <div>
        <p>ВВЕДЕНИЕ</p>
        <p>
          Газовый двигатель H16V190ZLT-2 с внешним смешиванием разработан нашей
          компанией для удовлетворения требований рынка. Весь двигатель был
          оптимизирован путем исправления недостатков первого поколения газовых
          двигателей. Производительность, топливная экономичность и надежность
          этого двигателя значительно улучшены благодаря использованию внешнего
          смешивания, увеличению степени сжатия и коэффициента подъема,
          увеличению коэффициента завихрения, реализации обедненного горения
          путем контроля соотношения воздух-топливо, применению
          высокоэнергетического зажигания и т.д.
        </p>
        <p>
          Эта серия двигателей в основном используется для генерации энергии
          одним двигателем или несколькими двигателями, образующими
          электростанцию. Она также может использоваться в качестве источника
          энергии для компрессоров, насосов для перекачки нефти, насосов для
          впрыска воды и т.д.
        </p>
        <p className="text-xl">ОСНОВНЫЕ ХАРАКТЕРИСТИКИ</p>
        <ul className="border border-grey-400 flex mb-10">
          <li className="border border-grey-400 w-1/2">
            <ul>
              Дизайн двигателя
              <li>- Разработан компанией AVL, Австрия</li>
              <li>- Интеллектуальная собственность принадлежит JCPC</li>
              <li>
                - Анализ методом конечных элементов с учетом трехосного
                напряжения
              </li>
              <li>- Длинный ход поршня, больший рабочий объем</li>
              <li>- Низкая скорость (1000 об/мин), более надежный</li>
              <li>- Передовая мировая стандартная производительность</li>
            </ul>
            <ul>
              Генератор
              <li>- Бесщеточное возбуждение</li>
              <li>- AVR (Автоматический регулятор напряжения)</li>
              <li>- Улучшенная изоляция и защита</li>
            </ul>
            <ul>
              Безопасность
              <li>
                - Автоматическая защита от остановки при низком давлении масла
              </li>
              <li>
                - Автоматическая защита от остановки при превышении скорости
              </li>
              <li>- Взрывозащита</li>
              <li>
                - Сигнализация при высокой температуре охлаждающей жидкости
              </li>
              <li>- Сигнализация при низком уровне охлаждающей жидкости</li>
              <li>- Сигнализация при высокой температуре масла</li>
              <li>- Полная электрическая защита</li>
              <li>- Устройство аварийной остановки</li>
            </ul>
          </li>
          <li>
            <ul>
              Тестирование
              <li>
                - Строгий контроль и заводские испытания для каждого генератора
              </li>
              <li>- Тест производительности запуска</li>
              <li>- Тест на нагрузку</li>
              <li>- Тест на синхронизацию</li>
              <li>- Тест системы безопасности</li>
            </ul>
            <ul>
              Полное оснащение
              <li>- Стандартный объем поставки</li>
              <li>- Ремонтные инструменты</li>
            </ul>
            <ul>
              Легкость установки и удаления
              <li>
                - Все оборудование на общем основании с трехточечной опорой
              </li>
              <li>- Простота установки</li>
              <li>- Высокопрочная основа для подъема и снятия</li>
            </ul>
            <ul>
              Техническая поддержка и обслуживание
              <li>- Техническая поддержка и обучающие услуги</li>
              <li>- Круглосуточный телефон для технической поддержки</li>
              <li>- Быстрая поставка запасных частей</li>
              <li>
                - Послепродажное обслуживание на весь срок службы генераторной
                установки
              </li>
            </ul>
          </li>
        </ul>
        <p className="text-xl">Таблица параметров свойств</p>
        <div className="w-full">
          <div className="flex overflow-scroll w-full">
            <table className="border border-grey-400 w-full">
              <tbody>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>Model</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>1100GF-T</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>Engine type</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>H16V190ZLT-2</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>Alternator type</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>1FC series（siemens technology）</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>
                      Rated &nbsp; Power * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                      &nbsp; &nbsp; &nbsp; &nbsp;kW
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>1100</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>
                      Rated &nbsp; Speed &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                      &nbsp; &nbsp; &nbsp; &nbsp; rpm
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>1000</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>
                      Rated &nbsp; Frequency &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                      &nbsp; &nbsp; &nbsp;Hz
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>50</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>Rated &nbsp; PF &nbsp;</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>0.8</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>Voltage Regulation</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>AVR</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>Turbocharger &nbsp; Brand</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>ABB</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>Alternator &nbsp; Brand</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>Domestic &nbsp; Factory（siemens &nbsp; technology）</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>Ignition &nbsp; System Brand</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>Motortech</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>Control &nbsp; System Brand</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>Woodward</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>
                      Weight &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                      &nbsp; &nbsp; &nbsp; &nbsp; kg
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>19500</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>
                      Dimension &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                      &nbsp; &nbsp; &nbsp;mm
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>6500×2312×2777</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <p>
          *Мощность и расход топлива рассчитаны на основе стандартных условий
          ISO (температура окружающей среды 25 градусов Цельсия, атмосферное
          давление 100 кПа и относительная влажность 30%). Мощность и расход
          топлива на месте должны быть скорректированы в соответствии с
          соответствующим стандартом (таблица справа для справки)
        </p>
        <p className="text-xl">Основные характеристики двигателя</p>
        <div>
          <div className="flex overflow-scroll">
            <table className="border border-grey-400">
              <tbody>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>Model of engine</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>H16V190ZLT-2</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>Rated Power(kW)</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>1100kW</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>Rated Speed(r/min)</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>1000</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>No. and layout of cylinders</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>16-cylinder，60</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>Type</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      Four stroke, &nbsp; Water cooled, Direct injection,
                      Air-fuel ratio control, Spark plug ignition, &nbsp; Out
                      mixing,
                    </p>
                    <p>
                      Electrical control, &nbsp; Mixed after compressor,
                      Turbocharged and after cooled.
                    </p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>Heat &nbsp;consumption &nbsp; &nbsp;</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>≤9500kJ/kW·h</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>Specific oil consumption (g/kW.h)</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>≤0.6</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>Bore(mm)</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>190</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>Stroke (mm)</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>215</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>Total &nbsp; displacement (L)</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>97.53</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>Governor</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>Electronic Governor</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>Exhaust &nbsp; temperature &nbsp;（before turbo）</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>≤700℃</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>Starting &nbsp; mode</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>24V DC electric starting motor</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>Direction of &nbsp; rotation</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>Counter-clockwise(facing to flywheel)</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>Lubrication &nbsp; method</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>Pressure and splash lubrication</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>Hot water outlet &nbsp; temperature &nbsp;</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>&lt;90℃</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>Mid-cooler inlet water &nbsp; temperature</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>&lt;45℃</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>Oil temperature &nbsp;</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>&lt;90℃</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>Stable regulating &nbsp; rate &nbsp;</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>0～5 % &nbsp; adjustable</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>Cooling method &nbsp;</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>Horizontal radiator</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>Manufacturer</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>CNPC Jichai Power Co., &nbsp; Ltd</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <p className="text-xl">Основные характеристики альтернатора</p>
        <div>
          <div className="flex overflow-scroll">
            <table className="border border-grey-400">
              <tbody>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>Model of &nbsp; alternator</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>1FC series（siemens &nbsp; technology）</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>Rated &nbsp; power(kW)</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>1100</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>Rated &nbsp; voltage(V)</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>400</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>Coupling</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>Elastic</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>Voltage &nbsp; regulator</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>3 phase &nbsp; sensing with volts/Hz.</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>Voltage &nbsp; regulation</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>
                      Less than &nbsp; +/-0.5% in steady state and less than +/-
                      0.5% with 3% speed change.
                    </p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>Rated &nbsp; frequency</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>50Hz</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>Power factor</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>COS￠=0.8</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>
                      Wiring &nbsp; mode &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    </p>
                  </td>
                  <td className="border border-grey-400">
                    <p>Three-phase &nbsp; four-wire system（Y）</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>Excitation &nbsp; mode &nbsp; &nbsp;</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>Brushless &nbsp; excitation &nbsp;</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>Insulation &nbsp; class &nbsp; &nbsp; &nbsp;</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>F</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>Running &nbsp; mode &nbsp; &nbsp;</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>Continuous</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>Protective &nbsp; class &nbsp; &nbsp; &nbsp;</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>IP23</p>
                  </td>
                </tr>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>Rotating &nbsp; direction &nbsp; &nbsp;</p>
                  </td>
                  <td className="border border-grey-400">
                    <p>Anticlockwise(Facing &nbsp; to input end)</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <p>Стандартный объем поставки</p>
        <ul className="border border-grey-400 flex">
          <li className="border border-grey-400 w-1/2">
            Двигатель на природном газе
            <ul>
              <ul>
                Система впуска воздуха
                <li>- Воздушный фильтр</li>
                <li>- Воздушный охладитель</li>
                <li>- Кронштейн</li>
              </ul>
              <ul>
                Система управления
                <li>- Регулятор</li>
                <li>- Панель управления</li>
                <li>- Взрывозащита</li>
                <li>- Система безопасности</li>
              </ul>
              <ul>
                Система выхлопа
                <li>- Глушитель выхлопа</li>
                <li>- Турбокомпрессор выхлопных газов</li>
                <li>- Выпускной коллектор</li>
                <li>- Гофрированная труба</li>
                <li>- Выхлопная труба</li>
                <li>- Выхлопной коленный патрубок</li>
              </ul>
              <ul>
                Система охлаждения<li>- Горизонтальный радиатор</li>
              </ul>
            </ul>
          </li>
          <li className="border border-grey-400 w-1/2">
            <ul>
              Система пуска <li>- Постоянный ток пускового двигателя</li>
              <li>- Электрический стартер 24 В</li>
            </ul>
            <ul>
              Система смазки <li>- Основной масляный насос</li>
              <li>- Фильтр для смазочного масла</li>
              <li>- Охладитель смазочного масла</li>
              <li>- Центробежный фильтр для смазочного масла</li>
            </ul>
            <ul>
              Альтернатор <li>- Бесщеточный альтернатор возбуждения</li>
              <li>- AVR (в цифровом режиме)</li>
            </ul>
            <ul>
              Запасные части <li>- Обычные ремонтные инструменты</li>
              <li>- Специальные запасные части</li>
            </ul>
            <ul>Техническая документация</ul>
            <ul>
              Другие компоненты <li>- Общая основа</li>
              <li>- Эластичная муфта</li>
            </ul>
          </li>
        </ul>
        <p className="mt-10">Срок поставки</p>
        <p>
          Три месяца после вступления контракта в силу или по договоренности
          обеих сторон.
        </p>
        <p>Гарантия</p>
        <p>
          Один год после поставки или накопительно 1500 часов рабочего времени,
          в зависимости от того, что наступит первым.
        </p>
        <p>Установка и наладка</p>
        <p className="mb-10">
          Если клиенту потребуется, чтобы наша компания осуществила руководство
          по установке и наладке, мы организуем выезд двух инженеров для
          оказания услуг на месте. Все расходы, включая транспорт, проживание и
          страхование за рубежом, будут предоставлены клиентом.
        </p>
      </div>
    ),
    descriptionImg: "",
    category: "GasGenerator",
    brand: "Jichai Series",
  },
  {
    id: 19,
    mainImg: "/58.webp",
    name: "Газотурбинный генератор AECC AGT-15Gas мощностью 15 500 кВт.",
    shortDescription:
      "Газотурбинный генератор AECC AGT-15Gas мощностью 15 500 кВт. Данные о производительности турбинной установки.",
    qrCode:
      "https://www.cnroyalpower.com/phoenix/admin/prod/qrcode/redirect/oCKBDiGMZHwE",
    fullDescription: (
      <div>
        <p>
          China Aero Engine Group Co., Ltd. — это военно-промышленное
          предприятие, находящееся под прямым управлением центрального
          правительства. Оно включает 29 напрямую подведомственных единиц и 3
          основные компании, котирующиеся на фондовой бирже. Компания обладает
          высокими научно-исследовательскими и производственными возможностями,
          а также относительно полной системой НИОКР и производства авиационных
          двигателей и газовых турбин, предлагая широкий спектр продукции.
          Оборудуя различные типы военных самолетов, тяжелых и военных кораблей,
          а также малые и средние генераторные установки, компания внесла
          выдающийся вклад в развитие национальной оборонной промышленности и
          экономики страны.
        </p>
        <p>
          Производственные данные газотурбинного генератора AECC AGT-15Gas
          мощностью 15 500 кВт:
        </p>
        <ul className="flex">
          <li className="w-1/2 flex justify-center items-center">
            <img src="/59.webp" className="w-80"></img>
          </li>
          <li className="w-1/2 flex justify-center items-center">
            <img src="/60.webp" className="w-80"></img>
          </li>
        </ul>
        <div className="w-full flex justify-center">
          <img src="/61.png"></img>
        </div>
        <ul>
          <li>
            - первая в моей стране легкая аэродеривативная газовая турбина с
            независимыми правами интеллектуальной собственности
          </li>
          <li>
            - Используется в распределенной энергетике, аварийном
            электроснабжении, для топлив со средней и низкой теплотворной
            способностью, генерации электроэнергии на водородосодержащем топливе
            и в других областях
          </li>
          <li>
            - Высокий общий термический КПД и низкие эксплуатационные затраты
          </li>
        </ul>
        <img src="/62.webp"></img>
        <img src="/63.webp" className="mb-10"></img>
      </div>
    ),
    descriptionImg: "",
    category: "GasGenerator",
    brand: "Газотурбинный двигатель",
  },
  {
    id: 20,
    mainImg: "/64.webp",
    name: "Газотурбинный генератор AECC AGT-25Gas мощностью 27 400 кВт.",
    shortDescription:
      "Газотурбинный генератор AECC AGT-25Gas мощностью 27 400 кВт. Данные о производительности турбинной установки.",
    qrCode:
      "https://www.cnroyalpower.com/phoenix/admin/prod/qrcode/redirect/oCKBDiGMZHwE",
    fullDescription: (
      <div>
        <p>
          China Aero Engine Group Co., Ltd. — это военно-промышленное
          предприятие, находящееся под прямым управлением центрального
          правительства. Оно включает 29 напрямую подведомственных единиц и 3
          основные компании, котирующиеся на фондовой бирже. Компания обладает
          высокими научно-исследовательскими и производственными возможностями,
          а также относительно полной системой НИОКР и производства авиационных
          двигателей и газовых турбин, предлагая широкий спектр продукции.
          Оборудуя различные типы военных самолетов, тяжелых и военных кораблей,
          а также малые и средние генераторные установки, компания внесла
          выдающийся вклад в развитие национальной оборонной промышленности и
          экономики страны.
        </p>
        <p>
          Производственные данные газотурбинного генератора AECC AGT-25Gas
          мощностью 27 400 кВт:
        </p>
        <ul className="flex">
          <li className="w-1/2 flex justify-center items-center">
            <img src="/59.webp" className="w-80"></img>
          </li>
          <li className="w-1/2 flex justify-center items-center">
            <img src="/60.webp" className="w-80"></img>
          </li>
        </ul>
        <div className="w-full flex justify-center items-center">
          <div>
            <img src="/65.png"></img>
          </div>
        </div>
        <ul>
          <li>
            - первая в моей стране легкая аэродеривативная газовая турбина с
            независимыми правами интеллектуальной собственности
          </li>
          <li>
            - Используется в распределенной энергетике, аварийном
            электроснабжении, для топлив со средней и низкой теплотворной
            способностью, генерации электроэнергии на водородосодержащем топливе
            и в других областях
          </li>
          <li>
            - Высокий общий термический КПД и низкие эксплуатационные затраты
          </li>
        </ul>
        <img src="/62.webp"></img>
        <img src="/63.webp" className="mb-10"></img>
      </div>
    ),
    descriptionImg: "",
    category: "GasGenerator",
    brand: "Газотурбинный двигатель",
  },
  {
    id: 21,
    mainImg: "/62.webp",
    name: "Газотурбинный генератор AECC AGT-7Gas мощностью 6950 кВт.",
    shortDescription:
      "Газотурбинный генератор AECC AGT-7Gas мощностью 6950 кВт. Данные о производительности турбинной установки.",
    qrCode:
      "https://www.cnroyalpower.com/phoenix/admin/prod/qrcode/redirect/oCKBDiGMZHwE",
    fullDescription: (
      <div>
        <p>
          China Aero Engine Group Co., Ltd. — это военно-промышленное
          предприятие, находящееся под прямым управлением центрального
          правительства. Оно включает 29 напрямую подведомственных единиц и 3
          основные компании, котирующиеся на фондовой бирже. Компания обладает
          высокими научно-исследовательскими и производственными возможностями,
          а также относительно полной системой НИОКР и производства авиационных
          двигателей и газовых турбин, предлагая широкий спектр продукции.
          Оборудуя различные типы военных самолетов, тяжелых и военных кораблей,
          а также малые и средние генераторные установки, компания внесла
          выдающийся вклад в развитие национальной оборонной промышленности и
          экономики страны.
        </p>
        <p>
          Производственные данные газотурбинного генератора AECC AGT-25Gas
          мощностью 27 400 кВт:
        </p>
        <ul className="flex">
          <li className="w-1/2 flex justify-center items-center">
            <img src="/59.webp" className="w-80"></img>
          </li>
          <li className="w-1/2 flex justify-center items-center">
            <img src="/60.webp" className="w-80"></img>
          </li>
        </ul>
        <div className="w-full flex justify-center items-center">
          <div>
            <img src="/66.png"></img>
          </div>
        </div>
        <ul>
          <li>
            - первая в моей стране легкая аэродеривативная газовая турбина с
            независимыми правами интеллектуальной собственности
          </li>
          <li>
            - Используется в распределенной энергетике, аварийном
            электроснабжении, для топлив со средней и низкой теплотворной
            способностью, генерации электроэнергии на водородосодержащем топливе
            и в других областях
          </li>
          <li>
            - Высокий общий термический КПД и низкие эксплуатационные затраты
          </li>
        </ul>
        <img src="/62.webp"></img>
        <img src="/63.webp" className="mb-10"></img>
      </div>
    ),
    descriptionImg: "",
    category: "GasGenerator",
    brand: "Газотурбинный двигатель",
  },
  {
    id: 23,
    mainImg: "/64.webp",
    name: "Газотурбинный генератор AECC AGT-12Gas мощностью 11 500 кВт.",
    shortDescription:
      "Газотурбинный генератор AECC AGT-12Gas мощностью 11 500 кВт. Данные о производительности турбинной установки.",
    qrCode:
      "https://www.cnroyalpower.com/phoenix/admin/prod/qrcode/redirect/oCKBDiGMZHwE",
    fullDescription: (
      <div>
        <p>
          China Aero Engine Group Co., Ltd. — это военно-промышленное
          предприятие, находящееся под прямым управлением центрального
          правительства. Оно включает 29 напрямую подведомственных единиц и 3
          основные компании, котирующиеся на фондовой бирже. Компания обладает
          высокими научно-исследовательскими и производственными возможностями,
          а также относительно полной системой НИОКР и производства авиационных
          двигателей и газовых турбин, предлагая широкий спектр продукции.
          Оборудуя различные типы военных самолетов, тяжелых и военных кораблей,
          а также малые и средние генераторные установки, компания внесла
          выдающийся вклад в развитие национальной оборонной промышленности и
          экономики страны.
        </p>
        <p>
          Производственные данные газотурбинного генератора AECC AGT-25Gas
          мощностью 27 400 кВт:
        </p>
        <ul className="flex">
          <li className="w-1/2 flex justify-center items-center">
            <img src="/59.webp" className="w-80"></img>
          </li>
          <li className="w-1/2 flex justify-center items-center">
            <img src="/60.webp" className="w-80"></img>
          </li>
        </ul>
        <div className="w-full flex justify-center items-center">
          <div>
            <img src="/67.png"></img>
          </div>
        </div>
        <ul>
          <li>
            - первая в моей стране легкая аэродеривативная газовая турбина с
            независимыми правами интеллектуальной собственности
          </li>
          <li>
            - Используется в распределенной энергетике, аварийном
            электроснабжении, для топлив со средней и низкой теплотворной
            способностью, генерации электроэнергии на водородосодержащем топливе
            и в других областях
          </li>
          <li>
            - Высокий общий термический КПД и низкие эксплуатационные затраты
          </li>
        </ul>
        <img src="/62.webp"></img>
        <img src="/63.webp" className="mb-10"></img>
      </div>
    ),
    descriptionImg: "",
    category: "GasGenerator",
    brand: "Газотурбинный двигатель",
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
  author: string;
  src: string;
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
    author: "",
    src: "",
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
    author: "",
    src: "",
  },
  {
    id: 3,
    title: "33-мегаваттный газовый генератор Jenbacher в Шаньси, Китай",
    des: "Местоположение проекта: Шаньси, Китай Масштаб объекта: 9xJGS620GS-S.L9 комплектов генераторов Jenbacher по 3600 кВт каждый Источник газа для проекта: газ высокой концентрации Форма выработки энергии: парогазовый циклОновне оборудование:Газовая установка внутреннего сгорания Конденсационная паровая турбогенераторная установка Котел утилизатор тепла",
    img: "/news3.webp",
    isIndustry: true,
    isCompany: false,
    date: new Date(2022, 9, 8),
    author: "",
    src: "",
  },
];
