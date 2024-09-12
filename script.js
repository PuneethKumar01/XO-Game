let array = [];
let x = [];
let o = [];
let win = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]];
let turn = 0;
let num;

if (localStorage.getItem('x') == null || localStorage.getItem('o') == null) {
    localStorage.setItem('x', '0');
    localStorage.setItem('o', '0');
}

const write = (xo) => {
    array.push(num);
    click.innerText = xo;
    if (xo == 'X') {
        click.style.textShadow = ' 0px 0px 15px #FF073A';
        x.push(num)

    } else {
        click.style.textShadow = ' 0px 0px 15px #1F51FF'
        o.push(num)
    }
    console.log(array);
}

let slashLine = document.getElementById('slashLine');

const winnerSlash = (a) => {

    switch (a) {
        case '123': slashLine.classList.add('slash', 'h-slash', 'h1')
            break;
        case '456': slashLine.classList.add('slash', 'h-slash', 'h2')
            break;
        case '789': slashLine.classList.add('slash', 'h-slash', 'h3')
            break;
        case '147': slashLine.classList.add('slash', 'v-slash', 'v1')
            break;
        case '258': slashLine.classList.add('slash', 'v-slash', 'v2')
            break;
        case '369': slashLine.classList.add('slash', 'v-slash', 'v3')
            break;
        case '159': slashLine.classList.add('slash', 'd-slash', 'd1')
            break;
        case '357': slashLine.classList.add('slash', 'd-slash', 'd2')
            break;
    }
}


let btn = document.querySelector('.container').addEventListener('click', (e) => {
    click = e.target;
    num = Number(click.getAttribute('id').charAt(3));
    if (!array.includes(num)) {
        if (turn < 9) {

            console.log(x)

            if (turn % 2 == 0) {
                write('X');

                if (turn >= 4) {
                    for (let i = 0; i < 8; i++) {
                        if (x.includes(win[i][0]) && x.includes(win[i][1]) && x.includes(win[i][2])) {
                            winnerSlash(win[i][0].toString() + win[i][1] + win[i][2]);
                            document.getElementById('winner').style.display = 'block';
                            document.getElementById('winner').innerText = 'X won the match. click to play again'
                        }
                    }
                }
            } else {
                write('O');
                if (turn >= 5) {
                    for (let i = 0; i < 8; i++) {
                        if (o.includes(win[i][0]) && o.includes(win[i][1]) && o.includes(win[i][2])) {
                            winnerSlash(win[i][0].toString() + win[i][1] + win[i][2]);
                            document.getElementById('winner').style.display = 'block';
                            document.getElementById('winner').innerText = 'O won the match. click to play again'
                        }
                    }
                }
            }
            turn++;
        }
    }
})