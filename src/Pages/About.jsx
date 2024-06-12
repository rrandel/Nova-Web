import React from 'react';
import brainwave from '../assets/4-small.png';

const About = () => {
  const containerStyle = {
    maxWidth: '960px',
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: '0 16px',
  };

  const contentStyle = {
    marginTop: '16px',
    marginBottom: '16px',
    lineHeight: '1.6',
  };

  const headerStyle = {
    padding: '24px 0',
    textAlign: 'center',
    backgroundColor: '#2a2a2a',
  };

  const headerTextStyle = {
    fontSize: '2.5rem',
    color: '#fff',
  };

  const imageStyle = {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '100%',
    maxWidth: '960px',
    borderRadius: '8px',
  };

  const paragraphStyle = {
    marginBottom: '16px',
  };

  const headingStyle = {
    marginTop: '32px',
    marginBottom: '16px',
  };

  const listStyle = {
    marginBottom: '16px',
  };

  return (
    <article>
      <header style={headerStyle}>
        <h1 style={headerTextStyle}>About</h1>
      </header>
      <div style={containerStyle}>
        <img src="" alt="" style={imageStyle}/>
      </div>
      <div style={{ ...containerStyle, ...contentStyle }}>
        <p style={paragraphStyle}>
          Nova is an interactive 3D application development platform - otherwise known as a
          <em> game engine</em>
          . Nova was born in late 2018, and was started by Yan Chernikov.
          Now it is officially developed by 
          <em>Studio Cherno</em>
          , a company started by Yan in 2021.
          Studio Cherno staff as well as community volunteers work on Nova. 
          <a href="/posts/meet-the-team/">Learn more about the team here</a>
          .
        </p>
        <p style={paragraphStyle}>
          Studio Cherno have participated in several Ludum Dare game jams, using Nova to make games within 72 hours.
          <a href="https://studiocherno.itch.io">You can play our game jam games for free on itch.io</a>
          .
        </p>
        <h2 id="why-make-a-game-engine-how-did-the-project-start" style={headingStyle}>
          Why make a game engine? How did the project start?
        </h2>
        <p style={paragraphStyle}>Put simply: because we have a passion for building game engines.</p>
        <p style={paragraphStyle}>
          To expand a little more, Yan started the project of building a game engine for two reasons: passion and education.
          Throughout his childhood Yan was always fascinated with the technology behind games, and often enjoyed playing with/learning more
          about the technology itself, rather than the games. When Yan decided to pursue software engineering as a career,
          he knew that he wanted to build game engines. After working as a game engine software engineer at EA for 4.5 years,
          first on EA’s primary mobile engine called Osiris and then later Frostbite, Yan decided that he wanted to leave
          and build his own technology, teach others how to make game engines, and learn more about the topics he was interested in.
        </p>
        <p style={paragraphStyle}>
          Yan has also always had a passion for education and teaching others. He has hundreds of educational videos on his YouTube channel
          teaching C++, general software engineering, OpenGL and graphics programming, and much more. The Game Engine series was really the
          beginning of Nova - a video series teaching how to make a game engine from the beginning, where every line of code is explained
          and written on-video. Nova started as the subject of the Game Engine series, and has matured now into both a 2D and 3D Game Engine
          which extends far beyond the original video series.
        </p>
        <h2 id="whats-the-plan-for-the-future" style={headingStyle}>What’s the plan for the future?</h2>
        <p style={paragraphStyle}>
          We’ll be making some more serious announcements as life goes on, but put simply this is our plan:
        </p>
        <ul style={listStyle}>
          <li>Keep working on Nova for the unforeseeable future</li>
          <li>Release Nova for free so everyone can use it to make art and games, and ship them, for free</li>
          <li>Keep Nova’s source code and development repositories accessible by paying subscribers ($10 USD per month) so we can continue funding the project</li>
          <li>Develop and release commercial games using Nova</li>
        </ul>
        <h2 id="get-in-touch" style={headingStyle}>Get in touch</h2>
        <p style={paragraphStyle}>Email 
          <a href="mailto:business@thecherno.com">business@thecherno.com</a>
        </p>
      </div>
    </article>
  );
};

export default About;