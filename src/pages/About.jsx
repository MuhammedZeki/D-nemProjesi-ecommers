import AboutDescription from "../components/about/AboutDescription";
import AboutHero from "../components/about/AboutHero";
import AboutInformation from "../components/about/AboutInformation";
import VideoCard from "../components/about/VideoCard";
import UpperMenu from "../components/home/UpperMenu";

const About = () => {
  return (
    <div>
      <UpperMenu />
      <AboutHero />
      <AboutDescription />
      <AboutInformation />
      <VideoCard />
    </div>
  );
};

export default About;
