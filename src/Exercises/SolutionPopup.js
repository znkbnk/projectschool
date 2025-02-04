import React from "react";
import CodeBlock from "../Exercises/CodeBlock.js";
import { motion, AnimatePresence } from "framer-motion";

const SolutionPopup = ({
  showSolution,
  taskTitle,
  loadingSolution,
  solutionCodes,
  onClose,
}) => {
  return (
    <AnimatePresence>
      {showSolution && (
        <motion.div
          className='solution-popup'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className='solution-container'>
            <h2 className='solution-title'>
              Solution code for: {taskTitle || "Task Title"}
            </h2>
            {loadingSolution ? (
              <p>Loading solution...</p>
            ) : (
              solutionCodes.map((code, index) => (
                <CodeBlock key={index} code={code} className='code-block' />
              ))
            )}
            <button className='close-button button-84' onClick={onClose}>
              Close
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SolutionPopup;