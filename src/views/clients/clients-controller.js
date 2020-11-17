const clientsCtrl = [ '$scope', function($scope) {
	$scope.formClient = { };
	$scope.clients = [
		{ nom: "par exemple", prenom: "toto", ca: 123456 }
	];

	$scope.ajouterClient = function() {
		this.clients.push(this.formClient);
		this.formClient = {};
	}

	$scope.ajouterClientArrow = () => {
		//La fonction fléchée n'est pas attachée au contexte
		//Puisqu'une fonction fléchée utilise le contexte dans lequel elle est déclarée
		//Donc this n'existe pas
		$scope.clients.push($scope.formClient);
		$scope.formClient = {};
	}
} ];

export default clientsCtrl;