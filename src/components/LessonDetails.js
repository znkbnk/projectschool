import React from "react";
import { useParams } from "react-router-dom";

function LessonDetails() {
  let { lessonId } = useParams(); // Get the lessonId from URL parameter

  // Fetch lesson details based on lessonId and render them
  return (
    <div>
      <h2>Lesson Details for Lesson ID: {lessonId}</h2>
      {/* Render lesson details here */}
    </div>
  );
}

export default LessonDetails;
