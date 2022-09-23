import ImgHero1 from "@/assets/images/desktop-image-hero-1.jpg";
import ImgHero2 from "@/assets/images/desktop-image-hero-2.jpg";
import ImgHero3 from "@/assets/images/desktop-image-hero-3.jpg";
import IconNext from "@/components/icons/IconNext.jsx";
import IconPrev from "@/components/icons/IconPrev";
import ArticleMain from "./ArticleMain";
import { useState } from "react";

const ARRAY_IMG = [
    {
        name: "ImgHero1",
        imgHero: ImgHero1,
        title: "Discover innovative ways to decorate",
        description:
            "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
    },
    {
        name: "ImgHero2",
        imgHero: ImgHero2,
        title: "We are available all across the globe",
        description:
            "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
    },
    {
        name: "ImgHero3",
        imgHero: ImgHero3,
        title: "Manufactured with the best materials",
        description:
            "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
    },
];

const HeaderMain = () => {
    const [index, setIndex] = useState(0);
    const productNext = () => {
        index === ARRAY_IMG.length - 1 ? setIndex(0) : setIndex(index + 1);
    };
    const productPrev = () => {
        index === 0 ? setIndex(ARRAY_IMG.length - 1) : setIndex(index - 1);
    };
    return (
        <header className="grid grid-cols-3 grid-rows-[10fr_1.5fr_10fr] lg:grid-cols-7 lg:grid-rows-[10fr_1.5fr]">
            <ArticleMain hero={ARRAY_IMG[index]} />
            <div className="col-start-3 col-end-4 row-start-2 row-end-3 flex justify-around bg-black lg:col-start-5 lg:col-end-6">
                <button
                    className="w-full hover:bg-gray-700"
                    onClick={productPrev}
                >
                    <IconPrev className="mx-auto" />
                </button>
                <button
                    className="w-full hover:bg-gray-700"
                    onClick={productNext}
                >
                    <IconNext className="mx-auto" />
                </button>
            </div>
        </header>
    );
};
export default HeaderMain;
