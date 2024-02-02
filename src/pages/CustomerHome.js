import React from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

function CustomerHome() {
  const navigate = useNavigate();
  return (
    <div>
      <Header />

      <div className="max-w-3xl mx-auto mt-10">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>

        <div className="flex items-center justify-evenly">
          <div className="flex flex-col space-y-2 items-center">
            <img
              src="https://imgs.search.brave.com/X64jtJzcLbl8FJbWHNxZDB6gOoeI5klL5MVz9-4IR9Q/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvcHJldmll/dy0xeC81Ny81Mi9j/YXJ0b29uLW1hbGUt/YXRobGV0ZS1kb2lu/Zy1maXRuZXNzLWV4/ZXJjaXNlLXZlY3Rv/ci0zMzMyNTc1Mi5q/cGc"
              alt="banner1"
              className="h-80 w-60 object-contain"
            />
            <button
              onClick={() => navigate("/exercise")}
              className="bg-green-400 text-white font-bold p-3 hover:scale-110 transition-all duration-200 ease-in-out rounded-lg"
            >
              Start Exercise
            </button>
          </div>

          <div className="flex flex-col space-y-2 items-center">
            <img
              src="https://imgs.search.brave.com/d6P1uRN_AiIzDjp9DVfV4bIOXQsSURA89ym-d0kkDgA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS12ZWN0b3Iv/bWFuLWRvaW5nLXlv/Z2EtY2FydG9vbi1j/aGFyYWN0ZXJfMTMw/OC0xMTg1OTYuanBn/P3NpemU9NjI2JmV4/dD1qcGc"
              alt="banner1"
              className="h-80 w-60 object-contain"
            />
            <button
              onClick={() => navigate("/yoga")}
              className="bg-green-400 text-white font-bold p-3 hover:scale-110 transition-all duration-200 ease-in-out rounded-lg"
            >
              Start Yoga
            </button>
          </div>

          <div className="flex flex-col space-y-2 items-center">
            <img
              src="https://imgs.search.brave.com/26BcpunPJp308zNt_8eik2JE_ClqT7ydMX6jCwkzWt8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9jYXJ0/b29uLWJ1c2luZXNz/bWFuLWNvbnN1bHRh/bnQtZ2l2aW5nLWFk/dmljZS0zMzEzNTc4/NS5qcGc"
              alt="banner1"
              className="h-80 w-60 object-contain"
            />
            <button
              onClick={() => navigate("/consultant")}
              className="bg-green-400 text-white font-bold p-3 hover:scale-110 transition-all duration-200 ease-in-out rounded-lg"
            >
              Start Consulting
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerHome;
