const maDirective = function() {
	return {
		restrict: 'EA',

		// template: '<div>par exemple</div>',
		// template: '<div>par exemple <ng-transclude></ng-transclude> </div>',
		templateUrl: './src/components/ma-directive/ma-directive.html' //charger le contenu du fichier HTML
	}
};

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

const dirTooltip = function() {
	return {
		restrict: 'A',
		transclude: true,
		replace: true,

		scope: {
			dirTooltip: '@'
		},

		link: function(scope) {
			scope.estAffiche = false;

			scope.afficher = function() {
				this.estAffiche = true;
			};

			scope.cacher = function() {
				this.estAffiche = false;
			};
		},

		templateUrl: './src/components/dir-tooltip/dir-tooltip.html'
	}
};

export { maDirective, dirBold, dirTooltip };