import React from "react";
import NewsLetter from "../Components/NewsLetter/NewsLetter";
import ShowLatestCreatedEvents from "./ShowLatestCreatedEvents";
import Banner from "../Components/Banner/Banner";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <ShowLatestCreatedEvents></ShowLatestCreatedEvents>
      <NewsLetter></NewsLetter>
    </div>
  );
};

export default Home;
