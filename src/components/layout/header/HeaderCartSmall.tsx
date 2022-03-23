import { FaShoppingBag } from "react-icons/fa";

const HeaderCartSmall = () => {

    return (
        <div
         className="
            md:hidden 
            absolute 
            bottom-14 
            right-2 
            bg-lime-500 
            rounded-full 
            flex 
            items-center 
            justify-center 
            p-4">

            <FaShoppingBag className="w-auto h-6" />
            
            <span
             className="
                absolute 
                top-2 
                right-2 
                bg-red-600 
                w-5 
                h-5 
                rounded-full 
                flex 
                items-center 
                justify-center">
                <p>5</p>
            </span>
        </div>
    )
}

export default HeaderCartSmall;