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
          <div>
            <table className="border border-grey-400 flex overflow-scroll">
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
                      <strong>Genset Model</strong>
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
                      <strong>Model</strong>
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
    brand: "MitsubishiSeries",
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
          <div>
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
                      <strong>Genset Model</strong>
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
    brand: "WeichaiSeries",
  },
  {
    id: 4,
    mainImg: "/11.webp",
    name: "Yuchai Diesel Generator",
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
          <div>
            <table className="border border-grey-400">
              <tbody>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>Model</p>
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
                    <p>Weight</p>
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
          <div>
            <table className="border border-grey-400">
              <tbody>
                <tr className="border border-grey-400">
                  <td className="border border-grey-400">
                    <p>Model</p>
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
                    <p>Weight</p>
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
        <div>
          <div>
            <table className="border border-grey-400 mb-10">
              <tbody>
                <tr>
                  <td className="border border-grey-400">
                    <p>Model</p>
                  </td>
                  <td>
                    <p>Prime &nbsp; Power</p>
                    <p>(KVA/KW)</p>
                  </td>
                  <td>
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
                    <p>Weight</p>
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
          <span>
            <i></i>
          </span>
        </div>
      </div>
    ),
    descriptionImg: "",
    category: "DieselGenerator",
    brand: "YuchaiSeries",
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
