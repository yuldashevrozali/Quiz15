import React, { useState } from "react";
import "./Pages.css";

function TestPage() {
  // Savollar ro'yxati va to'g'ri javoblar
  const questions = [
    {
      question: "2 + 2 = ?",
      options: ["3", "4", "5", "6"],
      correctAnswer: "4",
    },
    {
      question: "5 * 3 = ?",
      options: ["15", "10", "8", "20"],
      correctAnswer: "15",
    },
    {
      question: "10 - 4 = ?",
      options: ["6", "7", "5", "8"],
      correctAnswer: "6",
    },
    {
      question: "12 ÷ 4 = ?",
      options: ["3", "4", "5", "2"],
      correctAnswer: "3",
    },
    {
      question: "9 + 6 = ?",
      options: ["14", "13", "15", "16"],
      correctAnswer: "15",
    },
    {
      question: "7 * 8 = ?",
      options: ["56", "64", "49", "58"],
      correctAnswer: "56",
    },
    {
      question: "16 ÷ 4 = ?",
      options: ["4", "6", "3", "5"],
      correctAnswer: "4",
    },
    {
      question: "3 + 9 = ?",
      options: ["11", "12", "13", "10"],
      correctAnswer: "12",
    },
    {
      question: "18 - 7 = ?",
      options: ["10", "12", "11", "13"],
      correctAnswer: "11",
    },
    {
      question: "6 * 6 = ?",
      options: ["36", "30", "42", "40"],
      correctAnswer: "36",
    },
  ];

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
          <button id="button1" onClick={checkAnswers}>Tekshirish</button>
        </form>
        
        {result && <p className="result">{result}</p>}
      </div>
    </div>
  );
}

export default TestPage;
