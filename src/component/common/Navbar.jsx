const navbar = () => {
  const menuItems = [
    { id: 1, name: "Home", link: "../../../index.html" },
    { id: 2, name: "Solutions", link: "../../../causesDetails.html" },
    { id: 3, name: "Cases", link: "../../../causes.html" },
    { id: 4, name: "About Us", link: "../../../causes.html" },
    { id: 5, name: "Blog", link: "../../../causes.html" },
    { id: 6, name: "Contact Us", link: "../../../causes.html" },
  ];
  return (
    <div className="flex justify-between">
      <ul className="flexRowBetween gap-x-10 text-lg font-bold font-nunito w-full">
        {menuItems.map((item) => {
          return (
            <li key={item.id} className="hoverItem">
              <a href={item.link}>{item.name}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default navbar;
