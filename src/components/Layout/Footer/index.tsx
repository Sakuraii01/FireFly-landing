import { Footerlogo } from "../../../constants/images";

const Footer = () => {
  return (
    <footer className="w-full h-[152px] bg-custom-gradient4">
      <div className="flex w-full h-full items-center flex-wrap justify-between px-20">
        <div className="">
          <p className="text-navtext">CONTACT US</p>
          <p className="text-white">Email</p>
        </div>
        <div>
          <div className="flex gap-4 items-center">
            {Footerlogo.map((logo, index) => (
              <img key={index} src={logo} alt={`Footer logo ${index}`} />
            ))}
          </div>
          <div className="text-right text-navtext">©FireFly</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
