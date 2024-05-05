import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./pages/product/Product";
import Catalog from "./pages/catalog/Catalog";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Catalog />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
}
