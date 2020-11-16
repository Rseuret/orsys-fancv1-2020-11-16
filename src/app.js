import angular from 'angular';
import homeCtrl from './home-controller.js';

let app = angular.module("myApp", []);

app.controller("homeCtrl", homeCtrl);