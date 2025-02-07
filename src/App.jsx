// import Container from "./component/Container";
import Banner from "./component/Banner";
import Header from "./component/Header";
import Partner from "./component/Partner";
import Frustration from "./component/Frustration";
import Blogs from "./component/Blogs";
import Solution from "./component/Solution";
import ChooseUs from "./component/ChooseUs";
import Research from "./component/Research";
import GetinTouch from "./component/GetinTouch";
import Footer from "./component/Footer";
import Testimonial from "./component/common/Testimonial";
import BannerImg from "./assets/banner.png";
const App = () => {
  return (
    <>
      <Header />
      <Banner
        title={"Get Bussiness Solutions with TheFirm."}
        description={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy."
        }
        img={BannerImg}
      />
      <Partner />
      <Frustration />
      <Solution />
      <ChooseUs />
      <Research />
      <Blogs />
      <Testimonial />
      <GetinTouch />
      <Footer />
    </>
  );
};

export default App;
