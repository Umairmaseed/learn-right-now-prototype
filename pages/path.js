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
            <div style={{ textAlign: 'center' }}>
              <img src="/treasure.png" className="treasure-img" />
            </div>
          </div>
          <div className="treasure-text-box">
            <h2 className="treasure-heading">
              Master Text Editing in Graphic Design
            </h2>
            <p className="treasure-description">
              Lorem ipsum, or lipsum as it is sometimes known, is dummy text
              used in laying out print, graphic or web designs. The passage is
              attributed to an unknown Lorem ipsum, or lipsum as it is sometimes
              known, is dummy text used in laying out print, graphic or web
              designs. The passage is attributed to an unknown Lorem ipsum, or
              lipsum as it is sometimes known, is dummy text used in laying out
              print, graphic or web designs. The passage is attributed to an
              unknown
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
