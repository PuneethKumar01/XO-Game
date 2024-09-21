let array = [];
let x = [];
let o = [];
let win = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]];
let turn = 0;
let num;

let StorageValue = () => {
    localStorage.setItem('x', '0');
    localStorage.setItem('o', '0');
}

if (localStorage.getItem('x') == null || localStorage.getItem('o') == null) {
    StorageValue();
}

let scoreDisplay = () => {
    document.querySelector('.x-score').innerText = localStorage.getItem('x');
    document.querySelector('.o-score').innerText = localStorage.getItem('o');
}

scoreDisplay();


const write = (xo) => {
    array.push(num);
    click.innerText = xo;
    if (xo == 'X') {
        click.style.textShadow = ' 0px 0px 15px #FF073A';
        x.push(num)

    } else {
        click.style.textShadow = ' 0px 0px 15px #1F51FF';
        o.push(num)
    }
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

let playXTurn = () => {
    document.querySelector('#player-o-head').classList.remove('head-light')
    document.querySelector('#player-x-head').classList.add('head-light')
}

let playOTurn = () => {
    document.querySelector('#player-x-head').classList.remove('head-light')
    document.querySelector('#player-o-head').classList.add('head-light')
}

let randomNumber;
let bot = [];

let matchOn = true;

playXTurn();

let btn = document.querySelector('.container').addEventListener('click', (e) => {

    if(turn == 0){
        bot = [1,2,3,4,5,6,7,8,9];
        console.log(`first`)
    }

    // if (matchOn) {
        
        click = e.target;
        num = Number(click.getAttribute('id').charAt(3));
        
        bot = bot.filter(item => item != num);

        console.log(`x ${num} bot ${bot}`)

        if (!array.includes(num)) {
            if (turn <= 9) {
                if (turn % 2 == 0) {
                    write('X');

                    if (turn >= 4) {
                        for (let i = 0; i < 8; i++) {
                            if (x.includes(win[i][0]) && x.includes(win[i][1]) && x.includes(win[i][2])) {
                                winnerSlash(win[i][0].toString() + win[i][1] + win[i][2]);
                                document.getElementById('x-won').style.display = 'block';
                                localStorage.setItem('x', (Number(localStorage.getItem('x')) + 1).toString());
                                scoreDisplay();
                                matchOn = false;

                            }
                        }
                    }
                    if (matchOn) {
                        playOTurn();
                    // }
                } turn++
                

                do{
                randomNumber = Math.floor(Math.random() * (bot.length-1) )
                num = bot[randomNumber]
                }while(array.includes(num))
                click = document.querySelector('#box'+bot[randomNumber])
                
                bot = bot.filter(item => item != num);

                console.log(`o random ${randomNumber} botnum ${num} all ${array} `)

                 if(turn != 9){
                    write('O');
                    if (turn >= 5) {
                        for (let i = 0; i < 8; i++) {
                            if (o.includes(win[i][0]) && o.includes(win[i][1]) && o.includes(win[i][2])) {
                                winnerSlash(win[i][0].toString() + win[i][1] + win[i][2]);
                                document.getElementById('o-won').style.display = 'block';
                                localStorage.setItem('o', (Number(localStorage.getItem('o')) + 1).toString());
                                scoreDisplay();
                                matchOn = false;

                            }
                        }
                    }
                    if (matchOn) {
                        playXTurn();
                    }
                }
                turn++;
            }
        }
    }
    if ((turn == 9) && (matchOn)) {
        document.getElementById('draw').style.display = 'block';
    }
})

let allBox = document.querySelectorAll('.box');

let clearBox = () => {
    allBox.forEach((value) => { value.innerText = '' })
    turn = 0;
    array = [];
    x = [];
    o = [];
    slashLine.className = '';
    matchOn = true;
    document.getElementById('x-won').style.display = 'none';
    document.getElementById('o-won').style.display = 'none';
    document.getElementById('draw').style.display = 'none';
    document.querySelector('#player-x-head').classList.remove('head-light');
    document.querySelector('#player-o-head').classList.remove('head-light');
    playXTurn();
}

document.querySelector('.reset-score').addEventListener('click', () => {
    clearBox();
    StorageValue();
    scoreDisplay();
})


document.querySelector('.new-game').addEventListener('click', () => {
    clearBox();
})