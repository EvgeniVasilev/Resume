resumeApp.controller("mainCtrlBg", mainCtrlBg);


function mainCtrlBg($scope) {
	'use strict';
	$scope.personalBg = [
		{
			"1. Име:": "Евгени Георгиев Василев"
				},
		{
			"2. Местоживеене: ": "Град Перник"
				},
		{
			"3. GSM: ": "0898/ 93-81-93"
				},
		{
			"4. Електронна Поща: ": "evgeni.vasilev0912gmail.com"
				}
            ];

	$scope.educationBg = [
		{
			"1. Висше Образование: ": "Магистърска Степен по Психология; Софийски Университет 'Свети Климент Охридски'"
				},
		{
			"2. Средно Образование: ": "Природо-математическа Гимназия  - 'Христо Смирненски' - Перник"
				},
		{
			"3. Сертификати и Дипломи:  ": "Сертифициран Майкрософт Специалист: »»  1. Сертификационнен Номер : E842-7422 »»    2. Сертификация/Версия: Програмиране на HTML5 със JavaScript и CSS3   Специалист"
				}
            ];

	$scope.experienceBg = [
		{
			"1. Авиационна Сигурност: ": "Аерогара София – 2002/2009"
				},
		{
			"2.Ефирен Техник и Уеб Администратор: ": "Локална Кабелна Телевизия: Кракра – Перник 2009/2011"
				},
		{
			"3.Уеб Разработчик на Свободна Практика: ": "2011 – 2013"
				},
		{
			"4. Уеб Разработчик - временнен договор: ": "Web Factory 2013 – Юни/Юли"
				},
		{
			"5. Уеб Разработчик на Свободна Практика: ": "2013 – Юли/ 2014 – Януари"
				},
		{
			"6. PHP Уеб Разработчик ": "Support BG 2014 – Януар/Март"
				},
		{
			"7. Водещ Фронт-енд Разработчик: ": "GDMFX: 2014 Август – 2015 Февруари"
				},
            ]
	$scope.skillsBg = [
		{
			"1. Езици за Маркиране на Хипер-текст:  ": "HTML – 4.1, HTML – 5, XML"
				},
		{
			"2. Езици за Прилагане на Каскадни Стилове: ": "CSS – 2.1, CSS – 3"
				},
		{
			"3. Скриптове от Страна на Клиента : ": "JavaScript – Процедурен и ООП, AJAX jQuery, jQuery Mobile, DOM Scripting, JSON, Angular.js"
				},
		{
			"4. Скриптове от Страна на Кклиента: ": "PHP – Процедурен и ООП, MVC Архитектура"
				},
		{
			"5. СУБД: ": "MySql"
				},
		{
			"6. Уеб Графика и Дизайн: ": "Macromedia Fireworks"
				},
		{
			"7. Система за Контрол на Версиите: ": "GIT"
				},
		{
			"8. Комплексни Фронт-енд Шаблони: ": "Twitter Bootstrap"
				},
		{
			"9. Други Технологии: ": "Sass, Apache Cordova, Vagrant, Flash, Drupal"
				},
		{
			"10. Интегрирани Среди за Разработка: ": "PHP Storm, NetBeans, Visual Studio"
				},
		{
			"11. ОС:": "Windows 8.1 (предпочитана), Linux – Ubuntu Дистрибуция"
				}

            ];
	$scope.languagesBg = [
		{
			"Английски Език: ": "IELTS Certificate"
				},
		{
			"Руски Език: ": "Говоримо, Четене"
		}
            ];

	$scope.projectsBg = [
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
			redirectTo: '/en'
		});
            }]);