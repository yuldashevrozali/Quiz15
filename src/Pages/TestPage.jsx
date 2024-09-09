import React, { useState } from "react";
import "./Pages.css";
import questionsData from '../data/question.json'; // Import the JSON file

function TestPage() {
  // Use the imported questions data
  const questions = questionsData;

  // Javoblarni saqlash uchun state
  const [answers, setAnswers] = useState(Array(questions.length).fill(""));
  const [result, setResult] = useState(null);

  // Javob tanlanganda chaqiriladigan funksiya
  const handleOptionChange = (e, index) => {
    const updatedAnswers = [...answers];
    updatedAnswers[index] = e.target.value;
    setAnswers(updatedAnswers);
  };

  // Natijani tekshirish
  const checkAnswers = () => {
    // Check if all questions have been answered
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
  };
  

  return (
    <div className="test-page1">
      <h2>Matematika Testi</h2>
      <div className="test-page">
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
        
        {result && <p className="result">{result}</p>}
      </div>
    </div>
  );
}

export default TestPage;
