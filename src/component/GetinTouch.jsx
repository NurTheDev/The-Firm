// import mapImg from "../assets/map.png";
import Title from "./common/Title";
import Label from "./common/Label";
import Button from "./common/Button";
const GetinTouch = () => {
  return (
    <div className="relative bgMap">
      {/* <div className="w-full h-64 ">
        <picture>
          <img className="object-cover w-full" src={mapImg} alt="" />
        </picture>
      </div> */}
      <div className="container">
        <div className="py-[60px] px-[73px] bg-white rounded-2xl shadow-2xl customPosition w-[940px] flexCol justify-center items-center">
          <div className="text-center">
            <Title firstText={"Get in"} secondText={"Touch"} />
          </div>
          <div className="grid grid-cols-2 gap-x-32 items-center gap-y-10 mt-14">
            <Label
              labelFor="name"
              Title="Name"
              inputId="name"
              inputType="text"
              placeholder="Enter Your Name"
            />
            <Label
              labelFor="name"
              Title="Name"
              inputId="name"
              inputType="text"
              placeholder="Enter Your Name"
            />
            <Label
              labelFor="name"
              Title="Name"
              inputId="name"
              inputType="text"
              placeholder="Enter Your Name"
            />
            <Label
              labelFor="name"
              Title="Name"
              inputId="name"
              inputType="text"
              placeholder="Enter Your Name"
            />
          </div>
          <div className="mt-16">
            <Button btnContant="Submit" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetinTouch;
