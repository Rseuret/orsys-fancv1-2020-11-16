angular
	.module("myApp", [ ])
	.controller("homeCtrl",
		[ //On utilise un tableau pour contrer la problématique de changement des noms de variables (ex : minificateurs, obfuscateurs, etc.)
			"$scope", //Le noms des dépendances utilisées dans la fonction (dans l'ordre des arguments)
			function($scope) { //Injection de dépendances, le nom strict (sensible à la casse !)
				
//Scope du controller == $scope
			
				$scope.nom = "Babar";
				$scope.tableau = [ 1, 23, 4 ];

				$scope.formClient = { };
				$scope.clients = [
					{ nom: "par exemple", prenom: "toto", ca: 123456 }
				];

				$scope.maFonction = function() {
					//...
					//Ici, le mot-clé this existera
				}

				$scope.showName = function() {
					alert(this.nom);
					console.log(this.nom);
				}

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
			}
		]
	);