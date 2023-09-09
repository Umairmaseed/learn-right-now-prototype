import React from 'react';

function Footer() {
  return (
    <footer class="footer">
      <div class="container grid grid--footer">
        <div class="logo-col">
          <a href="#" class="footer-logo">
            <img
              src="/Logo-normal.png"
              alt="Skip- by LRN"
              class="logo"
              style={{ height: '3.2rem' }}
            />
          </a>
          <ul class="social-links">
            <li>
              <a class="footer-link" href="#">
                <ion-icon class="social-icon" name="logo-instagram"></ion-icon>
              </a>
            </li>
            <li>
              <a class="footer-link" href="#">
                <ion-icon class="social-icon" name="logo-facebook"></ion-icon>
              </a>
            </li>
            <li>
              <a class="footer-link" href="#">
                <ion-icon class="social-icon" name="logo-twitter"></ion-icon>
              </a>
            </li>
          </ul>
          <p class="copyright">
            Copyright &copy; <span class="year"> 2023 </span> by Learn Right
            Now, Ltd .All rights reserved.
          </p>
        </div>
        <div class="address-col">
          <p class="footer-heading">Contact Us</p>
          <address class="contacts">
            <p class="address">H12, RIC Building, 2nd Floor, Islamabad</p>
            <a class="footer-link" href="tel:415-201-6370">
              0313-8865868
            </a>
            <br />
            <a class="footer-link" href="mailto:hello@omnifood.com">
              info@lrn.com
            </a>
          </address>
        </div>
        <nav class="nav-col">
          <p class="footer-heading">Account</p>
          <ul class="footer-nav">
            <li>
              <a class="footer-link" href="#">
                {' '}
                Create account
              </a>
            </li>
            <li>
              <a class="footer-link" href="#">
                Sign in
              </a>
            </li>
            <li>
              <a class="footer-link" href="#">
                iOS app
              </a>
            </li>
            <li>
              <a class="footer-link" href="#">
                Android app
              </a>
            </li>
          </ul>
        </nav>
        <nav class="nav-col">
          <p class="footer-heading">Company</p>
          <ul class="footer-nav">
            <li>
              <a class="footer-link" href="#">
                {' '}
                About Skip
              </a>
            </li>
            <li>
              <a class="footer-link" href="#">
                For Business
              </a>
            </li>
            <li>
              <a class="footer-link" href="#">
                Our Team
              </a>
            </li>
            <li>
              <a class="footer-link" href="#">
                Services
              </a>
            </li>
          </ul>
        </nav>
        <nav class="nav-col">
          <p class="footer-heading">Resources</p>
          <ul class="footer-nav">
            <li>
              <a class="footer-link" href="#">
                {' '}
                directory
              </a>
            </li>
            <li>
              <a class="footer-link" href="#">
                Help center
              </a>
            </li>
            <li>
              <a class="footer-link" href="#">
                Privacy & terms
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
