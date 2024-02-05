import { deleteDoc, doc } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../firebase";
import UpdateEmployeeCard from "./UpdateEmployeeCard";

function EmployeeCard({ id, name, email, mobile, profile }) {
  const [showUpdateEmployeeModal, setShowUpdatEmployeeModal] = useState(false);

  const deleteEmployee = (e) => {
    e.preventDefault();

    deleteDoc(doc(db, `employees/${email}`));

    alert("Employee Deleted!!!!");
  };
  return (
    <div className="flex flex-col items-center border border-2-gray  p-3 rounded-lg hover:scale-110 transition-all duration-200 ease-in-out cursor-pointer mb-10">
      <img
        src={profile}
        alt="profile"
        className="h-60 object-contain rounded-lg mb-5"
      />

      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Mobile: {mobile}</p>

      <div className="flex items-center space-x-3 mt-5">
        <button
          onClick={() => setShowUpdatEmployeeModal(true)}
          className="bg-green-400 p-3 text-white font-bold rounded-lg hover:scale-105 transition-all duration-200 ease-in-out"
        >
          Edit Employee
        </button>
        <button
          onClick={deleteEmployee}
          className="bg-red-400 p-3 text-white font-bold rounded-lg hover:scale-105 transition-all duration-200 ease-in-out"
        >
          Delete Employee
        </button>
      </div>

      {showUpdateEmployeeModal && (
        <UpdateEmployeeCard
          email={email}
          setShowUpdatEmployeeModal={setShowUpdatEmployeeModal}
        />
      )}
    </div>
  );
}

export default EmployeeCard;
