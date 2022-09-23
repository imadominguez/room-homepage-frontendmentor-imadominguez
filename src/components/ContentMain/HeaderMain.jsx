import ImgHero1 from "../../assets/images/desktop-image-hero-1.jpg";
import IconArrowShop from "../../components/icons/IconArrowShop.jsx";
import IconNext from "../icons/IconNext.jsx";
import IconPrev from "../icons/IconPrev";

const HeaderMain = () => {
  return (
    <>
      <header className="grid grid-cols-1 lg:grid-cols-7 lg:grid-rows-[10fr_1.5fr]">
        <img
          src={ImgHero1}
          alt=""
          className="h-full w-full lg:col-start-1 lg:col-end-5 lg:row-start-1 lg:row-end-3"
        />
        <article className="flex flex-col items-start justify-center md:px-16 md:py-9 lg:col-span-3 lg:px-24 lg:py-12">
          <h1 className="mb-6 text-4xl font-bold">
            Discover innovative ways to decorate
          </h1>
          <p className="mb-8 leading-6 text-gray-500">
            We provide unmatched quality, comfort, and style for property owners
            across the country. Our experts combine form and function in
            bringing your vision to life. Create a room in your own style with
            our collection and make your property a reflection of you and what
            you love.
          </p>
          <button className="flex items-center hover:fill-gray-600 hover:text-gray-600">
            <span className="text-base font-bold uppercase tracking-[1.2rem]">
              Shop now
            </span>
            <IconArrowShop />
          </button>
        </article>
        <div className="flex justify-around bg-black">
          <button className="w-full hover:bg-gray-700">
            <IconPrev className="mx-auto" />
          </button>
          <button className="w-full hover:bg-gray-700">
            <IconNext className="mx-auto" />
          </button>
        </div>
      </header>
    </>
  );
};
export default HeaderMain;
