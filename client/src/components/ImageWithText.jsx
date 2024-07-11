import ImageOverlay from 'react-image-overlay';

const ImageWithText = ({ imageUrl, text }) => {
  return (
    <ImageOverlay
      url={imageUrl}
      alt={text}
      overlay={<div className="text-overlay">{text}</div>}
      placement="center"
    />
  );
};

export default ImageWithText;
