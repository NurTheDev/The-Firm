import Container from "./Container";
import Logo from "../assets/Logo.png";
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
        <ul className="flexRowBetween max-w-2/3 w-full">
          {menuItems.map((item) => {
            return (
              <li key={item.id}>
                <a href="">{item.name}</a>
              </li>
            );
          })}
        </ul>
      </Container>
    </div>
  );
};

export default Header;
