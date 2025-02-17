import React from "react";

import Navbar from "./navbar";
import TopHeader from "./top-header";

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
