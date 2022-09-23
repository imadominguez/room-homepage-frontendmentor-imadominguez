import IconArrowShop from "@/components/icons/IconArrowShop.jsx";
const ArticleMain = ({ hero }) => {
    return (
        <>
            <img
                src={hero.imgHero}
                alt={hero.title}
                className="col-start-1 col-end-4 row-start-1 row-end-3 h-full w-full lg:col-start-1 lg:col-end-5 lg:row-start-1 lg:row-end-3"
            />
            <article className="col-start-1 col-end-4 row-start-3 row-end-4 flex flex-col items-start justify-center lg:col-start-5 lg:col-end-8 lg:row-start-1  lg:row-end-3 lg:py-24 lg:px-24">
                <h1 className="mb-6 text-4xl font-bold">{hero.title}</h1>
                <p className="mb-8 leading-6 text-gray-500">
                    {hero.description}
                </p>
                <button className="flex items-center hover:fill-gray-600 hover:text-gray-600">
                    <span className="text-base font-bold uppercase tracking-[1.2rem]">
                        Shop now
                    </span>
                    <IconArrowShop />
                </button>
            </article>
        </>
    );
};

export default ArticleMain;
