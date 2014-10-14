/*
 *
 *
 *
 * MIT Licensed
 *
 */

var app = angular.module('IdeaBoard',['akoenig.deckgrid']);

app.factory('IdeasFactory',function($http,$filter,$q){
    factory.getAllIdeas = function(){
        var promise = $http.get("http://128.199.160.57:9600/dump")
            .then(function(response){
                console.log(response);
                return response.data;
            });

        return promise;
    }
});

app.controller('HomeController', [

    '$scope',

    function initialize ($scope) {

        'use strict';

        $scope.ideas = [
            {content:'hahaha',title:'vvvv'},
            {content:'hahaha',title:'vvvv'},
            {content:'hahaha',title:'vvvv'},
            {content:'hahaha',title:'vvvv'}
        ];

        $scope.FetchAllIdeas = function(){
            IdeasFactory.getAllIdeas().then(function(d){
                if(!d){
                    return;
                }else{
                    $scope.ideas = d;
                }
            });
        }

    }

]);