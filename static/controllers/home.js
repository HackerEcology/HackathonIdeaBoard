/*
 *
 *
 *
 * MIT Licensed
 *
 */

var app = angular.module('IdeaBoard',['akoenig.deckgrid']);
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

    }

]);