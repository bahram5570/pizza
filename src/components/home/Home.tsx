import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import mainImage from '../data/images/mainImage.jpg';
import HomeGrids from './HomeGrids';
import HomeSlider from './HomeSlides';


const Home = () => {

    return (
        <Fragment>
            <section>
                <div className='home_links'>
                    <Link to='/CustomPizza'>پیتزای خودتو بساز</Link>
                    <Link to='/Menu'>سفارش پیتزا</Link>
                </div>
                <img src={mainImage} alt='mainImage' />
            </section>

            <section className='home_grids'>
                <HomeGrids />
            </section>

            <section className='overflow-x-hidden mt-20'>
                <HomeSlider />
            </section>
        </Fragment>
    )
}

export default Home;