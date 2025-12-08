import { useLang } from "../../context/LangContext";

const WorkWithUs = () => {
  const { lang } = useLang();

  const texts = {
    en: {
      smallTitle: "WORK WITH US",
      title: "Now Let’s grow Yours",
      desc: "The gradual accumulation of information about atomic and small-scale behavior during the first quarter of the 20th",
      button: "Click Me",
    },
    tr: {
      smallTitle: "BİZİMLE ÇALIŞIN",
      title: "Şimdi Sizinle Büyüyelim",
      desc: "20. yüzyılın ilk çeyreğinde atomik ve küçük ölçekli davranışlar hakkında bilgi birikimi",
      button: "Tıkla",
    },
  };

  const t = texts[lang];

  return (
    <div className="flex my-10">
      <div className="lg:w-2/3 w-full bg-[#8f300b] flex flex-col items-center justify-center gap-4 p-10 lg:p-0 text-center lg:text-start">
        <div className="flex flex-col gap-10 font-montserrat text-white">
          <h5 className="font-bold leading-6 tracking-[0.1px]">
            {t.smallTitle}
          </h5>
          <h2 className="font-bold text-5xl leading-12 tracking-[0.2px]">
            {t.title}
          </h2>
          <p className="font-medium leading-5 tracking-[0.2px]">{t.desc}</p>
          <div>
            <button className="border border-white rounded-lg px-8 py-4">
              {t.button}
            </button>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 lg:flex lg:items-center lg:justify-center hidden">
        <img
          src="/about/oldmoney.jpg"
          className="object-cover w-full h-[700px]"
          alt=""
        />
      </div>
    </div>
  );
};

export default WorkWithUs;
