const dirBold = function() {
	return {
		restrict: 'E',
		transclude: true,

		scope: {
			message: '=',
			alert: '@'
		},

		link: function(scope) {
			scope.showMessage = function() {
				alert(this.alert);
			}
		},

		templateUrl: './src/components/dir-bold/dir-bold.html'
	}
};

export default dirBold;