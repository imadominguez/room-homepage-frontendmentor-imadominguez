import ImgHero1 from "@/assets/images/desktop-image-hero-1.jpg";
import IconArrowShop from "@/components/icons/IconArrowShop.jsx";
import IconNext from "@/components/icons/IconNext.jsx";
import IconPrev from "@/components/icons/IconPrev";

const HeaderMain = () => {
    return (
        <>
            <header className="grid grid-cols-3 grid-rows-[10fr_1.5fr_10fr] lg:grid-cols-7 lg:grid-rows-[10fr_1.5fr]">
                <img
                    src={ImgHero1}
                    alt=""
                    className="col-start-1 col-end-4 row-start-1 row-end-3 aspect-auto h-full lg:col-start-1 lg:col-end-5 lg:row-start-1 lg:row-end-3"
                />
                <article className="col-start-1 col-end-4 row-start-3 row-end-4 flex flex-col items-start justify-center lg:col-start-5 lg:col-end-8 lg:row-start-1  lg:row-end-3 lg:py-24 lg:px-24">
                    <h1 className="mb-6 text-4xl font-bold">
                        Discover innovative ways to decorate
                    </h1>
                    <p className="mb-8 leading-6 text-gray-500">
                        We provide unmatched quality, comfort, and style for
                        property owners across the country. Our experts combine
                        form and function in bringing your vision to life.
                        Create a room in your own style with our collection and
                        make your property a reflection of you and what you
                        love.
                    </p>
                    <button className="flex items-center hover:fill-gray-600 hover:text-gray-600">
                        <span className="text-base font-bold uppercase tracking-[1.2rem]">
                            Shop now
                        </span>
                        <IconArrowShop />
                    </button>
                </article>
                <div className="col-start-3 col-end-4 row-start-2 row-end-3 flex justify-around bg-black lg:col-start-5 lg:col-end-6">
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
