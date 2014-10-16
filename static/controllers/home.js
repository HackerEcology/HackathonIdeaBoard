/*
 *
 *
 *
 * MIT Licensed
 *
 */

var app = angular.module('IdeaBoard',['akoenig.deckgrid']);

app.factory('IdeasFactory',function($http,$filter,$q){
    var factory = {};
    factory.getAllIdeas = function(){
        var promise = $http.get("/idea")
            .then(function(response){
                console.log(response);
                return response.data;
            });

        return promise;
    };

    factory.postIdea = function(data){
        var promise = $http.post('/idea', data);
        return promise;
    };
    return factory;
});

app.controller('HomeController', [

    '$scope','$http','IdeasFactory',

    function initialize ($scope,$http,IdeasFactory) {

        'use strict';

        $scope.ideas = [];

        $scope.FetchAllIdeas = function(){
            IdeasFactory.getAllIdeas().then(function(d){
                if(!d){
                    return;
                }else{
                    $scope.ideas = d;
                }
            });
        };

        $scope.FetchAllIdeas();

        $scope.addIdea = function(){
            
            IdeasFactory.postIdea({
                title: $scope.title,
                description: $scope.description,
                user_id: $scope.user_id,
                email: $scope.email
            }).success(function(d){
            $scope.FetchAllIdeas(); //});
            //IdeaFactory.postIdea($scope.quoteTxt,$scope.authorNames,$scope.sourceNames,$scope.linkNames,$scope.tagNames,$window.sessionStorage.getItem('token')).then(function(d) {//.success(function(d) {//

            //console.log("anyway1");
            //$scope.searchMyQuote();
            /*
            if(!d){
                console.log("no data returned.");
                return;
            }else{
                // $scope.searchMyQuote();
                $scope.myInsights = d.reverse();
            }*/

            //console.log($scope.currentInsights);
        });

        };


        
    }

]);