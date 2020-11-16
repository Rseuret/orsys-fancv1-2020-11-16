//Objet litteral "personne"
//Nom, prénom, fonction getNom() -> retourne le nom

//1- Dans l'objet litteral, directement
//2- Déclaration de la fonction en constante, à faire référence dans l'objet literal
//3- Déclaration d'une fonction de callback (affichera le nom dans la console)
//	Fonction à passer en argument de la fonction qu'on va appeler "showName" dans l'objet literal

const getNomGeneral = function() {
	return `${ this.prenom } ${ this.nom }`;
}

const getNomGeneral2 = function(prenom, nom) {
	return `${ prenom } ${ nom }`;
}

const getNomGeneral3 = function(prenom, nom) {
	return `Le prénom + le nom = ${ prenom } ${ nom }`;
}

let personne = {
	nom: "PERROUAULT",
	prenom: "Jérémy",
	
	// getNom: function() {
	// 	return `${ this.prenom } ${ this.nom }`;
	// }

	getNom: getNomGeneral,
	getNom2: function() {
		return getNomGeneral2(this.prenom, this.nom);
	},

	showName: function(fncCallbackShow) {
		return fncCallbackShow(this.prenom, this.nom);
	},

	showName2() { //Autre syntaxe de déclaration de fonction dans un objet literal (ou une classe)

	},

	demoArrow: function() {
		setTimeout(function() {
			console.log(this.nom);
		}, 1000);

		// setTimeout((function() {
		// 	console.log(this.nom);
		// }).bind(this), 1000);

		setTimeout(() => {
			console.log(this.nom);
		}, 1000);

		setTimeout(() => console.log(this.nom), 200);
	}
};

// console.log(personne.getNom());
// console.log(personne.showName(getNomGeneral2));
// console.log(personne.showName(function(prenom) {
// 	return `Le prénom = ${ prenom }.`;
// }));


personne.demoArrow();