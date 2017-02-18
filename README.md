# NYC Memories

The Big Apple is an endless labyrinth of good food, new people, and spectacular sights! 
Share and cherish those moments with yourself and other users by pinning them to an interactive map.

## Motivation

* A photo-sharing app with geo spatial queries. 
* Users can upload photos with posts and bind them to a certain location on Google Maps.
* Users can search for nearby photos by moving the map. 

## Technologies

* React
* Redux
* MongoDB
* Express
* Google Maps
* Gulp
* Webpack / Babel

## API Reference

* GET /account/currentuser    :: returns the current authenticated user
* GET /account/logout    :: logs the current user out
* POST /account/register    :: returns the newly registered user
* POST /account/login    :: returns the authenticated user

* GET /api/post   :: returns a list of all the posts
* POST /api/post   :: returns a newly created post
* GET /api/comment  :: returns a list of all the comments
* GET /api/profile  :: returns a list of all the profiles


## Develop

* Clone the repo.
* Run npm install, and then run webpack.
* Make sure Gulp is installed, then run gulp.
* Start nodemon, and switch over to localhost:3000.


### Contributers
* bsoung


##### Directory layout

```
.
├── client      Client-side code
│   ├── assets  Timer Sound
│   ├── js      JavaScript
│   └── scss    SASS stylesheets
├── server      Server-side code
└── test        Tests
    ├── client  Client tests
    └── server  Server tests
```
