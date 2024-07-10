import Img from "../assets/images/BGIMG.jpg";
import Img2 from "../assets/images/image2.jpg";
import Img1 from "../assets/images/image1.jpg";
import MySlider from "./../components/Slider";
import {
  IoIosArrowDropdown,
  IoIosHeart,
  IoIosArrowDropup,
} from "react-icons/io";
import { MdCheckCircle } from "react-icons/md";
import { FaShare } from "react-icons/fa";

import { useState } from "react";
import FeaturedCard from "../components/FeaturedCard";

const Listing = () => {
  const images = [Img, Img1, Img2];
  const [showDetails, setShowDetails] = useState(false);
  const [showAmenities, setShowAmenities] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  const options = [
    { value: "Gym", label: "Gym" },
    { value: "Parking", label: "Parking" },
    { value: "Swimming Pool", label: "Swimming Pool" },
    { value: "Wifi", label: "Wifi" },
    { value: "Camera", label: "Camera" },
    { value: "Spa", label: "Spa" },
    { value: "Clubhouse", label: "Clubhouse" },
    { value: "Rooftop Garden", label: "Rooftop Garden" },
    { value: "Balcony", label: "Balcony" },
    { value: "Smart Home", label: "Smart Home" },
    { value: "Unfurnished", label: "Unfurnished" },
    { value: "Semi-Furnished", label: "Semi-Furnished" },
    { value: "Furnished", label: "Furnished" },
    { value: "Central AC", label: "Central AC" },
  ];
  const featuredCard = [1, 2, 3, 4];

  return (
    <>
      <div className="py-10 bg-black"></div>
      <div className="h-96  bg-textsoft">
        <MySlider
          images={images}
          classname="h-96 w-screen object-cover"
          slides={2.6}
        ></MySlider>
      </div>
      <div className="lg:flex bg-lightblue px-10 py-10  gap-10">
        <div className="lg:w-2/3 rounded-md ">
          <div className="px-4 py-2 my-2 bg-white rounded-md shadow-md">
            <button className="rounded-full bg-borderblue text-xs text-black px-4 py-1 my-2 ">
              Buy
            </button>
            <h1 className=" mb-4 text-xl font-bold">Property Name</h1>
            <h2 className="my-4">Property Address</h2>
            <h2 className="my-4 text-blue text-2xl">$Property Price</h2>
            <h2 className="my-4 text-textsoft text-sm flex gap-10">
              <p>Bathrooms</p>
              <p>Bedrooms</p>
              <p>Area</p>
            </h2>
          </div>
          <div className="px-4  my-2 bg-white text-textsoft rounded-md shadow-md">
            <div className=" flex justify-between my-2">
              <h1 className="text-black font-bold text-2xl my-4">
                Details & Features
              </h1>
              <button onClick={() => setShowDetails((prev) => !prev)}>
                <IoIosArrowDropdown
                  className={
                    !showDetails ? "text-textsoft  text-3xl" : "hidden"
                  }
                />
                <IoIosArrowDropup
                  className={
                    showDetails ? "text-textsoft  text-3xl " : "hidden"
                  }
                />
              </button>
            </div>
            <div className={showDetails ? "block pb-4 " : "hidden"}>
              <div className=" flex w-40 justify-between my-2">
                <h1 className="text-textdark font-bold text-sm">Garage:</h1>
                <h1 className=" text-sm"> 1</h1>
              </div>
              <div className=" flex  w-40 justify-between my-2">
                <h1 className="text-textdark font-bold text-sm">Bedrooms:</h1>
                <h1 className=" text-sm"> 4</h1>
              </div>
              <div className=" flex w-40 justify-between my-2">
                <h1 className="text-textdark font-bold text-sm">Washrooms:</h1>
                <h1 className=" text-sm"> 4</h1>
              </div>
              <div className=" flex w-40 justify-between my-2">
                <h1 className="text-textdark font-bold text-sm">
                  Area Size (sqft):{" "}
                </h1>
                <h1 className=" text-sm"> 1100</h1>
              </div>
            </div>
          </div>

          <div className="px-4  my-2 bg-white text-textsoft rounded-md shadow-md">
            <div className=" flex justify-between my-2">
              <h1 className="text-black font-bold text-2xl my-4">
                Description
              </h1>
              <button
                onClick={() => {
                  setShowDescription((prev) => !prev);
                }}
              >
                <IoIosArrowDropdown
                  className={
                    !showDescription ? "text-textsoft  text-3xl" : "hidden"
                  }
                />
                <IoIosArrowDropup
                  className={
                    showDescription ? "text-textsoft  text-3xl" : "hidden"
                  }
                />
              </button>
            </div>
            <div className={showDescription ? "block pb-4" : "hidden"}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur mollitia architecto commodi quisquam error maiores,
              alias quis, delectus neque odio minus, modi esse nihil accusamus
              assumenda reprehenderit illo sunt quidem repellat optio. Ab soluta
              maxime error qui veritatis deserunt quas labore? Harum, dolorem!
              Quibusdam nesciunt vel sed cumque est impedit nemo accusamus,
              nihil voluptatibus perspiciatis voluptatem accusantium mollitia
              quas deserunt dicta dolorem blanditiis totam architecto natus
              voluptates, fugiat enim assumenda? Fugit quisquam ullam quas,
              praesentium ex sint. Quia aut soluta repudiandae, perspiciatis
              tenetur repellendus! Veritatis, quasi? Enim, voluptatum dolorum
              error minus obcaecati alias eveniet maiores sit consequuntur,
              eaque, ducimus laborum?
            </div>
          </div>

          <div className="px-4 my-2 bg-white text-textsoft rounded-md shadow-md">
            <div className=" flex justify-between my-2">
              <h1 className="text-black font-bold text-2xl my-4">Aminities</h1>
              <button
                onClick={() => {
                  setShowAmenities((prev) => !prev);
                }}
              >
                <IoIosArrowDropdown
                  className={
                    !showAmenities ? "text-textsoft  text-3xl" : "hidden"
                  }
                />
                <IoIosArrowDropup
                  className={
                    showAmenities ? "text-textsoft  text-3xl" : "hidden"
                  }
                />
              </button>
            </div>
            <div className={showAmenities ? "pb-4 grid grid-cols-3" : "hidden"}>
              {options.map((option) => (
                <div
                  key={option.label}
                  className="flex items-center gap-1 text-lg"
                >
                  <MdCheckCircle className="text-borderblue" />
                  <h1>{option.value}</h1>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:w-1/4 rounded-md ">
          <div className="flex justify-center px-2 py-2 my-2 bg-white rounded-md shadow-md">
            <button className="rounded-md px-6 py-4 font-bold text-darkblue bg-lightblue border border-borderblue">
              $ Price - Purchase
            </button>
          </div>
          <div className="px-2 py-2 my-2 bg-white rounded-md shadow-md">
            <div className="flex gap-4 justify-center">
              <button className="flex justify-center items-center gap-2 rounded-md px-6 py-3 font-bold text-darkblue bg-lightblue border border-borderblue">
                <FaShare />
                Share
              </button>
              <button className="flex justify-center items-center gap-2 rounded-md px-6 py-3 font-bold  text-darkblue bg-lightblue border border-borderblue">
                <IoIosHeart />
                Wishlist
              </button>
            </div>
          </div>
          <h1 className="mt-4 mb-2 text-center font-bold text-2xl text-textdark">
            Featured Properties
          </h1>
          {featuredCard.map((card) => (
            <div
              key={card}
              className="px-2 py-2 my-4 bg-white rounded-md shadow-md"
            >
              <FeaturedCard />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Listing;
