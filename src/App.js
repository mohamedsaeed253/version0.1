import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./App.css";
import Navbar from "./Components/Layout/Navbar";
import Cover from "./Components/Cover";
import Footer from "./Components/Layout/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="pt-5">
          <div className="mt-3">
            <Routes>
              <Route path="/" element={<Cover />} />
            </Routes>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
