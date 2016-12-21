
angular.module('EchartsPage.services')

.factory('Initialization', ['$q', function($q) {
    var defer = $q.defer();

    init();

    return defer.promise;

    function init() {
        defer.resolve();
    }
}]);
