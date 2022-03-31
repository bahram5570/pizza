import { FaShoppingBag } from "react-icons/fa";

interface TypeInputs {
    data: {id: string, name: string, description: string, price: number, image: string}[]
}

const MenuStructure: React.FC<TypeInputs> = ({data}) => {
    const output = data.map(x =>
        <div key={x.id} className="menu">
            <img src={x.image} alt={x.id} />

            <div>
                <div>
                    <h2>{x.name}</h2>

                    <h3>{x.description}</h3>

                    <span className="flex">
                        <p className="mr-1">تومان</p>
                        <p>{x.price}</p>
                    </span>
                </div>

                <button>
                    <p>افزودن به سبد خرید</p>
                    <FaShoppingBag />
                </button>
            </div>

        </div>
    )

    return (
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-10 md:gap-6 px-2 md:px-4 lg:px-32 divide-y-2 md:divide-y-0">
            {output}
        </section>
    )
}

export default MenuStructure;