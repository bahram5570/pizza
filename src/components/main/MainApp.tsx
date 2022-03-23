import {Routes, Route} from "react-router-dom";

const MainApp = () => {

    return (
        <Routes>
            <Route path='/Home' element={<p>Home</p>} />
            <Route path='/Products' element={<p>Products</p>} />
        </Routes>
    )
}

export default MainApp;