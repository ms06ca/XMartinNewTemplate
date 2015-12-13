(function (angular) {
    'use strict';
    angular.module('eroMartin', [
        'ngTouch',
        'ngRoute',
        'ngAnimate',
        // 'eroMartin.controllers',
        // 'eroMartin.services',
        'eroMartin.directives'
    ]).config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/videos', {
                templateUrl: 'partial/_list.html',
                // controller: 'VideoListCtrl'
            })
            .when('/videos/:id', {
                templateUrl: 'partial/_detail.html',
                // controller: 'VideoDetailCtrl'
            })
            /*.when('/videos/:name', {
                templateUrl: 'partial/_namelist.html',
                controller: 'VideoNameCtrl'
            }).when('/videos/:cat', {
                templateUrl: 'partial/_catlist.html',
                controller: 'VideoCategoryCtrl'
            })*/.otherwise({
                redirectTo: '/videos'
            });
    }]);
})(window.angular);
