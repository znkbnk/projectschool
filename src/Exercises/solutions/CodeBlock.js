import React, { useState } from 'react';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'; 
import { CopyToClipboard } from 'react-copy-to-clipboard';
import hljs from 'highlight.js';
import "../../styles/solution.css";

hljs.configure({
  languages: ['javascript'],
});

const CodeBlock = ({ code }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); 
  };  

  return (
    <div className="solution-container">
      <div className="code-block">
        <SyntaxHighlighter language="javascript" style={a11yDark} className="custom-code-block">
          {code}
        </SyntaxHighlighter>
        <CopyToClipboard text={code} onCopy={handleCopy}>
          <div className="copy-button">
            <button className="button-84">{copied ? "Copied!" : "Copy Code"}</button>
          </div>
        </CopyToClipboard>
      </div>
    </div>
  );
};

export default CodeBlock;
