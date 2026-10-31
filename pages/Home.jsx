import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import SectionHead from "../components/ui/SectionHead";
import Ads from "./homepage/Ads";
import Carousel from "./homepage/Carousel";
import ProductCarousel from "./homepage/ProductCarousel";

const Home = () => {
  return (
    <main>
      <section className="max-w-340 mx-auto p-3">
        <Carousel />
      </section>
      <section className="max-w-340 mx-auto p-3 grid grid-cols-1 md:grid-cols-12 gap-5">
        <aside className="max-lg:hidden lg:col-span-3">
          <Ads />
        </aside>
        <section className="col-span-12 lg:col-span-9">
          <SectionHead />
          <div className="mt-5 relative">
            <div className="border border-black/10 overflow-hidden rounded-box">
              <ProductCarousel />
            </div>
            <div className="absolute left-0 right-0 top-1/2 z-30 flex justify-between overflow-visible">
              <button className="btn btn-circle custom-prev -translate-x-1/2 shadow-md">
                <LuChevronLeft />
              </button>
              <button className="btn btn-circle custom-next translate-x-1/2 shadow-md">
                <LuChevronRight />
              </button>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
};

export default Home;
