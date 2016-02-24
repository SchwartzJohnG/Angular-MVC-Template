(function () {
    angular.module("$safeprojectname$", ['ngRoute', 'ui.bootstrap', 'ngResource', 'ngAnimate'])
        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider
            /*
                .when('url/:urlParam1', {
                    templateUrl: '/url/to/template.html',
                    controller: 'BlahController',
                    controllerAs: 'vm'
                })
            */
                .otherwise({
                    templateUrl: '/ngViews/notFound.html'
                });
        }]);
})();