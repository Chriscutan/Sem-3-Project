import React, { useEffect, useState } from "react";
import AdminHeader from "../components/AdminHeader";
import EmployeeCard from "../components/EmployeeCard";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";

function AdminEmployees() {
  const [consultants, setConsultants] = useState([]);

  useEffect(() => {
    onSnapshot(collection(db, "employees"), (snapshot) => {
      const consultantsArr = [];
      snapshot.docs.map((doc) =>
        consultantsArr.push({
          id: doc.id,
          email: doc.data().email,
          name: doc.data().name,
          profile: doc.data().profile_pic,
          mobile: doc.data().mobile,
        })
      );
      setConsultants(consultantsArr);
    });
  }, []);

  return (
    <div>
      <AdminHeader />

      <div className="max-w-6xl mx-auto mt-10 flex items-center justify-evenly flex-wrap">
        {consultants?.map((consultant) => (
          <EmployeeCard
            key={consultant.id}
            id={consultant.id}
            name={consultant.name}
            email={consultant.email}
            mobile={consultant.mobile}
            profile={consultant.profile}
          />
        ))}
      </div>
    </div>
  );
}

export default AdminEmployees;
