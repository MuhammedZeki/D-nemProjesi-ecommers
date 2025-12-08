import { FaCheck } from "react-icons/fa6";
import { useLang } from "../../context/LangContext";
const CardContents = () => {
  const { lang } = useLang();

  const texts = {
    en: {
      free: {
        title: "FREE",
        subtitle: "Organize across all apps by hand",
        price: 0,
        per: "Per Month",
        features: [
          "Unlimited product updates",
          "Unlimited product updates",
          "Unlimited product updates",
          "1GB Cloud storage",
          "Email and community support",
        ],
        button: "Try for free",
      },
      standard: {
        title: "STANDARD",
        subtitle: "Organize across all apps by hand",
        price: 9.99,
        per: "Per Month",
        features: [
          "Unlimited product updates",
          "Unlimited product updates",
          "Unlimited product updates",
          "Priority support",
          "Extra analytics",
        ],
        button: "Try for free",
      },
      premium: {
        title: "PREMIUM",
        subtitle: "Organize across all apps by hand",
        price: 19.99,
        per: "Per Month",
        features: [
          "Unlimited product updates",
          "Unlimited product updates",
          "Unlimited product updates",
          "Dedicated account manager",
          "Custom integrations",
        ],
        button: "Try for free",
      },
    },
    tr: {
      free: {
        title: "ÜCRETSİZ",
        subtitle: "Tüm uygulamaları manuel olarak düzenleyin",
        price: 0,
        per: "Aylık",
        features: [
          "Sınırsız ürün güncellemesi",
          "Sınırsız ürün güncellemesi",
          "Sınırsız ürün güncellemesi",
          "1GB Bulut depolama",
          "E-posta ve topluluk desteği",
        ],
        button: "Ücretsiz Deneyin",
      },
      standard: {
        title: "STANDART",
        subtitle: "Tüm uygulamaları manuel olarak düzenleyin",
        price: 9.99,
        per: "Aylık",
        features: [
          "Sınırsız ürün güncellemesi",
          "Sınırsız ürün güncellemesi",
          "Sınırsız ürün güncellemesi",
          "Öncelikli destek",
          "Ekstra analizler",
        ],
        button: "Ücretsiz Deneyin",
      },
      premium: {
        title: "PREMIUM",
        subtitle: "Tüm uygulamaları manuel olarak düzenleyin",
        price: 19.99,
        per: "Aylık",
        features: [
          "Tüm STANDART özellikleri",
          "Tüm STANDART özellikleri",
          "Tüm STANDART özellikleri",
          "Özel hesap yöneticisi",
          "Özel entegrasyonlar",
        ],
        button: "Ücretsiz Deneyin",
      },
    },
  };

  const t = texts[lang];

  return (
    <div className="flex flex-col lg:flex lg:flex-row lg:items-center lg:justify-center font-montserrat gap-2 py-15">
      <div className="flex flex-col gap-6 border border-[#23A6F0] dark:bg-[#fafafa] rounded-lg px-10 py-14">
        <h3 className="font-bold text-2xl leading-8 tracking-[0.1px] text-[#252B42] text-center">
          {t.free.title}
        </h3>
        <h5 className="font-bold leading-6 tracking-[0.1px] text-[#737373] text-center">
          {t.free.subtitle}
        </h5>
        <div className="flex items-center justify-center gap-3">
          <span className="font-bold text-4xl leading-12 tracking-[0.2px] text-[#23A6F0]">
            {t.free.price}
          </span>
          <div className="flex flex-col">
            <span className="font-bold text-2xl leading-8 tracking-[0.1px] text-[#23A6F0]">
              $
            </span>
            <span className="font-bold  leading-6 tracking-[0.2px] text-[#8EC2F2]">
              {t.free.per}
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <div className="flex justify-center items-center p-2 bg-[#2DC071] rounded-full">
              <FaCheck className="text-white w-5 h-5" />
            </div>
            <h6 className="font-bold leading-6 tracking-[0.2px] text-[#252B42]">
              {t.free.features[0]}
            </h6>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex justify-center items-center p-2 bg-[#2DC071] rounded-full">
              <FaCheck className="text-white w-5 h-5" />
            </div>
            <h6 className="font-bold leading-6 tracking-[0.2px] text-[#252B42]">
              {t.free.features[1]}
            </h6>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex justify-center items-center p-2 bg-[#2DC071] rounded-full">
              <FaCheck className="text-white w-5 h-5" />
            </div>
            <h6 className="font-bold leading-6 tracking-[0.2px] text-[#252B42]">
              {t.free.features[2]}
            </h6>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex justify-center items-center p-2 bg-[#BDBDBD] rounded-full">
              <FaCheck className="text-white w-5 h-5" />
            </div>
            <h6 className="font-bold leading-6 tracking-[0.2px] text-[#252B42]">
              {t.free.features[3]}
            </h6>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex justify-center items-center p-2 bg-[#BDBDBD] rounded-full">
              <FaCheck className="text-white w-5 h-5" />
            </div>
            <h6 className="font-bold leading-6 tracking-[0.2px] text-[#252B42]">
              {t.free.features[4]}
            </h6>
          </div>
        </div>
        <button className="bg-[#252B42] rounded-lg text-white py-3 px-8 flex items-center justify-center">
          {t.free.button}
        </button>
      </div>
      <div className="flex flex-col gap-6 border border-[#23A6F0] bg-[#252B42] rounded-lg px-11 py-20">
        <h3 className="font-bold text-2xl leading-8 tracking-[0.1px] text-white text-center">
          {t.standard.title}
        </h3>
        <h5 className="font-bold leading-6 tracking-[0.1px] text-white text-center">
          {t.standard.subtitle}
        </h5>
        <div className="flex items-center justify-center gap-3">
          <span className="font-bold text-4xl leading-12 tracking-[0.2px] text-[#23A6F0]">
            {t.standard.price}
          </span>
          <div className="flex flex-col">
            <span className="font-bold text-2xl leading-8 tracking-[0.1px] text-[#23A6F0]">
              $
            </span>
            <span className="font-bold  leading-6 tracking-[0.2px] text-[#8EC2F2]">
              {t.standard.per}
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <div className="flex justify-center items-center p-2 bg-[#2DC071] rounded-full">
              <FaCheck className="text-white w-5 h-5" />
            </div>
            <h6 className="font-bold leading-6 tracking-[0.2px] text-white">
              {t.standard.features[0]}
            </h6>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex justify-center items-center p-2 bg-[#2DC071] rounded-full">
              <FaCheck className="text-white w-5 h-5" />
            </div>
            <h6 className="font-bold leading-6 tracking-[0.2px] text-white">
              {t.standard.features[1]}
            </h6>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex justify-center items-center p-2 bg-[#2DC071] rounded-full">
              <FaCheck className="text-white w-5 h-5" />
            </div>
            <h6 className="font-bold leading-6 tracking-[0.2px] text-white">
              {t.standard.features[2]}
            </h6>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex justify-center items-center p-2 bg-[#BDBDBD] rounded-full">
              <FaCheck className="text-white w-5 h-5" />
            </div>
            <h6 className="font-bold leading-6 tracking-[0.2px] text-white">
              {t.standard.features[3]}
            </h6>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex justify-center items-center p-2 bg-[#BDBDBD] rounded-full">
              <FaCheck className="text-white w-5 h-5" />
            </div>
            <h6 className="font-bold leading-6 tracking-[0.2px] text-white">
              {t.standard.features[4]}
            </h6>
          </div>
        </div>
        <button className="bg-[#23A6F0] rounded-lg text-white py-3 px-8 flex items-center justify-center">
          {t.standard.button}
        </button>
      </div>
      <div className="flex flex-col gap-6 border border-[#23A6F0] dark:bg-[#fafafa] rounded-lg px-10 py-14">
        <h3 className="font-bold text-2xl leading-8 tracking-[0.1px] text-[#252B42] text-center">
          {t.standard.title}
        </h3>
        <h5 className="font-bold leading-6 tracking-[0.1px] text-[#737373] text-center">
          {t.standard.subtitle}
        </h5>
        <div className="flex items-center justify-center gap-3">
          <span className="font-bold text-4xl leading-12 tracking-[0.2px] text-[#23A6F0]">
            {t.standard.price}
          </span>
          <div className="flex flex-col">
            <span className="font-bold text-2xl leading-8 tracking-[0.1px] text-[#23A6F0]">
              $
            </span>
            <span className="font-bold  leading-6 tracking-[0.2px] text-[#8EC2F2]">
              {t.standard.per}
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <div className="flex justify-center items-center p-2 bg-[#2DC071] rounded-full">
              <FaCheck className="text-white w-5 h-5" />
            </div>
            <h6 className="font-bold leading-6 tracking-[0.2px] text-[#252B42]">
              {t.standard.features[0]}
            </h6>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex justify-center items-center p-2 bg-[#2DC071] rounded-full">
              <FaCheck className="text-white w-5 h-5" />
            </div>
            <h6 className="font-bold leading-6 tracking-[0.2px] text-[#252B42]">
              {t.standard.features[1]}
            </h6>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex justify-center items-center p-2 bg-[#2DC071] rounded-full">
              <FaCheck className="text-white w-5 h-5" />
            </div>
            <h6 className="font-bold leading-6 tracking-[0.2px] text-[#252B42]">
              {t.standard.features[2]}
            </h6>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex justify-center items-center p-2 bg-[#BDBDBD] rounded-full">
              <FaCheck className="text-white w-5 h-5" />
            </div>
            <h6 className="font-bold leading-6 tracking-[0.2px] text-[#252B42]">
              {t.standard.features[3]}
            </h6>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex justify-center items-center p-2 bg-[#BDBDBD] rounded-full">
              <FaCheck className="text-white w-5 h-5" />
            </div>
            <h6 className="font-bold leading-6 tracking-[0.2px] text-[#252B42]">
              {t.standard.features[4]}
            </h6>
          </div>
        </div>
        <button className="bg-[#23A6F0] rounded-lg text-white py-3 px-8 flex items-center justify-center">
          {t.standard.button}
        </button>
      </div>
    </div>
  );
};

export default CardContents;
