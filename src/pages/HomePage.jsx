import UpperMenu from "../components/home/UpperMenu";
import Banner from "../components/home/Banner";
import ModelOpenProvider from "../context/ModelOpen";

const HomePage = () => {
  return (
    <div>
      <ModelOpenProvider>
        <UpperMenu />
      </ModelOpenProvider>
      <Banner />
    </div>
  );
};

export default HomePage;
