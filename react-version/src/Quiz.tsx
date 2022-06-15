import { responsiveProperty } from '@mui/material/styles/cssUtils';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

type Question = {
  question: string;
  answers: string[];
  correctIndex: number;
};

let getQuestions = async () => {
  return axios.get('./data.json').then((response) => {
    console.log(response);
    return response.data;
  });
};

export default function Quiz() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [questionIdx, setQuestionIdx] = useState(0);
  const [numCorrect, setNumCorrect] = useState(0);

  const checkQuestion = (idx: number, correct: number) => {
    console.log('answered: %d, correct was %d', idx, correct);
    if (idx === correct) {
      console.log('correct!');
      setNumCorrect(numCorrect + 1);
    }
    console.log(numCorrect);
    setQuestionIdx(questionIdx + 1);
  };

  useEffect(() => {
    getQuestions().then((res) => {
      console.log(res);
      setQuestions(res);
    });
  }, []);

  if (questionIdx == questions.length) {
    return (
      <div className="quiz-container">
        <div className="correct">You got {numCorrect} questions correct!</div>
      </div>
    );
  } else {
    return (
      <div className="quiz-container">
        <div className="question-container">
          <div className="question">{questions[questionIdx].question}</div>
          <ul className="answers">
            {questions[questionIdx].answers.map((answer, idx) => (
              <li
                key={idx}
                className="answer"
                onClick={(e) =>
                  checkQuestion(idx, questions[questionIdx].correctIndex)
                }
              >
                {answer}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
