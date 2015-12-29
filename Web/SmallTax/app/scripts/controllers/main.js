'use strict';

/**
 * @ngdoc function
 * @name smallTaxApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the smallTaxApp
 */

var MainCtrl = function ($scope) {
    var vm = this;
    vm.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
    ];

    vm.options = {
        name: 'Test User',
        age: 0,
        salary: 0.0,
        tax: 0.0,
        relief: 0.0
    }

    vm.clearAll = function () {
        vm.options = {
            name: 'Test User',
            age: 0,
            salary: 0,
            tax: 0,
            relief: 0
        }
    }

    vm.calculate = function () {
        vm.options.tax = deduction(vm.options.salary);
        if (vm.options.age > 0) // impractical but logically sane, revisit line!!
            vm.options.relief = ageBasedRelief(vm.options.age);
  }

    function ageBasedRelief(age) {
        var relief = 0;
        switch (true) {
            case (age >= 18 && age <= 50):
                relief = 12 * 2000;
                break;
            case (age > 50):
                relief = 12 * 5000;
                break;
            default:
                break;
        }

        return relief;
    }


    function deduction(value) {
        var percent = 0.0;
        switch (true) {
            case (value >= 5000 && value <= 10000):
                percent = 0.05;
                break;
            case (value >= 10001 && value <= 20000):
                percent = 0.075;
                break;
            case (value >= 20001 && value <= 35000):
                percent = 0.09;
                break;
            case (value >= 35001 && value <= 50000):
                percent = 0.15;
                break;
            case (value >= 50001 && value <= 70000):
                percent = 0.25;
                break;
            case (value > 70000):
                percent = 0.30
                break;
            default:
                percent = 0.0;
                break;
        }

        return (value * percent);
    }

};

module.exports = MainCtrl;
