import React, { useEffect } from "react";
import NavBar from "../components/navbar";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/footer";

const Layout = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      // behavior: "smooth",
    });
  }, [location]);

  return (
    <main className=" min-h-screen  flex flex-col ">
      {/* Header Naviagtion Bar */}
      <header className="sticky top-0 z-50">
        <NavBar />
      </header>

      {/* Main Content Body Section */}
      <section className="">
        <Outlet />
      </section>

      {/* Footer Section */}
      <footer className=" z-40 mt-10 ">
        <Footer />
      </footer>
    </main>
  );
};

export default Layout;
