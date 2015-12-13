(function(angular) {
    'use strict';
    angular.module('eroMartin.pagetopDiretcive', []).directive('pageTop', PageTopDirectiveFunc);

    // PageTopDirectiveFunc.$inject = ['$scope'];

    function PageTopDirectiveFunc() {
        return {
        	'restrict': 'E',
        	'templateUrl': 'partial/_pagetop.html'
        };
    }
})(window.angular);