const navbar = () => {
  const menuItems = [
    { id: 1, name: "Home" },
    { id: 2, name: "Solutions" },
    { id: 3, name: "Cases" },
    { id: 4, name: "About Us" },
    { id: 5, name: "Blog" },
    { id: 6, name: "Contact Us" },
  ];
  return (
    <div className="flex justify-between">
      <ul className="flexRowBetween gap-x-10 text-lg font-bold font-nunito w-full">
        {menuItems.map((item) => {
          return (
            <li key={item.id} className="hoverItem">
              <a href="">{item.name}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default navbar;
