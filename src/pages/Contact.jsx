import ContactCards from "../components/contact/ContactCards";
import ContactHero from "../components/contact/ContactHero";
import ContactTalk from "../components/contact/ContactTalk";
import UpperMenu from "../components/home/UpperMenu";
import Footer from "./home/Footer";

const Contact = () => {
  return (
    <div>
      <UpperMenu />
      <ContactHero />
      <ContactCards />
      <ContactTalk />
      <Footer />
    </div>
  );
};

export default Contact;
