import Coversilde from "./components/Coversilde";
import AboutUs from "./components/Aboutus";
import Mission from "./components/Mission";
import Partner from "./components/Partner";
import Dashboard from "./components/Dashboard";
import Other from "./components/Other";

function Landscape() {
  return (
    <>
      <div className=" bg-bgmain w-screen h-screen">
        <Coversilde />
        <Mission />
        <AboutUs />
        <Partner />
        <Dashboard />
        <Other />
      </div>
    </>
  );
}

export default Landscape;
