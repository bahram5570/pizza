import { FaShoppingBag } from 'react-icons/fa';

interface TypeInputs {
  id: string;
  title: string;
  data: {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
  }[];
}

const MenuStructure: React.FC<TypeInputs> = ({ data, id, title }) => {
  const output = data.map((x) => (
    <div key={x.id} className="menu_structure">
      <img src={x.image} alt={x.id} />

      <div>
        <div>
          <h2>{x.name}</h2>

          <h3>{x.description}</h3>

          <p>
            <span className="mr-1">تومان</span>
            <span>{x.price}</span>
          </p>
        </div>

        <button>
          <p>افزودن به سبد خرید</p>
          <FaShoppingBag />
        </button>
      </div>
    </div>
  ));

  return (
    <section id={id} className="mb-28 lg:mb-0">
      <div className="flex justify-center relative lg:my-4">
        <h1
          className="
          italic 
          text-2xl 
          lg:text-3xl 
          mb-2 
          px-4 
          text-[#ff0000] 
          dark:text-white 
          bg-white 
          dark:bg-neutral-500"
        >
          {title}
        </h1>
        <span className="absolute -z-10 top-4 w-5/6 lg:w-3/5 h-0.5 bg-[#ff0000] dark:bg-white" />
      </div>

      <div className="menu">{output}</div>
    </section>
  );
};

export default MenuStructure;
