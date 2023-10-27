import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';

function CategoriesCard() {
  const [isSmallScreen, setIsSmallScreen] = useState(
    typeof window !== 'undefined' && window.innerWidth < 450
  );

  const updateMedia = () => {
    setIsSmallScreen(typeof window !== 'undefined' && window.innerWidth < 450);
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', updateMedia);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', updateMedia);
      }
    };
  }, []);

  return (
    <div className="home-categories-section">
      <h2 className="home-cat-main-heading">
        Start Learning from a Library of <span>5000+ videos</span>
      </h2>

      <div class="search-input">
        <input type="text" id="search" placeholder="Search..." />
        <div>
          <label for="dropdown">Grade Level:</label>
          <select id="dropdown">
            <option value="option1">Primary School</option>
            <option value="option2">Middle School</option>
            <option value="option3">High School</option>
          </select>
        </div>
        <div>
          <label for="dropdown">Subject Interest :</label>
          <select id="dropdown">
            <option value="option1">Programming</option>
            <option value="option2">Design</option>
            <option value="option3">UI/UX</option>
            <option value="option3">Marketing</option>
            <option value="option3">Data Science</option>
            <option value="option3">Medical</option>
            <option value="option3">Engineering </option>
            <option value="option3">Finance</option>
          </select>
        </div>
        <a className="main-nav-link nav-cta " href="/general-knowledge">
          Filter
        </a>
      </div>

      <div className="home-category ">
        <div className="home-cat-head">
          <h2 className="home-cat-heading">
            Boost IQ,{' '}
            <span style={{ color: '#63118f' }}> Expand Knowledge</span>: Unleash
            Your Brilliance!
          </h2>
          <a className="main-nav-link nav-cta " href="/general-knowledge">
            Explore
          </a>
        </div>
        <div className="category-video-thumbnail left">
          <div className="video-container">
            <ReactPlayer
              width={'100%'}
              height={!isSmallScreen ? '58vh' : null}
              controls={false}
              playing={true}
              loop={true}
              muted={true}
              url={'https://www.youtube.com/watch?v=DgzxhDHjzms'}
            />
          </div>
          <div className="home-cat-thumbnail">
            <img
              src="/General KnowledgeIQ/Black Holes explained – from Birth to Death.jpg"
              className="home-cat-card"
            />
            <img
              src="/General KnowledgeIQ/how car engine works.jpg"
              className="home-cat-card"
            />
            <img
              src="/General KnowledgeIQ/How does immune system.jpg"
              className="home-cat-card"
            />
            <img
              src="/General KnowledgeIQ/Measles Explained.jpg"
              className="home-cat-card"
            />
          </div>
        </div>
      </div>

      <div className="home-category ">
        <div className="home-cat-head">
          <h2 className="home-cat-heading">
            Find your passion and{' '}
            <span style={{ color: '#2c81f6' }}>UPSKILL!</span>
          </h2>
          <a className="main-nav-link nav-cta " href="/skill-up">
            Explore
          </a>
        </div>
        <div className="category-video-thumbnail left">
          <div className="home-cat-thumbnail">
            <img
              src="/skill-up/Video Editing with pro copy.png"
              className="home-cat-card"
            />
            <img
              src="/skill-up/Think like a coder copy.png"
              className="home-cat-card"
            />
            <img
              src="/skill-up/HOW TO TAKE ADVANTAGE CHATGPT copy.png"
              className="home-cat-card"
            />
            <img src="/skill-up/harvard cs50.jpg" className="home-cat-card" />
          </div>
          <div className="video-container">
            <ReactPlayer
              width={'100%'}
              height={!isSmallScreen ? '58vh' : null}
              controls={false}
              playing={true}
              loop={true}
              muted={true}
              url={
                ' https://www.youtube.com/watch?v=Rxoppbm-y8k&list=PLNIdDxctsZe9gVqjHHj_TxzHfElHszdst&ab_channel=learnawesometuts'
              }
            />
          </div>
        </div>
      </div>

      <div className="home-category ">
        <div className="home-cat-head">
          <h2 className="home-cat-heading">
            <span style={{ color: '#fd4954' }}>Learn a language</span>, become a
            Global Citizen!
          </h2>
          <a className="main-nav-link nav-cta " href="/language">
            Explore
          </a>
        </div>
        <div className="category-video-thumbnail left">
          <div className="video-container">
            <ReactPlayer
              width={'100%'}
              height={!isSmallScreen ? '58vh' : null}
              controls={false}
              playing={true}
              loop={true}
              muted={true}
              url={'https://youtu.be/0x96cXoeJRQ'}
            />
          </div>
          <div className="home-cat-thumbnail">
            <img src="/Language/German a1 copy.png" className="home-cat-card" />
            <img src="/Language/German A2.png" className="home-cat-card" />
            <img
              src="/Language/Mandarin HSK Level 1 copy.png"
              className="home-cat-card"
            />
            <img
              src="/Language/Mandarin HSK Level 2 copy.png"
              className="home-cat-card"
            />
          </div>
        </div>
      </div>

      <div className="home-category ">
        <div className="home-cat-head">
          <h2 className="home-cat-heading">
            <span style={{ color: '#08bc7f' }}> Explore careers</span>, choose
            your calling!
          </h2>
          <a className="main-nav-link nav-cta " href="/career-explore">
            Explore
          </a>
        </div>
        <div className="category-video-thumbnail left">
          <div className="home-cat-thumbnail">
            <img
              src="/Career Exploration/Accountants copy.png"
              className="home-cat-card"
            />
            <img
              src="/Career Exploration/Civil Services copy.png"
              className="home-cat-card"
            />
            <img
              src="/Career Exploration/Entrepreneurs copy.png"
              className="home-cat-card"
            />
            <img
              src="/Career Exploration/Teachers copy.png"
              className="home-cat-card"
            />
          </div>
          <div className="video-container">
            <ReactPlayer
              width={'100%'}
              height={!isSmallScreen ? '58vh' : null}
              controls={false}
              playing={true}
              loop={true}
              muted={true}
              url={'https://www.youtube.com/watch?v=qO3BYmRqw8A'}
            />
          </div>
        </div>
      </div>

      <div className="home-category ">
        <div className="home-cat-head">
          <h2 className="home-cat-heading">
            Need help with <span style={{ color: '#160c27' }}> Exam Prep?</span>{' '}
            We’ve got you!
          </h2>
          <a className="main-nav-link nav-cta " href="/exam-prep">
            Explore
          </a>
        </div>
        <div className="category-video-thumbnail left">
          <div className="video-container">
            <ReactPlayer
              width={'100%'}
              height={!isSmallScreen ? '58vh' : null}
              controls={false}
              playing={true}
              loop={true}
              muted={true}
              url={'https://www.youtube.com/watch?v=Ay8pBNiAvs8'}
            />
          </div>
          <div className="home-cat-thumbnail">
            <img src="/Exam Prep/ECAT copy.png" className="home-cat-card" />
            <img src="/Exam Prep/ETEA copy.png" className="home-cat-card" />
            <img src="/Exam Prep/NET copy.png" className="home-cat-card" />
            <img src="/Exam Prep/SAY copy.png" className="home-cat-card" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoriesCard;
