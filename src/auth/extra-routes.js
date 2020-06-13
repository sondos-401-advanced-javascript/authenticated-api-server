'use strict';

const express = require('express');
const route = express.Router();
const bearerMiddleware = require('./middleware/bearer');
const permissions = require('./middleware/authorize');
const getModel = require('./middleware/getParam');

route.param('model',getModel);
route.get('/secret',bearerMiddleware,checkLoginUser);
route.get('/:model', bearerMiddleware, permissions('read'), getAll);
route.get('/:model/:id', bearerMiddleware, permissions('read'), getById);
route.post('/:model', bearerMiddleware, permissions('create'), postObj);
route.put('/:model/:id', bearerMiddleware, permissions('update'), updateOne);
route.patch('/:model/:id', bearerMiddleware, permissions('update'), updateOne);
route.delete('/:model/:id', bearerMiddleware, permissions('delete'), deleteOne);

function checkLoginUser(req,res){
  res.status(200).json(req.user);
}
//Add new (POST)
function postObj (req, res,next){
  let data = req.body;
  req.model.create(data)
    .then(added=>{
      res.json(added);
    })
    .catch(next);
}
// get one
function getById(req, res,next){
  let id = req.params.id;
  req.model.get(id)
    .then(result =>{
      res.json(result);
    })
    .catch(next);
}
//find All (GET)
function getAll(req, res,next) {
  req.model.get()
    .then(allRecords =>{  
      let count = allRecords.length;
      res.json({count,allRecords});
    })
    .catch(next);
}

//update By Id (PUT)
function updateOne(req, res,next) {
  let id = req.params.id;
  let data = req.body;
  req.model.update(id,data)
    .then(result =>{
      res.json(result);
    })
    .catch(next); 
}
// delete By Id (DELETE)
function deleteOne(req, res,next) {
  let id = req.params.id;
  req.model.delete(id)
    .then(result =>{
      res.json({delete:`you deleted has Id: ${id}`});
    })
    .catch(next);
}
module.exports = route;