const appel2 = function() {
	console.log("OK C BON TOUT EST RECU");
};

// const appel1 = function() {
// 	//Ajax (simulé par timeout)

// 	setTimeout(appel2, 2000);
// };

// setTimeout(appel1, 1000);


// setTimeout(function() {
// 	//1er appel

// 	setTimeout(function() {
// 		console.log("OK C BON TOUT EST RECU");
// 	}, 2000);
// }, 1000);

let promise = new Promise(function(resolve, error) {
	//resolve => si tout va bien, on déclenche cette fonction (dans le then)
	//error => si tout ne va bien, on déclenche cette fonction (dans le catch)

	if (true) {
		setTimeout(resolve, 1000);
	}

	else {
		error();
	}
});

const appel1 = function() {
	return new Promise(function(resolve, error) {
		console.log("APPEL 1 TERMINE ...");
		setTimeout(resolve, 2000);
	});
};

const appelerror = function() {
	console.log("ERROR ....");
};

promise
	.then(appel1)
	.then(appel2)
	.catch(appelerror);

//await => dans une fonction préfixée async


// (async function() {
// 	await promise.then(appel1);
// 	// console.log("APPEL 2");
// 	appel2();
// })();


const asyncFonction = async () => {
	try {
		await promise.then(appel1);
		appel2();
	}

	catch (err) {
		console.log("ERROR ...");
	}
};

asyncFonction();


let pers = {
	maFonction: async function() {

	},

	async maFonction2() {

	}
}