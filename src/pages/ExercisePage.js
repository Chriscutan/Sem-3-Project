import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import ExerciseCard from "../components/ExerciseCard";
import { exerciseOptions, fetchData } from "../utils/fetchData";

function ExercisePage() {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];

      exercisesData = await fetchData(
        `https://exercisedb.p.rapidapi.com/exercises`,
        exerciseOptions
      );

      setExercises(exercisesData);
    };

    fetchExercisesData();
  }, []);

  return (
    <div>
      <Header />

      <div className="max-w-4xl mx-auto flex flex-wrap mt-10">
        {exercises.map((exercise) => (
          <ExerciseCard
            key={exercise.id}
            gif={exercise.gifUrl}
            name={exercise.name}
            bodyPart={exercise.bodyPart}
            target={exercise.target}
            equipment={exercise.equipment}
          />
        ))}
      </div>
    </div>
  );
}

export default ExercisePage;
