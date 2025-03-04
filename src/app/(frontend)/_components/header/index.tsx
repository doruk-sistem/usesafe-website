"use client";

import React, { useEffect, useRef, useState } from "react";

import Navbar from "./navbar";
import TopHeader from "./top-header";

interface Solution {
  title: string;
  slug: string;
}

interface DynamicPage {
  title: string;
  slug: string;
  menuOrder: number;
}

interface HeaderProps {
  initialSolutions: Solution[];
  dynamicPages: DynamicPage[];
}

export default function Header({ initialSolutions = [], dynamicPages = [] }: HeaderProps) {
  console.log("Header rendering at:", new Date().toISOString(), {
    initialSolutions,
    dynamicPages,
    trace: new Error().stack,
  });
  const [solutions, setSolutions] = useState<Solution[]>(initialSolutions);
  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current += 1;
    console.log("Header render count:", renderCount.current, {
      initialSolutions,
      dynamicPages,
      trace: new Error().stack,
    });
  });

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
        <Navbar solutions={solutions} dynamicPages={dynamicPages} />
      </div>
    </header>
  );
}
