import BGIMG from "../assets/images/ListingBG.jpg";
import Select from "react-select";

const AddListing = () => {
  const option = [
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

  return (
    <div
      style={{
        background: `url(${BGIMG}) no-repeat center center`,

        backgroundSize: "cover",
      }}
      className=" h-screen w-full flex flex-col justify-center items-center"
    >
      <div className="text-navybluedark text-5xl">Add Listing</div>
      <div>
        <form
          action=""
          className="bg-navyblue border text-textdark border-navybluedark p-6 rounded-lg m-4"
        >
          <div className="grid grid-cols-2 gap-4 items-baseline">
            <input
              type="text"
              placeholder="Property Name"
              className="rounded-md px-3 py-2 outline-none w-56"
            />

            <input
              type="text"
              className="rounded-md px-3 py-2 outline-none w-56"
              placeholder="Location"
            />
            <input
              type="text"
              className="rounded-md px-3 py-2 outline-none w-56"
              placeholder="Price"
            />
            <input
              type="text"
              className="rounded-md px-3 py-2 outline-none w-56"
              placeholder="Area"
            />
            <input
              type="number"
              min={0}
              className="rounded-md px-3 py-2 outline-none w-56"
              placeholder="Bedrooms"
            />
            <input
              type="number"
              min={0}
              className="rounded-md px-3 py-2 outline-none w-56"
              placeholder="Bathrooms"
            />

            <select
              name=""
              id=""
              className="rounded-md px-3 py-2 outline-none w-56"
            >
              <option
                value=""
                disabled
                selected
                className="px-2 py- text-textdark rounded-md font-thin"
              >
                Property Type
              </option>
              <option
                value=""
                className="px-2 py-2 text-textdark rounded-md font-thin"
              >
                Flat
              </option>
              <option
                value=""
                className="px-2 py-2 text-textdark rounded-md font-thin"
              >
                Appartment
              </option>
              <option
                value=""
                className="px-2 py-2 text-textdark rounded-md font-thin"
              >
                Villa
              </option>
            </select>
            <select
              name=""
              id=""
              className="rounded-md px-3 py-2 outline-none w-56"
            >
              <option
                value=""
                disabled
                selected
                className="px-2 py-2 text-textdark rounded-md font-thin"
              >
                Type
              </option>
              <option
                value=""
                className="px-2 py-2 text-textdark rounded-md font-thin"
              >
                Lease
              </option>
              <option
                value=""
                className="px-2 py-2 text-textdark rounded-md font-thin"
              >
                Sale
              </option>
              <option
                value=""
                className="px-2 py-2 text-textdark rounded-md font-thin"
              >
                Rent
              </option>
            </select>
          </div>
          <input
            type="text"
            className="w-full mt-4 py-2 px-4 rounded-lg text-center outline-none"
            placeholder="Description"
          />
          <input
            type="file"
            multiple
            className="w-full mt-4 py-2 px-4 rounded-lg text-center outline-none bg-white"
          />

          <Select
            placeholder="Amenities..."
            closeMenuOnSelect={false}
            options={option}
            isMulti={true}
            className="mt-4 max-w-lg"
          />

          <button className="bg-blue text-white center center w-full mx-auto px-8 py-2 mt-4 rounded-md ">
            Create Listing
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddListing;
