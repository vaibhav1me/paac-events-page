import React from "react";
import { quizzes } from '../constants/constants'

const Quizzes = () => {
  return (
    <div className="event-container px-[10px] my-[60px]">
    <h1 className="event-sec-heading text-[40px] my-[5px]">Quizzes And Competitions</h1>
    <div id="quizzes" className="flex flex-row justify-evenly py-[16px] flex-wrap">
      {quizzes.map((quiz) => (
        <div key={quiz.id} className="card flex flex-col items-center px-[10px] py-[16px] text-center text-[20px] bg-primary w-[400px] my-[16px] mx-[10px]">
          <div className="title text-[30px]">{quiz.title}</div>
          <img
            src={`../assets/quizzes/${quiz.image}`}
            className="h-[300px] m-auto"
            alt=""
          />
          <p className="date">Deadline: {quiz.deadline}</p>
          <p className="venue">Venue: {quiz.venue}</p>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Quizzes;
