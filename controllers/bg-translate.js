resumeApp.controller("mainCtrlBg", mainCtrlBg);


function mainCtrlBg($scope) {
	'use strict';
	$scope.test = "Bularian";
}
resumeApp.config(['$routeProvider',
            function ($routeProvider) {
		$routeProvider.
		when('/bg', {
			templateUrl: 'partials/personals-bg.html',
			controller: 'mainCtrlBg'

		}).
		when('/education/bg', {
			templateUrl: 'partials/education-bg.html',
			controller: 'mainCtrlBg'

		}).
		when('/experience/bg', {
			templateUrl: 'partials/experience-bg.html',
			controller: 'mainCtrlBg'

		}).
		when('/skills/bg', {
			templateUrl: 'partials/skills-bg.html',
			controller: 'mainCtrlBg'

		}).
		when('/languages/bg', {
			templateUrl: 'partials/languages-bg.html',
			controller: 'mainCtrlBg'

		}).
		when('/projects/bg', {
			templateUrl: 'partials/projects-bg.html',
			controller: 'mainCtrlBg'

		}).
		otherwise({
			redirectTo: '/bg'
		});
            }]);