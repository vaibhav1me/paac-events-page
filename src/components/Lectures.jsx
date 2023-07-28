import React from 'react'
import { lectures } from '../constants/constants'

const Lectures = () => {
  return (
    <div className="event-container px-[10px]" id='lectures'>
    <h1 className="event-sec-heading text-[40px] my-[5px]">Lectures</h1>
    <div id="" className="flex flex-row justify-evenly py-[16px] flex-wrap">
      {lectures.map((lecture) => (
        <div key={lecture.id} className="card flex flex-col items-center px-[10px] py-[16px] text-center text-[20px] bg-primary w-[400px] my-[16px] mx-[10px]">
          <div className="title text-[30px]">{lecture.title}</div>
          <img
            src={lecture.image}
            className="h-[300px] m-auto"
            alt=""
          />
          <p className="date">Date: {lecture.date}</p>
          <p className="venue">Venue: {lecture.venue}</p>
        </div>
      ))}
    </div>
    </div>
  )
}

export default Lectures