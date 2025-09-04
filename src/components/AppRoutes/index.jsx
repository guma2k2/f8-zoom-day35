import { HashRouter, Routes, Route } from "react-router";
import Navigation from "../../layouts/Navigation";
import Home from "../../pages/Home";
import Buttons from "../../pages/Buttons";
import Comments from "../../pages/Comments";
import Counter from "../../pages/Counter";
import Products from "../../pages/Products";
import Profile from "../../pages/Profile";
import Todo from "../../pages/Todo";

import Weather from "../../pages/Weather";

function AppRoutes() {
    return (
        <HashRouter>
            <Navigation />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/buttons" element={<Buttons />} />
                <Route path="/comments" element={<Comments />} />
                <Route path="/counter" element={<Counter />} />
                <Route path="/products" element={<Products />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/todo" element={<Todo />} />
                <Route path="/weather" element={<Weather />} />
            </Routes>
        </HashRouter>
    );
}

export default AppRoutes;
