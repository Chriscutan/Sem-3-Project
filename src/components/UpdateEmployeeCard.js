import { doc, serverTimestamp, updateDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import React, { useRef, useState } from "react";
import { db, storage } from "../firebase";

function UpdateEmployeeCard({ email, setShowUpdatEmployeeModal }) {
  const filePickerRef = useRef(null);

  const [name, setName] = useState("");
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

  const updateEmployee = async (e) => {
    e.preventDefault();

    const imageRef = ref(storage, `users/${email}/profile`);

    await uploadString(imageRef, selectedFile, "data_url").then(async () => {
      const downloadUrl = await getDownloadURL(imageRef);

      updateDoc(doc(db, `employees/${email}`), {
        name: name,
        mobile: mobile,
        profile_pic: downloadUrl,
        time: serverTimestamp(),
      });
    });

    setSelectedFile(null);
    setName("");
    setMobile("");
    setShowUpdatEmployeeModal(false);
  };

  return (
    <div className="flex flex-col items-center rounded-lg p-3 fixed top-28 shadow-2xl mt-20">
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
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          type="mobile"
          placeholder="Mobile"
          className="bg-gray-200 p-3 rounded-lg outline-none"
        />
        <button
          onClick={updateEmployee}
          className="bg-blue-400 w-full py-2 rounded-lg text-sm font-bold text-white hover:scale-110 transition-all duration-200 ease-in-out"
        >
          Update Employee
        </button>
      </form>
    </div>
  );
}

export default UpdateEmployeeCard;
