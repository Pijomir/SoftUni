function playWithLadybugs(arr) {
    let fieldSize = arr.shift();
    let field = [];
    for (let i = 0; i < fieldSize; i++) {
        field.push(0);
    }

    let ladyBugsPositions = arr.shift().split(' ').map(Number);
    for (let position of ladyBugsPositions) {
        if (position >= 0 && position < fieldSize) {
            field[position] = 1;
        }
    }

    for (let el of arr) {
        let [ladyBugPosition, direction, ladyBugMove] = el.split(' ');
        ladyBugPosition = +ladyBugPosition;
        ladyBugMove = +ladyBugMove;
        if(ladyBugMove < 0) {
            ladyBugMove = Math.abs(ladyBugMove);
            direction = direction === 'right' ? 'left' : 'right';
        }
        if (field[ladyBugPosition] === 1) {
            field[ladyBugPosition] = 0;
            if (direction === 'right') {
                let newPosition = ladyBugPosition + ladyBugMove;
                if (field[newPosition] === 1) {
                    newPosition = newPosition + ladyBugMove;
                }

                if (newPosition < field.length) {
                    field[newPosition] = 1
                }
            } else {
                let newPosition = ladyBugPosition - ladyBugMove;
                if (field[newPosition] === 1) {
                    newPosition = newPosition - ladyBugMove;
                }

                if (newPosition >= 0) {
                    field[newPosition] = 1
                }
            }
        }
    }

    console.log(field.join(' '));
}

playWithLadybugs([ 5, '3',
'3 left 2',
'1 left -2']);