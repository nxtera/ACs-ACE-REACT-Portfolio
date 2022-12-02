import React from "react";
import NavTabs from "./NavTabs";

export default function Header(props) {
  return (
    <NavTabs
      currentPage={props.currentPage}
      handlePageChange={props.handlePageChange}
    />
  );
}
