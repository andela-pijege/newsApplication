[![Build Status](https://travis-ci.org/andela-pijege/news-application.svg?branch=develop)](https://travis-ci.org/andela-pijege/news-application)
[![Coverage Status](https://coveralls.io/repos/github/andela-pijege/news-application/badge.svg?branch=develop)](https://coveralls.io/github/andela-pijege/news-application?branch=develop)
[![Code Climate](https://codeclimate.com/github/andela-pijege/news-application/badges/gpa.svg)](https://codeclimate.com/github/andela-pijege/news-application)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg)]()

# newsApplication

**News 24/7** is a news feed application that provides you with latest news from sources around the globe. This application consumes data from the newsAPI. It has a a simple and responsive interface that makes it easy to use and navigate.

## Table of Contents

* [Technologies](#technology)
* [Installation and Setup](#installation-and-setup)
* [Limitations](#limitations)
* [How to Contribute](#how-to-contribute)
* [FAQ](#faq)
* [License](#license)

### Technologies

**News 24/7** makes use of a host of modern technologies. The core ones are:

* REACT: This project makes use of the REACT Javascript library to build the interface. REACT is used for building web pages that are structured as a collection of components. For more information about  See [this link](https://facebook.github.io/react/).
* Flux: This is a design architecture for building stable web apps with, among other things, a unidirectional flow of data. In this project, the Flux architecture is used to manage data flow. For more information about FLUX see [this link](https://facebook.github.io/flux/) for details.
* ECMAScript 6: Also known as ES2015, this is the newest version of Javascript with 
    next-generation features like arrow functions, generators, enhanced object literals, 
    spread operators and more. The ES2015 is consistently used throughout this project. See [this link](https://en.wikipedia.org/wiki/ECMAScript) for details.
* NodeJS: Node.js is an open-source, cross-platform JavaScript run-time environment for executing JavaScript code server-side. 
    See [this link](https://en.wikipedia.org/wiki/Node.js) for details.
* ExressJS: ExpressJS, is a web application framework for Node.js, It is designed for building web applications and APIs. 
    see [this link](https://en.wikipedia.org/wiki/Express.js)
* Firebase: This project makes use of various components of 
    [the Firebase suite](https://firebase.google.com/), specifically, the Firebase Authentication.


### Installation & Setup

Here are the steps you need to follow to run this project on your computer:

* Open a terminal/command prompt on your computer and cd into your preferred path/location.

* Install NodeJS

* Clone this repo: Enter this command in the terminal: git clone `https://github.com/andela-pijege/news-application.git`

* Install the necessary dependencies by running the following command: `npm install`

* Run the project: run the command `npm start` This will start the local server to run your project on. This ensures that you   can run the project on your browser of choice.

* Open a web browser of your choice and visit http://localhost:4000.

### Limitations

The current limitations to the **News 24/7** App are as follows:

* Users can only be redirected to the news source website to read a particular news headlines
* Users cannot save data.

### How To Contribute
Contributing to this project would always be a welcoming idea. If you feel you have an addition to make this sproject better, follow the steps bellow:

- Fork the repository.
- Create as many branch as you like depending on how many features you would love to add. One feature per branch.
- Make neccessary changes and commit.
- Finally, submit a pull request.

### FAQ
- **What if I want to use another port?**

That's easy. In the root of the project. create a file named `.env` and add the following line to it:

```bash
PORT=<your_desired_port>
```

where <your\_desired\_port> is the port you want to use. So, if you want to use port `8080`, you will write:

```bash
PORT=8080
```

### License

This project is authored by **Ijege Precious** (precious.ijege@andela.com) and is licensed for your use, modification and distribution under the **MIT** license. 

[MIT][license] © [andela-pijege][author]

<!-- Definitions -->

[license]: LICENSE

[author]: andela-pijege