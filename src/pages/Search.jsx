import React from "react";
import UpperMenu from "../components/home/UpperMenu";
import Footer from "./home/Footer";
import SearchContent from "../components/search/SearchContent";

const Search = () => {
  return (
    <div className="bg-white dark:bg-[#252B42] ">
      <UpperMenu />
      <SearchContent />
      <Footer />
    </div>
  );
};

export default Search;
