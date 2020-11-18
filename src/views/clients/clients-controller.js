const clientsCtrl = [ '$scope', 'clientService', function($scope, clientService) {
	$scope.formClient = { };
	$scope.clients = clientService.clients;

	$scope.ajouterClient = function() {
		clientService.ajouter(this.formClient);
		this.formClient = {};
	}

	$scope.ajouterClientArrow = () => {
		//La fonction fléchée n'est pas attachée au contexte
		//Puisqu'une fonction fléchée utilise le contexte dans lequel elle est déclarée
		//Donc this n'existe pas
		clientService.ajouter($scope.formClient);
		$scope.formClient = {};
	}
} ];

export default clientsCtrl;