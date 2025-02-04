// CheatsheetPopup.js
import React from "react";
import { motion } from "framer-motion";

const CheatsheetPopup = ({ cheatsheetContent, onClose }) => {
  return (
    <motion.div
      className='cheatsheet-popup'
      initial={{ opacity: 0, x: "-50%" }}
      animate={{ opacity: 1, x: "0%" }}
      exit={{ opacity: 0, x: "50%" }}
    >
      <div className='cheatsheet-content'>
        <div className='cheatsheet-text'>
          {cheatsheetContent.content?.map((section, index) => (
            <div key={index}>
              <h3>{section.title}</h3>
              {section.subtitle && <h2>{section.subtitle}</h2>}
              <ul>
                {section.details?.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
              {section.image && (
                <img
                  src={section.image}
                  alt={`cheatsheet-${index}`}
                  className='cheatsheet-image'
                />
              )}
            </div>
          ))}
        </div>
      </div>
      <button className='cheatsheet-close-button' onClick={onClose}>
        Close
      </button>
    </motion.div>
  );
};

export default CheatsheetPopup;