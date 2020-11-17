import angular from 'angular';
import angularRoute from 'angular-route';

// import { maDirective, dirBold, dirTooltip } from './mes-directives';
import maDirective from './components/ma-directive';
import dirBold from './components/dir-bold';
import dirTooltip from './components/dir-tooltip';
import dirTreeView from './components/dir-tree-view';

import clientCa from './filters/client-ca';

import routes from './routes';

// const dirTooltip = () => import(/* webpackChunkName: "sonnomJs" */ './components/dir-tooltip');


// import './style.scss';
// import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/scss/bootstrap.scss';


//On dit à Angular que notre Application "myApp" a besoin du module "ngRoute" (qui se trouve dans angular-route)
let app = angular.module("myApp", [ 'ngRoute' ]);

//Configuration ngRoute
app.config(routes);

app.directive("maDirective", maDirective);
app.directive("dirBold", dirBold);
app.directive("dirTooltip", dirTooltip);
app.directive("dirTreeView", dirTreeView);

app.filter("clientCa", clientCa);

app.constant("API_URL", "http://localhost:3000/");