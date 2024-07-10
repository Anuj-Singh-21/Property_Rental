import Img from "../assets/images/villa.jpg";

const FeaturedCard = () => {
  return (
    <div>
      <div className="flex gap-4 items-center">
        <div>
          <img src={Img} className="flex h-16 w-20 rounded-md" />
        </div>
        <div className="">
          <h1 className="font-bold text-textdark">Property Name</h1>
          <h1 className=" text-textsoft">Date Posted</h1>
          <h1 className=" text-textsoft">Property Address</h1>
          <button className="bg-lightblue px-4 rounded-full border border-borderblue  text-darkblue w-full">
            Type
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;
