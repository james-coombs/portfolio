import React from "react";

import { ReactComponent as ReduxSvg } from "./img/svg/redux.svg";
import { ReactComponent as EmberSvg } from "./img/svg/ember.svg";
import { ReactComponent as SolrSvg } from "./img/svg/solr.svg";
import { ReactComponent as SqlServerSvg } from "./img/svg/sqlserver.svg";
import { ReactComponent as SitecoreSvg } from "./img/svg/sitecore.svg";
import { ReactComponent as emailSvg } from "./img/svg/email.svg";
import { ReactComponent as githubSvg } from "./img/svg/github.svg";
import { ReactComponent as linkedinSvg } from "./img/svg/linkedin.svg";
import { ReactComponent as pdfSvg } from "./img/svg/pdf.svg";
import { ReactComponent as documentSvg } from "./img/svg/document.svg";

import backlog from "./img/screenshots/back-log.png";
import api from "./img/screenshots/api.png";
import sftHome from "./img/screenshots/sft-home.png";
import sftCart from "./img/screenshots/sft-cart.png";
import sftProducts from "./img/screenshots/sft-products.png";
import ttt from "./img/screenshots/ttt.png";
import yambaBoard from "./img/screenshots/yamba-board.png";
import yambaBoards from "./img/screenshots/yamba-boards.png";
import yambaHome from "./img/screenshots/yamba-home.png";
import yambaUsers from "./img/screenshots/yamba-users.png";

export default {
  navItems: {
    About: "/#about",
    Projects: "/#projects",
    Skills: "/#skills",
  },

  about: {
    name: "James Coombs",
    title: "Web Developer",
    headshotUrl: "./img/headshot.jpg",
    descriptionTextPrimary:
      "A passionate developer constantly looking to build, test and learn in a full-stack environment. Eager to join a team of like-minded innovators dedicated to creating solutions to highly complex problems.",
    descriptionTextSecondary:
      "Development is the intersection of my two passions: building things and exploring technology - Putting these pieces together is what I love.",
    contact: [
      {
        name: "Linkedin",
        url: "https://linkedin.com/in/james-coombs",
        svg: linkedinSvg,
      },
      { name: "Email", url: "coombsj36@gmail.com", svg: emailSvg },
      {
        name: "Github",
        url: "https://github.com/james-coombs",
        svg: githubSvg,
      },
      {
        name: "Resume",
        url:
          "https://docs.google.com/document/d/1c-9McLl0UnPPPthGN4Z6fGlNbKK6mE4FgVus61r_TKY/edit?usp=sharing",
        svg: documentSvg,
      },
    ],
  },

  projects: [
    {
      name: "Yamba",
      technologies: ["Ember.js | ", "Ruby on Rails"],
      blurb: "Yet Another Message Board App",
      overviewJsx: (
        <>
          <p>
            Create your own boards to host pages made by you or other users!
          </p>
          <ul>
            <li>
              Post your own text and images to you boards, or boards owned by
              other users.
            </li>
            <li>A custom client build with Ember.js.</li>
            <li>A custom API built with Ruby on Rails and PostgreSQL.</li>
          </ul>
        </>
      ),
      descriptionJsx: (
        <p>
          This app was my first experience with Ember.js. I spent a lot of time
          playing around with routes, views, and components. My development
          process was focused on trying to get a certain piece of information to
          render, or sending a specific action to the API.
        </p>
      ),
      url: "https://james-coombs.github.io/yamba-client",
      repo: "https://github.com/james-coombs/yamba-client",
      screenshots: [
        { name: "Home", src: yambaHome },
        { name: "Boards", src: yambaBoards },
        { name: "Board", src: yambaBoard },
        { name: "Users", src: yambaUsers },
      ],
    },
    {
      name: "Sweaters for Turtles",
      technologies: ["Node.js | ", "MongoDB"],
      blurb: "Ecommerce App",
      overviewJsx: (
        <p className="sft-text">
          Shop for awesome sweaters and checkout with Stripe payment! Developed
          as a team with <a href="https://github.com wmcb91">@wmcb91</a>,{" "}
          <a href="https://github.com/knoddin">@knoddin</a> and{" "}
          <a href="https://github.com/nlkassad">@nlkassad</a>.
        </p>
      ),

      descriptionJsx: (
        <p>
          This was my first exposure to Express.js, and I found it a very
          powerful and versatile tool for creating an API. It was also my first
          interaction with a third party API (Stripe), and MongoDB.
        </p>
      ),
      url: "https://chardeemcdennis.github.io/sweaters-for-turtles-client",
      repo: "https://github.com/chardeemcdennis/sweaters-for-turtles-client",
      screenshots: [
        { name: "Home", src: sftHome },
        { name: "Product", src: sftProducts },
        { name: "Cart", src: sftCart },
      ],
    },
    {
      name: "Back\\Log",
      technologies: ["Ruby on Rails | ", "PostgreSQL | ", "Handlebars"],
      blurb: "Full-Stack CRUD App",
      overviewJsx: (
        <>
          <p>Back\\Log is a way to keep record of your progress in games!</p>
          <ul>
            <li>
              A custom client built with HTML/CSS, JavaScript and Handlebars.
            </li>
            <li>A custom API built with Ruby on Rails and PostgreSQL.</li>
          </ul>
        </>
      ),

      descriptionJsx: (
        <p>
          Back\\Log is my very first pet project! It is the first full stack app
          that I built, and it is what made me fall in love with Ruby on Rails.
          I was amazed at the flexibility that it gives you, while remaining
          easy to use (not to mention giving the best error messages around).{" "}
        </p>
      ),
      url: "https://james-coombs.github.io/back-log-client",
      repo: "https://github.com/james-coombs/back-log-client",
      screenshots: [{ name: "App", src: backlog }],
    },
    {
      name: "Tic-Tac-Toe",
      technologies: ["JQuery | ", "AJAX"],
      blurb: "The original App",
      overviewJsx: (
        <>
          <p>
            Play a game of Tic-Tac-Toe, save your progress, and view your game
            statistics!
          </p>
          <ul>
            <li>
              A custom front end game client built in JavaScript, with
              Bootstrap, JQuery and Ajax.
            </li>
          </ul>
        </>
      ),
      descriptionJsx: (
        <p>
          My first web app! Built in only a week, and with no prior development
          experience. It is not pretty, but it absolutely does what it
          advertises! The first time I was able to make a successful request to
          the API and render the response data was one of the biggest victories
          in my development career.
        </p>
      ),
      url: "https://james-coombs.github.io/tic-tac-toe",
      repo: "https://github.com/james-coombs/project-1-tic-tac-toe",
      screenshots: [{ name: "App", src: ttt }],
    },
    {
      name: "Biological Samples CSV API",
      technologies: ["Ruby on Rails"],
      blurb: "Ruby on Rails API",
      overviewJsx: (
        <p>
          A test API for importing and rendering data from CSV files. An API
          built with Ruby on Rails. Allows users to import proprietary sample
          CSV files and returns the data in JSON format.
        </p>
      ),
      descriptionJsx: (
        <p>
          This app is used to convert CSV files to JSON. It is my first app to
          use Rails views (.erb templates) rather than a separate JavaScript
          Client.
        </p>
      ),
      url: "https://samples-csv-api.herokuapp.com/samples",
      repo: "https://github.com/james-coombs/rails-csv-api",
      screenshots: [{ name: "UI/JSON", src: api }],
    },
    {
      name: "Miscellaneous",
      technologies: ["JavaScript | ", "Chrome Extensions | ", "Express.js"],
      blurb: "Small side projects",
      overviewJsx: (
        <p>
          <ul>
            <li>
              URl Drummer: A Chrome extension that plays a unique drum pattern
              based on the curretn URL.
            </li>
            <li>
              Last Link: A Chrome Extension to add extra highlighting to links
              already visited.
            </li>
            <li>
              Code Xpress: A (very) simple in-browser IDE built with Express.js
            </li>
          </ul>
        </p>
      ),
      descriptionJsx: null,
      url: null,
      repo: null,
      screenshots: [],
    },
  ],

  skills: [
    { name: "JavaScript", class: "javascript" },
    { name: "HTML5", class: "html5" },
    { name: "CSS3", class: "css3" },
    { name: "Node", class: "nodejs" },
    { name: "SASS", class: "sass" },
    { name: "React", class: "react" },
    { name: "Redux", class: "redux", svg: ReduxSvg },
    { name: "Backbone", class: "backbonejs" },
    { name: "Ember", class: "ember", svg: EmberSvg },
    { name: "C#", class: "csharp" },
    { name: "Ruby", class: "ruby" },
    { name: "Rails", class: "rails" },
    { name: "PostgreSQL", class: "postgresql" },
    { name: "SQLServer", class: "SQLServer", svg: SqlServerSvg },
    { name: "MongoDB", class: "mongodb" },
    { name: "SOLR", class: "SOLR", svg: SolrSvg },
    { name: "Sitecore", class: "Sitecore", svg: SitecoreSvg },
    { name: ".NET", class: "dot-net" },
    { name: "jQuery", class: "jquery" },
    { name: "Bootstrap", class: "bootstrap" },
    { name: "Python", class: "python" },
    { name: "Git", class: "git" },
  ],
};
