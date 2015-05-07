resumeApp.controller("personalDetails", personalDetails);

function personalDetails($scope, $window, $http) {
	'use strict';
	$scope.lng = "en";
	$scope.resume = "Resume";
	$scope.pDetails = "Personal Details";
	$scope.edu = "Education";
	$scope.workExpr = "Work Experience";
	$scope.cSkills = "Computer Skills";
	$scope.speakLang = "Languages";
	$scope.pProjects = "Projects";
	$scope.ghbs = "Source Code on GitHub:";
	$scope.subject = "Subject:";
	$scope.jspa = "JavaScript Application Developer";

	$window.onload = function () {
		if ($scope.lng === "en") {
			$window.location = "./#/" + $scope.lng;
		}
	}

	$scope.change = function () {
		// $window.location = "./index.html#/" + $scope.lng;
		$window.location = "./#/" + $scope.lng;

		if ($scope.lng === "bg") {
			$scope.resume = "Автобиография";
			$scope.pDetails = "Лични Данни";
			$scope.edu = "Образование";
			$scope.workExpr = "Трудов Опит";
			$scope.cSkills = "Компютърни Умения";
			$scope.speakLang = "Езици";
			$scope.pProjects = "Проекти";
			$scope.ghbs = "Сорс код GitHub:";
			$scope.subject = "Относно:";
			$scope.jspa = "JavaScript Разработчик на Приложения";

		} else if ($scope.lng = "en") {
			$scope.resume = "Resume";
			$scope.pDetails = "Personal Details";
			$scope.edu = "Education";
			$scope.workExpr = "Work Experience";
			$scope.cSkills = "Computer Skills";
			$scope.speakLang = "Languages";
			$scope.pProjects = "Projects";
			$scope.ghbs = "Source Code on GitHub:";
			$scope.subject = "Subject:";
			$scope.jspa = "JavaScript Application Developer";
		}

	}

	// personal details
	var promice_personal = $http.get("data_en/personals.json");
	promice_personal.success(function (data) {
		$scope.personal = data;
	});

	// education
	var promice_education = $http.get("data_en/education.json");
	promice_education.success(function (data) {
		$scope.education = data;
	});

	// work experience	
	var promice_experience = $http.get("data_en/experience.json");
	promice_experience.success(function (data) {
		$scope.experience = data;
	});

	// skills
	var promice_skills = $http.get("data_en/skills.json");
	promice_skills.success(function (data) {
		$scope.skills = data;
	});

	// languages
	var promice_languages = $http.get("data_en/languages.json");
	promice_languages.success(function (data) {
		$scope.languages = data;
	});

	// projects
	var promice_projects = $http.get("data_en/projects.json");
	promice_projects.success(function (data) {
		$scope.projects = data;
	});
}


resumeApp.config(['$routeProvider',
            function ($routeProvider) {
		'use strict';
		$routeProvider.
		when('/en', {
			templateUrl: 'partials/en/personals.html'
		}).
		when('/education/en', {
			templateUrl: 'partials/en/education.html'
		}).
		when('/experience/en', {
				templateUrl: "partials/en/experience.html"
			})
			.when('/skills/en', {
				templateUrl: "partials/en/skills.html"
			}).
		when('/languages/en', {
			templateUrl: "partials/en/languages.html"
		}).
		when('/projects/en', {
			templateUrl: 'partials/en/projects.html'
		}).
		otherwise({
			redirectTo: '/en'
		});
            }]);