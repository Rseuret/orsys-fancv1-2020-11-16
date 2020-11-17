// 2 façons d'exporter : soit un export, export par défaut, soit plusieurs exports, exports nommés

//exemple d'export par défaut
let mavar = 5;

export default mavar;

//exemple d'import
import unevar from './lefichier.js';


//exemple d'export par défaut
let mavar = {
	nom: "TEST",
	prenom: "Démo",
	fnc: function() {
		//...
	}
};

export default mavar;

//exemple d'import
import personne from './lefichier.js';


//exemple d'export par défaut
let mafnc = function() {
	//...
};

export default mafnc;

//exemple d'import
import mafnc from './lefichier.js';
//...
mafnc();






//exemple d'export multiple
let mafnc = function() {
	//...
};

let montab = [
	//....
]

export { mafnc, montab };

//exemple d'import
import { mafnc } from './lefichier.js';
//OU
import { montab } from './lefichier.js';
//OU
import { mafnc, montab } from './lefichier.js';