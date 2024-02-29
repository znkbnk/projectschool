import React, { useState, useCallback } from "react";
import "../styles/liveEditor.css";

const LiveEditor = () => {
  const [htmlContent, setHtmlContent] = useState(`<h1>Hello Worlds</h1>`);
  const [cssContent, setCssContent] = useState(`body {
    background-color: white;
  }
  h1 {
    text-align: center;
  }`);
  const [jsContent, setJsContent] = useState(``);

  const run = useCallback(() => {
    const resultHtml = document.getElementById("result").contentDocument;
    const cssArea = document.getElementsByClassName("css")[0].value;
    const jsArea = document.getElementsByClassName("js")[0].value;
    const htmlArea = document.getElementsByClassName("html")[0].value;

    resultHtml.open();
    resultHtml.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <style type="text/css">
            ${cssArea}
          </style>
        </head>
        <body>
            ${htmlArea}
          
            ${jsArea}
          
        </body>
      </html>
    `);
    resultHtml.close();
  }, []);

  const reset = () => {
    setCssContent(`body {
    background-color: white;
  }
  h1 {
    text-align: center;
  }`);
    setJsContent(``);
    setHtmlContent(`<h1>Hello World</h1>`);

    // Reset the content of the iframe to default
    const defaultHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <style type="text/css">
            body {
              background-color: white;
            }
            h1 {
              text-align: center;
            }
          </style>
        </head>
        <body>
          <h1>Hello World</h1>
        </body>
      </html>
    `;
    document.getElementById("result").srcdoc = defaultHtml;
  };

  const save = () => {
    const fullPage = new Blob(
      [
        document.getElementById("result").contentDocument.documentElement
          .innerHTML,
      ],
      {
        type: "text/html",
      }
    );
    const pageUrl = URL.createObjectURL(fullPage);
    const downloadLink = document.createElement("a");
    downloadLink.href = pageUrl;
    downloadLink.download = "index.html";
    downloadLink.click();
  };

  const handleRun = () => {
    run();
  };

  return (
    <main className='Live-Editor'>
      <form className='Live-Editor' id='input'>
        <label className='textarea'>
          <h2>HTML</h2>
          <textarea
            className='html'
            placeholder='Your HTML here'
            value={htmlContent}
            onChange={(e) => setHtmlContent(e.target.value)}
          ></textarea>
        </label>
        <label className='textarea'>
          <h2>CSS</h2>
          <textarea
            className='css'
            placeholder='Your CSS here'
            value={cssContent}
            onChange={(e) => setCssContent(e.target.value)}
          ></textarea>
        </label>
        <label className='textarea'>
          <h2>JavaScript</h2>
          <textarea
            className='js'
            placeholder='Your JavaScript here'
            value={jsContent}
            onChange={(e) => setJsContent(e.target.value)}
          ></textarea>
        </label>
      </form>
      <div>
        <button className='Live-Editor' onClick={reset}>
          Reset
        </button>
        <button className='Live-Editor' onClick={save}>
          Save
        </button>
        <button className='Live-Editor' onClick={handleRun}>
          Run
        </button>
      </div>
      <iframe
        className='Live-Editor'
        id='result'
        title='Live Editor Result'
        srcDoc=''
      ></iframe>
    </main>
  );
};

export default LiveEditor;
