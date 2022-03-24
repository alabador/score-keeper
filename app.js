//variable declarations
const score = document.querySelector('#score');
let scoreP2 = document.querySelector('#scoreP2').innerText;
let p1 = document.querySelector('#p1');
let p2 = document.querySelector('#p2');
const reset = document.querySelector('#reset');
const select = document.querySelector('select');

p1.addEventListener('click', function() {
    let scoreP1 = document.querySelector('#scoreP1').innerText;
    let scoreP1Number = Number(scoreP1);
    scoreP1Number++;
    document.querySelector('#scoreP1').innerText = scoreP1Number;

})

p2.addEventListener('click', function() {
    let scoreP2 = document.querySelector('#scoreP2').innerText;
    let scoreP2Number = Number(scoreP2);
    scoreP2Number++;
    document.querySelector('#scoreP2').innerText = scoreP2Number;

})