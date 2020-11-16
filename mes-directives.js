(function() {
	let app = angular.module("myApp");

	app.directive("maDirective", function() {
		return {
			restrict: 'EA',

			template: '<div>par exemple</div>',
			// template: '<div>par exemple <ng-transclude></ng-transclude> </div>',
			// templateUrl: './fichier-template.html' //charger le contenu du fichier HTML
		}
	});

	app.directive("dirBold", function() {
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

			template: '<div> <ng-transclude></ng-transclude> <strong ng-click="showMessage()">{{ message }}</strong> </div>'
		}
	});

	app.directive("dirTooltip", function() {
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

			template:	'<div class="dir-tooltip">' +
						'	<div class="dir-tooltip-content" ng-mouseenter="afficher()" ng-mouseleave="cacher()">' +
						'		<ng-transclude></ng-transclude>' +
						'	</div>' +

						'	<div ng-show="estAffiche" class="dir-tooltip-info">{{ dirTooltip }}</div>' +
						'</div>'
		}
	});
})();