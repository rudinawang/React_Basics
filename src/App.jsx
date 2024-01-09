// import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
// import router from "./routes";

//hello world this is test

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<h2>About Page</h2>} />
        <Route path="/contact" element={<h1>Contact Info</h1>} />
      </Routes>
    </BrowserRouter>
    // <RouterProvider router={router} />
  );
}

export default App;
