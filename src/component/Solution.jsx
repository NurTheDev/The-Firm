import AchiveCard from "./common/AachiveCard";
import communicate from "../assets/win.svg";
import deal from "../assets/deal.svg";
import seo from "../assets/seo.svg";
import Title from "./common/Title";
import Button from "./common/Button";
const Solution = () => {
  return (
    <div>
      <div className="solutionBg container">
        <div className="flex justify-end items-center w-full relative">
          <div className="left-0 top-28 absolute">
            <div className="absolute left-0 top-0">
              <AchiveCard
                img={communicate}
                heading={"Coaching"}
                descript={"Loren rasion gravida auemis bibenua tase"}
              />
            </div>
            <div className="absolute left-96 top-48">
              {" "}
              <AchiveCard
                img={deal}
                heading={"Digital Partner"}
                descript={"Loren rasion gravida auemis bibenua tase"}
              />
            </div>
            <div className="absolute top-96">
              <AchiveCard
                img={seo}
                heading={"SEO "}
                descript={"Loren rasion gravida auemis bibenua tase"}
              />
            </div>
          </div>
          <div className="flexCol items-start space-y-10 py-52 w-1/2 ">
            <Title
              firstText={"Perfect Solution for Your"}
              secondText={"Bussiness"}
            />
            <p className="description">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book. It has
              survived not only five centuries,
            </p>
            <Button btnContant={"Read More"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solution;
