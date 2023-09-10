import React from 'react';
import ReactPlayer from 'react-player';

function CategoriesCard() {
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
          <label for="dropdown">Interest:</label>
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
              height={'58vh'}
              controls={false}
              playing={true}
              loop={true}
              muted={true}
              url={'https://www.youtube.com/watch?v=DgzxhDHjzms'}
            />
          </div>
          <div className="home-cat-thumbnail">
            <img src="/thumbnail1.jpg" className="home-cat-card" />
            <img src="/thumbnail1.jpg" className="home-cat-card" />
            <img src="/thumbnail1.jpg" className="home-cat-card" />
            <img src="/thumbnail1.jpg" className="home-cat-card" />
          </div>
        </div>
      </div>

      <div className="home-category ">
        <div className="home-cat-head">
          <h2 className="home-cat-heading">
            Find your passion and{' '}
            <span style={{ color: '#2c81f6' }}>UPSKILL!</span>
          </h2>
          <a className="main-nav-link nav-cta " href="/general-knowledge">
            Explore
          </a>
        </div>
        <div className="category-video-thumbnail left">
          <div className="home-cat-thumbnail">
            <img src="/thumbnail1.jpg" className="home-cat-card" />
            <img src="/thumbnail1.jpg" className="home-cat-card" />
            <img src="/thumbnail1.jpg" className="home-cat-card" />
            <img src="/thumbnail1.jpg" className="home-cat-card" />
          </div>
          <div className="video-container">
            <ReactPlayer
              width={'100%'}
              height={'58vh'}
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
          <a className="main-nav-link nav-cta " href="/general-knowledge">
            Explore
          </a>
        </div>
        <div className="category-video-thumbnail left">
          <div className="video-container">
            <ReactPlayer
              width={'100%'}
              height={'58vh'}
              controls={false}
              playing={true}
              loop={true}
              muted={true}
              url={
                'https://www.youtube.com/watch?v=RuGmc662HDg&list=PLF9mJC4RrjIhS4MMm0x72-qWEn1LRvPuW'
              }
            />
          </div>
          <div className="home-cat-thumbnail">
            <img src="/thumbnail1.jpg" className="home-cat-card" />
            <img src="/thumbnail1.jpg" className="home-cat-card" />
            <img src="/thumbnail1.jpg" className="home-cat-card" />
            <img src="/thumbnail1.jpg" className="home-cat-card" />
          </div>
        </div>
      </div>

      <div className="home-category ">
        <div className="home-cat-head">
          <h2 className="home-cat-heading">
            <span style={{ color: '#08bc7f' }}> Explore careers</span>, choose
            your calling!
          </h2>
          <a className="main-nav-link nav-cta " href="/general-knowledge">
            Explore
          </a>
        </div>
        <div className="category-video-thumbnail left">
          <div className="home-cat-thumbnail">
            <img src="/thumbnail1.jpg" className="home-cat-card" />
            <img src="/thumbnail1.jpg" className="home-cat-card" />
            <img src="/thumbnail1.jpg" className="home-cat-card" />
            <img src="/thumbnail1.jpg" className="home-cat-card" />
          </div>
          <div className="video-container">
            <ReactPlayer
              width={'100%'}
              height={'58vh'}
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
          <a className="main-nav-link nav-cta " href="/general-knowledge">
            Explore
          </a>
        </div>
        <div className="category-video-thumbnail left">
          <div className="video-container">
            <ReactPlayer
              width={'100%'}
              height={'58vh'}
              controls={false}
              playing={true}
              loop={true}
              muted={true}
              url={'https://www.youtube.com/watch?v=Ay8pBNiAvs8'}
            />
          </div>
          <div className="home-cat-thumbnail">
            <img src="/thumbnail1.jpg" className="home-cat-card" />
            <img src="/thumbnail1.jpg" className="home-cat-card" />
            <img src="/thumbnail1.jpg" className="home-cat-card" />
            <img src="/thumbnail1.jpg" className="home-cat-card" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoriesCard;
