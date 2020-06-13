'use strict';

require('@code-fellows/supergoose');

const model = require('../src/auth/models/categories/categories.collection');

let output = {
  category: 'electronic',
  name: 'phone',
  display_name: 'smart phone',
  description: 'ios',
};

describe('Model Category', () =>{
  it('can post() a category', ()=> {
    return model.create(output)
      .then(record => {
        Object.keys(output).forEach(key=> {
          expect(record[key]).toEqual(output[key]);
        });
      });
  });

  it('can get() allCategories', ()=> {
    return model.get()
      .then(results => {
        Object.keys(output).forEach(key=> {
          expect(results[0][key]).toEqual(output[key]);
        });
      });
  });
  it('can get() category By Id', ()=> {
    let obj = {
      category: 'electronicsss',
      name: 'iiiphone',
      display_name: 'smart phone',
      description: 'ios',
    };
    return model.create(obj)
      .then(results => {
        return model.get(results._id)
          .then(output =>{
            Object.keys(obj).forEach(key=> {
              expect(output[0][key]).toEqual(obj[key]);
            });
          });
      });
  });
  it('can update() category', ()=> {
    let obj = {
      category: 'electronicsss',
      name: 'iiiphone',
      display_name: 'smart phone',
      description: 'ios',
    };
    let objUpdate = {
      category: 'electronic',
      name: 'phone',
      display_name: 'smart phone',
      description: 'ios',
    };
    return model.create(obj)
      .then(results => {
        return model.update(results._id,objUpdate)
          .then(output =>{
            Object.keys(obj).forEach(key=> {
              expect(output[key]).toEqual(objUpdate[key]);
            });
          });
      });
  });
  it('can delete() category', ()=> {
    let obj = {
      category: 'electronicsss',
      name: 'iiiphone',
      display_name: 'smart phone',
      description: 'ios',
    };
    return model.create(obj)
      .then(results => {
        return model.delete(results._id)
          .then(output =>{
            Object.keys(obj).forEach(key=> {
              expect(output[key]).toEqual(obj[key]);
            });
          });
      });
  });
});