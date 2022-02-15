import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/home";
import News from "./Components/News/news";
import Navbar from "./Components/NavBar/navbar";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/assesment2" element={<Home />} />
        <Route path="/assesment2/news" element={<News />} />
      </Routes>
    </div>
  );
}

export default App;
