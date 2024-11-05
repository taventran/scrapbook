import "./homescreen.css";
import Navbar from "../navbar/navbar";

function HomeScreen() {
  return (
    <div className="homescreen">
      <Navbar />
      <div className="book"></div>
    </div>
  );
}

export default HomeScreen;
