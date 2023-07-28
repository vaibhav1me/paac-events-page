import React from "react";
import Quizzes from "./Quizzes";
import Workshops from "./Workshops";
import Lectures from "./Lectures";

const Events = () => {
  return (
    <div id="events">
      <h1 className="text-center text-[50px] my-[21px]">Our Events</h1>
      <Quizzes/>
      <Workshops/>
      <Lectures/>
    </div>
  );
};

export default Events;
