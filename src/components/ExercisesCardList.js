// CardList.js
import React from "react";
import ExercisesCard from "./ExercisesCard"; 
import '../styles/exercises.css'

const ExercisesCardList = () => {
  return (
    <div className='wrapper'>
      <ExercisesCard
        img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtO2DuZunMjRWrlvPNgEER5bnjyO6BzzXMDQ&usqp=CAU'
        title='Building Blocks of the Web'
        desc='Learn the fundamentals of HTML, the backbone of web development. Dive into tags, elements, and structures that form the basis of every web page.'
        to='/htmllessons'
      />
      <ExercisesCard
        img='https://cdn.mos.cms.futurecdn.net/Vp9WvV7YKdH4k8sKRePcE8.jpg'
        title='Styling Your Web Pagesss'
        desc='Explore the power of CSS to beautify and style your web pages. From colors and fonts to layouts and animations, master the art of visual design for the web.'
        to='/csslessons'
      />
      <ExercisesCard
        img='https://www.freecodecamp.org/news/content/images/2022/04/featured.jpg'
        title='Building Dynamic User Interfaces'
        desc='Delve into React, the popular JavaScript library for building dynamic and interactive user interfaces. Learn components, state management, and the React ecosystem to create modern web applications.'
        to='/reactlessons'
      />
    </div>
  );
};

export default ExercisesCardList;
