import { CiPhone, CiLocationOn, CiMail } from "react-icons/ci";
import { IoLogoInstagram } from "react-icons/io5";
import { FaTwitter, FaYoutube, FaFacebook } from "react-icons/fa";
import { useLang } from "../../context/LangContext";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const { lang } = useLang();
  const navigate = useNavigate();
  const texts = {
    en: {
      title: "Consulting Agency For Your Business",
      subtitle: "the quick fox jumps over the lazy dog",
      button: "Contact Us",

      company: "Company info",
      about: "About Us",
      career: "Career",
      hiring: "We are hiring",
      blog: "Blog",

      legal: "Legal",

      features: "Features",
      marketing: "Business Marketing",
      analytic: "User Analytic",
      livechat: "Live Chat",
      support: "Unlimited Support",

      resources: "Resources",
      ios: "IOS & Android",
      demo: "Watch a Demo",
      customers: "Customers",
      api: "API",

      touch: "Get In Touch",

      copyright: "Made With Love By Finland All Right Reserved",
    },
    tr: {
      title: "İşiniz İçin Danışmanlık Ajansı",
      subtitle: "hızlı tilki tembel köpeğin üzerinden atlar",
      button: "Bize Ulaşın",

      company: "Şirket Bilgileri",
      about: "Hakkımızda",
      career: "Kariyer",
      hiring: "İşe Alıyoruz",
      blog: "Blog",

      legal: "Yasal",

      features: "Özellikler",
      marketing: "İş Pazarlaması",
      analytic: "Kullanıcı Analitiği",
      livechat: "Canlı Sohbet",
      support: "Sınırsız Destek",

      resources: "Kaynaklar",
      ios: "iOS & Android",
      demo: "Demoyu İzle",
      customers: "Müşteriler",
      api: "API",

      touch: "İletişime Geç",

      copyright: "Finlandiya Tarafından Sevgiyle Yapıldı. Tüm Hakları Saklıdır",
    },
  };

  const t = texts[lang];

  return (
    <div className="bg-[#252B42]">
      <div className="flex flex-col gap-10 w-[75%] mx-auto py-12 px-4 font-montserrat">
        <div className="lg:flex lg:flex-row lg:items-center lg:py-6 lg:justify-between flex flex-col gap-8">
          <div className="flex flex-col lg:gap-4 gap-8">
            <h3 className="font-bold text-2xl leading-8 tracking-[0.1px] text-white">
              {t.title}
            </h3>
            <p className="font-normal leading-4 tracking-[0.2px] text-white">
              {t.subtitle}
            </p>
          </div>
          <button
            onClick={() => navigate("/contact")}
            className="bg-[#23A6F0] cursor-pointer py-6 px-10 rounded-lg text-white font-bold leading-5 tracking-[0.2px]"
          >
            {t.button}
          </button>
        </div>

        <div className="lg:flex lg:flex-row lg:items-start lg:gap-16 lg:py-6 font-montserrat text-white flex flex-col gap-10">
          <div className="flex flex-col gap-6">
            <h5 className="font-bold leading-6 tracking-[0.1px]">
              {t.company}
            </h5>
            <div className="flex flex-col lg:gap-2 gap-4">
              <p>{t.about}</p>
              <p>{t.career}</p>
              <p>{t.hiring}</p>
              <p>{t.blog}</p>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h5 className="font-bold leading-6 tracking-[0.1px]">{t.legal}</h5>
            <div className="flex flex-col lg:gap-2 gap-4">
              <p>{t.about}</p>
              <p>{t.career}</p>
              <p>{t.hiring}</p>
              <p>{t.blog}</p>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h5 className="font-bold leading-6 tracking-[0.1px]">
              {t.features}
            </h5>
            <div className="flex flex-col lg:gap-2 gap-4">
              <p>{t.marketing}</p>
              <p>{t.analytic}</p>
              <p>{t.livechat}</p>
              <p>{t.support}</p>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h5 className="font-bold leading-6 tracking-[0.1px]">
              {t.resources}
            </h5>
            <div className="flex flex-col lg:gap-2 gap-4">
              <p>{t.ios}</p>
              <p>{t.demo}</p>
              <p>{t.customers}</p>
              <p>{t.api}</p>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h5 className="font-bold leading-6 tracking-[0.1px]">{t.touch}</h5>
            <div className="flex flex-col lg:gap-6 gap-4">
              <div className="flex items-center gap-2">
                <CiPhone className="text-[#8EC2F2] lg:text-white h-8 w-8 lg:h-6 lg:w-6" />
                <span>(480) 555-0103</span>
              </div>
              <div className="flex items-center gap-2">
                <CiLocationOn className="text-[#8EC2F2] lg:text-white h-12 w-12 lg:h-6 lg:w-6" />
                <span>4517 Washington Ave. Manchester, Kentucky 39495</span>
              </div>
              <div className="flex items-center gap-2">
                <CiMail className="text-[#8EC2F2] lg:text-white h-8 w-8 lg:h-6 lg:w-6" />
                <span>debra.holt@example.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:flex lg:flex-row lg:items-center lg:justify-between flex flex-col">
          <p className="font-bold leading-6 tracking-[0.2px] text-white">
            {t.copyright}
          </p>

          <div className="flex items-center gap-4 my-6 lg:my-0">
            <FaFacebook className="w-6 h-6 text-[#335BF5]" />
            <IoLogoInstagram className="w-6 h-6 text-[#E51F5A]" />
            <FaTwitter className="w-6 h-6 text-[#21A6DF]" />
            <FaYoutube className="w-6 h-6 text-[#E42F08]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
