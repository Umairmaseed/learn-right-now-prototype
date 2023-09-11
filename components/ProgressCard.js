import React from 'react';
import Router from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { setCourseId, setCourseName } from '@/store/courseSlice';
import ProgressBar from '@ramonak/react-progress-bar';
import CountUp from 'react-countup';

function ProgressCard(props) {
  const dispatch = useDispatch();
  const { data, category } = props;
  const courseRedirect = () => {
    dispatch(setCourseId(data.link));
    dispatch(setCourseName(data.title));
    Router.push('/content');
  };
  return (
    <div className="card-container">
      <div className="card-secondary">
        <img className="card-secondary-img" src={data.img} alt="course image" />
        <div className="card-secondary-des">
          <div className="description-label">
            <span className="label">{category}</span>
            <p className="rating">
              <ion-icon class="star-logo" name="star"></ion-icon>
              {data.rating}
            </p>
          </div>

          <h3 className="card-name">{data.title}</h3>
          <div className="secondary-info-grid">
            <ProgressBar
              bgColor="#7614a9"
              baseBgColor="#c2c2c2"
              height="8px"
              className="wrapper"
              completed={data.complate}
              isLabelVisible={false}
            />
            <span className="rating" style={{ textAlign: 'center' }}>
              <CountUp end={data.complate} duration={3} />%
            </span>
          </div>

          <a onClick={courseRedirect} className=" card-btn btn--full btn">
            Continue
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProgressCard;
