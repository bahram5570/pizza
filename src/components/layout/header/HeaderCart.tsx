import HeaderCartBill from "./HeaderCartBill";
import { FaShoppingCart } from "react-icons/fa";

const HeaderCart = () => {

    return (
        <div className="header_cart_component">
            <div className="flex items-center pb-2 border-b-2 border-black">
                <FaShoppingCart className="mr-2 w-auto h-6" />
                <p>نمایش سبد خرید من</p>
            </div>

            <HeaderCartBill />
        </div>
    )
}

export default HeaderCart