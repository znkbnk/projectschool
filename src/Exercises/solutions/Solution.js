import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CodeBlock from "./CodeBlock";
import Navbar from "../../components/Navbar";
import SolutionTitle from "./solutionTitle";
import { tasksData } from "../../data/tasksData";
import "../../styles/solution.css";

const Solution = () => {
  const [solutionCodes, setSolutionCodes] = useState([]);
  const { lessonType, taskId } = useParams();
  const currentTask = tasksData[lessonType]?.find(task => task.taskId === taskId);
  const navigate = useNavigate();


  useEffect(() => {
    import(`./${taskId}`)
      .then((module) => {
        if (Array.isArray(module.default)) {
          setSolutionCodes(module.default);
        } else {
          setSolutionCodes([module.default]);
        }
      })
      .catch((error) => {
        console.error("Error loading solution:", error);
        setSolutionCodes(["Solution not found"]);
      });
  }, [taskId]);

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <Navbar />
      <div className="solution-container">
        <SolutionTitle />
        <h2 className="solution-title">
      <button className="button-85" onClick={handleGoBack}>Go Back</button>
         {currentTask ? currentTask.taskTitle : "Task Title"}
        </h2>
        {solutionCodes.map((code, index) => (
          <CodeBlock key={index} code={code} className="code-block" />
        ))}
      </div>
    </div>
  );
};

export default Solution;
