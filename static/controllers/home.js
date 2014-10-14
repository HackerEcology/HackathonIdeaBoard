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

    '$scope','$http',

    function initialize ($scope,$http) {

        'use strict';

        $scope.ideas = [];
        $http({
            method: 'GET',
            url: 'http://localhost:3001/idea'
        }).success(function(data){
            console.log(data);
            $scope.ideas = data;
        }).error(function(data){

        });

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