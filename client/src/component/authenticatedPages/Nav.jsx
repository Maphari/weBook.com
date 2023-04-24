import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

export const Nav = () => {
  const User = useContext(AuthContext);
  const { data } = User || {};
  const [isProfile, setIsProfile] = useState(false);
  const navigate = useNavigate();

  const sliceUsername = function (username) {
    const newUsername = username.slice(0, 2);
    return newUsername.toLocaleUpperCase();
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/account/signin", { replace: true });
  };

  return (
    <>
      <nav className="map-container">
        <div className="flex items-center gap-[0.01rem]">
          <h1 className="showcase-container__top-header">Elite Express Inc.</h1>
        </div>
        <section className="flex items-center gap-2">
          <Link
            to="/account"
            className={`${
              location.pathname === "/account" ? "bg-slate-200" : ""
            } py-[0.5rem] px-[0.7rem] hover:bg-slate-200 rounded-full font-medium border-2 hover:border-slate-200 border-sky-900  flex items-center justify-center gap-2`}
          >
            <i className="fa-solid fa-credit-card text-sm hover:bg-slate-200"></i>
            <span>Bank account</span>
          </Link>
          <Link
            to="/account/helper/signup"
            className={`${
              location.pathname === "/become-helper" ? "bg-slate-200" : ""
            } py-[0.5rem] px-[0.7rem] hover:bg-slate-200 rounded-full font-medium border-2 hover:border-slate-200 border-sky-900  flex items-center justify-center gap-2`}
          >
            <i className="fa-solid fa-truck-fast hover:bg-slate-200"></i>
            <span>Become a helper</span>
          </Link>

          <div
            onClick={() => setIsProfile(true)}
            className="w-10 ml-3 h-10 bg-sky-900 flex items-center justify-center font-bold rounded-full hover:cursor-pointer hover:bg-sky-800"
          >
            {data?.user?.email ? sliceUsername(data?.user?.email) : "E"}
            {isProfile && (
              <div
                className="absolute top-full right-[1.5rem] rounded-b bg-slate-900 text-white w-[10rem]"
                onMouseLeave={() => setIsProfile(false)}
              >
                <Link
                  to="/profile"
                  className="border-b text-sm hover:text-white py-2 px-3 hover:bg-slate-800 flex items-center justify-between font-[500]"
                >
                  <span>Profile</span>
                  <i className="fa-solid fa-user text-sm"></i>
                </Link>
                <Link
                  onClick={handleLogout}
                  className=" hover:text-white py-2 px-3 text-sm hover:bg-slate-800 flex items-center justify-between font-[500]"
                >
                  <span>Logout</span>
                  <i className="fa-solid fa-right-from-bracket text-sm"></i>
                </Link>
              </div>
            )}
          </div>
        </section>
      </nav>
    </>
  );
};
