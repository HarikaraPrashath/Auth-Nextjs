import Image from "next/image";
import React from "react";
import { TfiReload } from "react-icons/tfi";

const Pills = () => {
  const medications = [
    {
      id: 1,
      name: "Lorem Ipsum",
      dosage: "2 pills (1) : Daily",
      image: "/Images/pills.png",
    },
    {
      id: 2,
      name: "Lorem Ipsum",
      dosage: "2 pills (1) : Daily",
      image: "/Images/pills.png",
    },
    {
      id: 3,
      name: "Lorem Ipsum",
      dosage: "2 pills (1) : Daily",
      image: "/Images/pills.png",
    },
    {
      id: 4,
      name: "Lorem Ipsum",
      dosage: "2 pills (1) : Daily",
      image: "/Images/pills.png",
    },
  ];

  return (
    <div>
      <h1 className="text-green-950 pl-4 text-lg pt-3">
        Current Medication(4)
      </h1>

      {medications.map((pill, index) => (
        <div
          key={pill.id}
          className={`h-12 border-green-800 mx-2 px-2 flex items-center space-x-3 ${
            index !== medications.length - 1 ? "border-b-1" : ""
          }`}
        >
          <Image
            src={pill.image}
            alt={pill.name}
            width={22}
            height={22}
            className="rounded-full"
          />

          <div className="flex flex-col leading-tight">
            <p className="text-sm font-medium text-green-900">{pill.name}</p>
            <p className="text-xs text-gray-700">{pill.dosage}</p>
          </div>
        </div>
      ))}

      <div className="border-t-1 flex  border-green-950 justify-between  mt-12 mx-4 pt-1 text-xs text-green-500">
        <p className="mb-2 cursor-pointer my-1">See all interactions</p>

        <p className="flex items-center my-1 space-x-2 cursor-pointer hover:underline">
          <TfiReload className="text-xs" />
          <span className="text-xs">Request refill</span>
        </p>
      </div>
    </div>
  );
};

export default Pills;
