import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import ConsultantCard from "../components/ConsultantCard";

function ConsultantPage() {
  const [consultants, setConsultants] = useState([]);

  useEffect(() => {
    const therapists = async () => {
      const results = await fetch(
        "https://65bcfc19b51f9b29e932b3ab.mockapi.io/thrapists"
      );

      const data = await results.json();

      setConsultants(data);
    };

    return therapists;
  }, []);

  return (
    <div>
      <Header />

      <div className="max-w-3xl mx-auto flex items-center justify-evenly flex-wrap mt-5">
        {consultants.map((consultant) => (
          <ConsultantCard
            key={consultant.id}
            id={consultant.id}
            name={consultant.name}
            experience={consultant.experience}
            avatar={consultant.avatar}
          />
        ))}
      </div>
    </div>
  );
}

export default ConsultantPage;
