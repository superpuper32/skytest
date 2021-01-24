# skytest

Test assignment for the Front-end Dev position. JS / REACT
Build a React app with dynamic image loading and routing.
[API](https://api.giphy.com/v1/gifs/random?api_key=gR30u9O8KPOanwIQupHbD90d4k57EOeY) получения картинок

## Setup

Use the package manager [npm](https://docs.npmjs.com/) to install foobar.

```bash
npm install
```

run project in development mode on [http://localhost:3000](http://localhost:3000)

```bash
npm start
```

## Main

The application consists of two pages:

* Main page - display the image and the "Download" button, by clicking on which the new application will be loaded. When you first load the application - the image should load without clicking on the button

* History page - display all loaded pictures from the main page (picture, download time and picture name). Add pagination and the ability to delete a previously uploaded image.

**Stack:**

* React
* [React-router](https://reacttraining.com/react-router/web)
* [Redux](https://redux.js.org/)

**Goal:**

Store the received data in Redux. For all asynchronous requests, it is advisable to use Redux-Saga or Redux-Thunk
Provide for error handling.
