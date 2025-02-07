import Button from "./Button";

const card = ({ img, heading, descript, profile, profileName, time }) => {
  return (
    <div className=" card">
      <picture>
        <img className="w-full" src={img} alt="" />
      </picture>
      <div className="py-7 space-y-2 border-b-[#ddd8d8] border-b">
        <h4 className="cardTitle">{heading} </h4>
        <p className="description">{descript} </p>
      </div>
      <div className="flexRowBetween my-5 w-full">
        <div className="flex gap-x-3 items-center justify-between ">
          <div>
            <img src={profile} alt="" className="mt-2" />
          </div>
          <p>{profileName}</p>
        </div>
        <div className="text-[10px] text-[#B0B0B0]">
          <p>{time}</p>
        </div>
      </div>
      <div className="flex justify-center pb-8">
        <Button btnContant={"Read More"} />
      </div>
    </div>
  );
};

export default card;
