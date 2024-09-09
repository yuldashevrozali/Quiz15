import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./Pages/MainPage";
import TestPage from "./Pages/TestPage";
import ResultsPage from "./Pages/ResultsPage";

function App() {
  return (
    <Router>
      <Routes>
        {/* Bosh sahifa */}
        <Route path="/" element={<MainPage />} />
        {/* Testni boshlash sahifasi */}
        <Route path="/test" element={<TestPage />} />
        {/* Natijalar sahifasi */}
        <Route path="/results" element={<ResultsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
