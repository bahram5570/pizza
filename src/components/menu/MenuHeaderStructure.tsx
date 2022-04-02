import { FaCaretDown } from 'react-icons/fa';

interface TypeInputs {
  id: string;
  title: string;
  image: string;
  selectedHeader: string[] | null;
}

const MenuHeaderStructure: React.FC<TypeInputs> = ({
  id,
  title,
  image,
  selectedHeader,
}) => {
  const isSelected =
    (selectedHeader === null && id === '#aPizza') ||
    (selectedHeader && selectedHeader[0] === id);
  return (
    <li
      className={`${
        isSelected &&
        'bg-neutral-200 lg:bg-inherit text-red-600 lg:text-inherit'
      }`}
    >
      <a href={id}>
        {title}
        <img src={image} alt={id} />
      </a>

      <FaCaretDown
        className={`menu_header_pointer ${isSelected && 'lg:block'}`}
      />
    </li>
  );
};

export default MenuHeaderStructure;
