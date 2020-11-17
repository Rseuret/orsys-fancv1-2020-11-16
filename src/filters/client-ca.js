const clientCa = function() {
	return function(value) {
		return "filtre = " + parseFloat(value).toLocaleString();
	}
};

export default clientCa;