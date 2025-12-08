import { MdKeyboardArrowRight } from "react-icons/md";
import { useLang } from "../../context/LangContext";
const PricingDescription = () => {
  const { lang } = useLang();

  const texts = {
    en: {
      title: "Pricing FAQs",
      subtitle:
        "Problems trying to resolve the conflict between the two major realms of Classical physics",
      main: "the quick fox jumps over the lazy dog",
      mainSub:
        "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
      contactText: "Haven’t got your answer? Contact our support",
    },
    tr: {
      title: "Fiyatlandırma SSS",
      subtitle:
        "Klasik fiziğin iki ana alanı arasındaki çelişkiyi çözmeye çalışırken karşılaşılan sorunlar",
      main: "hızlı tilki tembel köpeğin üzerinden atlar",
      mainSub:
        "Alamo'da çölde olmayan Mollie ile tanıştım ve çok memnun kaldım. RELIT resmi sonuç kapısı ENIM RELIT Mollie. Uyarım hafiflemesi sonucunda gönderilen nostrum karşılandı.",
      contactText:
        "Cevabınızı bulamadınız mı? Destek ekibimizle iletişime geçin",
    },
  };

  const t = texts[lang];

  return (
    <div className="flex flex-col items-center justify-center w-full px-10 lg:w-[75%] my-20 mx-auto py-8 font-montserrat">
      <div className="flex flex-col gap-16">
        <div className="flex flex-col items-center justify-center gap-2">
          <h2 className="font-bold text-4xl leading-12 tracking-[0.2px] text-[#252B42] dark:text-[#fafafa]">
            {t.title}
          </h2>
          <p className="font-medium text-xl leading-8 tracking-[0.2px] text-[#737373] dark:text-[#fafafa] text-center max-w-2/3">
            {t.subtitle}
          </p>
        </div>
        <div className="flex flex-col ">
          <div className="flex flex-col lg:flex lg:flex-row lg:items-center gap-8">
            <div className="flex gap-2 lg:px-16 py-8">
              <MdKeyboardArrowRight className="text-[#23A6F0] w-25 h-25" />
              <div className="flex flex-col gap-2">
                <h5 className="font-bold leading-6 tracking-[0.1px] text-[#252B42] dark:text-[#fafafa]">
                  {t.main}
                </h5>
                <h6 className="text-[#737373] font-medium leading-5 tracking-[0.2px] dark:text-[#fafafa]">
                  {t.mainSub}
                </h6>
              </div>
            </div>
            <div className="flex gap-2 lg:px-16 py-8">
              <MdKeyboardArrowRight className="text-[#23A6F0] w-25 h-25" />
              <div className="flex flex-col gap-2">
                <h5 className="font-bold leading-6 tracking-[0.1px] text-[#252B42] dark:text-[#fafafa]">
                  {t.main}
                </h5>
                <h6 className="text-[#737373] font-medium leading-5 tracking-[0.2px] dark:text-[#fafafa]">
                  {t.mainSub}
                </h6>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex lg:flex-row lg:items-center gap-8">
            <div className="flex gap-2 lg:px-16 py-8">
              <MdKeyboardArrowRight className="text-[#23A6F0] w-25 h-25" />
              <div className="flex flex-col gap-2">
                <h5 className="font-bold leading-6 tracking-[0.1px] text-[#252B42] dark:text-[#fafafa]">
                  {t.main}
                </h5>
                <h6 className="text-[#737373] font-medium leading-5 tracking-[0.2px] dark:text-[#fafafa]">
                  {t.mainSub}
                </h6>
              </div>
            </div>
            <div className="flex gap-2 lg:px-16 py-8">
              <MdKeyboardArrowRight className="text-[#23A6F0] w-25 h-25" />
              <div className="flex flex-col gap-2">
                <h5 className="font-bold leading-6 tracking-[0.1px] text-[#252B42] dark:text-[#fafafa]">
                  {t.main}
                </h5>
                <h6 className="text-[#737373] font-medium leading-5 tracking-[0.2px] dark:text-[#fafafa]">
                  {t.mainSub}
                </h6>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex lg:flex-row lg:items-center gap-8">
            <div className="flex gap-2 lg:px-16 py-8">
              <MdKeyboardArrowRight className="text-[#23A6F0] w-25 h-25" />
              <div className="flex flex-col gap-2">
                <h5 className="font-bold leading-6 tracking-[0.1px] text-[#252B42] dark:text-[#fafafa]">
                  {t.main}
                </h5>
                <h6 className="text-[#737373] font-medium leading-5 tracking-[0.2px] dark:text-[#fafafa]">
                  {t.mainSub}
                </h6>
              </div>
            </div>
            <div className="flex gap-2 lg:px-16 py-8">
              <MdKeyboardArrowRight className="text-[#23A6F0] w-25 h-25" />
              <div className="flex flex-col gap-2">
                <h5 className="font-bold leading-6 tracking-[0.1px] text-[#252B42] dark:text-[#fafafa]">
                  {t.main}
                </h5>
                <h6 className="text-[#737373] font-medium leading-5 tracking-[0.2px] dark:text-[#fafafa]">
                  {t.mainSub}
                </h6>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center py-6 text-center lg:text-start">
          <p className="font-medium text-xl leading-6 tracking-[0.2px] text-[#737373] dark:text-[#fafafa]">
            {t.contactText}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PricingDescription;
