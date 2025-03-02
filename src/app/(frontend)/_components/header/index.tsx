"use client";

import React, { useEffect, useState } from "react";

import Navbar from "./navbar";
import TopHeader from "./top-header";

interface Solution {
  title: string;
  slug: string;
}

export default function Header() {
  const [solutions, setSolutions] = useState<Solution[]>([]);

  useEffect(() => {
    async function fetchSolutions() {
      try {
        const response = await fetch("/api/solutions");
        const data = await response.json();
        setSolutions(data?.docs || []);
      } catch (error) {
        console.error("Failed to fetch solutions:", error);
      }
    }

    fetchSolutions();
  }, []);

  return (
    <header className="tw-sticky tw-top-0 tw-z-50">
      <TopHeader />
      <div>
        <Navbar solutions={solutions} />
      </div>
    </header>
  );
}
