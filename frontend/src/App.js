import "./App.css";
import HomeScreen from "./components/homescreen/homescreen";
import About from "./components/about/about";
import Editor from "./components/editor/editor";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<HomeScreen />} />
          <Route path="/create" element={<Editor />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
