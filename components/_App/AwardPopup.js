import React from 'react';
import { useSelector } from 'react-redux';

function AwardPopup(props) {
  const {
    poper: [awardPoper, setAwardPoper],
  } = { ...(props.state || {}) };
  const contenType = useSelector((state) => state.course.contenType);
  const quizMark = useSelector((state) => state.course.quizMarks);
  return (
    <main className="award-container">
      <div className="award-popup">
        <div className="award-background">
          <img src="award.gif" className="award-gif" />
        </div>
        <div className="award-header">
          <div className="award-text-area">
            <h2 className="award-text">congratulations!</h2>
            <img
              src="user3.jpg"
              className="logo"
              style={{ borderRadius: '50%', marginBottom: '1.6rem' }}
            />
            <h3 className="award-user-name">Moiz Ul Haq</h3>
            <p className="award-detail">
              You have earned{' '}
              <span>
                {contenType === 'QUIZ' ? quizMark * 1000 : '100'} points
              </span>
            </p>
            <a
              className="main-nav-link nav-cta "
              href="#"
              onClick={() => setAwardPoper(false)}
            >
              Close
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

export default AwardPopup;
