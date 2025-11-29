import AboutDescription from "../components/about/AboutDescription";
import AboutHero from "../components/about/AboutHero";
import AboutInformation from "../components/about/AboutInformation";
import UpperMenu from "../components/home/UpperMenu";

const About = () => {
  return (
    <div>
      <UpperMenu />
      <AboutHero />
      <AboutDescription />
      <AboutInformation />
    </div>
  );
};

export default About;
