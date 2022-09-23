import ImgHero2 from "../../assets/images/image-about-dark.jpg";
import ImgHero3 from "../../assets/images/image-about-light.jpg";

const MainContent = () => {
    return (
        <main className="grid grid-cols-1  grid-rows-3 lg:grid-cols-7 lg:grid-rows-1">
            <img
                src={ImgHero2}
                alt=""
                className="lg-row-start-1 row-start-1 row-end-2 h-full w-full lg:col-start-1 lg:col-end-3 lg:row-end-2"
            />
            <article className="lg:cold-end-6 row-start-2 row-end-3 flex flex-col justify-center lg:col-span-3 lg:col-start-3 lg:row-start-1 lg:row-end-2 lg:px-16">
                <h2 className="mb-3 text-lg font-bold uppercase tracking-[0.6rem]">
                    About our furniture
                </h2>
                <p className="leading-6 text-gray-500">
                    Our modern furniture store provide a high level of quality.
                    Our company has invested in advanced technology to ensure
                    that every product is made as perfect and as consistent as
                    possible. With three decades of experience in this industry,
                    we understand what customers want for their home and office.
                </p>
            </article>
            <img
                src={ImgHero3}
                alt=""
                className="lg-col-start-6 col-span-2 row-start-3 row-end-4 h-full w-full lg:col-end-8 lg:row-start-1 lg:row-end-2"
            />
        </main>
    );
};

export default MainContent;
