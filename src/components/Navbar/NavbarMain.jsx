import { useState, useRef } from "react";
import NavLink from "./NavLink";
import IconMenuClose from "../icons/IconMenuClose";
import IconMenuOpen from "../icons/IconMenuOpen";

const NavbarMain = () => {
    const [activeMenu, setActiveMenu] = useState(false);
    const refNavbar = useRef(null);

    const openMenuClass =
        "absolute top-6 flex w-full items-center px-8 lg:text-white";
    const closeMenuClass =
        "absolute top-6 flex w-full items-center bg-white px-8 text-black py-4 lg:py-0 justify-between lg:justify-start lg:bg-transparent";
    const navBrandActive =
        "mx-auto mb-3 pr-[20px] text-4xl text-white lg:mx-0 lg:block lg:pr-16";
    const navBrandInactive = "hidden";
    const navLinksActive = "flex gap-8 lg:flex lg:gap-4 lg:text-white";
    const navLinksInactive = "hidden lg:flex lg:gap-4 lg:text-white";

    const handleClickMenu = () => {
        setActiveMenu(!activeMenu);
    };

    return (
        <nav
            ref={refNavbar}
            className={activeMenu ? closeMenuClass : openMenuClass}
        >
            <button className="lg:hidden" onClick={handleClickMenu}>
                {activeMenu ? <IconMenuClose /> : <IconMenuOpen />}
            </button>
            <a
                href="#"
                className={activeMenu ? navBrandInactive : navBrandActive}
            >
                room
            </a>
            <div className={activeMenu ? navLinksActive : navLinksInactive}>
                <NavLink text="home" />
                <NavLink text="shop" />
                <NavLink text="about" />
                <NavLink text="contact" />
            </div>
        </nav>
    );
};

export default NavbarMain;

("");
