import ImgHero1 from "./assets/images/desktop-image-hero-1.jpg";
import ImgHero2 from "./assets/images/image-about-dark.jpg";
import ImgHero3 from "./assets/images/image-about-light.jpg";
import IconArrowShop from "./components/icons/IconArrowShop.jsx";

const App = () => {
  return (
    <div>
      <nav className="absolute">
        <a href="#">room</a>
        <div>
          <a href="#">home</a>
          <a href="#">shop</a>
          <a href="#">about</a>
          <a href="#">contact</a>
        </div>
      </nav>
      <header className="grid grid-cols-1 lg:grid-cols-7 lg:grid-rows-[10fr_1.3fr]">
        <img
          src={ImgHero1}
          alt=""
          className="h-full w-full lg:col-span-4 lg:row-span-2"
        />
        <article className="flex flex-col items-start justify-center lg:col-span-3 lg:px-24">
          <h1 className="mb-6 text-4xl font-bold">
            Discover innovative ways to decorate
          </h1>
          <p className="text-grey-500 mb-8">
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
            <IconArrowShop className="" />
          </button>
        </article>
        <div className="">
          <button>prev</button>
          <button>next</button>
        </div>
      </header>
      <main className="grid grid-cols-1 lg:grid-cols-7">
        <img src={ImgHero2} alt="" className="w-full lg:col-span-2" />
        <article className="lg:col-span-3">
          <h2>About our furniture</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio
            atque mollitia libero deleniti dignissimos aut ad voluptate minima
            dicta magnam, rerum consectetur quae blanditiis qui. Facere ratione
            nisi doloribus tenetur sed molestiae illo nulla porro perspiciatis
            minus, aperiam adipisci reiciendis.
          </p>
        </article>
        <img src={ImgHero3} alt="" className="col-span-2 w-full" />
      </main>
    </div>
  );
};
export default App;
