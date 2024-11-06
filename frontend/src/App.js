import "./App.css";
import Navbar from "./components/navbar/navbar";
import HomeScreen from "./components/homescreen/homescreen";
import About from "./components/about/about";
import Editor from "./components/editor/editor";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
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
