# ![React app](./react-logo.png)

## Description

This is an  application to encrypt messages in React using Caesar encryption algorithm.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts 

In the project directory, you can run:

### `npm install`

Installs all needed dependencies.

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Making requests to the backend API

API server running at 'http://localhost:4001' for the application to make requests against. 

The code for the backend server (available for Node) can be found in the [NodeJS api rest](https://github.com/guillempuigcomerma/Exercise.github.io/tree/master/goldenspear-backend).


## Functionality overview

The example application is a social blogging site (i.e. a Medium.com clone) called "Conduit". It uses a custom API for all requests, including authentication. You can view a live demo over at https://redux.productionready.io/

**General functionality:**

- Authenticate users via JWT (login/signup pages + logout button on settings page)
- CRU* users (sign up & settings page - no deleting required)
- CRUD Articles
- CR*D Comments on articles (no updating required)
- GET and display paginated lists of articles
- Favorite articles
- Follow other users
