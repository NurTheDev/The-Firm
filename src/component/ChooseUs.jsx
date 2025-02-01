import HoverButton from "./common/HoverButton";
import Title from "./common/Title";
import BrandImg from "../assets/brand.png";
import Button from "./common/Button";
const ChooseUs = () => {
  return (
    <div className="bg-secondary">
      <div className="container mt-72 py-32">
        <div className="pt-24 text-center ">
          <Title firstText={"Reason to Choose "} secondText={"Us"} />
          <p className="w-1/2 mx-auto mt-7 description">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book. It has survived
            not only five centuries,
          </p>
        </div>
        <div className="flex w-full justify-around mt-12">
          <HoverButton content={"Market Research"} />
          <HoverButton content={"Branding"} />
          <HoverButton content={"Reporting"} />
          <HoverButton content={"Data Analysis"} />
        </div>
        <div className="bg-white rounded-4xl py-14 px-12 flexRowBetween mt-14">
          <div className="p-3 rounded-3xl bg-white shadow-2xl overflow-hidden ">
            <picture>
              <img
                className="rounded-3xl hover:scale-110 transition"
                src={BrandImg}
                alt=""
              />
            </picture>
          </div>
          <div className="flexCol space-y-5 items-start w-1/2 brandLogo">
            <Title firstText={""} secondText={"Branding"} />
            <p className="description">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type
            </p>
            <Button btnContant={"Read More"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
