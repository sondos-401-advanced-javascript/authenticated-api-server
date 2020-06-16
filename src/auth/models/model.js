'use strict';

class Model{
  constructor(schema){
    this.schema = schema;
  }
  /**
   * 
   * @param {String} id the id from schema
   */
  get(id){
    let inputId = id ? {_id:id} : {};
    return this.schema.find(inputId);
  }
  create(object){
    let newObject = new this.schema(object);
    return newObject.save();
  }
  /**
   * 
   * @param {String} id the id from schema_id
   * @param {Object} object the new object
   */
  update(id,object){
    return this.schema.findByIdAndUpdate(id,object,{new:true});
  }
  delete(id){
    return this.schema.findByIdAndDelete(id);
  }
}

module.exports = Model;