import React, { useEffect, useRef, useState } from "react";
import BrandLogo from "../../../assets/image/logo.png";
import MessageIcon from "../../../assets/icons/navbar/MessageIcon";
import PlusIcon from "../../../assets/icons/navbar/PlusIcon";
import SearchIcon from "../../../assets/icons/navbar/SearchIcon";
import ReelsIcon from "../../../assets/icons/navbar/ReelsIcon";
import CartIcon from "../../../assets/icons/navbar/CartIcon";
import AddGroupIcon from "../../../assets/icons/navbar/AddGroupIcon";
import BellIcon from "../../../assets/icons/navbar/BellIcon";
import { NavLink, useNavigate } from "react-router-dom";
import HomeOutlineIcon from "../../../assets/icons/navbar/HomeOutlineIcon";
import useProfileStore from "../../../store/ProfileStore";
import MarketIcon from "../../../assets/icons/navbar/MarketIcon";
import Cookies from "js-cookie";

const NavbarSmall = () => {
  const [activeIcon, setActiveIcon] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { ProfilePic, ProfileDetails } = useProfileStore();
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    Cookies.remove("token");
    navigate("/");
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

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
      icon: <MarketIcon width={16} height={16} />,
      link: "/newsfeed",
      id: "marketplace",
    },
  ];

  return (
    <div className="lg:hidden flex flex-col justify-center p-2 gap-3 bg-white">
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
          <img
            src={ProfilePic}
            className="profile w-[20px] h-[20px] bg-slate-300 rounded-full border
           border-brand-primary"
            onClick={toggleDropdown}
          />
          {dropdownOpen && (
            <div
              ref={dropdownRef}
              className="absolute right-0 mt-12 w-48 bg-white rounded-md shadow-2xl z-20 border-2"
            >
              <div className="flex items-center px-4 py-2 border-b">
                <img
                  src={ProfilePic}
                  alt="User"
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <p className="font-semibold">
                    {ProfileDetails?.user?.first_name}
                    {ProfileDetails?.user?.last_name}
                  </p>
                </div>
              </div>
              <div className="py-1">
                <button
                  onClick={handleLogout}
                  className="block w-full px-4 py-2 text-gray-700 hover:bg-gray-100 text-left"
                >
                  Sign out
                </button>
              </div>
            </div>
          )}
        </ul>
      </div>
    </div>
  );
};

export default NavbarSmall;
