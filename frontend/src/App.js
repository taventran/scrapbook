import "./App.css";
import HomeScreen from "./components/homescreen/homescreen";
import Editor from "./components/editor/editor";
import Support from "./components/support/support";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/create" element={<Editor />} />
        <Route path="/about" element={<Support />} />
      </Routes>
    </Router>
  );
}

export default App;
