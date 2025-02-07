import Banner from "./component/Banner";
import Header from "./component/Header";
import OurCauses from "./causesPage/OurCauses";
import CausesCard from "./causesPage/CausesCard";
import Testimonial from "./component/common/Testimonial";
import Footer from "./component/Footer";
import BannerImg from "./assets/Causes/banner.png";
const AppCauses = () => {
  return (
    <>
      <Header />
      <Banner
        title={"Our Research & Case Studies"}
        description={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy."
        }
        img={BannerImg}
      />
      <OurCauses />
      <CausesCard />
      <div className="bg-[#f6f6f6] mt-20">
        <Testimonial />
      </div>
      <Footer />
    </>
  );
};

export default AppCauses;
