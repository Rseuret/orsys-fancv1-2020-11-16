// déclaration de variables
// var nom; //la variable est globale
// var nom = "petit nom";
// let //la variable est au scope

// const est comme let, sauf que c'est une variable qui ne pourra pas être modifiée

unefonction() {
	if (test) {
		var nom = "test";
		let name = "toto";
		const fistname = "babar";

		//nom disponible
		//name disponible

		name = "b2";
		firstname = "toto"; //IMPOSSIBLE
	}

	//nom disponible
	//name disponible n'est pas disponible
}





//Déclaration des fonctions
nomFonction("arg1", 1, 3); //CA FONCTIONNERA

function nomFonction(arg1, arg2, arg3) {
	if (arg3 == null) {

	}

	if (arg3 === undefined) {
		//ALORS arg3 N'A PAS ETE DONNE
	}

	if (null == undefined) { //VRAI

	}

	if (null === undefined) { //FAUX

	}

	if ("5" == 5) { //VRAI

	}

	if ("5" === 5) { //FAUX

	}
}

// function nomFonction(arg1, arg2) { //PAS DE SURCHARGE

// }

//Appel à la fonction
nomFonction("arg1", 1, 3);
nomFonction("arg1", 1, null);
nomFonction("arg1", 1);
nomFonction("arg1");
nomFonction();
nomFonction("arg1", 1, 3, 4);




maFonction(1, 2); //NE FONCTIONNERA PAS

const maFonction = function(arg1, arg2) {
	return "ok";
}

maFonction(1, 2); //FONCTIONNERA


function demoCallback(arg1, fnc) {
	fnc(function() {
		"autre chose, etc";
	}, "test");
}

demoCallback("coucou", maFonction);

alert("message")
console.log("message");

demoCallback("coucou", alert);
demoCallback("coucou", console.log);


demoCallback("coucou", maFonction()); //NE FONCTIONNERA PAS


const maFonction2 = function(arg1, arg2) {
	return function(fncCallback) {
		fncCallback();
		//tout un tas d'autres traitements
	};
}

demoCallback("coucou", maFonction2()); //FONCTIONNERA




const callbackIfTrue = function(fncCallback, value) {
	if (value) {
		fncCallback("identique");
	}
}

// if (5 == "5") {
// 	alert("identique");
// }

// if (5 == "5") {
// 	console.log("identique");
//}


callbackIfTrue(alert, (5 == "5"));
callbackIfTrue(console.log, (5 == "5"));
callbackIfTrue(uneAutreFonction, (5 == "5"));


setTimeout(function() { //FONCTION "ANONYME", UNE FONCTION DECLAREE AU MOMENT DE SON UTILISATION
	alert("ok au bout de 5 secondes");
}, 5000);



let array = [ 5, 4, 3, "test", [ "autre tableau" ], function() { ... } ];

console.log(array[0]); // 5
console.log(array[5]()); // déclenchera l'appel de la fonction

let objLitteral = {
	nom: "BABAR",
	prenom: "Toto",

	getNom: function() {
		return this.nom + " " + this.prenom;
	},

	list: [ "..." ]
};

console.log(objLitteral.nom); // BABAR
console.log(objLitteral.getNom); // function() { return this.nom + " " + this.prenom; }
console.log(objLitteral.getNom()); // BABAR Toto

console.log(objLitteral["prenom"]); //Toto


//Classes et interfaces
//ES6 (ECMAScript 6)

class Personne {
	nom = "toto";
	prenom = "le prénom";

	constructor() {

	}

	getNom() {
		// return this.nom + " " + this.prenom;
		return `${ this.nom } ${ this.prenom }`;
	}
}

interface IPersonne {

}

class Personne implements IPersonne {

}

class Client extends Personne {

}

//ES5 (ECMAScript 5)
function PersonneES5(arg1, arg2) { //Déclaration de la classe + déclaration du constructeur
	// Personne.call(this, arg1, arg2); //Héritage ave arguments constructeur
	nom = "le nom";
	//...
}


let p = new Personne();
let p2 = new PersonneES5();









//Fonctions fléchées
const maFonction = function() {

}

const maFonctionArrow = () => {

}

maFonction();
maFonctionArrow();


const maFonction2 = function(arg1) {

}

const maFonctionArrow2 = (arg1) => {

}

const maFonctionArrow2 = arg1 => {

}


const maFonction3 = function(arg1, arg2) {

}

const maFonctionArrow3 = (arg1, arg2) => {

}


const maFonction4 = function(arg1, arg2) {
	return arg1 * arg2;
}

const maFonctionArrow4 = (arg1, arg2) => {
	return arg1 * arg2;
}

const maFonctionArrow4 = (arg1, arg2) => arg1 * arg2;


setTimeout(() => {

}, 1000);



//Boucles
for (let i = 0; i < 5; i++) {

}

for (let index in array) {
	console.log(array[index]);
}

for (let value of array) {
	console.log(value);
}


for (let i = 0; i < 5; i++) {
	setTimeout(function() {
		console.log(i); //la fonction, elle s'exécute au bout d'une seconde, et DONC le i a changé
	}, 1000);
}

//res => 5, 5, 5, 5, 5


for (let i = 0; i < 5; i++) {
	setTimeout(() => {
		console.log(i); //la fonction, elle s'exécute au bout d'une seconde, MAIS avec le contexte actuel
	}, 1000);
}

//res => 0, 1, 2, 3, 4



//Fonction de closures
let a = 5;

let fnc = function() {
	let a = 5;
}

fnc();

(function() {
	let a = 5;
})();

(() => {
	let a = 5;
})();



//Prototypes
//Méthode à des classes, objets

"une chaine".toUpperCase();

String.prototype.toUpperCase2 = function() {
	return "AUTRE CHAINE";
}

"une chaine".toUpperCase2();

String.prototype.toUpperCase = function() {
	return "AUTRE CHAINE HACKED";
}
"une chaine".toUpperCase();

Personne.prototype.autreMethod = function() {
	//...
}