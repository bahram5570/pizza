import './menuAnimation.css';
import { FaShoppingBag } from 'react-icons/fa';

interface TypeInputs {
  position: {
    cartBottom: number;
    cartRight: number;
    itemBottom: number;
    itemRight: number;
  };
  onClose: () => void;
}

const MenuAnimation = ({ position, onClose }: TypeInputs) => {
  setTimeout(onClose, 2000);

  return (
    <div
      style={{ bottom: position.itemBottom, right: position.itemRight }}
      className="fixed flex menuAnimation bg-[#ff0000] rounded-full p-2 z-50"
    >
      <FaShoppingBag className="fill-white" />
    </div>
  );
};

export default MenuAnimation;
