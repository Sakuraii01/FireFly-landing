import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PATH } from "../../../constants/path.route";
const useViewModel = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const NavItem = [
    {
      name: "HOME",
      path: PATH.HOME,
    },
    {
      name: "ABOUT",
      path: PATH.HOME,
    },
    {
      name: "DASHBOARD",
      path: PATH.DASHBOARD,
    },
    {
      name: "TEAM",
      path: PATH.TEAM,
    },
    {
      name: "PUBLICATIONS",
      path: PATH.PUBLICATIONS,
    },
    {
      name: "GALLERY",
      path: PATH.GALLERY,
    },
    {
      name: "NEWS",
      path: PATH.NEWS,
    },
  ];
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  return {
    NavItem,
    isScrolled,
    handleScroll,
    useNavigate,
  };
};
export default useViewModel;
