import React, { useRef, useState } from "react";
import AdminHeader from "../components/AdminHeader";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { db, storage } from "../firebase";

function AdminAddEmployee() {
  const filePickerRef = useRef(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const addImageToProfile = (e) => {
    e.preventDefault();

    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      setSelectedFile(readerEvent.target.result);
    };
  };

  const addEmployee = async (e) => {
    e.preventDefault();

    const imageRef = ref(storage, `users/${email}/profile`);

    await uploadString(imageRef, selectedFile, "data_url").then(async () => {
      const downloadUrl = await getDownloadURL(imageRef);

      setDoc(doc(db, `employees/${email}`), {
        name: name,
        email: email,
        mobile: mobile,
        profile_pic: downloadUrl,
        time: serverTimestamp(),
      });
    });

    setSelectedFile(null);
    setName("");
    setEmail("");
    setMobile("");
  };

  return (
    <div className="">
      <AdminHeader />

      <div className="h-screen grid place-items-center">
        <div className="flex flex-col items-center rounded-lg p-3 fixed top-28 shadow-xl z-100 mt-20">
          <div>
            <img
              src={
                selectedFile
                  ? selectedFile
                  : "https://imgs.search.brave.com/t6cJk1K3-wWG8_yNRQLZ_Z20kkaa_jGFUJN2bQHS2Gc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA0LzYyLzYzLzY1/LzM2MF9GXzQ2MjYz/NjUwMl85Y0RBWXV5/VnZCWTRxWUpsSGpX/N3ZxYXI1SFlTOGg4/eC5qcGc"
              }
              alt="profile_pic"
              className="h-20 w-20 rounded-full mx-auto cursor-pointer mb-4"
              onClick={() => filePickerRef.current.click()}
            />

            <input
              type="file"
              ref={filePickerRef}
              hidden
              onChange={addImageToProfile}
            />
          </div>
          <form className="flex flex-col items-center space-y-4">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Name"
              className="bg-gray-200 p-3 rounded-lg outline-none"
            />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
              className="bg-gray-200 p-3 rounded-lg outline-none"
            />
            <input
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              type="mobile"
              placeholder="Mobile"
              className="bg-gray-200 p-3 rounded-lg outline-none"
            />
            <button
              onClick={addEmployee}
              className="bg-blue-400 w-full py-2 rounded-lg text-sm font-bold text-white hover:scale-110 transition-all duration-200 ease-in-out"
            >
              Add Employee
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AdminAddEmployee;
