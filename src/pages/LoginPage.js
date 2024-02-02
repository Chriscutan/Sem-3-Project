import React from "react";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth, db, provider } from "../firebase";
import { doc, query, setDoc } from "firebase/firestore";

function LoginPage() {
  const navigate = useNavigate();

  const signInUser = () => {
    signInWithPopup(auth, provider)
      .then((authUser) => {
        if (authUser) {
          if (authUser.user.email === "chrisrocks2829@gmail.com") {
            const q = query(doc(db, `users/${authUser.user.email}`));
            setDoc(q, {
              name: authUser.user.displayName,
              email: authUser.user.email,
              profilePic: authUser.user.photoURL,
              role: "admin",
            });
            navigate("/adminHome");
          } else {
            const q = query(doc(db, `users/${authUser.user.email}`));
            setDoc(q, {
              name: authUser.user.displayName,
              email: authUser.user.email,
              profilePic: authUser.user.photoURL,
              role: "Customer",
            });
            navigate("/");
          }
        }
      })
      .catch((err) => err.message);
  };

  return (
    <div className="h-screen grid place-items-center">
      <div className="flex-col space-y-2">
        <img
          src="https://imgs.search.brave.com/7qHmlG5LaznQWWPQ0sPwPFkyMiRimlpscfetsmPfpqc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvcHJldmll/dy0xeC8yNC84Ny9t/ZW50YWwtaGVhbHRo/LXBzeWNoaWF0cnkt/cHN5Y2hvbG9neS10/aGVyYXB5LWljb24t/dmVjdG9yLTMyNjAy/NDg3LmpwZw"
          alt="logo"
          className="h-200 w-100 object-contain mb-10"
        />

        <button
          onClick={signInUser}
          className="bg-green-400 text-white font-bold p-5 rounded-lg hover:scale-110 transition-all duration-200 ease-in-out"
        >
          Sign in with Google
        </button>
      </div>
    </div>
  );
}

export default LoginPage;
