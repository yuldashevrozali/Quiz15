import { Link } from "react-router-dom";
import '../App.css'

function MainPage() {
  return (
    <div className="start-page">
      <div className="content">
        <h1>Testga Xush Kelibsiz!</h1>
        <p>
          O'z bilimlaringizni sinab ko'ring va natijangizni baholang. Quyidagi tugmalardan birini tanlang:
        </p>
        <div className="buttons">
          {/* Testni boshlash sahifasiga o'tish */}
          <Link to="/test">
            <button className="start-btn">Testni Boshlash</button>
          </Link>
          {/* Natijalar sahifasiga o'tish */}
          <Link to="/results">
            <button className="results-btn">Natijalarim</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
