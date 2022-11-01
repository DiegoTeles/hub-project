# hub

## Requirements

- [Docker](https://www.docker.com/) and [Docker Compose](https://docs.docker.com/compose/)

## Running the Back-end project

To run hub-back project, clone and run the docker-compose command:
```
$> git clone git@github.com:NuncaNemVue/hub-project.git

$> cd hub-project

$> docker-compose up
```

After that, the API will be available at [http://localhost:3001](http://localhost:3001) 

## Running the Front-end project

Open hub-web folder and execute this command
```
$> npm install
$> npm run dev
```
And the web interface will be available at [http://localhost:3000](http://localhost:3000)


## What I used

- [Docker](https://www.docker.com/) and [Docker Compose](https://docs.docker.com/compose/) for container managment
- [Nest.js](https://docs.nestjs.com/) for backend
  - [Passport](https://docs.nestjs.com/security/authentication) as auth module
  - [Swagger](https://swagger.io/) for Docs
  - [Sequelize](https://sequelize.org/docs/v6/other-topics/typescript/) for database ORM
- [React](https://reactjs.org/) for the frontend (Hooks)
  - [Webpack 5](https://github.com/facebook/create-react-app) as build
  - [Redux-Saga](https://redux-saga.js.org/) as state container
  - [Styled-components](https://react-bootstrap.github.io/) as ui kit
- [Postgres](https://docs.mongodb.com/) as database

Unfortunatelly I was unable to create any test and auth interface, but is funcionaly in back-end, due to the deadline

Create auth interface and automate tests ;/

