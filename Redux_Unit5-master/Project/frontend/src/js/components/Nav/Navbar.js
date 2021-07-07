import React from "react";
import { NavLogo, NavMenu, NavSearch } from '.';

export const NavBar = () => {
  return (
    <div className="navbar">

      <NavLogo />
      <NavMenu />
      <NavSearch />
    </div>
  );
};
