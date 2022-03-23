import React, {useState} from "react";
import {Link} from 'react-router-dom';
import brandIcon from '../../data/brandIcon.png';
import HeaderCart from "./HeaderCart";
import HeaderCartSmall from "./HeaderCartSmall";
import HeaderMenuIcon from "./HeaderMenuIcon";

const Header: React.FC = () => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <header className="flex justify-between md:items-center px-4 lg:px-6 py-2 bg-red-600 text-white font-yekanFont">
            <img src={brandIcon} alt="brandIcon" className="w-auto h-24" />

            <section className="flex flex-col md:flex-row items-end md:items-center my-4 lg:mr-8">
                <HeaderMenuIcon showMenu={showMenu} onShowMenu={() => setShowMenu(!showMenu)} />

                <nav>
                    <ul className={`header_ul ${showMenu ? 'max-h-80 md:max-h-fit' : 'max-h-0 md:max-h-fit overflow-hidden'}`}>
                        <li>
                            <Link to='/Login'>ورود/ ثبت نام</Link>
                        </li>
                        <li>
                            <Link to='/About'>درباره ما</Link>
                        </li>
                        <li>
                            <Link to='/Menu'>منو</Link>
                        </li>
                        <li>
                            <Link to='/Home'>صفحه نخست</Link>
                        </li>
                    </ul>
                </nav>

                <HeaderCart />
                <HeaderCartSmall />
            </section>
        </header>
    )
};

export default Header