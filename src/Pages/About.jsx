import React from 'react';
import Astronaut from '../assets/Astronaut.png';

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
    <article className="dark:bg-darkMode-surfaceBackground dark:text-darkMode-mainText bg-lightMode-surfaceBackground text-lightMode-mainText">
      <header style={headerStyle}>
        <h1 style={headerTextStyle} className="font-black">About</h1>
      </header>
      <div className="max-w-4xl mx-auto mt-8 mb-2">
        <div className="px-6">
          <img src={Astronaut} className="object-fill overflow-hidden rounded-lg shadow-lg shadow-neutral-100/20 dark:shadow-neutral-800/40" width="100%" alt=""/>
        </div>
      </div>
      <div style={{ ...containerStyle, ...contentStyle }}>
        <p style={paragraphStyle}>
          Nova is an interactive 3D application development platform - otherwise known as a
          <em> game engine</em>
          . Nova was born in early 2023, and was started by.
          Now it is officially developed by 
          <em>a solo programmer Robert Randel</em>
          , started by Robert in 2023.
           community volunteers work on Nova.
          <a href="/" className="text-darkMode-primaryAccent font-bold"> Learn more about the engine here</a>
          .
        </p>
        <h2 id="why-make-a-game-engine-how-did-the-project-start" className="font-black" style={headingStyle}>
          Why make a game engine? How did the project start?
        </h2>
        <p style={paragraphStyle}>Put simply: because we have a passion for building game engines.</p>
        <p style={paragraphStyle}>
          To expand a little more, Robert started the project of building a game engine for two reasons: passion and education.
          Throughout his childhood Robert was always fascinated with the technology behind games, and often enjoyed playing with/learning more
          about the technology itself, rather than the games. He knew that he wanted to build game engines learn more about the topics he was interested in.
        </p>
        <h2 id="whats-the-plan-for-the-future" style={headingStyle} className="font-black">What’s the plan for the future?</h2>
        <p style={paragraphStyle}>
          He’ll be making some more serious announcements as life goes on, but put simply this is our plan:
        </p>
        <ul style={listStyle} className="pl-4 space-y-3 list-disc dark:marker:text-gray-500">
          <li>Keep working on Nova for the unforeseeable future</li>
          <li>Release Nova for free so everyone can use it to make art and games, and ship them, for free</li>
          <li>Keep Nova’s source code and development repositories accessible by paying subscribers ($10 USD per month) so we can continue funding the project</li>
          <li>Develop and release commercial games using Nova</li>
        </ul>
        <h2 id="get-in-touch" style={headingStyle} className="font-black">Get in touch</h2>
        <p style={paragraphStyle}>Email 
          <a href="mailto:robertrandel44@gmail.com" className="text-darkMode-primaryAccent font-bold"> robertrandel44@gmail.com</a>
        </p>
      </div>
    </article>
  );
};

export default About;