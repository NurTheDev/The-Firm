import Container from "./Container";
import Logo from "../assets/Logo.png";
import Button from "./common/Button";
const Header = () => {
  const menuItems = [
    { id: 1, name: "Home" },
    { id: 2, name: "Solutions" },
    { id: 3, name: "Cases" },
    { id: 4, name: "About Us" },
    { id: 5, name: "Blog" },
    { id: 6, name: "Contact Us" },
  ];
  return (
    <div>
      <Container className="py-6 container flexRowBetween">
        <div>
          <picture>
            <img src={Logo} alt="assets/Logo.png" />
          </picture>
        </div>
        <div className="max-w-2/3 w-full flexRowBetween gap-x-5">
          <ul className="flexRowBetween w-4/5 text-lg font-bold font-nunito">
            {menuItems.map((item) => {
              return (
                <li key={item.id} className="hoverItem">
                  <a href="">{item.name}</a>
                </li>
              );
            })}
          </ul>
          <Button btnContant={"Get in Touch"} />
        </div>
      </Container>
    </div>
  );
};

export default Header;
