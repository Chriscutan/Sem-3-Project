import React from "react";
import { IoChatboxEllipses } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
import { FaVideo } from "react-icons/fa";

function ConsultantCard({ id, avatar, name, experience }) {
  return (
    <div className="flex flex-col items-center border border-gray-200  rounded-lg mb-5 p-3 hover:scale-105 transition-all duration-200 ease-in-out">
      <img
        src={avatar}
        alt="img"
        className="h-60 w-full object-contain cursor-pointer"
      />

      <div className="flex flex-col space-y-3 mb-2">
        <p>Name: {name}</p>
        <p>Experience: {experience} years</p>
      </div>

      <div className="flex items-center space-x-5">
        <IoChatboxEllipses className="text-green-400 h-6 w-6" />

        <IoCall className="text-green-400 h-6 w-6" />

        <FaVideo className="text-green-400 h-6 w-6" />
      </div>
    </div>
  );
}

export default ConsultantCard;
