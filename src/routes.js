import home from './views/home';
import clients from './views/clients';

const routes = [ '$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	//Avec ce mode, on pourra avoir des liens sans le '#!'
	$locationProvider.html5Mode(true);

	$routeProvider
		.when('/', home)
		.when('/clients', clients)
}];

export default routes;