import {Routes, Route, Navigate} from "react-router-dom";
import HomePage from "../pages/HomePage";
import MenuPage from "../pages/MenuPage";
import CustomPizzaPage from "../pages/CustomPizzaPage";
import AboutPage from "../pages/AboutPage";
import LoginPage from "../pages/LoginPage";

const MainApp = () => {

    return (
        <Routes>
            <Route path='/' element={<Navigate to='/Home' />} />
            <Route path='/Home' element={<HomePage />} />
            <Route path='/Menu' element={<MenuPage />} />
            <Route path='/CustomPizza' element={<CustomPizzaPage />} />
            <Route path='/About' element={<AboutPage />} />
            <Route path='/Login' element={<LoginPage />} />
        </Routes>
    )
}

export default MainApp;