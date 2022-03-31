import {products} from '../data/products/products'
import MenuStructure from "./MenuStructure";

const Menu = () => {

    return (
        <div className='md:pt-10'>
            <MenuStructure data={products} />
        </div>
    )
}

export default Menu;