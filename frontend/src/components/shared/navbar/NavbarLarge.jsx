import React, { useState } from "react";
import brandLogo from "../../../assets/image/logo.png";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import CartIcon from "../../../assets/icons/navbar/CartIcon.jsx";
import GroupIcon from "../../../assets/icons/navbar/GroupIcon.jsx";
import HomeIcon from "../../../assets/icons/navbar/HomeIcon.jsx";
import ReelsIcon from "../../../assets/icons/navbar/ReelsIcon.jsx";
import MarketPlaceIcon from "../../../assets/icons/navbar/MarketPlaceIcon.jsx";
import NotificationIcon from "../../../assets/icons/navbar/NotificationIcon.jsx";
import MessengerIcon from "../../../assets/icons/navbar/MessengerIcon.jsx";

const NavbarLarge = () => {
  const [activeIcon, setActiveIcon] = useState(null);

  const navbarMiddleIcons = [
    {
      icon: <HomeIcon width={30} height={30} />,
      link: "/newsfeed",
      id: "home",
    },
    {
      icon: <ReelsIcon width={32} height={30} />,
      link: "/newsfeed",
      id: "reels",
    },
    {
      icon: <GroupIcon width={30} height={30} />,
      link: "/newsfeed",
      id: "group",
    },
    {
      icon: <MarketPlaceIcon width={32} height={30} />,
      link: "/newsfeed",
      id: "marketplace",
    },
    {
      icon: <CartIcon width={30} height={30} />,
      link: "/newsfeed",
      id: "cart",
    },
  ];

  const handleIconClick = (id) => {
    setActiveIcon(id);
  };

  return (
    <div className="bg-white shadow-sm h-[69px] lg:flex hidden">
      <div className="grid grid-cols-12 relative gap-6 w-full justify-center items-center px-2">
        <div className="col-span-4 flex gap-4">
          <img src={brandLogo} alt="Quantum Logo" className="max-w-[45px]" />
          <div className="relative flex items-center justify-center max-w-[241px] w-full">
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search"
              className="w-full rounded-3xl bg-body-base-color/15 pl-9 py-2 outline-none placeholder:font-poppins placeholder:font-normal placeholder:text-[14px]"
            />
            <svg
              width="13"
              height="13"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-4 text-black/60"
            >
              <g clipPath="url(#clip0_1_585)">
                <path
                  d="M14.8169 13.9331L11.0862 10.2025C12.1029 8.95911 12.6027 7.37254 12.4824 5.77096C12.3621 4.16938 11.6307 2.67532 10.4397 1.59781C9.24871 0.520305 7.6891 -0.0582065 6.08351 -0.0180617C4.47792 0.0220832 2.94917 0.677813 1.81349 1.81349C0.677813 2.94917 0.0220832 4.47792 -0.0180617 6.08351C-0.0582065 7.6891 0.520305 9.24871 1.59781 10.4397C2.67532 11.6307 4.16938 12.3621 5.77096 12.4824C7.37254 12.6027 8.95911 12.1029 10.2025 11.0862L13.9331 14.8169C14.051 14.9307 14.2089 14.9937 14.3727 14.9923C14.5366 14.9909 14.6934 14.9251 14.8092 14.8092C14.9251 14.6934 14.9909 14.5366 14.9923 14.3727C14.9937 14.2089 14.9307 14.051 14.8169 13.9331ZM6.24998 11.25C5.26108 11.25 4.29438 10.9567 3.47213 10.4073C2.64989 9.85793 2.00903 9.07703 1.63059 8.1634C1.25215 7.24977 1.15313 6.24444 1.34606 5.27453C1.53899 4.30463 2.01519 3.41371 2.71445 2.71445C3.41371 2.01519 4.30463 1.53899 5.27453 1.34606C6.24444 1.15313 7.24977 1.25215 8.1634 1.63059C9.07703 2.00903 9.85793 2.64989 10.4073 3.47213C10.9567 4.29438 11.25 5.26108 11.25 6.24998C11.2485 7.57561 10.7212 8.84651 9.78387 9.78387C8.84651 10.7212 7.57561 11.2485 6.24998 11.25Z"
                  fill="currentColor"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_585">
                  <rect width="15" height="15" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
        <div className="col-span-6">
          <ul className="flex items-center justify-around relative">
            {navbarMiddleIcons.map((item) => (
              <li key={item.id} className="flex justify-center">
                <NavLink
                  to={item.link}
                  className={`${
                    activeIcon === item.id
                      ? "text-brand-primary"
                      : "text-black/30"
                  }`}
                  onClick={() => handleIconClick(item.id)}
                >
                  {item.icon}
                </NavLink>
                {activeIcon === item.id && (
                  <hr className="w-20 h-1 absolute -bottom-5 rounded-full bg-brand-primary" />
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-2 flex justify-end gap-3">
          <MessengerIcon width="45" height="45" />
          <NotificationIcon width="45" height="45" />
          <div className="w-[45px] h-[45px] bg-slate-300 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default NavbarLarge;
