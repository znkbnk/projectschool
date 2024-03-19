import React from "react";
import "../styles/price.css";
import Navbar from "./Navbar";

function Pricing() {
  return (
    <div>
      <Navbar />
      <div className='promos'>
        <div className='promo'>
          <div className='deal'>
            <span>React</span>
            <span>All Lessons</span>
          </div>
          <span className='price'>10$</span>
          <ul className='features'>
            <li>Some great feature</li>
            <li>Another super feature</li>
            <li>And more...</li>
          </ul>
          <button className="button-28">Sign up</button>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
