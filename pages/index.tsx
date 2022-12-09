import type { NextPage } from 'next';
import { Slide } from 'react-awesome-reveal';

import ImageNext from '../components/base/Image';
import Reveal from '../components/base/Reveal';

const Home: NextPage = () => {
  return (
    <div className="layout">
      <div className="safe-layout">
        <Reveal>
          <div className="logo-animated">
            <ImageNext src="/images/padded.gif" alt="" layout="fill" objectFit="contain" />
          </div>
        </Reveal>

        <div className="wrapper">
          <Slide direction="down" duration={1000} className="hero-text-reveal">
            <h1 className="hero-text">BLINDHARP STUDIO</h1>
          </Slide>
        </div>

        <div className="wrapper">
          <Slide direction="down" duration={1000} delay={500} className="hero-text-reveal">
            <div className="footer">
              <div className="divider"></div>
              <p className="footer-text"> Game in Development </p>
              <div className="divider"></div>
            </div>
          </Slide>
        </div>

        <div className="wrapper">
          <Slide direction="down" duration={1000} delay={1000} className="hero-text-reveal">
            <div className="footer-links">
              <div className="button button-primary">
                <p>Instagram</p>
                <a
                  href="https://www.instagram.com/blindharp.gg/"
                  target="_blank"
                  rel="noreferrer"
                  className="button-link"
                ></a>
              </div>
              <div className="button button-secondary">
                <p>Contact Us</p>
                <a href="mailto:blindharpstudio@gmail.com" target="_blank" rel="noreferrer" className="button-link"></a>
              </div>
            </div>
          </Slide>
        </div>
      </div>
    </div>
  );
};

export default Home;
