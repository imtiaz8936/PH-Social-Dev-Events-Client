import React from "react";
import NewsLetter from "../Components/NewsLetter/NewsLetter";
import ShowLatestCreatedEvents from "./ShowLatestCreatedEvents";
import Banner from "../Components/Banner/Banner";
import EventGallery from "../Components/EventGallery/EventGallery";
import Feature from "../Components/Feature/Feature";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Feature></Feature>
      <ShowLatestCreatedEvents></ShowLatestCreatedEvents>
      <EventGallery></EventGallery>
      <NewsLetter></NewsLetter>
    </div>
  );
};

export default Home;
