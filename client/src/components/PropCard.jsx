import MySlider from "./Slider";
import { FaBath } from "react-icons/fa";
import { FaBed } from "react-icons/fa6";
import { RxDimensions } from "react-icons/rx";

import { Link } from "react-router-dom";

const Card = () => {
  const image = [
    "https://cdn.pixabay.com/photo/2018/01/09/10/34/tree-3071284_640.jpg",
    "https://cdn.pixabay.com/photo/2017/03/30/00/24/villa-2186906_640.jpg",
    "https://cdn.pixabay.com/photo/2022/07/09/05/23/house-7310177_640.jpg",
  ];
  return (
    <div className="bg-white  shadow-md rounded-lg my-4 w-72 lg:w-96">
      <MySlider
        images={image}
        classname={"rounded-lg w-screen h-72 object-cover brightness-50"}
      />
      <div className="flex justify-between mx-4 my-1 text-textsoft">
        <div>
          <div>Rent</div>
          <div className="font-bold text-textdark">Beach Side Paradise</div>
        </div>
        <div className="text-xl text-blue font-bold">$ 250/Day</div>
      </div>

      <div className="lg:flex justify-between mx-4 my-1 text-textsoft font-thin">
        <div className="flex gap-2 items-center">
          <FaBed />
          <h1>4 Beds </h1>
        </div>
        <div className="flex gap-2 items-center">
          <FaBath />
          <h1>4 Bathrooms </h1>
        </div>
        <div className="flex gap-2 items-center">
          <RxDimensions />
          <h1>1500 sq ft </h1>
        </div>
      </div>
      <hr className="text-textsoft font-thin" />
      <div className="flex  items-center justify-between mx-4 my-2 text-textsoft font-thin">
        <h1>123 Beach Lane, Miami, FL</h1>
        <Link to="/listing/1">
          <button className="bg-blue text-white  rounded-full px-6 py-1">
            View
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
