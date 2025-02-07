import Title from "../component/common/Title";
import HoverButton from "../component/common/HoverButton";
const OurCauses = () => {
  return (
    <div className="container text-center mt-28">
      <Title firstText={"Our"} secondText={"Causes"} />
      <div className="w-full flexRowBetween mt-14">
        <HoverButton content={"Show All"} />
        <HoverButton content={"Coaching"} />
        <HoverButton content={"Digital Partners"} />
        <HoverButton content={"SEO"} />
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="text-[#C4C4C4] border-b border-b-[#c4c4c4] px-4 py-2 text-lg"
          />
          <span className="absolute right-5 bottom-2 text-[#c4c4c4]">
            <i className="fa-solid fa-magnifying-glass"></i>
          </span>
        </div>
      </div>
    </div>
  );
};

export default OurCauses;
