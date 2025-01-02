"use client";
import Image from "next/image";
import { useState } from "react";

export default function FaqCard({
  tile,
  desc,
  status,
}: {
  tile: string;
  desc: string;
  status: boolean;
}) {
  const [isOpen, setIsOpen] = useState(status);

  return (
    <div className="max-w-lg mx-auto p-3">
      <div
        className={`flex justify-between items-center hover:text-pink-500 ${
          isOpen ? "hover:opacity-80" : "opacity-100"
        }`}
      >
        <h1
          className={`text-2xl font-bold hover:text-pink-600 ${
            isOpen ? "text-btn" : "text-white"
          }`}
        >
          {tile}
        </h1>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="mt-4 p-1 bg-pink-600 text-white font-medium rounded-full ease-in-out duration-150 transition-all"
        >
          {isOpen ? (
            <Image src="/up.png" alt="" width={25} height={25} />
          ) : (
            <Image src="/down.png" alt="" width={25} height={25} />
          )}
        </button>
      </div>
      <div
        className={`mt-1 ${
          isOpen ? "block opacity-100" : "hidden"
        } ease-out opacity-0 duration-700 transition-all`}
      >
        <p className="text-md">{desc}</p>
      </div>
    </div>
  );
}
