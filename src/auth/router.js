'use strict';

const express = require('express');
const route = express.Router();
const userModel = require('../auth/models/users-model');
const basicAuth = require('./middleware/basic');
const OAuthMiddleware = require('./middleware/oauth');

route.post('/v1/signup',signUp);
route.post('/v1/signin',basicAuth,signIn);
route.get('/users',allUsers);

route.get('/oauth',OAuthMiddleware,signInGitHub);
/**
 * 
 * @param {Object} req it has new user in body
 * @param {String} res token
 */
// for signUp
function signUp(req,res,next){
  let newUser = req.body;
  userModel.save(newUser)
    .then(result =>{
      let token = userModel.generateToken(result);
      res.cookie('token', token, {
        expires  : new Date(Date.now() + 9999999),
        httpOnly : false,
      });
      res.status(200).send({  token: token });
    })
    .catch(()=>{
      res.json({error: 'This userName is taken'});
    });


}
// for sign In
function signIn(req,res,next){
  res.cookie('token', req.token, {
    expires  : new Date(Date.now() + 9999999),
    httpOnly : false,
  });
  res.status(200).send({  token: req.token });
}
/**
 * 
 * @param {Array} res array of objects 
 */
// get all users
function allUsers(req,res,next){
  userModel.allUsers()
    .then(result =>{
      res.json(result);

    });
}
// for oauth route
function signInGitHub(req,res){
  res.cookie('token', req.token, {
    expires  : new Date(Date.now() + 9999999),
    httpOnly : false,
  });
  res.status(200).send({  token: req.token });
}




module.exports = route;