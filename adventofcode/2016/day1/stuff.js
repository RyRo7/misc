(function () {
'use strict';

angular.module('adventOfCodeDay1', [])
.controller('day1Controller', function ($scope) {
    var data = "R2, L1, R2, R1, R1, L3, R3, L5, L5, L2, L1, R4, R1, R3, "+
               "L5, L5, R3, L4, L4, R5, R4, R3, L1, L2, R5, R4, L2, R1, "+
               "R4, R4, L2, L1, L1, R190, R3, L4, R52, R5, R3, L5, R3, "+
               "R2, R1, L5, L5, L4, R2, L3, R3, L1, L3, R5, L3, L4, R3, "+
               "R77, R3, L2, R189, R4, R2, L2, R2, L1, R5, R4, R4, R2, "+
               "L2, L2, L5, L1, R1, R2, L3, L4, L5, R1, L1, L2, L2, R2, "+
               "L3, R3, L4, L1, L5, L4, L4, R3, R5, L2, R4, R5, R3, L2, "+
               "L2, L4, L2, R2, L5, L4, R3, R1, L2, R2, R4, L1, L4, L4, "+
               "L2, R2, L4, L1, L1, R4, L1, L3, L2, L2, L5, R5, R2, R5, "+
               "L1, L5, R2, R4, R4, L2, R5, L5, R5, R5, L4, R2, R1, R1, "+
               "R3, L3, L3, L4, L3, L2, L2, L2, R2, L1, L3, R2, R5, R5, "+
               "L4, R3, L3, L4, R2, L5, R5";
    $scope.part1Output="";
    $scope.part2Output="";

    //part 1
    //************************
    function part1(input) {

      var instructions = input.split(', ');
      var currPos = [0, 0];
      var dir;

      if ((/L/).test(instructions[0]) === true) {
        dir = 'west';
        var num = instructions[0].replace('L', '');
        var blocks = parseInt(num);
        currPos[0] = currPos[0] - blocks;
      } else {
        dir = 'east';
        var num = instructions[0].replace('R', '');
        var blocks = parseInt(num);
        currPos[0] += blocks;
      }

      for (var i = 1; i < instructions.length; i++) {
        if ((/L/).test(instructions[i]) === true) {
          var num = instructions[i].replace('L', '');
          var blocks = parseInt(num);

          if (dir == 'north') {
            dir = 'west';
            currPos[0] -= blocks;
          } else if (dir == 'east') {
            dir = 'north';
            currPos[1] += blocks;
          } else if (dir == 'south') {
            dir = 'east';
            currPos[0] += blocks;
          } else if (dir == 'west') {
            dir = 'south';
            currPos[1] -= blocks;
          }

        } else {
          var num = instructions[i].replace('R', '');
          var blocks = parseInt(num);

          if (dir == 'north') {
            dir = 'east';
            currPos[0] += blocks;
          } else if (dir == 'east') {
            dir = 'south';
            currPos[1] = currPos[1] - blocks;
          } else if (dir == 'south') {
            dir = 'west';
            currPos[0] -= blocks;
          } else {
            dir = 'north';
            currPos[1] += blocks;
          }
        }
      }

      $scope.part1Output = Math.abs(currPos[0]) + Math.abs(currPos[1]);
    }

    //*************************************************************************

    //part 2
    //************************
    function part2(input) {
        var steps = data.split(',');

        var x = 0, y = 0;
        var d = [0, 1];
        var visited = new Set();
        visited.add(`${x},${y}`);

        function solve() {
            for (let i = 0; i < steps.length; i++) {
                var step = steps[i].trim();
                var direction = step.charAt(0);
                var distance = +step.substr(1);
                d = direction === 'L' ? [d[1], -d[0]] : [-d[1], d[0]];
                for (let j = 0; j < distance; j++) {
                    x += d[0];
                    y += d[1];
                    var key = `${x},${y}`;
                    if (visited.has(key)) {
                        return Math.abs(x) + Math.abs(y);
                    } else {
                        visited.add(key);
                    }
                }
            }
            return Math.abs(x) + Math.abs(y);
        }
        $scope.part2Output = solve();
    }

    part1(data);
    part2(data);

});

})();
