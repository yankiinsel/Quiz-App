/**
 * Comment.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  connection :'mongo',
  schema: true,
   
  attributes: {

      text: {
        type: 'string',
        required: 'true',
      },
      
      post: {
        model: 'post',
        required: 'true',
      },

      stalker: {
        model: 'user',
        required: 'true',
      },



  }
};

