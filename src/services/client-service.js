const clientService = function() {
	return {
		clients: [],

		ajouter: function(client) {
			this.clients.push(client);
		},

		ajouterES(client) {
			this.clients.push(client);
		},

		ajouterArrow: (client) => {
			this.clients.push(client);
		}
	}
};

export default clientService;