import React, { useState } from "react";
import { toast } from "react-toastify";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/showStyles.css";

const StylesPopup = ({ taskId, stylesData }) => {
  const [showStyles, setShowStyles] = useState(false);
  const [selectedStyle, setSelectedStyle] = useState(null);
  const [copied, setCopied] = useState(false);

  const handleToggleStyles = () => {
    try {
      // Filter styles based on the current taskId
      const currentStyles = stylesData.filter(
        (style) => style.taskId === taskId
      );

      if (currentStyles.length === 0) {
        toast.error("No styles available for this task.");
        setShowStyles(false);
        return;
      }

      setSelectedStyle(currentStyles);
      setShowStyles((prev) => !prev);
    } catch (error) {
      console.error("Error toggling styles:", error);
      toast.error("Failed to toggle styles.");
    }
  };

  const handleCloseStyles = () => {
    setShowStyles(false);
  };

  const handleCopyToClipboard = async (css) => {
    try {
      await navigator.clipboard.writeText(css);
      setCopied(true); // Set copied state to true

      // Reset copied state after 2 seconds
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error("Error copying to clipboard:", error);
      toast.error("Failed to copy to clipboard.");
    }
  };

  return (
    <>
      <button
        className='button-84'
        onClick={handleToggleStyles}
        aria-label='Toggle Styles'
      >
        Show Styles
      </button>

      <AnimatePresence>
        {showStyles && selectedStyle && (
          <motion.div
            className='styles-popup'
            initial={{ opacity: 0, x: "-50%" }}
            animate={{ opacity: 1, x: "0%" }}
            exit={{ opacity: 0, x: "50%" }}
          >
            <div className='styles-content'>
              <div className='styles-text'>
                {selectedStyle.map((style, index) => (
                  <div key={index} className='style-item'>
                    <div>
                      <h3>{style.title}</h3>
                      <button
                        className={`styles-copy-button ${
                          copied ? "copied" : ""
                        }`}
                        onClick={() => handleCopyToClipboard(style.css)}
                      >
                        {copied ? "Copied!" : "Copy Code"}
                      </button>
                      <button
                        className='styles-close-button'
                        onClick={handleCloseStyles}
                      >
                        Close
                      </button>
                    </div>
                    <pre>
                      <code>{style.css}</code>
                    </pre>

                    {style.css2 && (
                      <div>
                        {style.title2 && <h3>{style.title2}</h3>}{" "}
                        <button
                          className={`styles-copy-button ${
                            copied ? "copied" : ""
                          }`}
                          onClick={() => handleCopyToClipboard(style.css2)}
                        >
                          {copied ? "Copied!" : "Copy Code"}
                        </button>
                        <button
                          className='styles-close-button'
                          onClick={handleCloseStyles}
                        >
                          Close
                        </button>
                        <pre>
                          <code>{style.css2}</code>
                        </pre>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default StylesPopup;