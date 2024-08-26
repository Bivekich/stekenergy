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
                        <strong>Genset Model</strong>
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
                        <strong>Weight</strong>
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
                        <strong>Model</strong>
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
                      <strong>Model</strong>
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
                      <strong>Weight</strong>
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
    brand: "CumminsSeries",
  },
  {
    id: 2,
    mainImg: "/Mitsu.webp",
    name: "Mitsubishi Diesel Generator",
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
        </p>
      </div>
    ),
    descriptionImg: "",
    category: "DieselGenerator",
    brand: "MitsubishiSeries",
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
    id: 3,
    title: "33-мегаваттный газовый генератор Jenbacher в Шаньси, Китай",
    des: "Местоположение проекта: Шаньси, Китай Масштаб объекта: 9xJGS620GS-S.L9 комплектов генераторов Jenbacher по 3600 кВт каждый Источник газа для проекта: газ высокой концентрации Форма выработки энергии: парогазовый циклОновне оборудование:Газовая установка внутреннего сгорания Конденсационная паровая турбогенераторная установка Котел утилизатор тепла",
    img: "/news3.webp",
    isIndustry: true,
    isCompany: false,
    date: new Date(2022, 9, 8),
  },
];
