import Footer from '@/components/_App/Footer';
import Navbar from '@/components/_App/Navbar';
import React from 'react';

function path() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <div className="treasure-container">
          <div className="treasure-img-box">
            <div className="treasure-images">
              <img src="/treasure.png" className="treasure-img" />
              <img
                src="user3.jpg"
                className="user-treaser"
                style={{ borderRadius: '50%' }}
              />
              <img src="/verified.gif" className="verified1" />
              <img src="/verified.gif" className="verified2" />
              <img src="/four.png" className="level4" />
              <img src="/five.png" className="level5" />
              <img src="/six.png" className="level6" />
            </div>
          </div>
          <div className="treasure-text-box">
            <h2 className="treasure-heading">
              Master Text Editing in Graphic Design
            </h2>
            <p className="treasure-description">
              Learn the art of text editing in Canva and unlock the power of
              typography in your designs. Understand how fonts, sizes, and
              styles impact visual communication, and gain the skills to create
              compelling and professional text elements in your graphics.
            </p>
            <a className="main-nav-link nav-cta " href="/learning">
              Continue
            </a>
          </div>
        </div>
        {/* <Footer /> */}
      </main>
    </>
  );
}

export default path;
