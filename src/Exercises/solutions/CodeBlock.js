import React, { useState } from 'react';
import 'prismjs/themes/prism.css';
import "../../styles/solution.css";

const CodeBlock = ({ code }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); 
  };  

  return (
    <div className="solution-container">
      <div className="code-block">
        <pre className="custom-code-block">
          <code className="language-javascript">
            {code}
          </code>
        </pre>
        <div className="copy-button">
          <button className="button-84" onClick={handleCopy}>
            {copied ? "Copied!" : "Copy Code"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CodeBlock;
