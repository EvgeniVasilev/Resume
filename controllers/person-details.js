resumeApp.controller("personalDetails", personalDetails);

function personalDetails($scope, $window) {
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


	$scope.change = function () {
		$window.location = $window.location.href + "Resume/#/" + $scope.lng;


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

		} else {
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
	$scope.personal = [
		{
			"1. Full Name:": "Evgeni Georgiev  Vasilev"
				},
		{
			"2. Address: ": "City of Pernik"
				},
		{
			"3. GSM: ": "0898/ 93-81-93"
				},
		{
			"4. E-mail: ": "evgeni.vasilev0912gmail.com"
				}
            ];
	$scope.education = [
		{
			"1. Master Degree in Psychology: ": "University of Sofia – 'Snt. Climent Ohridski'"
				},
		{
			"2. High School: ": "Nature and Mathematics - 'Hristo Smirnenski - Pernik'"
				},
		{
			"3. Certification and Diplomas:  ": "Microsoft Specialist: »»  1. Certification Number : E842-7422 »»    2. Certification/Version: Programming in HTML5 with JavaScript and CSS3   Specialist"
				}
            ]
	$scope.experience = [
		{
			"1. Aviation Security Officer: ": "Airport Sofia – 2002/2009"
				},
		{
			"2. On-air Broadcast Technician and Web Site Administrator: ": "Local Cable TV Network – Pernik 2009/2011"
				},
		{
			"3. Freelance Web Development: ": "2011 – 2013"
				},
		{
			"4. Web Developer – term contract: ": "Web Factory 2013 – June/July"
				},
		{
			"5. Freelance Web Development: ": "2013 – July/ 2014 – January"
				},
		{
			"6. PHP Web Development: ": "Support BG 2014 – January – March"
				},
		{
			"7. Senior Front-end Developer: ": "GDMFX: 2014 August – 2015 February"
				},
            ]
	$scope.skills = [
		{
			"1. Hyper Text Markup  Languages:  ": "HTML – 4.1, HTML – 5, XML"
				},
		{
			"2. Style Sheet Languages: ": "CSS – 2.1, CSS – 3"
				},
		{
			"3. Client Side Scripts: ": "JavaScript – Procedural and OOP, AJAX jQuery, jQuery Mobile, DOM Scripting, JSON, Angular.js"
				},
		{
			"4. Server Side Scripts: ": "PHP – Procedural and OOP, MVC Architecture"
				},
		{
			"5. Database: ": "MySql"
				},
		{
			"6. Web Graphics and Design: ": "Macromedia Fireworks"
				},
		{
			"7. Version Control System: ": "GIT"
				},
		{
			"8. Compound Front – end Frameworks: ": "Twitter Bootstrap"
				},
		{
			"9. Other Technologies: ": "Sass, Apache Cordova, Vagrant, Flash, Drupal"
				},
		{
			"10. Integrated Development Enviornment: ": "PHP Storm, NetBeans, Visual Studio"
				},
		{
			"11. OS:": "Windows 8.1 (preferred), Linux – Ubuntu Distribution"
				}

            ];
	$scope.languages = [
		{
			"English language: ": "IELTS Certificate"
				},
		{
			"Russian Language: ": "Speak and read"
				}
            ];
	$scope.projects = [
		{
			"http://www.be-web.bg": "www.be-web.bg"
				},
		{
			"http://www.greenlifehotel-bansko.bg": "www.greenlifehotel-bansko.bg"
				},
		{
			"http://www.gdmfx.com": "www.gdmfx.com"
				},
		{
			"http://www.gdmfx.com/promo-binary-options": "www.gdmfx.com/promo-binary-options"
				},
		{
			"http://www.gdmfx.com/demo-trading-account": "www.gdmfx.com/demo-trading-account"
				},
		{
			"http://evgenivasilev.github.io/Angular-Single-Page-Sample/": "http://evgenivasilev.github.io/agular-Single-Page-Sample/"
				},
		{
			"http://evgenivasilev.github.io/Geolocation-Sample/": "http://evgenivasilev.github.io/Geolocation-Sample/"
				},
		{
			"http://evgenivasilev.github.io/Vanila-JS-Form-Validation/": "http://evgenivasilev.github.io/Vanila-JS-Form-Validation/"
				},
		{
			"http://evgenivasilev.github.io/jQuery-Sample-for-Building-Simple-Equation-Test/": "http://evgenivasilev.github.io/jQuery-Sample-for-Building-Simple-Equation-Test/"
				},
		{
			"http://evgenivasilev.github.io/Horizontal-Bar-Chart/": "http://evgenivasilev.github.io/Horizontal-Bar-Chart/"
				},
		{
			"http://evgenivasilev.github.io/OOP-JavaSCript-Sample/": "http://evgenivasilev.github.io/OOP-JavaSCript-Sample/"
				},
		{
			"http://evgenivasilev.github.io/Angular-To-Do-Application/": "http://evgenivasilev.github.io/Angular-To-Do-Application/"
				},
		{
			"http://evgenivasilev.github.io/Web-Form/": "http://evgenivasilev.github.io/Web-Form/"
				},
		{
			"http://evgenivasilev.github.io/BPI/": "http://evgenivasilev.github.io/BPI/"
				},
		{
			"http://evgenivasilev.github.io/Flash-Weather-Application/": "http://evgenivasilev.github.io/Flash-Weather-Application/"
				},
		{
			"http://evgenivasilev.github.io/Angular-Form-Validation/": "http://evgenivasilev.github.io/Angular-Form-Validation/"
				}
            ]

}


resumeApp.config(['$routeProvider',
            function ($routeProvider) {
		'use strict';
		$routeProvider.
		when('/en', {
			templateUrl: 'partials/personals.html'
		}).
		when('/education/en', {
			templateUrl: 'partials/education.html'
		}).
		when('/experience/en', {
				templateUrl: "partials/experience.html"
			})
			.when('/skills/en', {
				templateUrl: "partials/skills.html"
			}).
		when('/languages/en', {
			templateUrl: "partials/languages.html"
		}).
		when('/projects/en', {
			templateUrl: 'partials/projects.html'
		}).
		otherwise({
			redirectTo: '/en'
		});
            }]);