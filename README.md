# Ember.js working with Sails.js thanks to JSON API and sails-json-api-blueprints

This application is an implementation of the [super rentals](https://guides.emberjs.com/v2.6.0/tutorial/ember-cli/) tutorial for [Ember.js](http://emberjs.com/) working with [Sails.js](http://sailsjs.org/) as a backend. The two applications exchange data following the [JSON API](http://jsonapi.org/) specification. While Ember.js is compatible JSON API by default, the backend is made compatible with the (sails-json-api-blueprints)[https://github.com/dynamiccast/sails-json-api-blueprints] node module.

# Run

Run the backend with the following commands from the *backend* directory:

````
npm install
sails lift
````

Run the frontend with following command from the *frontend* directory:

````
npm install
bower install
ember server --proxy http://localhost:1337
````
