import {Link} from 'react-router-dom'
import drink from '../data/images/drink.svg';
import salad from '../data/images/salad.svg';
import hotDog from '../data/images/hotDog.svg';
import aPizza from '../data/images/aPizza.svg';
import iPizza from '../data/images/iPizza.svg';

import {NavLink} from 'react-router-dom'

const MenuHeader: React.FC<{scrolled: boolean}> = ({scrolled}) => {
    return (
        <nav className={`menu_header ${scrolled ? 'fixed top-0 z-10' : 'mb-6'}`}>
            <ul>
                <li className="border-2 border-white rounded-full px-8 py-2">
                    <Link to='/CustomPizza'>
                        پیتزای خودتو بساز   
                    </Link>
                </li>

                <li>
                    <a href="#salad">
                        سالاد و پیش غذا
                        <img src={salad} alt="salad" /> 
                    </a>
                </li>

                <li>
                    <a href="#drink">
                        نوشیدنی
                        <img src={drink} alt="drink" /> 
                    </a>
                </li>

                <li>
                    <a href="#hotDog">
                        هات داگ
                        <img src={hotDog} alt="hotDog" /> 
                    </a>
                </li>

                <li>
                    <a href="#aPizza">
                        پیتزا آمریکایی
                        <img src={aPizza} alt="aPizza" /> 
                    </a>
                </li>

                <li>
                    <a href="#iPizza">
                        پیتزا ایتالیایی
                        <img src={iPizza} alt="iPizza" /> 
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default MenuHeader