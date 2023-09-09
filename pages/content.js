import AnnouncmentView from '@/components/ContentLayout/AnnouncmentView';
import ContentLayout from '@/components/ContentLayout/ContentLayout';
import PdfViewer from '@/components/ContentLayout/PdfViewer';
import Quiz from '@/components/ContentLayout/Quiz';
import QuizModel from '@/components/ContentLayout/QuizModel';
import Reactplayer from '@/components/ContentLayout/Reactplayer';
import Footer from '@/components/_App/Footer';
import Navbar from '@/components/_App/Navbar';
import React, { useEffect, useState } from 'react';
import authentication from '@/services/authentication';
import { useDispatch, useSelector } from 'react-redux';
import {
  setChapterId,
  setContentType,
  setChapterData,
  setContentData,
} from '@/store/courseSlice';
import AwardPopup from '@/components/_App/AwardPopup';

function content() {
  const dispatch = useDispatch();
  const courseId = useSelector((state) => state.course.activeCourseId);
  const contenType = useSelector((state) => state.course.contenType);
  const courseName = useSelector((state) => state.course.activeCourseName);
  const [quizStart, setQuizStart] = useState(false);
  const [quizMarks, setquizMarks] = useState('');
  const [awardPoper, setAwardPoper] = useState(false);
  const [quizPercentage, setQuizPercentage] = useState(null);
  const awardRecieved = () => {
    setAwardPoper(true);
  };
  useEffect(() => {
    authentication
      .getCourseChaptersContent(courseId)
      .then((response) => {
        dispatch(setChapterData(response.data));
        dispatch(setContentData(response.data[0].content[0]));
        dispatch(setChapterId(response.data[0].content[0].id));
        dispatch(setContentType(response.data[0].content[0].type));
      })
      .catch((e) => {
        // alert(e)
      });
  }, []);

  return (
    <div>
      <header>
        <Navbar />
      </header>
      {awardPoper === true ? (
        <AwardPopup
          state={{
            poper: [awardPoper, setAwardPoper],
          }}
        />
      ) : null}
      <main className="lms-main container">
        <div className="course-header">
          <h2 className="course-heading">{courseName}</h2>
          <a className="btn btn--full">Enroll</a>
        </div>
        <div className="course-activity grid">
          <div className="course-activity-layout">
            {contenType === 'video' ? (
              <Reactplayer onComplete={awardRecieved} />
            ) : null}
            {contenType === 'QUIZ' && quizStart ? (
              <Quiz
                onComplete={awardRecieved}
                state={{
                  quizStart: [quizStart, setQuizStart],
                  quizMarks: [quizMarks, setquizMarks],
                }}
              />
            ) : null}
            {contenType === 'QUIZ' && !quizStart ? (
              <QuizModel
                state={{
                  quizStart: [quizStart, setQuizStart],
                  quizMarks: [quizMarks, setquizMarks],
                }}
              />
            ) : null}
            {contenType === 'other' ? <PdfViewer /> : null}
            {contenType === 'ANNOUNCEMENT' ? <AnnouncmentView /> : null}
          </div>
          <aside className="course-content ">
            <div className="content-header">
              <h3 className="heading-heading">Chapters</h3>
              <p className="header-time">
                <ion-icon class="timer-icon" name="time-outline"></ion-icon>{' '}
                32min
              </p>
            </div>
            <div className="content-list">
              <ContentLayout
                state={{
                  quizMarks: [quizMarks, setquizMarks],
                }}
              />
            </div>
          </aside>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default content;
