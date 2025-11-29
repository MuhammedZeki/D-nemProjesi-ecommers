import UpperMenu from "../components/home/UpperMenu";
import TeamHeader from "../components/team/TeamHeader";
import TeamHeroPicture from "../components/team/TeamHeroPicture";
import TeamsContent from "../components/team/TeamsContent";
import Footer from "./home/Footer";
import TeamCallAction from "./../components/team/TeamCallAction";

const Team = () => {
  return (
    <div>
      <UpperMenu />
      <TeamHeader />
      <TeamHeroPicture />
      <TeamsContent />
      <TeamCallAction />
      <Footer />
    </div>
  );
};

export default Team;
