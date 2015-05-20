/**
 * Created by skumar39 on 5/20/15.
 */
angular.module("app".config(function ($provide) {
    $provide.decorator("$exceptionHandler", ["$delegate", function($delegate){
        return function (exception, cause) {
            $delegate(exception, cause);
            alert(exception.message);
        };
    }])
}))