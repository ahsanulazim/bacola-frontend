import { useRef } from "react";
import { LuChevronDown } from "react-icons/lu";
import CountrySelectModal from "./CountrySelectModal";

const CountrySelect = () => {
  const countryModal = useRef();

  return (
    <>
      <button
        className="btn btn-md font-inter py-7"
        onClick={() => countryModal?.current?.showModal()}
      >
        <div className="flex flex-col items-start">
          <small className="text-[10px] opacity-50">Your Location</small>
          <span className="text-main">Select Your Location</span>
        </div>
        <LuChevronDown />
      </button>
      <CountrySelectModal ref={countryModal} />
    </>
  );
};

export default CountrySelect;
