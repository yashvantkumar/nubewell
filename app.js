var App = angular.module('App', ['datatables', 'ui.bootstrap']);

App.controller('mainController', ['$scope', 'DTOptionsBuilder', 'DTColumnDefBuilder', '$uibModal', '$http',
    function($scope, DTOptionsBuilder, DTColumnDefBuilder, $uibModal, $http) {

        $scope.data = '';
        $scope.values = '';
        $scope.selectedRow = 0;

        $http({
            type: 'GET',
            url: './data.json',
            dataType: 'json',
        }).then((d) => {
            $scope.data = d.data;
        });

        $scope.toggleHiddenRow = function(id){
            $scope.activeRow = id;
        }; 

        $scope.dtOptions = DTOptionsBuilder.newOptions().withPaginationType('full_numbers');

        $scope.dtColumnDefs = [
            DTColumnDefBuilder.newColumnDef(0),
            DTColumnDefBuilder.newColumnDef(1),
            DTColumnDefBuilder.newColumnDef(2),
            DTColumnDefBuilder.newColumnDef(3),
            DTColumnDefBuilder.newColumnDef(4),
            DTColumnDefBuilder.newColumnDef(5)
        ];

        $scope.editModal = (a) => {
            $scope.values = a;
        }
    }
]);
