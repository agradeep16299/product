import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";

import { useDispatch, useSelector } from "react-redux";
import NewProduct from "./pages/NewProduct";
import ProductPage from "./pages/ProductPage";
import CategoryPage from "./pages/CategoryPage";
import ScrollToTop from "./components/ScrollToTop";


import EditProductPage from "./pages/EditProductPage";


import AdminDashboard from "./pages/AdminDashboard";



function App() {
    
    
    return (
        <div className="App">
            <BrowserRouter>
            <ScrollToTop />
                <Navigation />
                <Routes>
                    <Route index element={<Home />} />
                  

                    
                  
                    <Route path="/admin" element={<AdminDashboard/>} />
                           
                    <Route path="/product/:id/edit" element={<EditProductPage />} />
                        
                    
                    <Route path="/product/:id" element={<ProductPage />} />
                    <Route path="/category/:category" element={<CategoryPage />} />

                    <Route path="/new-product" element={<NewProduct />} />

                    <Route path="*" element={<Home />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
