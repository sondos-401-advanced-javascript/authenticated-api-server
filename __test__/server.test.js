'use strict';

const {server}=require('../src/server');
const supergoose = require('@code-fellows/supergoose');
const mockRequest = supergoose(server);
jest.spyOn(global.console,'log');


describe('server', () => {

  it('404 test' , ()=> {
    return mockRequest.get('/wrong')
      .then(data => {
        expect(data.status).toEqual(404);
      });
  });



  it('/v1/signup ', async() => {
    let output = { 'username': 'sondos@1996.net', 'password': 'soso@321_' };
    mockRequest
      .post('/v1/signup')
      .send(output)
      .then(data => {
        expect(data.status).toEqual(200);
      });
  });
  it('/v1/signin ', async() => {
    let output = { 'username': 'sondos@1996.net', 'password': 'soso@321_' };
    mockRequest
      .post('/v1/signin')
      .send(output)
      .then(data => {
        expect(data.status).toEqual(500);
      });
  });
  it('/v1/signin ', async() => {
    let output = { 'username': 'sondos@1996.net', 'password': 'soso@321_' };
    mockRequest
      .post('/v1/signup')
      .send(output)
      .then(() => {
        return  mockRequest
          .post('/v1/signin')
          .send(output)
          .then(data =>{
            expect(data.status).toEqual(500);

          });
      });
  });
  it('/users ', () => {
    return mockRequest
      .get('/users')
      .then(data => {
        expect(data.status).toEqual(200);
      });
  });
  // let output = {
  //   category: 'electronic',
  //   name: 'phone',
  //   display_name: 'smart phone',
  //   description: 'ios',
  // };
  // it('add object in product(POST)',()=>{
  //   return mockRequest
  //     .post('/v1/products/add')  
  //     .send(output)
  //     .then(result =>{ 
  //       Object.keys(output).forEach(key =>{ 
  //         expect(result.body[key]).toEqual(output[key]);
  //       });
  //       expect(result.status).toEqual(200);
  //     });
  // });
  // it('add object in category(POST)',()=>{
  //   return mockRequest
  //     .post('/v1/categories/add ')  
  //     .send(output)
  //     .then(result =>{
  //       Object.keys(output).forEach(key =>{
  //         expect(result.body[key]).toEqual(output[key]);
  //       });
  //       expect(result.status).toEqual(200);
  //     });
  // });
  // it('read all data from products GET',()=>{
  //   return mockRequest
  //     .get('/products')
  //     .then(result =>{
  //       Object.keys(output).forEach(key =>{
  //         expect(result.body.allRecords[0][key]).toEqual(output[key]);
  //       });
  //       expect(result.status).toEqual(200);
  //     });
  // });
  // it('read all data from categories GET',()=>{
  //   return mockRequest
  //     .get('/categories')
  //     .then(result =>{
  //       Object.keys(output).forEach(key =>{
  //         expect(result.body.allRecords[0][key]).toEqual(output[key]);
  //       });
  //       expect(result.status).toEqual(200);
  //     });
  // });
  // it('read id from category GET',()=>{
  //   return mockRequest
  //     .get('/categories/5ed64e7307d94b15dee00d28')
  //     .then(result =>{
  //       expect(result.status).toEqual(200);
  //     });
  // });
  // it('read id from product GET',()=>{
  //   return mockRequest
  //     .get('/products/5ed64e7307d94b15dee00d28')
  //     .then(result =>{
  //       expect(result.status).toEqual(200);
  //     });
  // });
  // it('update on product PUT',()=>{
  //   return mockRequest
  //     .put('/products/5ed64e7307d94b15dee00d28')
  //     .then(result=>{
  //       expect(result.status).toEqual(200);
  //     });
  // });
  // it('update on category PUT',()=>{
  //   return mockRequest
  //     .put('/categories/5ed64e7307d94b15dee00d28')
  //     .then(result=>{
  //       expect(result.status).toEqual(200);
  //     });
  // });
  // it('delete on product DELETE',()=>{
  //   return mockRequest
  //     .delete('/products/5ed64e7307d94b15dee00d28')
  //     .then(result=>{
  //       expect(result.status).toEqual(200);
  //     });
  // });
  // it('delete on category DELETE',()=>{
  //   return mockRequest
  //     .delete('/categories/5ed64e7307d94b15dee00d28')
  //     .then(result=>{
  //       expect(result.status).toEqual(200);
  //     });
  // });
  // it('not Found',()=>{
  //   return mockRequest
  //     .get('/')
  //     .then(result=>{
  //       expect(result.status).toEqual(404);
  //     });
  // });
  // it('add object in category(POST)',()=>{
  //   let obj = {
  //     category: 'electronic',
  //     name: 'phone',
  //   };
  //   return mockRequest
  //     .post('/categories')  
  //     .send(obj)
  //     .then(result =>{
  //       expect(result.status).toEqual(500);
  //     });
  // });
  // it('500',()=>{
  //   return mockRequest
  //     .get('/ss')
  //     .then(result=>{
  //       expect(result.status).toEqual(500);
  //     });
  // });

});




