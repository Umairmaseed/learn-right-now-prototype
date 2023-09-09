import authentication from '@/services/authentication';
import React, { useState } from 'react';
import Latex from 'react-latex-next';
import { useSelector, useDispatch } from 'react-redux';

function Quiz(props) {
  const [index, setIndex] = useState(0);
  const [answer, setAnswer] = useState([]);
  const questions = useSelector((state) => state.course.quizQuestion);
  const quizId = useSelector((state) => state.course.chapterid);
  const { question, choices, marks, image } = questions[index];
  const {
    quizStart: [quizStart, setQuizStart],
    quizMarks: [quizMarks, setquizMarks],
  } = { ...(props.state || {}) };
  const awardPoper = props.onComplete;
  const checkAnswer = (value, choices) => {
    var copyAnswer = answer;
    choices.map((id) => {
      if (copyAnswer.includes(id.id)) {
        var indexCopy = copyAnswer.indexOf(id.id);
        copyAnswer.splice(indexCopy, 1);
      }
    });
    copyAnswer.push(value);
    nextBtn();
  };
  const nextBtn = () => {
    if (index + 1 < questions.length) {
      setIndex(index + 1);
    }
  };
  const prevBtn = () => {
    if (index !== 0) {
      setIndex(index - 1);
    }
  };
  const quizSubmit = () => {
    authentication.quizSubmit(quizId, answer).then((res) => {
      setquizMarks(res.data.marks);
      setAnswer([]);
      setIndex(0);
      setQuizStart(false);
      awardPoper();
    });
  };
  return (
    <main className="quiz-container">
      <div className="quiz-question-box">
        <div className="question-info">
          <h4 className="question-number">Question {index + 1}</h4>
          <h4 className="question-marks">Marks : 1</h4>
        </div>
        <div className="question">
          <Latex>{question}</Latex>
        </div>
      </div>
      <div className="option-box">
        {choices.map((choice) => (
          <div
            style={
              answer.includes(choice.id)
                ? { backgroundColor: '#A81CF2', color: 'white' }
                : null
            }
            className="option-info"
            onClick={() => checkAnswer(choice.id, choices)}
          >
            <Latex>{choice.text}</Latex>
          </div>
        ))}
      </div>
      <div className="button-box">
        <button className=" pre-btn" onClick={prevBtn}>
          Back
        </button>
        <button className=" next-btn" onClick={nextBtn}>
          Next
        </button>
      </div>
      <div className="button-box" style={{ justifyContent: 'center' }}>
        <button className=" next-btn" onClick={quizSubmit}>
          Submit
        </button>
      </div>
    </main>
  );
}

export default Quiz;
