import React, { useState } from "react";
import "./Pages.css";
import questionsData from '../data/question.json'; // Import the JSON file

function TestPage() {
  const questions = questionsData;

  const [answers, setAnswers] = useState(Array(questions.length).fill(""));
  const [result, setResult] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false); // New state to track submission

  const handleOptionChange = (e, index) => {
    const updatedAnswers = [...answers];
    updatedAnswers[index] = e.target.value;
    setAnswers(updatedAnswers);
  };

  const checkAnswers = () => {
    const allAnswered = answers.every(answer => answer !== "");

    if (!allAnswered) {
      setResult("Iltimos, barcha savollarni javob bering.");
      return;
    }

    let correctCount = 0;
    questions.forEach((question, index) => {
      if (question.correctAnswer === answers[index]) {
        correctCount++;
      }
    });

    setResult(
      `Siz ${correctCount} ta to'g'ri javob topdingiz va ${
        questions.length - correctCount
      } ta xato.`
    );
    setIsSubmitted(true); // Mark as submitted
  };

  const handleRetry = () => {
    setAnswers(Array(questions.length).fill(""));
    setResult(null);
    setIsSubmitted(false);
  };

  const handleHome = () => {
    // Redirect to home page or perform any other action
    window.location.href = '/'; // Example redirect to home
  };

  return (
    <div className="test-page1">
      <h2>Matematika Testi</h2>
      <div className="test-page">
        {isSubmitted ? (
          <div className="result-container">
            <p className="result">{result}</p>
            <button className="retry-button" onClick={handleRetry}>Qayta ishlash</button>
            <button className="home-button" onClick={handleHome}>Bosh sahifaga</button>
          </div>
        ) : (
          <form>
            {questions.map((question, index) => (
              <div key={index} className="question-block">
                <p>
                  {index + 1}. {question.question}
                </p>
                {question.options.map((option, i) => (
                  <label key={i}>
                    <input
                      type="radio"
                      name={`question-${index}`}
                      value={option}
                      checked={answers[index] === option}
                      onChange={(e) => handleOptionChange(e, index)}
                    />
                    {option}
                  </label>
                ))}
              </div>
            ))}
            <button id="button1" type="button" onClick={checkAnswers}>Tekshirish</button>
          </form>
        )}
      </div>
    </div>
  );
}

export default TestPage;
