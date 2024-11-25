import React from "react";
import InterviewCard from "./InterviewCard";
import { interviewData } from "../data/interviewData"; 
import "./interview.module.css";

const InterviewCardList = () => {
  return (
    <div className='wrapper'>
      {interviewData.map((exercise, index) => (
        <InterviewCard
          key={index} 
          img={exercise.img}
          title={exercise.title}
          desc={exercise.desc}
          to={exercise.to}
        />
      ))}
    </div>
  );
};

export default InterviewCardList;
