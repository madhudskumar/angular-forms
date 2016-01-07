'use strict';
app.controller(
    'EmployeeCtrl',
    function EmployeeCtrl ($scope, employeeSenderService) {
        $scope.intro = "greetings to -- /s/s bal bla bla to /s/s students working in ur organisation";

        $scope.cl = [
            {id:1,name:"TECH KNOWLEDGE/SKILL", ctrl:'employee.ts'},
            {id:2,name:"GENERAL COMMUNICATION SKILL", ctrl:'employee.gc'},
            {id:3,name:"ABILITY TO WORK IN A TEAM", ctrl:'employee.atw'},
            {id:4,name:"PLANNING AND ORGANISATION", ctrl:'employee.po'},
            {id:5,name:"CREATIVE/INNOVATIVE APPROACH", ctrl:'employee.ci'},
            {id:6,name:"ABILITY TO TAKE UP EXTRA RESPONSIBILITY", ctrl:'employee.ex'},
            {id:7,name:"INVOLVEMENT IN SOCIAL ACTIVITY", ctrl:'employee.sa'},
            {id:8,name:"ABILITY TO TAKE DECISIONS", ctrl:'employee.d'},
            {id:9,name:"ETHICAL VALUES", ctrl:'employee.ev'},
            {id:10,name:"LEARNING", ctrl:'employee.l'},
            {id:11,name:"DISCIPLINE AND PUNCTUALITY", ctrl:'employee.dp'}
        ];

        $scope.val = [
            {id:1},
            {id:2},
            {id:3},
            {id:4},
            {id:5},
        ];

        $scope.send = function (employee, employeeForm) {
            if(employeeForm.$valid){
                $scope.employee = employee;
                senderService.send($scope.employee);
            }
        };
    }
);

app.filter(
    'assigner',
    function () {
        return function (ctrl) {
            return ctrl;
        }
    }
);

app.factory('employeeSenderService',
    function ($http, $log) {
        return{
            send: function (employee) {
                $http({
                    method: 'POST',
                    url: 'http://localhost:7777/employee',   //TODO:!!##please definr the url here##
                    headers: {
                        'Content-Type': undefined
                    },
                    data: employee
                }).then(function (data,status,headers,config) {
                    $log.info(data,status,headers,config);
                    console.log('succes');
                }, function (data,status,headers,config) {
                    $log.info(data,status,headers,config);
                    console.log('fail');
                });
            }
        }
    }
);