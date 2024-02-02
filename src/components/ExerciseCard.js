import React from "react";

function ExerciseCard({ gif, name, bodyPart, target, equipment }) {
  return (
    <div className="flex flex-col items-center cursor-pointer hover:scale-105 transition-all duration-200 ease-in-out border border-2-gray rounded-lg mb-5 mr-2 p-3">
      <img src={gif} alt="img" className="h-80 w-60 object-contain" />
      <p className="font-semibold">Name: {name}</p>
      <p>Equipment: {equipment}</p>
      <p>Body part: {bodyPart}</p>
      <p>Target: {target}</p>
    </div>
  );
}

export default ExerciseCard;
