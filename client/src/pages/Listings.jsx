import Card from "./../components/PropCard";
const Listings = () => {
  return (
    <div className="flex-row justify-center bg-lightblue">
      <div className="py-9"></div>
      <h1 className="px-10 border border-blue bg-darkblue  py-10 text-5xl font-bold text-white">
        Property List
      </h1>
      <div className="grid lg:grid-cols-3 gap-6 px-6 py-4 md:grid-cols-1 justify-items-center">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Listings;
