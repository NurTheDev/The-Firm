import Button from "./common/Button";
import BannerImg from "../assets/banner.png";
const Banner = () => {
  return (
    <div className="bannerImg ">
      <div className="container z-10 py-[176px] relative">
        <div className="flexRowBetween ">
          <div className="w-1/2 flexCol items-start space-y-7 z-10">
            <h1 className="text-5xl font-black tracking-[0.96px] text-shadow text-primaryFont leading-16 w-4/5">
              Get Bussiness Solutions with TheFirm.
            </h1>
            <p className="font-lora font-normal text-lg text-primaryFont leading-8 w-1/2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy.
            </p>
            <Button btnContant={"Get in Touch"} />
          </div>
          <div className=" absolute -right-20 top-0 h-full">
            <picture>
              <img src={BannerImg} alt="" className="rounded-4xl object-cover h-full " />
            </picture>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
