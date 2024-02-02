import React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function AdminHeader() {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const signOut = () => {
    auth.signOut();
    navigate("/auth");
  };
  return (
    <header className="flex items-center justify-between p-5 shadow-lg">
      <img
        src="https://imgs.search.brave.com/7qHmlG5LaznQWWPQ0sPwPFkyMiRimlpscfetsmPfpqc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvcHJldmll/dy0xeC8yNC84Ny9t/ZW50YWwtaGVhbHRo/LXBzeWNoaWF0cnkt/cHN5Y2hvbG9neS10/aGVyYXB5LWljb24t/dmVjdG9yLTMyNjAy/NDg3LmpwZw"
        alt="logo"
        className="h-20 w-20 object-contain cursor-pointer"
        onClick={() => navigate("/adminHome")}
      />

      <div className="flex items-center space-x-5 font-semibold">
        <a
          href="/adminUsers"
          className="hover:text-blue-400 hover:scale-105 transition-all duration-200 ease-in-out"
        >
          Users
        </a>

        <a
          href="/adminEmployees"
          className="hover:text-blue-400 hover:scale-105 transition-all duration-200 ease-in-out"
        >
          Employees
        </a>
      </div>

      <img
        src={user?.photoURL}
        alt="profile"
        className="rounded-full h-10 w-10 cursor-pointer"
        onClick={signOut}
      />
    </header>
  );
}

export default AdminHeader;
