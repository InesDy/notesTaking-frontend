import React from "react";

import SideBarItem from "../SideBar/SideBarItem";

const Navigation = ({ folders, handleItemClick, itemSelected }) => {
  return (
    <div className="AppLayout-SideBarItem">
      {folders.map((child) => {
        return (
          <div className="AppLayout-SidebarItem-single">
            <SideBarItem
              data={child}
              handleItemClick={handleItemClick}
              onClick={() => {
                itemSelected();
              }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Navigation;
