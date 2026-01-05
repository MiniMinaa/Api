import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Api from "./components/Api.jsx";
import Register from "./components/Registration.jsx";
import Login from "./components/Login.jsx";


function App () {
    return(
    <BrowserRouter basename="/Api/">
        <Routes>
            <Route path="/" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/game" element={<Api />} />
        </Routes>
    </BrowserRouter>
  );
}
export default App;