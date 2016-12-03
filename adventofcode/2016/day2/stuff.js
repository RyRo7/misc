(function () {
'use strict';

angular.module('adventOfCodeDay2', [])
.controller('day2Controller', function ($scope) {
    var dataArray = [
    "DUURRDRRURUUUDLRUDDLLLURULRRLDULDRDUULULLUUUDRDUDDURRULDRDDDUDDURLDLLDDRRURRUUUDDRUDDLLDDDURLRDDDULRDUDDRDRLRDUULDLDRDLUDDDLRDRLDLUUUDLRDLRUUUDDLUURRLLLUUUUDDLDRRDRDRLDRLUUDUDLDRUDDUDLLUUURUUDLULRDRULURURDLDLLDLLDUDLDRDULLDUDDURRDDLLRLLLLDLDRLDDUULRDRURUDRRRDDDUULRULDDLRLLLLRLLLLRLURRRLRLRDLULRRLDRULDRRLRURDDLDDRLRDLDRLULLRRUDUURRULLLRLRLRRUDLRDDLLRRUDUDUURRRDRDLDRUDLDRDLUUULDLRLLDRULRULLRLRDRRLRLULLRURUULRLLRRRDRLULUDDUUULDULDUDDDUDLRLLRDRDLUDLRLRRDDDURUUUDULDLDDLDRDDDLURLDRLDURUDRURDDDDDDULLDLDLU",
    "LURLRUURDDLDDDLDDLULRLUUUDRDUUDDUDLDLDDLLUDURDRDRULULLRLDDUDRRDRUDLRLDDDURDUURLUURRLLDRURDRLDURUDLRLLDDLLRDRRLURLRRUULLLDRLULURULRRDLLLDLDLRDRRURUUUDUDRUULDLUDLURLRDRRLDRUDRUDURLDLDDRUULDURDUURLLUDRUUUUUURRLRULUDRDUDRLLDUDUDUULURUURURULLUUURDRLDDRLUURDLRULDRRRRLRULRDLURRUULURDRRLDLRUURUDRRRDRURRLDDURLUDLDRRLDRLLLLRDUDLULUDRLLLDULUDUULLULLRLURURURDRRDRUURDULRDDLRULLLLLLDLLURLRLLRDLLRLUDLRUDDRLLLDDUDRLDLRLDUDU",
    "RRDDLDLRRUULRDLLURLRURDLUURLLLUUDDULLDRURDUDRLRDRDDUUUULDLUDDLRDULDDRDDDDDLRRDDDRUULDLUDUDRRLUUDDRUDLUUDUDLUDURDURDLLLLDUUUUURUUURDURUUUUDDURULLDDLDLDLULUDRULULULLLDRLRRLLDLURULRDLULRLDRRLDDLULDDRDDRURLDLUULULRDRDRDRRLLLURLLDUUUDRRUUURDLLLRUUDDDULRDRRUUDDUUUDLRRURUDDLUDDDUDLRUDRRDLLLURRRURDRLLULDUULLURRULDLURRUURURRLRDULRLULUDUULRRULLLDDDDURLRRRDUDULLRRDURUURUUULUDLDULLUURDRDRRDURDLUDLULRULRLLURULDRUURRRRDUDULLLLLRRLRUDDUDLLURLRDDLLDLLLDDUDDDDRDURRL",
    "LLRURUDUULRURRUDURRDLUUUDDDDURUUDLLDLRULRUUDUURRLRRUDLLUDLDURURRDDLLRUDDUDLDUUDDLUUULUUURRURDDLUDDLULRRRUURLDLURDULULRULRLDUDLLLLDLLLLRLDLRLDLUULLDDLDRRRURDDRRDURUURLRLRDUDLLURRLDUULDRURDRRURDDDDUUUDDRDLLDDUDURDLUUDRLRDUDLLDDDDDRRDRDUULDDLLDLRUDULLRRLLDUDRRLRURRRRLRDUDDRRDDUUUDLULLRRRDDRUUUDUUURUULUDURUDLDRDRLDLRLLRLRDRDRULRURLDDULRURLRLDUURLDDLUDRLRUDDURLUDLLULDLDDULDUDDDUDRLRDRUUURDUULLDULUUULLLDLRULDULUDLRRURDLULUDUDLDDRDRUUULDLRURLRUURDLULUDLULLRD",
    "UURUDRRDDLRRRLULLDDDRRLDUDLRRULUUDULLDUDURRDLDRRRDLRDUUUDRDRRLLDULRLUDUUULRULULRUDURDRDDLDRULULULLDURULDRUDDDURLLDUDUUUULRUULURDDDUUUURDLDUUURUDDLDRDLLUDDDDULRDLRUDRLRUDDURDLDRLLLLRLULRDDUDLLDRURDDUDRRLRRDLDDUDRRLDLUURLRLLRRRDRLRLLLLLLURULUURRDDRRLRLRUURDLULRUUDRRRLRLRULLLLUDRULLRDDRDDLDLDRRRURLURDDURRLUDDULRRDULRURRRURLUURDDDUDLDUURRRLUDUULULURLRDDRULDLRLLUULRLLRLUUURUUDUURULRRRUULUULRULDDURLDRRULLRDURRDDDLLUDLDRRRRUULDDD"
    ];
    $scope.part1Output="";
    $scope.part2Output="";
    //part 1
    //*******************
    function part1(data){
        const lines = data.split('\n');

        let x = 1;
        let y = 1;

        const MIN_X = 0;
        const MIN_Y = 0;
        const MAX_X = 2;
        const MAX_Y = 2;
        const WIDTH = 3;

        let code = '';

        for (let i = 0; i < lines.length; i++) {
            for (let j = 0; j < lines[i].length; j++) {
                switch(lines[i].charAt(j)) {
                    case 'U':
                        if (y > MIN_Y) y--;
                        break;
                    case 'D':
                        if (y < MAX_Y) y++;
                        break;
                    case 'L':
                        if (x > MIN_X) x--;
                        break;
                    case 'R':
                        if (x < MAX_X) x++;
                        break;
                }
            }
            code += ((y * WIDTH + x) + 1).toString();
        }
        return code;
    };

    for (var i=0; i<dataArray.length;i++) {
        $scope.part1Output += part1(dataArray[i]);
    };
    console.log("part1", $scope.part1Output);

    //***************************************************************************

    //Part 2
    //*******************
    function part2(data){
        let x = 0;
        let y = 2;

        const MIN_X = 0;
        const MIN_Y = 0;
        const MAX_X = 4;
        const MAX_Y = 4;
        const WIDTH = 5;

        let code = '';

        const grid = [
            null, null, '1', null, null,
            null, '2',  '3', '4',  null,
            '5',  '6',  '7', '8',  '9',
            null, 'A',  'B', 'C',  null,
            null, null, 'D', null, null
        ];

        const grid_index = (x, y) => { return y * WIDTH + x; };

        for (let i = 0; i < data.length; i++) {
            for (let j = 0; j < data[i].length; j++) {
                switch(data[i].charAt(j)) {
                    case 'U':
                        if (y > MIN_Y && grid[grid_index(x, y - 1)] !== null) y--;
                        break;
                    case 'D':
                        if (y < MAX_Y && grid[grid_index(x, y + 1)] !== null) y++;
                        break;
                    case 'L':
                        if (x > MIN_X && grid[grid_index(x - 1, y)] !== null) x--;
                        break;
                    case 'R':
                        if (x < MAX_X && grid[grid_index(x + 1, y)] !== null) x++;
                        break;
                }
            }
            code = grid[grid_index(x, y)];
        }

        return code;
    };

    for (var i=0; i<dataArray.length;i++) {
        $scope.part2Output += part2(dataArray[i]);
    }
    console.log("part2", $scope.part2Output);

});

})();
