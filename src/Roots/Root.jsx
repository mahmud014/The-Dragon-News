import React from "react";
import { Outlet } from "react-router";
import Header from "../Components/Header";
import BreakingNews from "../Components/BreakingNews";
import Navbar from "../Components/Navbar";
import LeftAside from "../Components/HomeLayout/LeftAside";
import RightAside from "../Components/HomeLayout/RightAside";

const Root = () => {
  return (
    <div className="w-11/12 mx-auto">
      <header>
        <Header />
        <section>
          <BreakingNews />
        </section>
        <nav className="my-5">
          <Navbar />
        </nav>
      </header>
      <main className="my-10 grid grid-cols-12 gap-4">
        <aside className="col-span-3 sticky top-0 h-fit">
          <LeftAside />
        </aside>
        <section className="main col-span-6">
          <Outlet />
        </section>
        <aside className="col-span-3 sticky top-0 h-fit">
          <RightAside />
        </aside>
      </main>
    </div>
  );
};

export default Root;
