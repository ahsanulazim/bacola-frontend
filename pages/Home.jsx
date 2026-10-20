import Ads from "./homepage/Ads";
import Carousel from "./homepage/Carousel";

const Home = () => {
  return (
    <main>
      <section className="max-w-340 mx-auto p-3">
        <Carousel />
      </section>
      <section className="max-w-340 mx-auto p-3 grid grid-cols-1 md:grid-cols-12">
        <aside className="col-span-3">
          <Ads />
        </aside>
        <section className="col-span-9">product cards here</section>
      </section>
    </main>
  );
};

export default Home;
