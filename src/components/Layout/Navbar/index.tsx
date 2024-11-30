import { useState, useEffect } from "react";
import useViewModel from "./viewModel";
import classNames from "classnames";
import { useNavigate, useLocation } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { NavItem, isScrolled, handleScroll } = useViewModel();
  const [path, setPath] = useState<string | null>(null);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    setPath(location.pathname);
  }, [location]);

  return (
    <nav
      className={classNames(
        "flex justify-between w-full text-white font-medium py-6 px-14 shadow-md fixed left-0 top-0 rounded-b-3xl z-50 transition-all duration-300",
        {
          "bg-white text-black": isScrolled || path !== "/",
          "backdrop-blur-sm text-white": !isScrolled && path === "/",
        }
      )}
    >
      {/* Logo Section */}
      <div className="flex items-center gap-2">
        {path == "/" ? (
          isScrolled ? (
            <img src="/Subtract.svg" alt="Scrolled Logo" className="h-8" />
          ) : (
            <img src="/firefly-logo.svg" alt="Original Logo" className="h-8" />
          )
        ) : (
          <img src="/Subtract.svg" alt="Scrolled Logo" className="h-8" />
        )}
        <h1
          className={classNames("text-2xl font-bold tracking-wide", {
            "gradient-text3": isScrolled || path !== "/",
            "text-white": !isScrolled && path === "/",
          })}
        >
          Firefly
        </h1>
      </div>

      {/* Desktop Navigation */}
      <ul
        className={`hidden my-auto gap-3 ${
          isScrolled && path === "/" ? "text-color10" : ""
        } ${path !== "/" && "text-color10"} md:flex`}
      >
        {NavItem.map((item) => (
          <li
            key={item.name}
            onClick={() => navigate(item.path)}
            className={`cursor-pointer py-2 px-5 rounded-md ${
              path === item.path && path !== "/" && "bg-color13 text-navtext"
            }`}
          >
            {item.name}
          </li>
        ))}
      </ul>
      {/* Mobile Navigation Menu */}
      {/* {selectedNav === "MENU" && (
        <div className="md:hidden mt-4" onClick={(e) => e.stopPropagation()}>
          {renderNavItems(true)}
        </div>
      )} */}
    </nav>
  );
}

export default Navbar;
