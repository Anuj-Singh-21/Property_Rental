import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// const images = [Image1, Image2, Image3];

const MySlider = ({ images, classname, slides = 1 }) => {
  const settings = {
    dots: false, // Enable navigation dots
    infinite: true, // Enables infinite looping
    slidesToShow: slides, // Number of slides to show at a time
    slidesToScroll: 1, // Number of slides to scroll per swipe
  };

  return (
    <Slider {...settings}>
      {images.map((image) => (
        <div key={image} className="">
          <img src={image} alt={image} className={classname} />
        </div>
      ))}
    </Slider>
  );
};

export default MySlider;
