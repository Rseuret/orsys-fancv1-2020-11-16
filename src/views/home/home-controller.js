let homeCtrl = [ //On utilise un tableau pour contrer la problématique de changement des noms de variables (ex : minificateurs, obfuscateurs, etc.)
	"$scope", //Le noms des dépendances utilisées dans la fonction (dans l'ordre des arguments)
	"API_URL",
	function($scope, API_URL) { //Injection de dépendances, le nom strict (sensible à la casse !)
		
//Scope du controller == $scope

		$scope.apiUrl = API_URL;
	
		$scope.nom = "Babar";
		$scope.tableau = [ 1, 23, 4 ];

		//Liste des items pour le TreeView
		$scope.items = [
			{
				name: "Element 1",
				children: [
					{
						name: "Element 1.1",
						children: [
							{ name: "Element 1.1.1" },
							{
								name: "Element 1.1.2",
								children: [
									{ name: "Element 1.1.2.1" }
								]
							}
						]
					},
					
					{
						name: "Element 1.2",
						children: [
							{ name: "Element 1.2.1" }
						]
					}
				]
			},

			{ name: "Element 2" },
			{ name: "Element 3" }
		];


		$scope.maFonction = function() {
			//...
			//Ici, le mot-clé this existera
		}

		$scope.showName = function() {
			alert(this.nom);
			console.log(this.nom);
		}
	}
];

export default homeCtrl;