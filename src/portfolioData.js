import { ReactComponent as ReduxSvg } from "./img/svg/redux.svg";
import { ReactComponent as EmberSvg } from "./img/svg/ember.svg";
import { ReactComponent as SolrSvg } from "./img/svg/solr.svg";
import { ReactComponent as SqlServerSvg } from "./img/svg/sqlserver.svg";
import { ReactComponent as SitecoreSvg } from "./img/svg/sitecore.svg";

export default {
  navItems: {
    About: "/#about",
    Projects: "/#projects",
    Skills: "/#skills",
    Contact: "/#contact",
  },

  about: {
    name: "James Coombs",
    title: "Web Developer",
    headshotUrl: "./img/headshot.jpg",
    descriptionTextPrimary:
      "A passionate developer constantly looking to build, test and learn in a full-stack environment. Eager to join a team of like-minded innovators dedicated to creating solutions to highly complex problems.",
    descriptionTextSecondary:
      "Development is the intersection of my two passions: building things and exploring technology - Putting these pieces together is what I love.",
    contact: {
      Linkedin: "https://linkedin.com/in/james-coombs",
      Email: "coombsj36@gmail.com",
      Github: "https://github.com/james-coombs",
      Resume:
        "https://drive.google.com/open?id=17S8Xg_MaAn5AfOl3PTXKEo22Rx-VPjYk",
    },
  },

  projects: [
    {
      name: "Yamba",
      technologies: ["Ember.js | ", "Ruby on Rails"],
      overviewText:
        "Create your own boards to host pages made by you or other users! > Post your own text and images to you boards, or boards owned by other users. A custom client build with Ember.js. > A custom API built with Ruby on Rails and PSQL. ",
      descriptionText:
        "This app was my first experience with Ember.js. I spent a lot of time playing around with routes, views, and components. My development process was focused on trying to get a certain piece of information to render, or sending a specific action to the API.",
      url: "https://james-coombs.github.io/yamba-client",
      repo: "https://github.com/james-coombs/yamba-client",
      screenshotUrls: [""],
    },
    {
      name: "Sweaters for Turtles",
      technologies: ["Node.js | ", "MongoDB"],
      overviewText:
        "Shop for awesome sweaters and checkout with Stripe payment! > Developed as a team with @wmcb91, @knoddin and @nlkassad. > A custom client built with HTML/CSS, JavaScript and Handlebars. > A custom API built with Express.js and MongoDB. ",
      descriptionText:
        "This was my first exposure to Express.js, and I found it a very powerful and versatile tool for creating an API. It was also my first interaction with a third party API (Stripe), and MongoDB.",
      url: "https://chardeemcdennis.github.io/sweaters-for-turtles-client",
      repo: "https://github.com/chardeemcdennis/sweaters-for-turtles-client",
      screenshotUrls: [""],
    },
    {
      name: "Back\\Log",
      technologies: ["Ruby on Rails | ", "PostgreSQL | ", "Handlebars"],
      overviewText:
        "Back\\Log is a way to keep record of your progress in games! > A custom client built with HTML/CSS, JavaScript and Handlebars. > A custom API built with Ruby on Rails and PSQL. ",
      descriptionText:
        "Back\\Log is my very first pet project! It is the first full stack app that I built, and it is what made me fall in love with Ruby on Rails. I was amazed at the flexibility that it gives you, while remaining easy to use (not to mention giving the best error messages around). ",
      url: "https://james-coombs.github.io/back-log-client",
      repo: "https://github.com/james-coombs/back-log-client",
      screenshotUrls: [""],
    },
    {
      name: "Tic-Tac-Toe",
      technologies: ["JQuery | ", "AJAX"],
      overviewText:
        "Play a game of Tic-Tac-Toe, save your progress, and view your game statistics! A custom front end game client built in JavaScript, with JQuery and Ajax.",
      descriptionText:
        "My first web app! Built in only a week, and with no prior development experience. It is not pretty, but it absolutely does what it advertises! The first time I was able to make a successful request to the API and render the response data was one of the biggest victories in my development career.",
      url: "https://james-coombs.github.io/tic-tac-toe",
      repo: "https://github.com/james-coombs/project-1-tic-tac-toe",
      screenshotUrls: [""],
    },
    {
      name: "Biological Samples CSV API",
      technologies: ["Ruby on Rails"],
      overviewText:
        "A test API for importing and rendering data from CSV files. An API built with Ruby on Rails. Allows users to import proprietary sample CSV files and returns the data in JSON format.",
      descriptionText:
        "This app is used to convert CSV files to JSON. It is my first app to use Rails views (.erb templates) rather than a separate JavaScript Client.",
      url: "https://samples-csv-api.herokuapp.com/samples",
      repo: "https://github.com/james-coombs/rails-csv-api",
      screenshotUrls: [""],
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
