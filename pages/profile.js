import Footer from '@/components/_App/Footer';
import Navbar from '@/components/_App/Navbar';
import React from 'react';
import CountUp from 'react-countup';
import ProgressBar from '@ramonak/react-progress-bar';

function profile() {
  return (
    <div>
      <Navbar />
      <div className="profile-conatiner">
        <aside className="profile-aside">
          <p className="profile-name">Moiz Ul Haq</p>
          <p className="roll-no">
            Roll No : <span></span>87421963
          </p>
          <img src="user3.jpg" className="profile-image" />
          <p className="profile-text">
            School Name :<span> Beaconhouse School</span>
          </p>
          <p className="profile-text">
            Branch : <span>Margallah Campus</span>
          </p>
          <p className="profile-text">
            Grade : <span>Class 6 </span>
          </p>
          <p className="profile-text">
            Level : <span>Middle School</span>
          </p>
          <p className="profile-text">
            Email : <span>moiz@gmail.com</span>
          </p>
          <p className="profile-text">
            Contact No : <span> 03138865868 </span>
          </p>
        </aside>
        <main className="profile-main">
          <div className="profile-course-container">
            <h2 className="profile-course-heading">List of Enrolled Courses</h2>
            <div className="profile-course-list">
              <div className="profile-course-item">
                <p className="course-item-name">Coding with Scratch</p>
                <ProgressBar
                  bgColor="#7614a9"
                  baseBgColor="#c2c2c2"
                  height="8px"
                  className="wrapper"
                  completed={100}
                  isLabelVisible={false}
                />
                <span>
                  <CountUp end={100} duration={3} />%
                </span>
              </div>
              <div className="profile-course-item">
                <p className="course-item-name">German A1</p>
                <ProgressBar
                  bgColor="#7614a9"
                  baseBgColor="#c2c2c2"
                  height="8px"
                  className="wrapper"
                  completed={100}
                  isLabelVisible={false}
                />
                <span>
                  <CountUp end={100} duration={3} />%
                </span>
              </div>
              <div className="profile-course-item">
                <p className="course-item-name">IQ</p>
                <ProgressBar
                  bgColor="#7614a9"
                  baseBgColor="#c2c2c2"
                  height="8px"
                  className="wrapper"
                  completed={100}
                  isLabelVisible={false}
                />
                <span>
                  <CountUp end={100} duration={3} />%
                </span>
              </div>
              <div className="profile-course-item">
                <p className="course-item-name">MS Word</p>
                <ProgressBar
                  bgColor="#7614a9"
                  baseBgColor="#c2c2c2"
                  height="8px"
                  className="wrapper"
                  completed={100}
                  isLabelVisible={false}
                />
                <span>
                  <CountUp end={100} duration={3} />%
                </span>
              </div>
              <div className="profile-course-item">
                <p className="course-item-name">Guitar 101</p>
                <ProgressBar
                  bgColor="#7614a9"
                  baseBgColor="#c2c2c2"
                  height="8px"
                  className="wrapper"
                  completed={100}
                  isLabelVisible={false}
                />
                <span>
                  <CountUp end={100} duration={3} />%
                </span>
              </div>
              <div className="profile-course-item">
                <p className="course-item-name">What is Freelancing?</p>
                <ProgressBar
                  bgColor="#7614a9"
                  baseBgColor="#c2c2c2"
                  height="8px"
                  className="wrapper"
                  completed={87}
                  isLabelVisible={false}
                />
                <span>
                  <CountUp end={87} duration={3} />%
                </span>
              </div>
              <div className="profile-course-item">
                <p className="course-item-name">Harvard CS50</p>
                <ProgressBar
                  bgColor="#7614a9"
                  baseBgColor="#c2c2c2"
                  height="8px"
                  className="wrapper"
                  completed={15}
                  isLabelVisible={false}
                />
                <span>
                  <CountUp end={15} duration={3} />%
                </span>
              </div>
              <div className="profile-course-item">
                <p className="course-item-name">Think like a coder</p>
                <ProgressBar
                  bgColor="#7614a9"
                  baseBgColor="#c2c2c2"
                  height="8px"
                  className="wrapper"
                  completed={62}
                  isLabelVisible={false}
                />
                <span>
                  <CountUp end={62} duration={3} />%
                </span>
              </div>

              <div className="profile-course-item">
                <p className="course-item-name">Graphic Design</p>
                <ProgressBar
                  bgColor="#7614a9"
                  baseBgColor="#c2c2c2"
                  height="8px"
                  className="wrapper"
                  completed={43}
                  isLabelVisible={false}
                />
                <span>
                  <CountUp end={43} duration={3} />%
                </span>
              </div>
            </div>
          </div>
          <div className="ranking-container">
            <div className="rankings">
              <span>
                <CountUp end={42250} duration={3} />
              </span>
              <h3 className="ranking-name">Score</h3>
            </div>
            <div className="rankings">
              <span>
                <CountUp end={3} duration={3} />
                rd
              </span>
              <h3 className="ranking-name">Branch Position</h3>
            </div>
            <div className="rankings">
              <span>
                <CountUp end={16} duration={3} />
                th
              </span>
              <h3 className="ranking-name">School Position</h3>
            </div>
            <div className="rankings">
              <span>
                <CountUp end={31} duration={3} />
                st
              </span>
              <h3 className="ranking-name">Platform Position</h3>
            </div>
          </div>
        </main>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default profile;
