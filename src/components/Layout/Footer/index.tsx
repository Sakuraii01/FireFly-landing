import { Footerlogo } from "../../../constants/images";

const Footer = () => {
  return (
    <footer className="w-full h-[152px] bg-custom-gradient4">
      <div className="md:flex w-full h-full justify-between py-4 px-10 md:px-20">
        <div className="md:mt-4">
          <p className="text-navtext">CONTACT US</p>
          {/* <p className="text-white">Email</p> */}
        </div>
        <div>
          <div className="flex justify-between md:gap-4 mt-4 md:mt-0">
            {Footerlogo.map((logo, index) => (
              <div
                key={index}
                style={{ backgroundImage: `url(${logo})` }}
                className="w-20 h-16 md:w-24 md:h-20 bg-contain bg-center bg-no-repeat"
              ></div>
            ))}
          </div>
          <div className="hidden md:block text-right text-navtext">
            ©FireFly
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
