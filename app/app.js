'use strict';

var app = angular.module(
    'app',
    ['ngResource','ngRoute']
);

//routers
app.config(function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    $routeProvider
        .when(
            '/employee',
            {
                templateUrl:'view/partials/employee.html',
                controller:'EmployeeCtrl'
            }
        )
        .when(
            '/alumni',
            {
                templateUrl:'view/partials/alumni.html',
                controller:'AlumniCtrl'
            }
        ).
        when(
            '/',
            {
                templateUrl:'view/partials/index.html',
                controller:'MainCtrl'
            }
        )
        .otherwise({redirectTo:'/'});
});
