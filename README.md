# react-maps

A React app that allows users to search a map and save locations.

Based on the tutorial found at
http://tutorialzine.com/2015/04/first-webapp-react/.

## Demo

View a live demo at https://react-maps.herokuapp.com/.

## How to use

```
git clone git@github.com:thinkswan/react-maps.git
npm install
npm start
```

This will start a server at http://localhost:5000/.

## How to deploy

Click the button below to spin up your own copy of the app in a Heroku
instance.

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

## How it works

The client (`main.js`) is a React app that renders a Google Map and allows users
to search for locations. When a location is found, the user can save it to their
list of favorites, which saves the location to local storage.

State is maintained by using local storage to store all previously-saved
locations.

## License

MIT
