import React, { useState } from "react";
import "./Quiz.css";
import Answer from "./Answer";
function Quiz() {
  const [answered, setAnswered] = useState(false);
  const [point, setPoint] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [isRight, setRight] = useState(false);
  const [choice, setChoice] = useState(null);
  const TOTAL_QUESTIONS = 5;
  const questions = [
    {
      id: 1,
      text: "Who is USA President?",
      answer: ["Trump", "Obama", "Joe Biden", "Osawa"],
      key: 2,
    },
    {
      id: 2,
      text: "What is the capital of France?",
      answer: ["London", "Berlin", "Paris", "Rome"],
      key: 2,
    },
    {
      id: 3,
      text: "Which planet is known as the Red Planet?",
      answer: ["Earth", "Mars", "Venus", "Jupiter"],
      key: 1,
    },
    {
      id: 4,
      text: "Who wrote 'Hamlet'?",
      answer: ["Charles Dickens", "William Shakespeare", "Mark Twain", "Homer"],
      key: 1,
    },
    {
      id: 5,
      text: "What is the largest ocean on Earth?",
      answer: ["Atlantic", "Indian", "Pacific", "Arctic"],
      key: 2,
    },
  ];
  const handleAnswer = (index, que) => {
    if (answered || isFinished) return;
    if (index === que.key) {
      setPoint(point + 1);
      setRight(true);
    } else {
      setRight(false);
    }
    setAnswered(true);
    setChoice(index);
  };
  const handleNext = () => {
    if (!answered) return;
    if (questionIndex >= TOTAL_QUESTIONS - 1) {
      setIsFinished(true);
    } else {
      setQuestionIndex(questionIndex + 1);
    }
    setAnswered(false);
    setRight(false);
    setChoice(null);
  };
  const handleReset = () => {
    setAnswered(false);
    setIsFinished(false);
    setQuestionIndex(0);
    setPoint(0);
    setRight(false);
    setChoice(null);
  };
  return (
    <div className="App">
      <h1>Quiz App</h1>
      {!isFinished ? (
        <>
          <p>
            Question {questions[questionIndex].id}:{" "}
            <span>{questions[questionIndex].text}</span>
          </p>
          <div className="Answer-sec">
            {questions[questionIndex].answer.map((ans, idx) => (
              <Answer
                key={idx}
                value={ans}
                handleClick={() => handleAnswer(idx, questions[questionIndex])}
                className={
                  answered
                    ? isRight
                      ? idx === choice
                        ? "right"
                        : ""
                      : idx === choice
                      ? "wrong"
                      : idx === questions[questionIndex].key
                      ? "right"
                      : ""
                    : ""
                }
              />
            ))}
          </div>
          <button onClick={handleNext}>Next</button>
          <div className="Point-sec">
            Point: {point}/{TOTAL_QUESTIONS}
          </div>
        </>
      ) : (
        <>
          <h2>
            Quiz Finished! Your score is {point}/{TOTAL_QUESTIONS}
          </h2>
          <button onClick={handleReset}>Restart Quiz</button>
        </>
      )}
    </div>
  );
}

export default Quiz;
