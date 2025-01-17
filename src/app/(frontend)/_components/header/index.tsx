import React from "react";
import TopHeader from "./top-header";
import Navbar from "./navbar";

export default function Header() {
  return (
    <header className="tw-sticky tw-top-0 tw-z-50">
      <TopHeader />
      <div>
        <Navbar />
      </div>
    </header>
  );
}
