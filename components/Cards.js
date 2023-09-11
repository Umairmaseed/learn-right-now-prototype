import React from 'react';
import Router from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { setCourseId, setCourseName } from '@/store/courseSlice';

function Cards(props) {
  const dispatch = useDispatch();
  const { data, category } = props;
  const courseRedirect = () => {
    dispatch(setCourseId(data.link));
    dispatch(setCourseName(data.title));
    Router.push('/content');
  };
  return (
    <div className="card-container">
      {/* <div className="card">
        <div className="card-front">
          <img className="card-img" src="eating.jpg" />
          <h2 className="heading-tertiary">{data.title}</h2>
        </div>
        <div className="card-back">
          <span className="catergory-tag"></span>
          <h2 className="heading-tertiary">{data.title}</h2>
          <p className="card-description">{data.discription}</p>
          <a className=" btn--full btn">Explore</a>
        </div>
      </div> */}
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
          <div className="secondary-info">
            <span className="sub-logo">
              <ion-icon class="wallet" name="wallet-outline"></ion-icon>{' '}
              <p> 149 </p>
            </span>
            <span className="sub-logo">
              <ion-icon
                class="time-logo-outline"
                name="time-outline"
              ></ion-icon>
              <p>{data.time}</p>
            </span>
          </div>

          <a onClick={courseRedirect} className=" card-btn btn--full btn">
            Start Now
          </a>
        </div>
      </div>
    </div>
  );
}

export default Cards;
