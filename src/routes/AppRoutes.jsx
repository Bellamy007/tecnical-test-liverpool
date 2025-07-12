import { Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import { Home } from "../pages/Home";
import { Contact } from "../pages/Contact";
import { DetailProduct } from "../pages/DetailProduct";

export default function AppRoutes() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/detail-product/:id" element={<DetailProduct />} />
            </Route>
            <Route path="/contact" element={<Contact />} />
        </Routes>
    );
}