import React from 'react'
import brainwave from '../assets/brainwave.svg'

const About = () => {
  return (
    <article>
      <header className="mb-4 bg-lightMode-accent dark:bg-darkMode-background py-16">
        <h1 className="text-5xl font-black text-center text-lightMode-text dark:text-darkMode-text">About</h1>
      </header>
      <div className="max-w-4xl mx-auto mt-8 mb-2">
        <div className="px-6">
          <img src={brainwave} className="object-fill overflow-hidden rounded-lg shadow-lg shadow-neutral-100/20 dark:shadow-neutral-800/40" width="100%" alt="Brainwave logo" />
        </div>
      </div>
      <div className="max-w-3-4xl px-6 pt-6 pb-16 mx-auto prose dark:prose-invert dark:text-darkMode-text text-lightMode-text bg-lightMode-background dark:bg-darkMode-background">
        <p>
          Hazel is an interactive 3D application development platform - otherwise known as a
          <em> game engine</em>. Hazel was born in late 2018, and was started by Yan Chernikov. Now it is officially developed by
          <em> Robert Randel</em>, a company started by Yan in 2021. Studio Cherno staff as well as community volunteers work on Hazel.
          <a href="/posts/meet-the-team/">Learn more about the team here</a>.
        </p>
        <p>
          Studio Cherno have participated in several Ludum Dare game jams, using Hazel to make games within 72 hours.
          <a href="https://studiocherno.itch.io">You can play our game jam games for free on itch.io</a>.
        </p>
        <h2 id="why-make-a-game-engine-how-did-the-project-start">Why make a game engine? How did the project start?</h2>
        <p>Put simply: because we have a passion for building game engines.</p>
        <p>
          To expand a little more, Yan started the project of building a game engine for two reasons: passion and education. Throughout his childhood Yan was always fascinated with the technology behind games, and often enjoyed playing with/learning more about the technology itself, rather than the games. When Yan decided to pursue software engineering as a career, he knew that he wanted to build game engines. After working as a game engine software engineer at EA for 4.5 years, first on EA’s primary mobile engine called Osiris and then later Frostbite, Yan decided that he wanted to leave and build his own technology, teach others how to make game engines, and learn more about the topics he was interested in.
        </p>
        <p>
          Yan has also always had a passion for education and teaching others. He has hundreds of educational videos on his YouTube channel teaching C++, general software engineering, OpenGL and graphics programming, and much more. The Game Engine series was really the beginning of Hazel - a video series teaching how to make a game engine from the beginning, where every line of code is explained and written on-video. Hazel started as the subject of the Game Engine series, and has matured now into both a 2D and 3D Game Engine which extends far beyond the original video series.
        </p>
        <h2 id="whats-the-plan-for-the-future">What’s the plan for the future?</h2>
        <p>
          We’ll be making some more serious announcements as life goes on, but put simply this is our plan:
        </p>
        <ul className="pl-5 space-y-3 text-gray-600 list-disc marker:text-gray-800 dark:marker:text-gray-100">
          <li>Keep working on Nova for the unforeseeable future</li>
          <li>Release Hazel for free so everyone can use it to make art and games, and ship them, for free</li>
          <li>Keep Hazel’s source code and development repositories accessible by paying subscribers ($10 USD per month) so we can continue funding the project</li>
          <li>Develop and release commercial games using Hazel</li>
        </ul>
        <h2 id="get-in-touch ">Get in touch</h2>
        <p>
          Email
          <a href="mailto:business@thecherno.com">business@thecherno.com</a>
        </p>
      </div>
    </article>
  )
}

export default About