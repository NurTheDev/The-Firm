import logo from "../assets/Logo.png";
import Navbar from "./common/Navbar";
const Footer = () => {
  const Icons = [
    { id: 1, icon: <i className="fa-brands fa-facebook-f"></i> },
    { id: 2, icon: <i className="fa-brands fa-twitter"></i> },
    { id: 3, icon: <i className="fa-brands fa-youtube"></i> },
    { id: 4, icon: <i className="fa-brands fa-linkedin-in"></i> },
    { id: 5, icon: <i className="fa-brands fa-pinterest-p"></i> },
  ];
  return (
    <div>
      <div className="container py-12">
        <div className="flexCol items-center space-y-12">
          <div>
            <picture>
              <img src={logo} alt="" />
            </picture>
          </div>
          <Navbar />
          <div className="flex items-center gap-x-10 text-xl ">
            {Icons.map((data) => (
              <span
                className="hover:text-primary transition-all duration-100"
                key={data.id}
              >
                {data.icon}
              </span>
            ))}
          </div>
          <p className="text-[#A5A5A5] text-xs tracking-[3.12px]">
            Copyrights ©2020 Thefirm. All Right Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
