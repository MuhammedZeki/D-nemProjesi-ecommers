import { IoIosArrowForward } from "react-icons/io";
import { useLang } from "../../context/LangContext";

const PricingHeader = () => {
  const { lang } = useLang();

  const texts = {
    en: {
      smallTitle: "PRICING",
      mainTitle: "Simple Pricing",
      breadcrumbHome: "Home",
      breadcrumbCurrent: "Pricing",
    },
    tr: {
      smallTitle: "FİYATLAR",
      mainTitle: "Basit Fiyatlandırma",
      breadcrumbHome: "Ana Sayfa",
      breadcrumbCurrent: "Fiyatlandırma",
    },
  };

  const t = texts[lang];

  return (
    <div className="flex items-center justify-center w-full px-10 lg:w-[75%] my-8 mx-auto py-8">
      <div className="flex flex-col items-center justify-center gap-6 font-montserrat">
        <h5 className="font-bold leading-6 tracking-[0.1px] text-[#737373] dark:text-[#fafafa]">
          {t.smallTitle}
        </h5>
        <h2 className="font-bold text-6xl leading-20 tracking-[0.2px] text-[#252B42] dark:text-[#fafafa] text-center lg:text-start">
          {t.mainTitle}
        </h2>
        <div className="flex items-center justify-center gap-3">
          <span className="font-bold leading-6 tracking-[0.2px] text-[#252B42] dark:text-[#fafafa]">
            {t.breadcrumbHome}
          </span>
          <IoIosArrowForward className="w-6 h-6 text-[#BDBDBD] dark:text-[#fafafa]" />
          <span className="font-bold leading-6 tracking-[0.2px] text-[#737373] dark:text-[#b9b6b6]">
            {t.breadcrumbCurrent}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PricingHeader;
