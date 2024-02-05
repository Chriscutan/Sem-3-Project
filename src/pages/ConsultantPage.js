import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import ConsultantCard from "../components/ConsultantCard";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";

function ConsultantPage() {
  const [consultants, setConsultants] = useState([]);

  useEffect(() => {
    onSnapshot(collection(db, "employees"), (snapshot) => {
      const consultantArr = [];
      snapshot.docs.map((doc) =>
        consultantArr.push({
          id: doc.id,
          email: doc.data().email,
          name: doc.data().name,
          profile: doc.data().profile_pic,
          exp: doc.data().experience,
        })
      );
      setConsultants(consultantArr);
    });
  }, []);

  return (
    <div>
      <Header />

      <div className="max-w-6xl mx-auto flex items-center justify-evenly flex-wrap mt-5">
        {consultants.map((consultant) => (
          <ConsultantCard
            key={consultant.id}
            id={consultant.id}
            name={consultant.name}
            experience={consultant.exp}
            avatar={consultant.profile}
          />
        ))}
      </div>
    </div>
  );
}

export default ConsultantPage;
