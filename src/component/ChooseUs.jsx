import HoverButton from "./common/HoverButton";
import Title from "./common/Title";
const ChooseUs = () => {
  return (
    <div className="bg-secondary">
      <div className="container mt-72">
        <div className="pt-24 text-center ">
          <Title firstText={"Reason to Choose "} secondText={"Us"} />
          <p className="w-1/2 mx-auto mt-7 description">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries,
          </p>
        </div>
        <div className="flex w-full justify-around">
          <HoverButton contant={"Branding"} />
          <HoverButton contant={"Branding"} />
          <HoverButton contant={"Branding"} />
          <HoverButton contant={"Branding"} />{" "}
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
