import React from "react";
import NavbarLarge from "../components/shared/navbar/NavbarLarge";
import NavbarSmall from "../components/shared/navbar/NavbarSmall";

const NewsFeed = () => {
  return (
    <div className="bg-body-base-color/20 min-h-screen">
      {/* this navbars will be shifted to App.jsx later */}
      <NavbarLarge />
      <NavbarSmall />
    </div>
  );
};

export default NewsFeed;
