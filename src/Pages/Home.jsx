import React from "react";
import NewsLetter from "../Components/NewsLetter/NewsLetter";
import ShowLatestCreatedEvents from "./ShowLatestCreatedEvents";

const Home = () => {
  return (
    <div className="w-11/12 mx-auto">
      <ShowLatestCreatedEvents></ShowLatestCreatedEvents>
      <NewsLetter></NewsLetter>
    </div>
  );
};

export default Home;
