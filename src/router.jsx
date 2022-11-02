import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home } from "./Home.jsx";
import { Error } from "./components/error404/Error404";

export function Router() {
  return (
    <BrowserRouter>
       <Routes>        
        <Route path="*" element={<Error />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}