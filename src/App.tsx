import { useState } from "react";
import "./App.css";
import CourseForm from "./components/courseForm";
import Course from "./types/Course";

function App() {
  const [courses, setCourses] = useState<Course[]>([]);
  const handleAddCourse = (newCourse: Course) => {
    setCourses([...courses, newCourse]);
  };

  return (
    <>
      <CourseForm onAddCourse={handleAddCourse} />
    </>
  );
}

export default App;
