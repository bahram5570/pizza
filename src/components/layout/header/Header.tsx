import React from "react";
// import {Link} from 'react-router-dom';
import brandIcon from '../../data/brandIcon.png';
import HeaderCart from "./HeaderCart";
import HeaderCartSmall from "./HeaderCartSmall";

const Header: React.FC = () => {

    return (
        <header className="flex justify-between px-4 lg:px-6 py-2 bg-red-600 text-white font-yekanFont">
            <img src={brandIcon} alt="brandIcon" className="w-auto h-24" />

            <section className="flex items-center my-4 lg:mr-8">
                <nav>
                    <ul className="header_ul">
                        <li>ورود/ ثبت نام</li>
                        <li>درباره ما</li>
                        <li>تماس با ما</li>
                        <li>صفحه نخست</li>
                    </ul>
                </nav>

                <HeaderCart />
                <HeaderCartSmall />
            </section>
        </header>
    )
};

export default Header