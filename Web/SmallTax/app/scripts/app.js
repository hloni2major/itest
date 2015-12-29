'use strict';

/**
 * @ngdoc overview
 * @name smallTaxApp
 * @description
 * # smallTaxApp
 *
 * Main module of the application.
 */

 // Require stuff.
var angular = require('angular'); // That's right! We can just require angular as if we were in node

var MainCtrl = require('./controllers/main'); // We can use our WelcomeCtrl.js as a module. Rainbows.
//var DisplayDirective = require('./directives/display');

var app = angular.module('smallTaxApp', []);

app.controller('MainCtrl', ['$scope', MainCtrl]);

// Directives
app.directive('display',function(){
  return{
    restrict: 'EA',
    scope:{
      options:'='
    },
    templateUrl:'views/display.html',
    controller: MainCtrl
  }
});
