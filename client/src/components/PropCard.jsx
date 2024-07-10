import Img from "../assets/images/villa.jpg";
import Img2 from "../assets/images/BGIMG.jpg";
import Img3 from "../assets/images/image1.jpg";
import MySlider from "./Slider";

const Card = () => {
  const image = [Img, Img2, Img3];
  return (
    <div className="  shadow-md rounded-lg my-4 w-96 lg:w-96">
      <MySlider
        images={image}
        classname={"rounded-lg w-screen h-72 object-cover brightness-50"}
      />
      <div className="flex justify-between mx-4 my-1 text-textdark">
        <div>
          <div>Sale</div>
          <div>Resort Name</div>
        </div>
        <div>Price</div>
      </div>
      <hr className="text-textsoft font-thin" />
      <div className="flex justify-between mx-4 my-1 text-textsoft font-thin">
        <h1>Beds </h1>
        <h1>Bath </h1>
        <h1>Area </h1>
      </div>
      <hr className="text-textsoft font-thin" />
      <div className="flex justify-between mx-4 my-1 text-textsoft font-thin">
        <h1>Address</h1>
        <button className="bg-blue text-white  rounded-full px-6 py-1">
          View
        </button>
      </div>
    </div>
  );
};

export default Card;
