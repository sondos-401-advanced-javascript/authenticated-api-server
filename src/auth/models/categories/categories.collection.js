'use strict';

const Model = require('../model.js');
const categoriesSchema = require('./categories.schema');

class Category extends Model{
  constructor(){
    super(categoriesSchema);
  }
}

module.exports = new Category();