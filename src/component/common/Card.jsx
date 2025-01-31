import React from "react";

import Button from "./Button";

const card = ({ img, heading, descript, profile, profileName }) => {
  return (
    <div className="px-3 py-2 w-96 bg-white rounded-2xl gap-x-8">
      <picture>
        <img src={img} alt="" />
      </picture>
      <div className="py-7 space-y-2 border-b-[#FDFDFD] border-b">
        <h4 className="cardTitle">{heading} </h4>
        <p className="description">{descript} </p>
      </div>
      <div className="flexRowBetween mt-5">
        <div className="flex gap-x-3">
          <div>
            <img src={profile} alt="" />
          </div>
          <p>{profileName}</p>
        </div>
        <div className="text-[10px]">
          <p>28,Aug 2020, 09:48:00</p>
        </div>
      </div>
      <Button btnContant={"Read More"} />
    </div>
  );
};

export default card;
