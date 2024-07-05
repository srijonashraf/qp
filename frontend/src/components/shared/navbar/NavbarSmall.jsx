import React, { useState } from "react";
import BrandLogo from "../../../assets/image/logo.png";
import MessageIcon from "../../../assets/icons/navbar/MessageIcon";
import PlusIcon from "../../../assets/icons/navbar/PlusIcon";
import SearchIcon from "../../../assets/icons/navbar/SearchIcon";
import HomeIcon from "../../../assets/icons/navbar/HomeIcon";
import ReelsIcon from "../../../assets/icons/navbar/ReelsIcon";
import MarketPlaceIcon from "../../../assets/icons/navbar/MarketplaceIcon";
import CartIcon from "../../../assets/icons/navbar/CartIcon";
import AddGroupIcon from "../../../assets/icons/navbar/AddGroupIcon";
import BellIcon from "../../../assets/icons/navbar/BellIcon";
import { NavLink } from "react-router-dom";
import HomeOutlineIcon from "../../../assets/icons/navbar/HomeOutlineIcon";

const NavbarSmall = () => {
  const [activeIcon, setActiveIcon] = useState(null);

  const menuIcons = [
    {
      icon: <HomeOutlineIcon width={16} height={16} />,
      link: "/newsfeed",
      id: "home",
    },
    {
      icon: <ReelsIcon width={16} height={16} />,
      link: "/newsfeed",
      id: "reels",
    },
    {
      icon: <AddGroupIcon width={16} height={16} />,
      link: "/newsfeed",
      id: "group",
    },
    {
      icon: <BellIcon width={16} height={16} />,
      link: "/newsfeed",
      id: "bell",
    },
    {
      icon: <CartIcon width={16} height={16} />,
      link: "/newsfeed",
      id: "cart",
    },
    {
      icon: <MarketPlaceIcon width={16} height={16} />,
      link: "/newsfeed",
      id: "marketplace",
    },
  ];

  return (
    <div className="lg:hidden flex flex-col justify-center p-2 gap-2 bg-white">
      <div className="top flex items-center justify-between">
        <div>
          <img width={23} height={23} src={BrandLogo} alt="Brand Logo" />
        </div>
        <div className="relative flex gap-2">
          <div
            className="flex items-center justify-center bg-brand-primary/15 
          rounded-full text-brand-primary w-[25px] h-[25px]"
          >
            <PlusIcon width="15" height="15" />
          </div>

          <div
            className="flex items-center justify-center bg-brand-primary/15 
          rounded-full text-brand-primary w-[25px] h-[25px]"
          >
            <SearchIcon width="15" height="15" />
          </div>

          <div
            className="flex items-center justify-center bg-brand-primary/15 
          rounded-full text-brand-primary w-[25px] h-[25px]"
          >
            <MessageIcon width="15" height="15" />
          </div>
        </div>
      </div>
      <div className="bottom">
        <ul className="flex items-center justify-between">
          {menuIcons.map((item) => (
            <li
              key={item.id}
              className={
                activeIcon === item.id
                  ? `bg-brand-primary/15 p-1 rounded-full`
                  : null
              }
            >
              <NavLink
                to={item.link}
                className="text-brand-secondary"
                onClick={() => setActiveIcon(item.id)}
              >
                {item.icon}
              </NavLink>
            </li>
          ))}
          <div
            className="profile w-[20px] h-[20px] bg-slate-300 rounded-full border
           border-brand-primary"
          ></div>
        </ul>
      </div>
    </div>
  );
};

export default NavbarSmall;
