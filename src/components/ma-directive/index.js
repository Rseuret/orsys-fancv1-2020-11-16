import template from './ma-directive.html';

const maDirective = function() {
	return {
		restrict: 'EA',

		// template: template
		template
		// template: '<div>par exemple</div>',
		// template: '<div>par exemple <ng-transclude></ng-transclude> </div>',
		// templateUrl: './src/components/ma-directive/ma-directive.html' //charger le contenu du fichier HTML
	}
};

export default maDirective;