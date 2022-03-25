import React, {useState} from "react";
import {Link} from 'react-router-dom';
import brandIcon from '../../data/images/brandIcon.png';
import HeaderCart from "./HeaderCart";
import HeaderCartSmall from "./HeaderCartSmall";
import HeaderMenuIcon from "./HeaderMenuIcon";
import { FaHome, FaListUl, FaInfoCircle, FaSignInAlt } from "react-icons/fa";

const Header: React.FC = () => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <header className="flex justify-between md:items-center px-4 lg:px-20 py-2 bg-headerRed text-white border-b-2 border-red-400">
            <img src={brandIcon} alt="brandIcon" className="w-auto h-24" />

            <section className="flex flex-col md:flex-row items-end md:items-center my-4 lg:mr-8">
                <HeaderMenuIcon showMenu={showMenu} onShowMenu={() => setShowMenu(!showMenu)} />

                <nav>
                    <ul className={`header_ul ${showMenu ? 'max-h-80 md:max-h-fit' : 'max-h-0 md:max-h-fit overflow-hidden'}`}>
                        <li>
                            <Link to='/Login'>
                                <p>ورود</p>
                                <FaSignInAlt />
                            </Link>
                        </li>
                        <li>
                            <Link to='/About'>
                                <p>درباره ما</p>
                                <FaInfoCircle />
                            </Link>
                        </li>
                        <li>
                            <Link to='/Menu'>
                                <p>منو</p>
                                <FaListUl />
                            </Link>
                        </li>
                        <li>
                            <Link to='/Home'>
                                <p>خانه</p>
                                <FaHome />
                            </Link>
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