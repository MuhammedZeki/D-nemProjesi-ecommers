import AboutDescription from "../components/about/AboutDescription";
import AboutHero from "../components/about/AboutHero";
import AboutInformation from "../components/about/AboutInformation";
import AboutNetwork from "../components/about/AboutNetwork";
import VideoCard from "../components/about/VideoCard";
import UpperMenu from "../components/home/UpperMenu";
import Sponsorship from "./home/Sponsorship";
import Team from "./Team";
import Footer from "./home/Footer";
import WorkWithUs from "../components/about/WorkWithUs";

const About = () => {
  return (
    <div>
      <UpperMenu />
      <AboutHero />
      <AboutDescription />
      <AboutInformation />
      <VideoCard />
      <Team />
      <AboutNetwork />
      <Sponsorship />
      <WorkWithUs />
      <Footer />
    </div>
  );
};

export default About;
