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
        $scope.dtOptions = DTOptionsBuilder.newOptions()
            .withPaginationType('full_numbers')
            .withDisplayLength(2)
            .withDOM('pitrfl');
        $scope.dtColumnDefs = [
            DTColumnDefBuilder.newColumnDef(0),
            DTColumnDefBuilder.newColumnDef(2).notSortable()
        ];

        $scope.editModal = (a) => {
            $('#editModal').modal({});
            $scope.values = a;
        }
    }
]);















































// angular.module('App')
//     .controller('mainController', ['$scope', 'datatables',
//         function($scope, datatables) {

//         var data = "roger";
//         var name;
//         var vm = this;
//         $scope.name = "hello"
//         $scope.data = "world";
//         vm.dtOptions = DTOptionsBuilder.newOptions()
//             .withPaginationType('full_numbers')
//             .withDisplayLength(3)
//             .withDOM('pitrfl');
//             vm.dtColumnDefs = [
//             DTColumnDefBuilder.newColumnDef(0),
//             // DTColumnDefBuilder.newColumnDef(1).notVisible(),
//             DTColumnDefBuilder.newColumnDef(2).notSortable()
//         ];
//         vm.openModel = function() {
//             console.log(hello)
//         }
// }]);

// // angular.module("main", ['datatables']).controller('mainController', mainController);

