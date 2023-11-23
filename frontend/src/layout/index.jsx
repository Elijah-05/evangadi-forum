import React from "react";
import NavBar from "../components/navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer";

const Layout = () => {
  return (
    <main className=" h-screen flex flex-col justify-between">
      {/* Header Naviagtion Bar */}
      <header className=" sticky top-0">
        <NavBar />
      </header>

      {/* Main Content Body Section */}
      <section className="">
        <Outlet />
      </section>

      {/* Footer Section */}
      <footer className=" ">
        <Footer />
      </footer>
    </main>
  );
};

export default Layout;
