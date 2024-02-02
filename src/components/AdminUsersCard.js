import React from "react";

function AdminUsersCard({ id, profile, name, email }) {
  return (
    <div className="cursor-pointer flex flex-col items-center p-3 border border-2-gray mr-10 mb-10 hover:scale-110 transition-all duration-200 ease-in-out">
      <img src={profile} alt="profile" className="h-40 w-20 object-contain" />

      <p>Name: {name}</p>
      <p>Email: {email}</p>
    </div>
  );
}

export default AdminUsersCard;
