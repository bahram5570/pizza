import MenuStructureItems from './MenuStructureItems';

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

      <div className="menu">
        {data.map((x) => (
          <MenuStructureItems key={x.id} item={x} />
        ))}
      </div>
    </section>
  );
};

export default MenuStructure;
