import React, { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import useMobile from "../hooks/useMobile";

const Search = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isSearchPage, setIsSearchPage] = useState(false);
  const [isMobile] = useMobile();

  useEffect(() => {
    const isSearch = location.pathname === "/search";
    setIsSearchPage(isSearch);
  }, [location]);

  const redirectToSearchPage = () => {
    navigate("/search");
  };


  return (
    <div className="group focus-within:border-primary-200 flex h-11 w-full min-w-[300px] items-center overflow-hidden rounded-lg border border-slate-200 bg-slate-50 text-neutral-500 lg:h-12 lg:min-w-[420px]">
      <div>
        {isMobile && isSearchPage ? (
          <Link to={"/"} className="group-focus-within:text-primary-200 m-1 flex h-full items-center justify-center rounded-full bg-white p-2 shadow-md">
            <FaArrowLeft size={20} />
          </Link>
        ) : (
          <button className="group-focus-within:text-primary-200 flex h-full items-center justify-center p-3">
            <IoSearch size={22} />
          </button>
        )}
      </div>
      <div className="h-full w-full">
        {!isSearchPage ? (
          //not in search page
          <div
            onClick={redirectToSearchPage}
            className="flex h-full w-full items-center"
          >
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                'Search "milk"',
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                'Search "bread"',
                1000,
                'Search "sugar"',
                1000,
                'Search "panner"',
                1000,
                'Search "chocolate"',
                1000,
                'Search "curd"',
                1000,
                'Search "rice"',
                1000,
                'Search "egg"',
                1000,
                'Search "chips"',
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>
        ) : (
          //when i was search page
          <div className="h-full w-full">
            <input
              type="text"
              placeholder="Search for atta dal and more."
              autoFocus
              className="h-full w-full bg-transparent outline-none"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
