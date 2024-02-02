import React, { useEffect, useState } from "react";
import AdminHeader from "../components/AdminHeader";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import AdminUsersCard from "../components/AdminUsersCard";

function AdminUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    onSnapshot(collection(db, "users"), (snapshot) => {
      const userArr = [];
      snapshot.docs.map((doc) =>
        userArr.push({
          id: doc.id,
          email: doc.data().email,
          name: doc.data().name,
          profile: doc.data().profilePic,
        })
      );
      setUsers(userArr);
    });
  }, []);

  return (
    <div>
      <AdminHeader />

      <div className="max-w-3xl mx-auto mt-10 flex items-center flex-wrap">
        {users?.map((user) => (
          <AdminUsersCard
            key={user?.id}
            id={user?.id}
            name={user?.name}
            email={user?.email}
            profile={user?.profile}
          />
        ))}
      </div>
    </div>
  );
}

export default AdminUsers;
