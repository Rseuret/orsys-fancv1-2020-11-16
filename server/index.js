const express = require("express");
const app = express();
const bodyParser = require('body-parser');

app.disable("x-powered-by");
app.listen(3000, () => {
	console.log("Server démarré sur le port 3000");
});

app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);

    next();
});

let ids = 3;
const clients = [
	{ id: 1, name: "DUPONT", firstName: "Albert" },
	{ id: 2, name: "MORGAN", firstName: "John" }
];


//GET -> Récupérer la liste
app.get("/client", (req, res, next) => {
	//Retourne la liste des clients
	res.json(clients);
});


//POST -> Ajouter un client
app.post("/client", (req, res, next) => {
	let client = req.body; //On récupère le client

	//On lui affecte un ID
	client.id = ids++;

	//On l'ajoute à la liste
	clients.push(req.body);

	//On retourne le client complet (avec son ID)
    res.json(client);
});


//PUT -> Modifier un client
app.put("/client/:id", (req, res, next) => {
	let client = req.body; //On récupère le client

	//On réaffecte son ID
	client.id = req.params.id;

	//On recherche le client à remplacer
	let index = clients.indexOf(clients.find(c => c.id == req.params.id))

	//On remplace le client si trouvé
	if (index >= 0) {
		clients[index] = client;
		res.json(true);
	}

	else {
		res.json(false);
	}
});


//DELETE -> Supprimer un client
app.delete("/client/:id", (req, res, next) => {
	//On cherche le client et on le supprime
	let index = clients.indexOf(clients.find(c => c.id == req.params.id))

	//On supprime le client si trouvé
	if (index >= 0) {
		clients.splice(index, 1);
		res.json(true);
	}

	else {
		res.json(false);
	}
});