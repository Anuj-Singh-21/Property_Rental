import { Link } from "react-router-dom";

const FeaturedCard = () => {
  return (
    <div>
      <Link to="/listing/1">
        <div className="flex gap-4 items-center">
          <div>
            <img
              src="https://cdn.pixabay.com/photo/2020/03/21/20/03/real-estate-4955087_640.jpg"
              alt="Property Image"
              className="flex h-16 w-20 rounded-md"
            />
          </div>
          <div className="">
            <h1 className="font-bold text-textdark">Beach Side Paradise</h1>
            <h1 className="text-textsoft">2024-07-10</h1>{" "}
            <h1 className="text-textsoft">123 Beach Lane, Miami, FL</h1>
            <button className="bg-lightblue px-4 rounded-full border border-borderblue text-darkblue w-full">
              For Rent
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default FeaturedCard;
