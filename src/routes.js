import home from './views/home';
import clients from './views/clients';

const routes = [ '$routeProvider', function($routeProvider) {
	$routeProvider
		.when('/', home)
		.when('/clients', clients)
}];

export default routes;