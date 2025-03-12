import React from "react";

const quizData = [
    {
      question: "What is the correct command to create a new React project?",
      options: ["npx create-react-app myReactApp", ".npm create-app myReacrApp", "npx create-react-app", "npm create-app"],
      answer: "npx create-react-app myReactApp",
    },
    {
      question: "What command is used to start the React local development server?",
      options: ["npm start", ".npm run dev", "npm build", "npm serve"],
      answer: "npm start",
    },
    {
        question : "What is the default local host port that a React development server uses?",
        options: [3500,3000,8080,5000],
        answer : 3000,
    },
    {
        question : "To develop and run React code, Node.js is required",
        options : ['false','true'],
        answer : 'true',
    },
    {
        question : 'Which keyword creates a constant in JavaScript?',
        options : ['var','let','const','constant'],
        answer : 'const',
    },
    {
        question:'A copy of the "real" DOM that is kept in memory is called what?',
        options:['DOM','Virtual DOM','React DOM','Shadow DOM'],
        answer:'Virtual DOM',
    },
    {
        question:'React component names must begin with an uppercase letter.',
        options:['True','False'],
        answer:'True',
    },
    {
        question:'Which operator can be used to conditionally render a React component?',
        options:['::','||','??','&&'],
        answer:'&&',
    },
    {
        question:'When rendering a list using the JavaScript map() method, what is required for each element rendered?',
        options:['key','data','id','index'],
        answer:'key',
    },
    {
        question:'What tool does React use to compile JSX?',
        options:['Babel','React Router','JSX Compiler','ReactDOM'],
        answer:'Babel',
    },
    {
        question:'What is the correct syntax to import a Component from React?',
        options:['import {Component} from "react"','import [Component] from "react"','import Component from "react"','import React.Component from "react"'],
        answer:'import Component from "react"'
    },
    {
        question:'What is the children prop?',
        options:['A property that lets you set an object as a property','A property that adds child values to state','A property that lets you pass data to child components','A property that lets you nest components in other components'],
        answer:'A property that adds child values to state',
    },
    {
        question:'React is a JavaScript library for building ___.',
        options:['Database','Connectivity','User interface','Design Platform'],
        answer:' user interfaces'
    },
    {
        question:'User interface developed with React is made of small and isolated pieces of code called ___.',
        options:['components','Hook','Function','Snippet'],
        answer:'components'
    }
  ];
  
  export default quizData;
  