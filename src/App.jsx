// import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
// import router from "./routes";

//hello world this is test

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<h1>Contact Info</h1>} />
      </Routes>
    </BrowserRouter>
    // <RouterProvider router={router} />
  );
}

export default App;
