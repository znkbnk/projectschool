import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';



const InterviewTasks = () => {
 

  function ScrollToTopOnNavigation() {
    window.scrollTo(0, 0);
    return null;
  }



  return (
    <div>
      <ScrollToTopOnNavigation />

      <Navbar />
     
      <Footer />
    </div>
  );
};

export default InterviewTasks;



