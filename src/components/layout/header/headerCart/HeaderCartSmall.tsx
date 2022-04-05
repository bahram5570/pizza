import { FaShoppingBag } from 'react-icons/fa';

interface TypeInputs {
  items: number;
}

const HeaderCartSmall = ({ items }: TypeInputs) => {
  return (
    <div
      id="smallCartComponent"
      className="
        fixed 
        bottom-14 
        right-2 
        bg-[#22ff22]
        rounded-full 
        flex 
        items-center 
        justify-center 
        p-4
        z-10
        md:hover:scale-110
        duration-200
        cursor-pointer"
    >
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
          justify-center"
      >
        <p>{items}</p>
      </span>
    </div>
  );
};

export default HeaderCartSmall;
