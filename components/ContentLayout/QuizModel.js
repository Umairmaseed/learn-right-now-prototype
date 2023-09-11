import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import authentication from '@/services/authentication';
import { setQuizQuestion } from '@/store/courseSlice';

function QuizModel(props) {
  const dispatch = useDispatch();
  const {
    quizStart: [quizStart, setQuizStart],
    quizMarks: [quizMarks, setquizMarks],
  } = { ...(props.state || {}) };
  const quizData = useSelector((state) => state.course.contentData);
  const contentId = useSelector((state) => state.course.chapterid);

  const startButton = () => {
    authentication.getQuizData(contentId).then((res) => {
      dispatch(setQuizQuestion(res.data[0].questions));
      setQuizStart(true);
    });
  };
  return (
    <main className="model-container">
      <div className="model-header">
        <h2 className="quiz-name">{quizData.title}</h2>
      </div>
      <div className="table-body">
        <h4 className="table-heading"> Total Questions</h4>
        <span className="table-data">{quizData.weightage}</span>
        <h4 className="table-heading" style={{ backgroundColor: '#fff' }}>
          {quizMarks !== '' ? 'Obtain Marks' : 'Total marks'}
        </h4>
        <span className="table-data" style={{ backgroundColor: '#fff' }}>
          {quizMarks !== '' ? quizMarks : quizData.weightage}
        </span>
        <h4 className="table-heading">
          {quizMarks !== '' ? 'Points Recieved' : 'Points'}
        </h4>
        <span className="table-data">
          {quizMarks !== '' ? quizMarks * 1000 : quizData.weightage * 1000}
        </span>
      </div>
      {quizMarks === '' ? (
        <div className="decision-button">
          {/* <button className="btn-cancle">Cancle</button> */}
          <button className="btn-start" onClick={startButton}>
            Start
          </button>
        </div>
      ) : null}
    </main>
  );
}

export default QuizModel;
