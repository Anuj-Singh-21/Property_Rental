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
  const images = [
    "https://cdn.pixabay.com/photo/2018/01/09/10/34/tree-3071284_640.jpg",
    "https://cdn.pixabay.com/photo/2017/03/30/00/24/villa-2186906_640.jpg",
    "https://cdn.pixabay.com/photo/2022/07/09/05/23/house-7310177_640.jpg",
  ];
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
              Rent
            </button>
            <h1 className=" mb-4 text-xl font-bold">Beach Side Paradise</h1>
            <h2 className="my-4">123 Beach Lane, Miami, FL</h2>
            <h2 className="my-4 text-blue text-2xl">$ 250/Day</h2>
            <h2 className="my-4 text-textsoft text-sm flex gap-10">
              <p>Bathrooms : 4</p>
              <p>Bedrooms : 4</p>
              <p>Area : 1500 sq ft</p>
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
                <h1 className=" text-sm"> 1500</h1>
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
              <h1 className="text-black font-bold text-2xl my-4">Amenities</h1>
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
            <div
              className={
                showAmenities
                  ? "pb-4 grid lg:grid-cols-3 md:grid-cols-1"
                  : "hidden"
              }
            >
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
              $ 250 - Rent
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
