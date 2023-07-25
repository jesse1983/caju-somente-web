"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Navigation() {
  const [showBg, setShowBg] = useState(false);

  const adjustTop = () => {
    const h = window.innerHeight / 4;
    const st = document.documentElement.scrollTop || document.body.scrollTop;
    setShowBg(st > h);
  };

  useEffect(() => {
    adjustTop();
    window.onscroll = () => adjustTop();
  }, []);
  return (
    <div
      className={
        "transition duration-300 w-screen absolute sm:fixed z-40 h-36 bg-blend-darken " +
        (showBg ? "sm:bg-gray-900/70" : "bg-gray-900/0")
      }
    >
      <div className="flex sm:hidden w-screen fixed bottom-3">
      <div className="text-white flex m-auto md:block hidden">
        <a
          href="https://wa.me/5511988892732"
          target="_blank"
          className="bg-blue-700 px-8 py-4 rounded-full uppercase font-bold text-sm"
        >
          Agende sua consulta
        </a>
      </div>
      </div>
      <div className="container m-auto h-full p-5">
        <div className="flex flex-row justify-center sm:justify-between h-full">
          <div className="flex justify-center items-center">
            <a href=".">
              <Image
                src={"./Logos.svg"}
                width={400}
                height={87}
                alt="Caju Somente"
                className="max-w-auto"
              />
            </a>
          </div>
          <div className="hidden sm:flex justify-center items-center gap-x-2">
            <div className="text-white font-bold hidden lg:block text-center">
              Psicologia e Psiquiatria <br />
              Saúde Mental para todos!
            </div>
            <div className="text-white flex">
              <a
                href="https://wa.me/5511988892732"
                target="_blank"
                className="bg-crimson-300 px-8 py-4 rounded-full uppercase font-bold text-sm"
              >
                Agende sua consulta
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
