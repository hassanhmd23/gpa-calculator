"use client";

import { useState } from "react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import Course from "@/types/Course";

type Props = {
  onAddCourse: (course: Course) => void;
};


const CourseForm = (props: Props) => {
  const onAddCourse = props.onAddCourse;
  const [courseName, setCourseName] = useState("");
  const [credits, setCredits] = useState(0);
  const [grade, setGrade] = useState(0);

  const handleAddCourse = () => {
    if (courseName && credits > 0 && grade) {
      const newCourse: Course = {
        courseName,
        credits,
        grade,
      };

      onAddCourse(newCourse);
      setCourseName("");
      setCredits(0);
      setGrade(0);
    } else {
      alert("Please enter valid course details.");
    }
  };

  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label>Course</Label>
        <Input
          type="text"
          value={courseName}
          onChange={(e) => setCourseName(e.target.value)}
        />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label>Credits</Label>
        <Input
          type="number"
          value={credits || ''}
          onChange={(e) => setCredits(Number(e.target.value))}
        />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label>Grade</Label>
        <Input
          type="number"
          value={grade || ''}
          onChange={(e) => setGrade(Number(e.target.value))}
        ></Input>
      </div>
      <Button className="self-end" onClick={handleAddCourse}>Add</Button>
    </div>
  );
};

export default CourseForm;
