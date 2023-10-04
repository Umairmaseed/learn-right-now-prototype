import React from 'react';

function Hero() {
  return (
    <div>
      <section class="section-hero">
        <div class="hero">
          <div class="hero-text-box" style={{ zIndex: '1' }}>
            <h1 class="heading-primary" style={{ color: '#fff' }}>
              Career Success Platform
            </h1>
            <p class="hero-description">
              A plug-n-play <span> career-success platform </span> for K-12
              students, to help schools{' '}
              <span> adopt Education 4.0 overnight</span>.
            </p>
            <a href="#cta" class="btn btn--full margin-right-sm">
              Explore
            </a>

            {/* <a href="#how" class="btn btn--outline">
              Learn more &darr;
            </a> */}
          </div>
          <div class="hero-img-box">
            <div className="rocket-img">
              <img src="/rocket.png" alt="Rocket and student" />
            </div>
            <div className="blue-planet">
              <img src="/Blue Planet.png" />
            </div>
            <div className="orange-planet">
              <img src="/Orange Planet.png" />
            </div>
          </div>
        </div>
        <div class="St">
          <img src="/FS 1.png" />
        </div>
      </section>
    </div>
  );
}

export default Hero;
