import React from 'react';
import HTMLRenderer from 'react-html-renderer';
import { useSelector } from 'react-redux';

function AnnouncmentView() {
  const data = useSelector((state) => state.course.contentData);
  return (
    <main className="announcment-conatiner">
      <div className="model-header" style={{ marginBottom: '3.2rem' }}>
        <h2 className="quiz-name">{data.title}</h2>
      </div>
      <div className="announcment-layout">
        <HTMLRenderer html={data.description} />
      </div>
    </main>
  );
}

export default AnnouncmentView;
