let array = [];
let x = [];
let o = [];
let win = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];
let turn = 0;
let num ;

const write =(xo)=>{
    array.push(num);
    click.innerText=xo;
    if(xo == 'X'){
        click.style.textShadow =' 0px 0px 15px #FF073A';
        x.push(num)

    }else{
        click.style.textShadow =' 0px 0px 15px #1F51FF'
        o.push(num)
    }
    console.log(array);
}

const Xslash = ()=>{
    if(x.includes(1) && x.includes(2) && x.includes(3)){
        document.getElementById('h1').style.display= 'block';
    }
    if(x.includes(4) && x.includes(5) && x.includes(6)){
        document.getElementById('h2').style.display= 'block';
    }
    if(x.includes(7) && x.includes(8) && x.includes(9)){
        document.getElementById('h3').style.display= 'block';
    }
    if(x.includes(1) && x.includes(4) && x.includes(7)){
        document.getElementById('v1').style.display= 'block';
    }
    if(x.includes(2) && x.includes(5) && x.includes(8)){
        document.getElementById('v2').style.display= 'block';
    }
    if(x.includes(3) && x.includes(6) && x.includes(9)){
        document.getElementById('v3').style.display= 'block';
    }
    if(x.includes(1) && x.includes(5) && x.includes(9)){
        document.getElementById('d1').style.display= 'block';
    }
    if(x.includes(3) && x.includes(5) && x.includes(7)){
        document.getElementById('d2').style.display= 'block';
    }
}

const Oslash = ()=>{
    if(o.includes(1) && o.includes(2) && o.includes(3)){
        document.getElementById('h1').style.display= 'block';
    }
    if(o.includes(4) && o.includes(5) && o.includes(6)){
        document.getElementById('h2').style.display= 'block';
    }
    if(o.includes(7) && o.includes(8) && o.includes(9)){
        document.getElementById('h3').style.display= 'block';
    }
    if(o.includes(1) && o.includes(4) && o.includes(7)){
        document.getElementById('v1').style.display= 'block';
    }
    if(o.includes(2) && o.includes(5) && o.includes(8)){
        document.getElementById('v2').style.display= 'block';
    }
    if(o.includes(3) && o.includes(6) && o.includes(9)){
        document.getElementById('v3').style.display= 'block';
    }
    if(o.includes(1) && o.includes(5) && o.includes(9)){
        document.getElementById('d1').style.display= 'block';
    }
    if(o.includes(3) && o.includes(5) && o.includes(7)){
        document.getElementById('d2').style.display= 'block';
    }
}

let btn = document.querySelector('.container').addEventListener('click',(e)=>{
    click = e.target;
    num = Number(click.getAttribute('id').charAt(3));
    if(!array.includes(num)){
        if(turn < 9){

console.log(x)

            if(turn % 2 == 0){
                write('X');

                if(turn >= 4){
                    for(let i = 0; i < 8; i ++){
                        if(x.includes(win[i][0]) && x.includes(win[i][1]) && x.includes(win[i][2])){
                            Xslash();
                            document.getElementById('winner').style.display= 'block';
                            document.getElementById('winner').innerText='X won the match. click to play again'
                        }
                    }
                }
            }else{
                write('O');
                if(turn >= 5){
                    for(let i = 0; i < 8; i ++){
                        if(o.includes(win[i][0]) && o.includes(win[i][1]) && o.includes(win[i][2])){
                            Oslash();
                            document.getElementById('winner').style.display= 'block';
                            document.getElementById('winner').innerText='O won the match. click to play again'
                        }
                    }
                }
            }
            turn++;
        }
    }
})