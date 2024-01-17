import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Index from "../pages/Index";

export default function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Index/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </Router>
    )
}