import React from "react";
import birthdayIcon from "../../../../assets/image/birthday.png";

const Birthday = () => {
  const birthdays = [
    {
      name: "Ibn Lokman",
    },
    {
      name: "Ibn Lokman",
    },
    {
      name: "Ibn Lokman",
    },
    {
      name: "Ibn Lokman",
    },
  ];

  return (
    <div className="flex flex-col gap-2 bg-white p-3">
      <h3 className="font-medium text-sm font-poppins">Birthdays</h3>
      <div className="flex items-center gap-2">
        <img src={birthdayIcon} alt="Birthday Icon" />
        <p className="text-xs font-medium font-poppins">
          <span className="font-semibold">{birthdays[0]?.name}</span> and{" "}
          <span className="font-semibold">{Object.keys(birthdays).length}</span>{" "}
          others have birthdays today
        </p>
      </div>
    </div>
  );
};

export default Birthday;
