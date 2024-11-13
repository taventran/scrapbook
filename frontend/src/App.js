import "./App.css";
import HomeScreen from "./components/homescreen/homescreen";
import About from "./components/about/about";
import Editor from "./components/editor/editor";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/about" element={<About />} />
        <Route path="/create" element={<Editor />} />
      </Routes>
    </Router>
  );
}

export default App;
