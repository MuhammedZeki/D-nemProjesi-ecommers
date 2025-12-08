import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { useLang } from "../../context/LangContext";

const TeamCallAction = () => {
  const { lang } = useLang();

  const texts = {
    en: {
      title: "Start your 14 days free trial",
      subtitle:
        "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent.",
      button: "Try it free now",
    },
    tr: {
      title: "14 Günlük Ücretsiz Denemeye Başlayın",
      subtitle:
        "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT resmi sonucu.",
      button: "Şimdi Ücretsiz Deneyin",
    },
  };

  const t = texts[lang];

  return (
    <div className="flex items-center justify-center my-10">
      <div className="font-montserrat flex flex-col gap-12 px-10 lg:px-0">
        <h2 className="font-bold text-center lg:text-start text-5xl leading-12 tracking-[0.2px] text-[#252B42] dark:text-[#fafafa]">
          {t.title}
        </h2>
        <h6 className="font-medium text-center lg:text-start leading-5 tracking-[0.2px] text-[#737373] dark:text-[#fafafa]">
          {t.subtitle}
        </h6>
        <div className="flex items-center justify-center">
          <button
            className="font-bold leading-6 tracking-[0.2px] text-white bg-[#23A6F0]
           rounded-lg px-2 py-4"
          >
            {t.button}
          </button>
        </div>
        <div className="flex items-center justify-center gap-4 my-6 lg:my-0">
          <FaFacebook className="w-7 h-7 text-[#335BF5]" />
          <IoLogoInstagram className="w-7 h-7 text-[#E51F5A]" />
          <FaTwitter className="w-7 h-7 text-[#21A6DF]" />
          <FaYoutube className="w-7 h-7 text-[#E42F08]" />
        </div>
      </div>
    </div>
  );
};

export default TeamCallAction;
