import React from "react";
import "./App.css"; // CSS file

function App() {

  function Results(){
    
  }
  return (
    <div className="start-page">
      <div className="content">
        <h1>Testga Xush Kelibsiz!</h1>
        <p>
          O'z bilimlaringizni sinab ko'ring va natijangizni baholang. Quyidagi tugmalardan birini tanlang:
        </p>
        <div className="buttons">
          <button className="start-btn">Testni Boshlash</button>
          <button onClick={Results} className="results-btn">Natijalarim</button>
        </div>
      </div>
    </div>
  );
}

export default App;
