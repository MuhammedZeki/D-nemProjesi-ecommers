import { useLang } from "../../context/LangContext";
import TeamItem from "./TeamItem";

const TeamsContent = () => {
  const { lang } = useLang();

  const texts = {
    en: {
      title: "Meet Our Team",
      description:
        "Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics",
    },
    tr: {
      title: "Ekibimizle Tanışın",
      description:
        "Klasik fiziğin iki ana alanı: Newton mekaniği arasındaki çatışmayı çözmeye çalışırken karşılaşılan sorunlar",
    },
  };

  const t = texts[lang];

  return (
    <div className="lg:w-[75%] flex flex-col p-5 gap-12 lg:mx-auto lg:py-8  lg:px-4  font-montserrat">
      <div className="flex text-center lg:text-start flex-col gap-3 mt-12 items-center justify-center">
        <h2 className="font-bold text-4xl leading-12 tracking-[0.2px] text-[#252B42] dark:text-[#fafafa]">
          {t.title}
        </h2>
        <p className="font-normal text-lg leading-5 tracking-[0.2px] text-[#737373] dark:text-[#fafafa]">
          {t.description}
        </p>
      </div>
      <div className="flex flex-col gap-4 p-5">
        <div className="lg:flex lg:flex-row flex flex-col items-center gap-6">
          <TeamItem img={"/team/team1.jpg"} name={"Jerome Bell"} job={"IBM"} />
          <TeamItem
            img={"/team/team2.jpg"}
            name={"Brooklyn Simmons"}
            job={"eBay"}
          />
          <TeamItem
            img={"/team/team5.jpg"}
            name={"Ronald Richards"}
            job={"Starbucks"}
          />
          <TeamItem
            img={"/team/team4.jpg"}
            name={"Floyd Miles"}
            job={"Facebook"}
          />
        </div>
        <div className="lg:flex lg:flex-row flex flex-col items-center gap-6 ">
          <TeamItem
            img={"/team/team5.jpg"}
            name={"Jane Cooper"}
            job={"Mitsubishi"}
          />
          <TeamItem
            img={"/team/team6.jpg"}
            name={"Robert Fox"}
            job={"The Walt Disney Company"}
          />
          <TeamItem
            img={"/team/team7.jpg"}
            name={"Leslie Alexander"}
            job={"Starbucks"}
          />
          <TeamItem
            img={"/team/team8.jpg"}
            name={"Jacob Jones"}
            job={"Facebook"}
          />
        </div>
      </div>
    </div>
  );
};

export default TeamsContent;
