import { useState } from "react";
import Card from "../components/PropCard";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { Link } from "react-router-dom";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const submitForm = (e) => {
    e.preventDefault();
    console.log("Form Submitted");
  };

  return (
    <section className="overflow-x-hidden bg-slate-100">
      <div
        style={{
          background: `url(https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=600) no-repeat center center`,
          backgroundColor: " rgba(0, 180, 251, 0.657)",
          backgroundBlendMode: "multiply",
          backgroundSize: "cover",
        }}
        className="h-screen w-screen "
      >
        <div className="h-screen flex flex-col justify-center items-center">
          <h1 className="text-white text-4xl lg:text-8xl mb-2">
            Find Your Property
          </h1>
          <h1 className=" text-white  text-xl lg:text-3xl ">
            For as low as $10. Limited Time Offer
          </h1>
          <form
            onSubmit={submitForm}
            className="bg-white flex gap-2 px-5 py-4 flex-col outline-none rounded-lg lg:flex-row lg:rounded-full lg:py-1"
          >
            <input
              type="text"
              placeholder="Keyword"
              className="border border-solid border-textsoft rounded-lg text-xs outline-none px-4  py-3 lg:w-full lg:border-none "
            />

            <button
              className="border border-solid border-textsoft rounded-lg text-xl outline-none px-4  py-3 lg:w-full lg:border-none "
              onClick={(e) => {
                e.preventDefault();
                setIsOpen((prev) => !prev);
              }}
            >
              <MdOutlineArrowDropDown />
            </button>

            <input
              type="text"
              placeholder="Select City"
              className="border border-solid border-textsoft text-xs rounded-lg outline-none px-4 py-3 lg:w-full lg:border-none"
            />
            <button className="bg-blue rounded-lg px-8 py-3 text-white w-full lg:rounded-full lg:-mr-4 ">
              Search
            </button>
          </form>
          <div
            className={`flex flex-col bg-white text-textsoft px-4 py-2 rounded-lg mt-1 ${
              !isOpen && "hidden"
            }`}
          >
            <div>
              <div className="flex gap-3 flex-col w-80 ">
                <div className="grid grid-cols-1 gap-2 lg:grid-cols-2">
                  <h1 className="text-textdark">Flat Type</h1>
                  <div className="flex gap-2 text-sm text-center">
                    <label>
                      <input type="radio" value="option1" />
                      1Bhk
                    </label>
                    <label>
                      <input type="radio" value="option1" /> 2Bhk
                    </label>
                    <label>
                      <input type="radio" value="option1" /> 3Bhk
                    </label>
                    <label>
                      <input type="radio" value="option1" />
                      3+Bhk
                    </label>
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-2 lg:grid-cols-2">
                  <h1 className="text-textdark">Property Type</h1>
                  <div className="flex gap-2 text-sm text-center">
                    <label>
                      <input type="radio" value="option1" />
                      Appartments
                    </label>
                    <label>
                      <input type="radio" value="option1" /> Flats
                    </label>
                    <label>
                      <input type="radio" value="option1" /> Villas
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-gray-700  px-4 my-4">
        <h1 className="flex justify-center font-bold text-2xl mt-2">
          Explore Good Places
        </h1>
        <p className="flex justify-center mt-2 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
          blanditiis quod molestiae, iste eveniet error vitae? Nisi eligendi
          fugiat dolorum veniam placeat porro dolorem accusamus assumenda
          reiciendis nihil optio, molestiae a debitis iste velit sint sunt at
          consequuntur distinctio cum incidunt numquam? Libero officiis eligendi
          ab iste sunt earum tempora, dolor minus sed repudiandae debitis eaque
          a. Nesciunt, eveniet ratione.
        </p>
      </div>
      <div className="container justify-items-center mx-auto px-4 py-6 grid grid-cols-1 lg:grid-cols-3">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className="flex justify-center">
        <Link to="/listings">
          <button className="bg-lightblue border-2 border-borderblue px-10 py-3  text-blue text-xl rounded-md mb-10">
            Browse More Properties
          </button>
        </Link>
      </div>
      <div className="bg-lightblue text-blue grid grid-cols-1 justify-items-center lg:grid-cols-3">
        <div className="flex flex-col py-4 gap-3">
          <h1 className="flex justify-center font-bold text-xl ">
            Find Property
          </h1>
          <h2 className="text-sm">
            Select from thousands of options, without brokerage.
          </h2>
          <Link to="/listings">
            <button className="flex bg-darkblue px-5 mx-auto text-sm rounded-sm text-white">
              Find Now
            </button>
          </Link>
        </div>
        <div className=" lg:border border-solid border-blue my-6 "></div>
        <div className="flex flex-col py-4 gap-3">
          <h1 className="flex justify-center font-bold text-xl ">
            List Your Property
          </h1>
          <h2 className="text-sm">For Free. Without any brokerage.</h2>
          <Link to="/add-listing">
            <button className="flex bg-darkblue px-5 mx-auto text-sm rounded-sm text-white">
              Free Posting
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
