import { IoIosArrowForward } from "react-icons/io";
import { useLang } from "../../context/LangContext";

const TeamHeader = () => {
  const { lang } = useLang();

  const texts = {
    en: {
      whatWeDo: "WHAT WE DO",
      title: "Innovation tailored for you",
      home: "Home",
      team: "Team",
    },
    tr: {
      whatWeDo: "NELER YAPIYORUZ",
      title: "Sizin için özel inovasyon",
      home: "Anasayfa",
      team: "Takım",
    },
  };

  const t = texts[lang];

  return (
    <div className="flex items-center justify-center w-full px-10 lg:w-[75%] my-8 mx-auto py-8">
      <div className="flex flex-col items-center justify-center gap-6 font-montserrat">
        <h5 className="font-bold leading-6 tracking-[0.1px] text-[#737373] dark:text-[#fafafa]">
          {t.whatWeDo}
        </h5>
        <h2 className="font-bold text-6xl leading-20 tracking-[0.2px] text-[#252B42] dark:text-[#fafafa] text-center lg:text-start">
          {t.title}
        </h2>
        <div className="flex items-center justify-center gap-3">
          <span className="font-bold leading-6 tracking-[0.2px] text-[#252B42] dark:text-[#fafafa]">
            {t.home}
          </span>
          <IoIosArrowForward className="w-6 h-6 text-[#BDBDBD] dark:text-[#fafafa]" />
          <span className="font-bold leading-6 tracking-[0.2px] text-[#737373] dark:text-[#cecccc]">
            {t.team}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TeamHeader;
