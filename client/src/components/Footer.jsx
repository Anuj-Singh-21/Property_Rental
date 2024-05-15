import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" bg-navyblue text-white ">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 lg:justify-items-center py-4 px-8 pb-10 ">
        <div className="flex flex-col gap-2">
          <div className="flex text-4xl font-bold">
            <h1 className="text-blue">Dwell</h1>
            <h1>Well</h1>
          </div>
          <h1 className="font-thin">Kanpur, India</h1>
          <p className="font-thin">anujsingh21092000@gmail.com</p>
          <p className="font-thin">+91-7017871104</p>
        </div>
        <div className="">
          <h1 className="text-xl font-bold mb-2">Navigation</h1>
          <p className="font-thin"> About</p>
          <p className="font-thin">Contact Us</p>
          <p className="font-thin">Privacy Policy</p>
          <p className="font-thin">Terms and Conditions</p>
        </div>
        <div></div>
      </div>
      <div className=" bg-navybluedark text-white flex flex-col gap-4 justify-between py-3 px-24 pb-6 lg:flex-row">
        <h1>©2024 DwellWell. All rights reserved by Anuj Singh.</h1>
        <div className="flex gap-8">
          <FaLinkedin className="text-xl" />
          <FaGithub className="text-xl" />
          <FaInstagram className="text-xl" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
