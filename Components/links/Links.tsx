"use client";
import Image from "next/image";
import { useState } from "react";
import NavLink from "./navLink/NavLink";

const links = [
  {
    title: "Accueil",
    path: "/",
  },
  {
    title: "Sercices",
    path: "/services",
  },
  {
    title: "A Propos",
    path: "/about",
  },
  {
    title: "Blog",
    path: "/blog",
  },
  {
    title: "Contact",
    path: "/contact",
  },
];
const Links = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex items-center justify-envenly gap-1 xl:gap-20 md:gap-3">
      <div className="md:flex items-center xl:gap-1 hidden">
        {links.map((link) => (
          <NavLink item={link} key={link.title} />
        ))}
      </div>
      <div className="">
        <span className="min-w-[100px] hidden md:flex justify-center border-btn border-solid border-[1px] text-btn px-3 py-3 rounded-full font-light">
          Rejoingnez Nous
        </span>
      </div>
      <Image
        src="/menu.png"
        alt="Menu humberger"
        width={30}
        height={30}
        className="flex md:hidden"
        onClick={() => setOpen((prev) => !prev)}
      />
      {open && (
        <div className="gradient_bg absolute top-[100px] right-0 w-1/2 h-[calc(100vh-100px)] flex flex-col items-center justify-center gap-2 transition-all ease-in-out bg-bg z-10">
          {links.map((link) => (
            <NavLink item={link} key={link.title} />
          ))}
          <div className="">
            <span className="min-w-[100px] flex justify-center border-btn border-solid border-[1px] text-btn px-3 py-3 rounded-full font-light">
              Rejoingnez Nous
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Links;
