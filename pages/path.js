import Navbar from '@/components/_App/Navbar';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Router from 'next/router';
import { setCourseId, setCourseName } from '@/store/courseSlice';

function path() {
  const [map, setMap] = useState(false);
  const [number, setNumber] = useState(3);
  const dispatch = useDispatch();
  const courseRedirect = () => {
    dispatch(setCourseId('4bfbd53f-61be-4c8c-8720-cab46c2ba55a'));
    dispatch(setCourseName('Graphic Design with Canva'));
    Router.push('/content');
  };
  const changeNumber = (i) => {
    setNumber(i);
  };
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        {map === true ? (
          <div className="treasure-container">
            <div className="treasure-img-box">
              <div className="treasure-images">
                <img src="/treasure.png" className="treasure-img" />
                <img
                  src="user3.jpg"
                  className="user-treaser"
                  style={{ borderRadius: '50%' }}
                  onClick={() => changeNumber(3)}
                />
                <img src="/verified.gif" className="verified1" />
                <img src="/verified.gif" className="verified2" />
                <img
                  src="/four.png"
                  className="level4"
                  onClick={() => changeNumber(4)}
                />
                <img
                  src="/five.png"
                  className="level5"
                  onClick={() => changeNumber(5)}
                />
                <img
                  src="/six.png"
                  className="level6"
                  onClick={() => changeNumber(6)}
                />
              </div>
            </div>
            <div className="treasure-text-box">
              <h2 className="treasure-heading">
                {number === 3 ? 'Master Text Editing in Graphic Design' : null}
                {number === 4 ? 'Color Theory & why is it important' : null}
                {number === 5 ? 'Create Social Media Posts with Canva' : null}
                {number === 6 ? 'Canva Advanced and Next Steps' : null}
              </h2>
              <p className="treasure-description">
                {number === 3
                  ? `Learn the art of text editing in Canva and unlock the power of
                typography in your designs. Understand how fonts, sizes, and
                styles impact visual communication, and gain the skills to
                create compelling and professional text elements in your
                graphics.`
                  : null}
                {number === 4
                  ? `Dive into the world of color theory and discover its crucial role in graphic design. Explore the psychology of colors, their meanings, and how to create harmonious color schemes in Canva. Gain insights into why color choices can make or break your designs.`
                  : null}
                {number === 5
                  ? `Explore the essential techniques for crafting eye-catching social media posts using Canva. From selecting the right dimensions for different platforms to incorporating engaging visuals and text, this topic will empower you to create scroll-stopping content for your online presence.`
                  : null}
                {number === 6
                  ? `Elevate your Canva skills with advanced features and techniques. Explore in-depth design tools, animation, collaboration options, and best practices for professional-level creations. This topic will guide you towards the next steps in your Canva journey, unlocking endless creative possibilities. `
                  : null}
              </p>
              <a
                className="main-nav-link nav-cta "
                href="#"
                onClick={() => courseRedirect()}
              >
                Continue
              </a>
            </div>
          </div>
        ) : (
          <div className="treasure-initiator">
            <label for="dropdown">I Want to Become a</label>
            <select id="dropdownPath">
              <option value="option1">Web Developer</option>
              <option value="option2">Graphic Designer</option>
              <option value="option3">Video Editor</option>
              <option value="option3">Data Scientist</option>
              <option value="option3">Doctor</option>
              <option value="option3">Mechanical Engineer </option>
              <option value="option3">Astronaut </option>
              <option value="option3">Marketing Expert</option>
            </select>
            <a
              className="main-nav-link nav-cta "
              href="#"
              onClick={() => setMap(true)}
            >
              Start
            </a>
          </div>
        )}
      </main>
    </>
  );
}

export default path;
