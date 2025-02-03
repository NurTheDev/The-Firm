import Container from "./Container";
import Logo from "../assets/Logo.png";
import Button from "./common/Button";
import Navbar from "./common/Navbar";
const Header = () => {
  // const menuItems = [
  //   { id: 1, name: "Home" },
  //   { id: 2, name: "Solutions" },
  //   { id: 3, name: "Cases" },
  //   { id: 4, name: "About Us" },
  //   { id: 5, name: "Blog" },
  //   { id: 6, name: "Contact Us" },
  // ];
  return (
    <div>
      <Container className="py-6 container flexRowBetween">
        <div className="flex justify-between w-full">
          <div>
            <picture>
              <img src={Logo} alt="assets/Logo.png" />
            </picture>
          </div>
          <div className="w-full flex justify-end gap-x-5">
            {/* <ul className="flexRowBetween w-4/5 text-lg font-bold font-nunito">
            {menuItems.map((item) => {
              return (
                <li key={item.id} className="hoverItem">
                  <a href="">{item.name}</a>
                </li>
              );
            })}
          </ul> */}
            <Navbar />
            <Button btnContant={"Get in Touch"} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
