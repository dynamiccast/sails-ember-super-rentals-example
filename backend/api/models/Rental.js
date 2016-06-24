/**
 * Rental.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  schema : true,

  attributes: {
    title: {
      type: "string"
    },
    owner: {
      type: "string"
    },
    city: {
      type: "string"
    },
    type: {
      type: "string"
    },
    image: {
      type: "string"
    },
    bedrooms: {
      type: "string"
    }
  }
};
