import React from "react";
import NavBar from "../components/navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer";

const Layout = () => {
  return (
    <main className=" min-h-screen  flex flex-col justify-between">
      {/* Header Naviagtion Bar */}
      <header className="sticky top-0 z-50">
        <NavBar />
      </header>

      {/* Main Content Body Section */}
      <section className=" ">
        <Outlet />
      </section>

      {/* Footer Section */}
      <footer className=" z-50 ">
        <Footer />
      </footer>
    </main>
  );
};

export default Layout;
