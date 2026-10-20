const Footer = () => {
  return (
    <>
      <footer className="bg-base-100 border-t border-t-black/10 font-inter">
        <div className="footer sm:footer-horizontal justify-between text-base-content px-3 py-10 max-w-340 mx-auto">
          <nav>
            <h6 className="footer-title uppercase font-dosis font-semibold">
              FRUIT & VEGETABLES
            </h6>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </nav>
          <nav>
            <h6 className="footer-title uppercase font-dosis font-semibold">
              Breakfast & Dairy
            </h6>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </nav>
          <nav>
            <h6 className="footer-title uppercase font-dosis font-semibold">
              Meat & Seafood
            </h6>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </nav>
          <nav>
            <h6 className="footer-title uppercase font-dosis font-semibold">
              Beverages
            </h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
          <nav>
            <h6 className="footer-title uppercase font-dosis font-semibold">
              Breads & Bakery
            </h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
        </div>
      </footer>
      <footer className="bg-base-100 font-inter border-t border-t-black/10">
        <div className="footer sm:footer-horizontal items-center p-4 max-w-340 mx-auto text-xs">
          <aside className="grid-flow-col items-center">
            <p className="">
              Copyright © {new Date().getFullYear()} - All right reserved{" "}
            </p>
          </aside>
          <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end items-center">
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
            <img src="/images/payments.jpg" alt="payment icons" />
          </nav>
        </div>
      </footer>
    </>
  );
};

export default Footer;
