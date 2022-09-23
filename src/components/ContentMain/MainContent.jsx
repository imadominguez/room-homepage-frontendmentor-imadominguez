import ImgHero2 from "../../assets/images/image-about-dark.jpg";
import ImgHero3 from "../../assets/images/image-about-light.jpg";

const MainContent = () => {
  return (
    <main className="grid grid-cols-1 lg:grid-cols-7">
      <img src={ImgHero2} alt="" className="w-full lg:col-span-2" />
      <article className="flex flex-col justify-center lg:col-span-3 lg:px-16">
        <h2 className="mb-3 text-lg font-bold uppercase tracking-[0.6rem]">
          About our furniture
        </h2>
        <p className="leading-6 text-gray-500">
          Our modern furniture store provide a high level of quality. Our
          company has invested in advanced technology to ensure that every
          product is made as perfect and as consistent as possible. With three
          decades of experience in this industry, we understand what customers
          want for their home and office.
        </p>
      </article>
      <img src={ImgHero3} alt="" className="col-span-2 w-full" />
    </main>
  );
};

export default MainContent;
