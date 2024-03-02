import React from "react";
import { useParams } from "react-router-dom";
import tasksData from "./tasksData";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../styles/editor.css";

const LiveEditor = () => {
  const { lessonType, taskId } = useParams();

  let task = null;

  // Find the task within the appropriate category
  if (lessonType && tasksData[lessonType]) {
    task = tasksData[lessonType].find((task) => task.taskId === taskId);
  }

  const taskText = task ? task.taskText : "";

  return (
    <div>
      <Navbar />
      <div className='editor-container'>
        <div className='task'>
          <div className='text-window'>
            {lessonType ? (
              <p>
                This is {lessonType} content: {taskText}
              </p>
            ) : (
              <p>Start Practicing...</p>
            )}
          </div>
        </div>
        <iframe
          src={`https://codesandbox.io/embed/jhw9jl?view=Editor+%2B+Preview&module=%2Fsrc%2Fapp.tsx&hidenavigation=1&task=${taskId}`}
          title='React'
          allow='accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking'
          sandbox='allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts'
        ></iframe>
      </div>
      <Footer />
    </div>
  );
};

export default LiveEditor;
