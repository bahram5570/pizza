import { Fragment } from "react"
import { sliderData } from "./sliderData";

const HomeSlider = () => {

    return (
        <Fragment>
            <div className="flex animate-homeSlider w-full">
                {sliderData.map(x => (
                    <div key={x.alt} className=" mx-10 min-w-[300px]">
                        <img src={x.image} alt={x.alt} className="rounded-lg" />
                        <h3 className="text-right text-xl mt-2 mr-4">{x.txt}</h3>
                    </div>
                ))}
            </div>
        
        </Fragment>
    )
}

export default HomeSlider;