"use client";
import React, { useEffect, useState, useCallback } from "react";
import AvailableForWorkBtn from "../ui/AvailableForWorkBtn";
import { Equal, X } from "lucide-react";

const formatTime = (num: number): string => (num < 10 ? `0${num}` : `${num}`);

const convertTo12HourFormat = (
  hh: number
): { hh: number; period: string } => {
  const period = hh >= 12 ? "PM" : "AM";
  hh = hh % 12;
  hh = hh ? hh : 12;
  return { hh, period };
};

const Navbar = () => {
  const [time, setTime] = useState<string>("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const updateTime = useCallback(() => {
    const today = new Date();
    const hh = today.getHours();
    const mm = today.getMinutes();
    const ss = today.getSeconds();
    const { hh: formattedHH } = convertTo12HourFormat(hh);

    const formattedTime = `${formatTime(formattedHH)}:${formatTime(
      mm
    )}:${formatTime(ss)}`;
    setTime(formattedTime);
  }, []);

  useEffect(() => {
    updateTime();
    const interValid = setInterval(updateTime, 1000);
    return () => clearInterval(interValid);
  }, [updateTime]);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => {
      return !prev;
    });
  };
  return (
    <>
      <nav className="p-6 border-b border-border-color">
        <div className="flex items-center justify-between">
          <AvailableForWorkBtn />
          <div className="hidden md:flex items-center gap-3">
            <p className="text-light-gray-2 font-medium">Local Time (EAT)</p>
            <div className="bg-dark-gray-1 border-[rgb(24,24,26)] p-[14px_18px] w-[110px] rounded-xl flex items-center justify-center">
              <p className="text-light-gray-4 text-base leading-[1em] font-semibold tracking-[0.07em] font-ibm-plex-mono">
                {time}
              </p>
            </div>
          </div>
          <button
            onClick={toggleMenu}
            className="h-11 w-11 rounded-full bg-almost-black hover:bg-dark-gray-4 border-dark-gray-4 transition-all duration-500 cursor-pointer md:hidden relative z-[2000] flex items-center justify-center"
          >
            <span>
              {isMenuOpen ? (
                <X size={24} className="text-light-gray-3" />
              ) : (
                <Equal size={24} className="text-light-gray-3" />
              )}
            </span>
          </button>
        </div>
      </nav>

      {/* sidebar for mobile */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10"
          onClick={toggleMenu}
        >
          {/* sidebarcomponent */}
        </div>
      )}
    </>
  );
};

export default Navbar;
