import Card from "../component/common/Card";
import Button from "../component/common/Button";
import cardimg1 from "../assets/Causes/card1.png";
import cardimg2 from "../assets/Causes/card2.png";
import cardimg3 from "../assets/Causes/card3.png";
import cardimg4 from "../assets/Causes/card4.png";
import cardimg5 from "../assets/Causes/card5.png";
import cardimg6 from "../assets/Causes/card6.png";
import cardimg7 from "../assets/Causes/card7.png";
import cardimg8 from "../assets/Causes/card8.png";
import cardimg9 from "../assets/Causes/card9.png";
const CausesCard = () => {
  return (
    <div className="container flex items-center flex-col">
      <div className="flex flex-wrap items-center gap-y-16 justify-between mt-20 mb-14">
        <Card
          img={cardimg1}
          heading={"Lorem Ipsum is "}
          descript={
            "Lorem Ipsum is simply  text of the printing and type setting industry. make a type specimen. "
          }
        />
        <Card
          img={cardimg2}
          heading={"Lorem Ipsum is "}
          descript={
            "Lorem Ipsum is simply  text of the printing and type setting industry. make a type specimen. "
          }
        />
        <Card
          img={cardimg3}
          heading={"Lorem Ipsum is "}
          descript={
            "Lorem Ipsum is simply  text of the printing and type setting industry. make a type specimen. "
          }
        />
        <Card
          img={cardimg4}
          heading={"Lorem Ipsum is "}
          descript={
            "Lorem Ipsum is simply  text of the printing and type setting industry. make a type specimen. "
          }
        />
        <Card
          img={cardimg5}
          heading={"Lorem Ipsum is "}
          descript={
            "Lorem Ipsum is simply  text of the printing and type setting industry. make a type specimen. "
          }
        />
        <Card
          img={cardimg6}
          heading={"Lorem Ipsum is "}
          descript={
            "Lorem Ipsum is simply  text of the printing and type setting industry. make a type specimen. "
          }
        />
        <Card
          img={cardimg7}
          heading={"Lorem Ipsum is "}
          descript={
            "Lorem Ipsum is simply  text of the printing and type setting industry. make a type specimen. "
          }
        />
        <Card
          img={cardimg8}
          heading={"Lorem Ipsum is "}
          descript={
            "Lorem Ipsum is simply  text of the printing and type setting industry. make a type specimen. "
          }
        />
        <Card
          img={cardimg9}
          heading={"Lorem Ipsum is "}
          descript={
            "Lorem Ipsum is simply  text of the printing and type setting industry. make a type specimen. "
          }
        />
      </div>
      <Button btnContant="Load More" />
    </div>
  );
};

export default CausesCard;
