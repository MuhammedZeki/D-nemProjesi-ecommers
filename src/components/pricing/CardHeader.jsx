import { useLang } from "../../context/LangContext";

const CardHeader = () => {
  const { lang } = useLang();

  const texts = {
    en: {
      mainTitle: "Pricing",
      description:
        "Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics",
      monthly: "Monthly",
      yearly: "Yearly",
      save: "Save 25%",
    },
    tr: {
      mainTitle: "Fiyatlandırma",
      description:
        "Klasik fiziğin iki ana alanı arasındaki çatışmayı çözmeye çalışırken yaşanan sorunlar",
      monthly: "Aylık",
      yearly: "Yıllık",
      save: "%25 Tasarruf",
    },
  };

  const t = texts[lang];

  return (
    <div className="flex flex-col gap-5 font-montserrat">
      <div className="flex flex-col items-center justify-center gap-4">
        <h2 className="font-bold text-4xl leading-12 tracking-[0.2px] text-[#252B42] dark:text-[#fafafa]">
          {t.mainTitle}
        </h2>
        <p className="font-medium leading-5 tracking-[0.2px] text-[#737373] dark:text-[#fafafa] max-w-1/2 text-center">
          {t.description}
        </p>
      </div>
      <div className="flex items-center justify-center gap-4">
        <p className="font-bold leading-6 tracking-[0.1px] text-[#252B42] dark:text-[#fafafa]">
          {t.monthly}
        </p>
        <div className="border border-[#23A6F0] dark:text-[#fafafa] rounded-full w-[45px] h-[25px] flex items-center">
          <div className="w-5 h-5 bg-[#EBEBEB] border border-[#D0D0D0] rounded-full ml-1 dark:bg-[#fafafa]"></div>
        </div>
        <p className="font-bold leading-6 tracking-[0.1px] text-[#252B42] dark:text-[#fafafa]">
          {t.yearly}
        </p>
        <div className="bg-[#B2E3FF] flex items-center justify-center text-[#23A6F0] py-3 px-8 rounded-full font-bold leading-6 tracking-[0.2px]">
          {t.save}
        </div>
      </div>
    </div>
  );
};

export default CardHeader;
