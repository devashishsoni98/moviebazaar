# MovieBazaar

This is a movie listing website which uses TMDB API to display movies. There are various features such as searching for any movie and sorting the search results based on different criterias. You can also access your own profile page after signing-in in with google which is integrated using Firebase Google Authentication.

## Demo

https://ds-movie-app.netlify.app/

## Features

- Search for movies
- Sort the results on different parameters
- Easy Sign-In using Google
- Personal Profile Page

## Tech Stack

**Client:** React, HTML, CSS, JS

**Server:** Node, Firebase,TMDB API, Netlify

## Installation

Install moviebazaar with npm.
Copy this repository link from github and open the folder where you want to install this project.\
Double click on the folder's path and type in cmd to open terminal.\
Then write these commands in terminal:

```bash
  git clone repo-url
  code .
```

Replace the "repo-url" with this repository's url that you copied.\
The code . is used to open this folder in vs code.\
Then, execute these commands in vs code terminal:

```bash
  cd .\moviebazaar\
  npm install
```

Once the modules are installed, create a ".env" file in the moviebazaar folder and set up your environment variables for Firebase and TMDB api.

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`REACT_APP_FIREBASE_API`

`REACT_APP_TMDB_API`

##

Enter you API keys as :

`REACT_APP_FIREBASE_API="enterhere"`

replace "enterhere" with your api key.

##

After setting up your API keys execute this command in vs code terminal.

`npm start`

##

## Feedback

If you have any feedback, please reach out to me at devashishsoni926@gmail.com
