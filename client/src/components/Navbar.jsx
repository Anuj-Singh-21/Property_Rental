import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100); // Adjust threshold as needed
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav
      className={`flex justify-between fixed top-0 w-full z-50 transition-all duration-300 px-5 py-4 lg:px-20 ${
        isScrolled ? "bg-black text-white" : "bg-black/50 text-white/60"
      }`}
    >
      <NavLink to={"/"} className="flex text-">
        <h1 className="text-3xl text-blue font-bold">Dwell</h1>
        <h1 className="text-3xl text-white font-bold">Well</h1>
      </NavLink>
      <div className="flex gap-5 font-thin items-center">
        <NavLink to={"/listings"} className="hidden lg:block">
          Listings
        </NavLink>

        <NavLink to={"/about/about-us"} className="hover:text-yellow-500">
          About
        </NavLink>

        <NavLink to={"/add-listing"} className="hover:text-yellow-500">
          Add Property
        </NavLink>

        <NavLink
          to="/pages"
          className="bg-darkblue text-white px-3 py-2 font-normal rounded-sm"
        >
          Sign In
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
