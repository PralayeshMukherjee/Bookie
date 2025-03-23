import React from "react";
import { HeaderLibrary, FooterLibrary } from "./Component/index";
import { Outlet } from "react-router-dom";
function LibraryLayout() {
  return (
    <>
      <HeaderLibrary />
      <Outlet />
      <FooterLibrary />
    </>
  );
}

export default LibraryLayout;
