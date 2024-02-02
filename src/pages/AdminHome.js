import React from "react";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import AdminHeader from "../components/AdminHeader";

function AdminHome() {
  const navigate = useNavigate();

  return (
    <div>
      <AdminHeader />

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
              src="https://imgs.search.brave.com/fPmNFduwMFK6-KZkr7dq_U0EVoBiHA9P-q5ua6nCWio/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZs/YXRpY29uLmNvbS8x/MjgvNjQvNjQ1NzIu/cG5n"
              alt="banner1"
              className="h-80 w-60 object-contain"
            />
            <button
              onClick={() => navigate("/adminUsers")}
              className="bg-green-400 text-white font-bold p-3 hover:scale-110 transition-all duration-200 ease-in-out rounded-lg"
            >
              View All Users
            </button>
          </div>

          <div className="flex flex-col space-y-2 items-center">
            <img
              src="https://imgs.search.brave.com/TgSJsLvBcpI8tTv_BYpC_I9XHxTBktLYVaSN2cSRwVc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9kM3N4/c2htbmNzMTB0ZS5j/bG91ZGZyb250Lm5l/dC9pY29uL3ByZW1p/dW0vcG5nLTEyOC81/MzE4LnBuZz90b2tl/bj1leUpoYkdjaU9p/Sm9jekkxTmlJc0lt/dHBaQ0k2SW1SbFpt/RjFiSFFpZlFfXy5l/eUpwYzNNaU9pSmtN/M040YzJodGJtTnpN/VEIwWlM1amJHOTFa/R1p5YjI1MExtNWxk/Q0lzSW1WNGNDSTZN/VGN3TmprM09Ea3pP/U3dpY1NJNmJuVnNi/Q3dpYVdGMElqb3hO/ekEyTnpFNU56TTVm/UV9fLmE2ZmIyMDk2/NDJlYWRiMzkyMDQz/ZTYwMjhlZWM2NjA5/OWU4NWUzODEyYWJi/MGRiZTEzMzljMGMy/ZTJmMzQ0OTk"
              alt="banner1"
              className="h-80 w-60 object-contain"
            />
            <button
              onClick={() => navigate("/adminEmployees")}
              className="bg-green-400 text-white font-bold p-3 hover:scale-110 transition-all duration-200 ease-in-out rounded-lg"
            >
              View and Edit Employees
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminHome;
