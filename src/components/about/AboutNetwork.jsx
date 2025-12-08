import { useLang } from "../../context/LangContext";

const AboutNetwork = () => {
  const { lang } = useLang();

  const texts = {
    en: {
      title: "Big Companies Are Here",
      desc: "Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics",
    },
    tr: {
      title: "Büyük Şirketler Burada",
      desc: "Klasik fiziğin iki ana alanı arasındaki çatışmayı çözmeye çalışırken yaşanan sorunlar: Newton mekaniği",
    },
  };

  const t = texts[lang];

  return (
    <div className="bg-[#FAFAFA] dark:bg-[#3d445f]">
      <div className="lg:flex mt-5 lg:flex-row lg:gap-4 w-[75%] mx-auto lg:py-20 lg:px-4 flex flex-col py-10 items-center justify-center lg:items-start">
        <div className="flex flex-col gap-8 items-center font-montserrat text-center lg:text-start">
          <h2 className="font-bold text-4xl leading-12 tracking-[0.2px] text-[#252B42] dark:text-[#fafafa]">
            {t.title}
          </h2>
          <p className="font-medium leading-5 tracking-[0.2px] text-[#737373] dark:text-[#fafafa]">
            {t.desc}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutNetwork;
