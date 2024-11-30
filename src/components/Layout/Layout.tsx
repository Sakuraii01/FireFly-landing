import Navbar from "./Navbar";
import Footer from "./Footer";
import { useLocation } from "react-router-dom";
export const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  return (
    <div>
      <Navbar />
      <div className={`${location.pathname !== "/" ? "mt-28" : ""} mb-16`}>
        {children}
      </div>
      <Footer />
    </div>
  );
};

export const MarginContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <div className="mx-40">{children}</div>;
};
