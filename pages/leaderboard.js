import Navbar from '@/components/_App/Navbar';
import Sidebar from '@/components/_App/Sidebar';
import React from 'react';

function leaderboard() {
  return (
    <>
      <Navbar />
      <div className="leaderboard-container">
        {/* <Sidebar /> */}
        <section className="leaderboard">
          <div className="user">
            <img src="user3.jpg" />
            <h2 className="user-details">Welcome back, Moiz</h2>
          </div>
          <div className="top-leaderboard">
            <h3>Leaderboard</h3>
            <div className="students">
              <div className="top-students">
                <div className="student">
                  <img src="1st.png" className="badge" />
                  <img src="user6.jpg" />
                  <h4>Hammad</h4>
                </div>
                <h5> 42,250</h5>
              </div>
              <div className="top-students">
                <div className="student">
                  <img src="2nd.png" className="badge" />
                  <img src="user4.jpg" />
                  <h4>Khurram</h4>
                </div>
                <h5> 40,160</h5>
              </div>
              <div className="top-students">
                <div className="student">
                  <img src="3rd.png" className="badge" />
                  <img src="user1.jpg" />
                  <h4>Saad</h4>
                </div>
                <h5> 39,860</h5>
              </div>
            </div>
          </div>
          <div className="bottom-leaderboard">
            <div className="board-header">
              <h4>Student</h4>
              <h4>Points</h4>
            </div>
            <div className="board-list">
              <div className="list-name">
                <div className="list-name-initial">
                  <span>1</span>
                  <img src="user-icon2.jpg" />
                  <h4>Hammad Khan</h4>
                </div>
                <h4>42,250</h4>
              </div>
              <div className="list-name">
                <div className="list-name-initial">
                  <span>2</span>
                  <img src="user-icon2.jpg" />
                  <h4>Khurram Ahmed</h4>
                </div>
                <h4>40,160</h4>
              </div>
              <div className="list-name">
                <div className="list-name-initial">
                  <span>3</span>
                  <img src="user-icon2.jpg" />
                  <h4>Saad Shahid</h4>
                </div>
                <h4>39,860</h4>
              </div>
              <div className="list-name">
                <div className="list-name-initial">
                  <span>4</span>
                  <img src="user-icon2.jpg" />
                  <h4>Ali Khan</h4>
                </div>
                <h4>38,890</h4>
              </div>
              <div className="list-name">
                <div className="list-name-initial">
                  <span>5</span>
                  <img src="user-icon2.jpg" />
                  <h4>Mudasir Khan</h4>
                </div>
                <h4>38,220</h4>
              </div>
              <div className="list-name">
                <div className="list-name-initial">
                  <span>6</span>
                  <img src="user-icon2.jpg" />
                  <h4>Sana Ali</h4>
                </div>
                <h4>37,800</h4>
              </div>
              <div className="list-name">
                <div className="list-name-initial">
                  <span>7</span>
                  <img src="user-icon2.jpg" />
                  <h4>Fareeha Raza</h4>
                </div>
                <h4>37,190</h4>
              </div>
            </div>
          </div>
          <div className="prize-section">
            <div className="prize-header">
              <h1>Win exciting prizes!</h1>
            </div>
            <div className="prizes">
              <div className="prizes-card">
                <p style={{ color: '#f9d41b' }}>1st</p>
                <h2 className="prize-name">Scholarship</h2>
                <img src="scholarship.jpeg" />
              </div>
              <div className="prizes-card">
                <p style={{ color: '#e0bf18' }}>2nd</p>
                <h2 className="prize-name">Laptop</h2>
                <img src="macbook.jpeg" />
              </div>
              <div className="prizes-card">
                <p style={{ color: '#ae9413' }}>3rd</p>
                <h2 className="prize-name">Tablet</h2>
                <img src="ipad.jpg" />
              </div>
              <div className="prizes-card">
                <p style={{ color: '#957f10' }}>4th</p>
                <h2 className="prize-name">Phone</h2>
                <img src="iphone.jpeg" />
              </div>
            </div>
            <div className="rules">
              <h3 className="rules-header">Rules of the game:</h3>
              <ol>
                <li>Earn 50 points every day you log in to the platform.</li>
                <li>Earn 100 points on finishing every video</li>
                <li>
                  Earn 100 points for every correct answer in your quizzes.
                </li>
                <li>
                  Earn 500 for every correct answer in the weekly pop-up
                  quizzes!
                </li>
              </ol>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default leaderboard;
