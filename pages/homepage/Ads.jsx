const Ads = () => {
  return (
    <div className="relative">
      <div className="absolute top-0 left-0 right-0 p-10 font-inter">
        <h4 className="text-white text-xs">Bacola Natural Foods</h4>
        <div className="my-3">
          <h2 className="text-2xl font-light">Special Organic</h2>
          <h3 className="text-2xl font-semibold">Roats Burger</h3>
        </div>
        <span className="text-sm">only-from</span>
        <p className="font-dosis font-semibold text-3xl text-red-600">$14.99</p>
      </div>
      <img
        src="/images/banner-box.jpg"
        alt="Banner 1"
        className="rounded-box"
      />
    </div>
  );
};

export default Ads;
