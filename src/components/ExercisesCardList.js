// CardList.js
import React from "react";
import ExercisesCard from "./ExercisesCard"; 
import '../styles/exercises.css'

const ExercisesCardList = () => {
  return (
    <div className='wrapper'>
      <ExercisesCard
        img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtO2DuZunMjRWrlvPNgEER5bnjyO6BzzXMDQ&usqp=CAU'
        title='html'
        desc='description text'
        to='/htmllessons'
      />
      <ExercisesCard
        img='https://cdn.mos.cms.futurecdn.net/Vp9WvV7YKdH4k8sKRePcE8.jpg'
        title='css'
        desc='description text'
        to='/csslessons'
      />
      <ExercisesCard
        img='https://www.freecodecamp.org/news/content/images/2022/04/featured.jpg'
        title='React'
        desc='description text'
        to='/reactlessons'
      />
    </div>
  );
};

export default ExercisesCardList;
