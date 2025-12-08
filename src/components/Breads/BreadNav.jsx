import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useLang } from "../../context/LangContext";

const BreadNav = () => {
  const { lang } = useLang();
  const texts = {
    en: {
      title: "BESTSELLER PRODUCTS",
      men: "Desserts",
      women: "Ice Cream",
      Accessories: "Cake",
    },
    tr: {
      title: "EN ÇOK SATAN ÜRÜNLER",
      men: "Tatlılar",
      women: "Dondurmalar",
      Accessories: "Kekler",
    },
  };
  const t = texts[lang];
  return (
    <div className="lg:flex lg:flex-row items-center lg:justify-between lg:gap-2 flex flex-col gap-10 mt-8 lg:mt-0">
      <div className="font-bold text-center lg:text-start text-2xl leading-6 tracking-[0.1px] text-[#252B42] dark:text-[#fafafa]">
        {t.title}
      </div>
      <div
        className="lg:flex lg:flex-row lg:justify-between gap-12
      flex flex-col items-center "
      >
        <div className="flex items-center gap-10">
          <div className="font-bold cursor-pointer text-xl leading-6 tracking-[0.2px] text-[#23A6F0]">
            {t.men}
          </div>
          <div className="font-bold cursor-pointer text-xl leading-6 tracking-[0.2px] text-[#737373] dark:text-[#fafafa]">
            {t.women}
          </div>
          <div className="font-bold cursor-pointer text-xl leading-6 tracking-[0.2px] text-[#737373] dark:text-[#fafafa]">
            {t.Accessories}
          </div>
        </div>
        <div className="flex items-center gap-4 mb-6 lg:mb-0">
          <div className="border border-[#BDBDBD] rounded-full flex items-center justify-center p-4">
            <IoIosArrowBack className="h-6 w-6 text-[#BDBDBD] dark:text-[#fafafa]" />
          </div>
          <div className="border border-[#737373] rounded-full flex items-center justify-center p-4">
            <IoIosArrowForward className="h-6 w-6 text-[#737373] dark:text-[#fafafa]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreadNav;
