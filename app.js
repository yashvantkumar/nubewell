angular.module("App", ['main']);
angular.module("main",[]);

 angular.module("main")
    .controller("mainController", ($scope) => {
        var data = "roger";
        var name;
        $scope.name = "hello"
        $scope.data = "world";
});

angular.module("main", ['datatables']).controller('WithOptionsCtrl', WithOptionsCtrl);

function WithOptionsCtrl(DTOptionsBuilder, DTColumnDefBuilder) {
    var vm = this;
    vm.dtOptions = DTOptionsBuilder.newOptions()
        .withPaginationType('full_numbers')
        .withDisplayLength(2)
        .withDOM('pitrfl');
    vm.dtColumnDefs = [
        DTColumnDefBuilder.newColumnDef(0),
        DTColumnDefBuilder.newColumnDef(1).notVisible(),
        DTColumnDefBuilder.newColumnDef(2).notSortable()
    ];
}