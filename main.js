const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
    constructor(field) {
        this._field = field;
    }

    get field() {
        return this._field;
    }

    print() {
        for(let i = 0; i < this._field.length; i++) {
            let tempField = this._field[i].join('');
            console.log(tempField);
        }
    }

    playGame() {
        let width = this._field[0].length; // 3
        let height = this._field.length; // 3
        let x = 0;
        let y = 0;
        let isEnd = false;

        while (isEnd === false) {
            
            const input = prompt('Which way?');
            
            /* user moving down */
            if (input === 's' || input === 'S') {
                if (y === this._field.length - 1) {
                    console.log(`Out of bound`);
                    return isEnd === true;
                } else {
                    y++;
                    if (this._field[y][x] === '^') {
                        console.log('You Win!');
                        return isEnd = true;
                    } else if (this._field[y][x] === 'O') {
                        console.log('You Lose!');
                        return isEnd = true;
                    } else {
                        this._field[y][x] = '*';
                    }
                }
                this.print();
            }

            /* user moving right */
            if (input === 'd' || input === 'D') {
                if (x === this._field[0].length - 1) {
                    console.log(`Out of bound`);
                    return isEnd = true;
                } else {
                    x++;
                    if (this._field[y][x] === '^') {
                        console.log('You Win!');
                        return isEnd = true;
                    } else if (this._field[y][x] === 'O') {
                        console.log('You Lose!');
                        return isEnd = true;
                    } else {
                        this._field[y][x] = '*';
                    }
                }
                this.print();
            }

            /* user moving up */
            if (input === 'w' || input === 'W') {
                if (y === 0) {
                    console.log(`Out of bound`);
                    return isEnd = true;
                } else {
                    y--;
                    if (this._field[y][x] === '^') {
                        console.log('You Win!');
                        return isEnd = true;
                    } else if (this._field[y][x] === 'O') {
                        console.log('You Lose!');
                        return isEnd = true;
                    } else {
                        this._field[y][x] = '*';
                    }
                }
                this.print();
            }

            /* user moving left */
            if (input === 'a' || input === 'A') {
                if (x === 0) {
                    console.log(`Out of bound`);
                    return isEnd = true;
                } else {
                    x--;
                    if (this._field[y][x] === '^') {
                        console.log('You Win!');
                        return isEnd = true;
                    } else if (this._field[y][x] === 'O') {
                        console.log('You Lose!');
                        return isEnd = true;
                    } else {
                        this._field[y][x] = '*';
                    }
                }
                this.print();
            }
        }
    }
}

const field1 = new Field([
    ['*', '░', 'O'],
    ['░', '░', '░'],
    ['░', '^', '░'],
  ]);


field1.print();
field1.playGame();