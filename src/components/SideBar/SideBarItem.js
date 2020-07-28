import React, { useState } from "react";
import "./SideBarItem.css";

const SidebarItem = ({ data, handleItemClick }) => {
  const [toggle, setToggle] = useState(false);

  // in order to be able to close it again (!toggle) donc true
  // onClick on second div = will toggle with child on click on the text not div
  // toggle if toggle is true alors map

  const handleClick = () => {
    setToggle(!toggle);
    if (!data.childItems) {
      handleItemClick(data);
    }
  };
  return (
    <div className="SidebarItem">
      <div onClick={handleClick}>{data.title}</div>
      {toggle &&
        data.childItems &&
        data.childItems.map((item) => {
          return (
            <SidebarItem
              className="SidebarItem-single"
              data={item}
              handleItemClick={handleItemClick}
            />
          );
        })}
    </div>
  );
};

export default SidebarItem;

{
  /* <div
              style={{
                color: "white",
                background: "#375a6f",
                margin: "auto",
                opacity: "0.8",
              }}
            >
              {item}
            </div> */
}
