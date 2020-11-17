import template from './template.html';

const dirTreeView = function() {
	return {
		restrict: 'E',
		
		scope: {
			items: '='
		},

		link: function(scope) {
			scope.toggle = function(item) {
				item.active = !item.active;
			}
		},

		template
	}
};

export default dirTreeView;