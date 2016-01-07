'use strict';
app.controller(
    'AlumniCtrl',
    function AlumniCtrl ($scope, alumniSenderService) {
        $scope.intro = 'Greetings from /s/s -- to /s/s \n with reguards'

        $scope.branch = {
            be:[
                {name:'Aeronautical Engineering',id:1},
                {name:'Agricultural Engineering',id:2},
                {name:'Automobile Engineering',id:3},
                {name:'Applied Electronics and Instrumentation',id:4},
                {name:'Biochemical Engineering',id:5},
                {name:'Bio Technology',id:6},
                {name:'Bio Medical Engineering',id:7},
                {name:'Chemical Engineering',id:8},
                {name:'Chemical and Alcohol Technology',id:9},
                {name:'Civil Engineering',id:10},
                {name:'Computer Science Engineering',id:11},
                {name:'Electrical & Electronics Engineering', id:12},
                {name:'Electrical Engineering', id:13},
                {name:'Electronics & Communication Engineering', id:14},
                {name:'Electronics & Instrumentation Engineering', id:15},
                {name:'Electronics & Telecomm Engineering', id:16},
                {name:'Electronics Engineering', id:17},
                {name:'Electronics Instrumentation & Control', id:18},
                {name:'Environmental Engineering', id:19},
                {name:'Food Technology', id:20},
                {name:'Industrial Engineering', id:21},
                {name:'Industrial Production Engineering', id:22},
                {name:'Information Technology', id:23},
                {name:'Instrumentation & Control', id:24},
                {name:'Instrumentation Engineering', id:25},
                {name:'Leather Technology', id:26},
                {name:'Man Made Fibre Technology', id:27},
                {name:'Manufacturing Technology', id:28},
                {name:'Marine Engineering', id:29},
                {name:'Material Science', id:30},
                {name:'Mechanical & Industrial Engineering', id:31},
                {name:'Mechanical Engineering', id:32},
                {name:'Mechatronics Engineering', id:33},
                {name:'Nuclear Engineering', id:34},
                {name:'Nano Engineering', id:35},
                {name:'Oil Technology', id:36},
                {name:'Metallurgical Engineering', id:37},
                {name:'Plastic Technology', id:38},
                {name:'Production Engineering', id:39},
                {name:'Textile Technology', id:40},
                {name:'Textile Chemistry', id:41},
                {name:'Textile Engineering', id:42},
                {name:'Production & Industrial Engineering', id:43},
                {name:'Paint Technology', id:44}
            ]
        };

        $scope.brown = 'color:brown';
        $scope.rating = [1,2,3,4,5,6];

        $scope.send = function (alumni, alumniForm) {
            if(alumniForm.$valid == true){
                $scope.alumni = alumni;
                alumniSenderService.sender($scope.alumni);
            }
        }
    }
);

app.factory('alumniSenderService',
    function ($http, $log) {
        return {
            sender:function (alumni) {
                $http({
                    method:'POST',
                    url:'http://localhost:7777/',
                    header:{
                        'Content Type': undefined
                    },
                    data:alumni
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