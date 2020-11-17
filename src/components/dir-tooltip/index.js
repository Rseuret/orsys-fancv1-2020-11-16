import './dir-tooltip.css';

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

export default dirTooltip;