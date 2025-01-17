import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ReactSlickProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
