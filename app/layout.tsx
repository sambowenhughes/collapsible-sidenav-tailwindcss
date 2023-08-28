"use client";

import "./globals.css";

import Sidenav from "./components/Sidenav";
import { useEffect, useState } from "react";
import Header from "./components/MobileHeader";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // State to track whether the sidebar is open or closed
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // State to track if the viewport is in mobile mode
  const [isMobile, setIsMobile] = useState(false);

  // Effect to handle resizing and update isMobile state accordingly
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);

    // Initial resize check and event listener setup
    handleResize();
    window.addEventListener("resize", handleResize);

    // Cleanup: remove event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <html lang="en">
      <body>
        <div className="flex h-screen bg-gray-200">
          <div>
            <Sidenav
              sidebarOpen={sidebarOpen}
              setSidebarOpen={setSidebarOpen}
            />
          </div>
          <div className="relative flex flex-col flex-1 lg:overflow-y-auto lg:overflow-x-hidden">
            {isMobile && (
              <Header
                setSidebarOpen={setSidebarOpen}
                className="sticky top-0 bg-white border-b border-slate-200 z-30"
              />
            )}
            <main>{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
