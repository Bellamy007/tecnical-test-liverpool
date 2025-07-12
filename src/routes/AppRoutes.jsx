import { Routes, Route } from "react-router-dom";
// import About from "../pages/About/About";
// import Login from "../pages/Login/Login";
import Layout from "../components/Layout";
import { Home } from "../pages/Home";
import { DetailProduct } from "../pages/DetailProduct";

export default function AppRoutes() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/detail-product/:id" element={<DetailProduct />} />
            </Route>
            <Route path="/login" element={<Home />} />
        </Routes>
    );
}