import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import CustomStep1 from "./CustomStep1";

const CustomLayers = () => {
    const [order, setOrder] = useState(1);

    const customValues = useSelector((state: RootState) => state.customValueStore);
    console.log(customValues)

    return (
        <div>
            {order === 1 && <CustomStep1 />}
        </div>
    )
}

export default CustomLayers;