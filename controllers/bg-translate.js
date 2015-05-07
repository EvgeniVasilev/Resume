resumeApp.controller("mainCtrlBg", mainCtrlBg);


function mainCtrlBg($scope, $http) {
	'use strict';

	// personal
	var promice_personal = $http.get("data_bg/personal.json");
	promice_personal.success(function (data) {
		$scope.personal_bg = data;
	});

	// education
	var promice_education = $http.get("data_bg/education.json");
	promice_education.success(function (data) {
		$scope.education_bg = data;
	});

	// experience
	var promice_experience = $http.get("data_bg/experience.json");
	promice_experience.success(function (data) {
		$scope.experience_bg = data;
	});

	// skills
	var promice_skills = $http.get("data_bg/skills.json");
	promice_skills.success(function (data) {
		$scope.skills_bg = data;
	});

	// languages
	var promice_languages = $http.get("data_bg/languages.json");
	promice_languages.success(function (data) {
		$scope.languages_bg = data;
	});

	// projects
	var promice_projects = $http.get("data_en/projects.json");
	promice_projects.success(function (data) {
		$scope.projects_bg = data;
	});
}
resumeApp.config(['$routeProvider',
            function ($routeProvider) {
		$routeProvider.
		when('/bg', {
			templateUrl: 'partials/bg/personals-bg.html',
			controller: 'mainCtrlBg'

		}).
		when('/education/bg', {
			templateUrl: 'partials/bg/education-bg.html',
			controller: 'mainCtrlBg'

		}).
		when('/experience/bg', {
			templateUrl: 'partials/bg/experience-bg.html',
			controller: 'mainCtrlBg'

		}).
		when('/skills/bg', {
			templateUrl: 'partials/bg/skills-bg.html',
			controller: 'mainCtrlBg'

		}).
		when('/languages/bg', {
			templateUrl: 'partials/bg/languages-bg.html',
			controller: 'mainCtrlBg'

		}).
		when('/projects/bg', {
			templateUrl: 'partials/bg/projects-bg.html',
			controller: 'mainCtrlBg'

		}).
		otherwise({
			redirectTo: '/en'
		});
            }]);