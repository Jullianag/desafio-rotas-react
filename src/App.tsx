import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import Home from "./routes";
import Products from "./routes/Home/Products";
import Computers from "./routes/Home/Products/Computers";
import Books from "./routes/Home/Products/Books";
import Electronics from "./routes/Home/Products/Electronics";
import HomeBody from "./routes/Home/HomeBody";
import About from "./routes/Home/About";
import NotFound from "./NotFound";

export default function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}>
                    <Route path="/home" element={<HomeBody/>} />
                    <Route path="/products" element={<Products />} />
                        <Route path="/products/computers" element={<Computers/>} />
                        <Route path="/products/electronics" element={<Electronics />} />
                        <Route path="/products/books" element={<Books />} />
                    <Route path="/about" element={<About />}/>
                    <Route path="*" element={<NotFound />} />
                </Route>
                <Route index element={<Navigate to="/home" />}/>
            </Routes>
        </BrowserRouter>
    );
}


