angular
	.module("myApp", [ ])
	.controller("homeCtrl",
		[ //On utilise un tableau pour contrer la problématique de changement des noms de variables (ex : minificateurs, obfuscateurs, etc.)
			"$scope", //Le noms des dépendances utilisées dans la fonction (dans l'ordre des arguments)
			function($scope) { //Injection de dépendances, le nom strict (sensible à la casse !)
				
//Scope du controller == $scope
			
				$scope.nom = "Babar";
				$scope.tableau = [ 1, 23, 4 ];


				$scope.maFonction = function() {
					//...
					//Ici, le mot-clé this existera
				}


				$scope.showName = function() {
					alert(this.nom);
					console.log(this.nom);
				}
			}
		]
	);