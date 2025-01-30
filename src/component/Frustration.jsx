import Title from "./common/Title";
import FrustrationImg from "../assets/Frustrating.png";
const Frustration = () => {
  return (
    <div className="bg-tertiary  py-24">
      <div className="container flexRowBetween gap-x-40">
        <div className="space-y-6 w-1/2">
          <Title firstText={"Frustration of"} secondText={"Client"} />
          <p className="description">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s,
          </p>
          <ul className="description space-y-2 ">
            <li className="frustratedList">
              Loren rasion gravida auem is bibenua tase
            </li>
            <li className="frustratedList">
              Lorem Ipsum is simply dummy text of the.
            </li>
            <li className="frustratedList">
              Printing and typesetting industry. Lorem Ipsum
            </li>
            <li className="frustratedList">
              When an unknown printer took a galley of type and scrambled it
            </li>
          </ul>
        </div>
        <div>
          <picture>
            <img src={FrustrationImg} alt="" />
          </picture>
        </div>
      </div>
    </div>
  );
};

export default Frustration;
