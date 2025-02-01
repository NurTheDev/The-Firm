const HoverButton = ({contant}) => {
  return (
    <div className="flex items-center hover">
        <div className="relative"><div className=" hoverBar"></div></div>
      <div><p className="bg-primary py-3 px-9 text-white text-lg font-black">{contant}</p></div>
      
    </div>
  )
}

export default HoverButton
