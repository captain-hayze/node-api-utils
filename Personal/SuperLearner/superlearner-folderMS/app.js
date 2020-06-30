'use strict';


const express = require('express');
const bodyParser = require('body-parser')
// const ProjectRoutes = require('./api/server/routes/projectRoutes')


// import express from 'express';
// import bodyParser from 'body-parser';
// import userRoutes from './api/server/routes/UserRoutes';
// import otpRoutes from './api/server/routes/otpRoutes';

// config.config();


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Credentials", "false");
   res.header("Access-Control-Allow-Headers", "*");
   next();
 });

const port = process.env.PORT || 5000;

// app.use('/project', ProjectRoutes);




// when a random route is inputed
app.get('*', (req, res) => res.status(200).send({
   message: 'SuperLearner Folder Micro-service is Running.'
}));

var server = 
app.listen(port, () => {
   console.log(`Server is running on PORT ${port}`);
});

module.exports = server;