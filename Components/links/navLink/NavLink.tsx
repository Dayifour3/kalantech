"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ item }: { item: { path: string; title: string } }) => {
  const pathName = usePathname();
  if (pathName === "/") {
    console.log("pathName", pathName);
  }
  return (
    <Link
      className={`min-w-[100px] p-2 rounded-full font-semibold flex justify-center items-center ${
        pathName === item.path && "text-btn"
      }`}
      href={item.path}
    >
      {item.title}
    </Link>
  );
};

export default NavLink;
