/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  connection :'mongo',
  schema: 'true',

  attributes: {
    username:{
      type:'string',
      required:'true',
    },
    password:{
      type:'string',
      required:'true',
    },
    posts:{
      collection:'post',
      via:'author',
    },
    comments:{
      collection: 'comment',
      via: 'stalker',
    },
  }
};

