import React from "react";
import NewsLetter from "../Components/NewsLetter/NewsLetter";
import ShowLatestCreatedEvents from "./ShowLatestCreatedEvents";
import Banner from "../Components/Banner/Banner";
import EventGallery from "../Components/EventGallery/EventGallery";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <ShowLatestCreatedEvents></ShowLatestCreatedEvents>
      <EventGallery></EventGallery>
      <NewsLetter></NewsLetter>
    </div>
  );
};

export default Home;
