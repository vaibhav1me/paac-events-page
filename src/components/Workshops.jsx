import React from 'react'
import { workshops } from '../constants/constants'

const Workshops = () => {
  return (
    <div className="event-container px-[10px] my-[60px]">
    <h1 className="event-sec-heading text-[40px] my-[5px]">Workshops/Movie Screenings</h1>
    <div id="workshops" className="flex flex-row justify-evenly py-[16px] flex-wrap">
      {workshops.map((workshop) => (
        <div key={workshop.id} className="card flex flex-col items-center px-[10px] py-[16px] text-center text-[20px] bg-primary w-[400px] my-[16px] mx-[10px]">
          <div className="title text-[30px]">{workshop.title}</div>
          <img
            src={`../assets/workshops/${workshop.image}`}
            className="h-[300px] m-auto"
            alt=""
          />
          <p className="date">Date: {workshop.date}</p>
          <p className="venue">Venue: {workshop.venue}</p>
        </div>
      ))}
    </div>
    </div>
  )
}

export default Workshops