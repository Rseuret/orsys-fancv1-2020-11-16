import angular from 'angular';
import homeCtrl from './home-controller.js';
// import { maDirective, dirBold, dirTooltip } from './mes-directives';
import maDirective from './components/ma-directive';
import dirBold from './components/dir-bold';
import dirTooltip from './components/dir-tooltip';

// const dirTooltip = () => import(/* webpackChunkName: "sonnomJs" */ './components/dir-tooltip');

let app = angular.module("myApp", []);

app.controller("homeCtrl", homeCtrl);

app.directive("maDirective", maDirective);
app.directive("dirBold", dirBold);
app.directive("dirTooltip", dirTooltip);