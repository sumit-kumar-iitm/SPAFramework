/**
 * Created by skumar39 on 5/20/15.
 */

angular.module("psFramework").directive("psFramework", function(){
    return {
        transclude: false,
        scope: {
            title: '@',
            subtitle: '@',
            iconFile: '@'
        },
        controller: "psFrameworkController",
        templateUrl: "ext-modules/exFramework/psFrameworkTemplate.html"
    }
});