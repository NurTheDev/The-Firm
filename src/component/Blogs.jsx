import Title from "./common/Title";
import Card from "./common/Card";
import HeadingImg from "../assets/Rectangle 64.png";
import HeadingImg2 from "../assets/secondsCard.png";
import HeadingImg3 from "../assets/thirdCard.png";
import avater from "../assets/avater.png";
import avater2 from "../assets/avater2.png";
import avater3 from "../assets/avater3.png";

const Blogs = () => {
  return (
    <div className="bg-secondary py-20">
      <div className="container ">
        <div className="text-center ">
          <Title firstText={"Our"} secondText={"Blogs"} />
        </div>
        <div className="flexRowBetween mt-16">
          <Card
            img={HeadingImg}
            heading={"Lorem Ipsum is "}
            descript={
              "Lorem Ipsum is simply  text of the printing and type setting industry. make a type specimen. "
            }
            profile={avater}
            profileName={"Alex Liones"}
            time={"28,Aug 2020, 09:48:00"}
          />
          <Card
            img={HeadingImg2}
            heading={"Lorem Ipsum is "}
            descript={
              "Lorem Ipsum is simply  text of the printing and type setting industry. make a type specimen. "
            }
            profile={avater2}
            profileName={"Alex Liones"}
            time={"28,Aug 2020, 09:48:00"}
          />
          <Card
            img={HeadingImg3}
            heading={"Lorem Ipsum is "}
            descript={
              "Lorem Ipsum is simply  text of the printing and type setting industry. make a type specimen. "
            }
            profile={avater3}
            profileName={"Alex Liones"}
            time={"28,Aug 2020, 09:48:00"}
          />
        </div>
      </div>
    </div>
  );
};

export default Blogs;
