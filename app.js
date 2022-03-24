//variable declarations
const score = document.querySelector('#score');
let p1 = document.querySelector('#p1');
let p2 = document.querySelector('#p2');

let scoreP1 = document.querySelector('#scoreP1').innerText;
let scoreP1Number = Number(scoreP1);
let scoreP2 = document.querySelector('#scoreP2').innerText;
let scoreP2Number = Number(scoreP2);

const reset = document.querySelector('#reset');
const select = document.querySelector('select');
const p1Text = document.querySelector('#scoreP1');
const p2Text = document.querySelector('#scoreP2');
let winCon = Number(select.value); 

p1.addEventListener('click', function() {
    // let scoreP1 = document.querySelector('#scoreP1').innerText;
    // let scoreP1Number = Number(scoreP1);
    scoreP1Number++;
    document.querySelector('#scoreP1').innerText = scoreP1Number;

    if (scoreP1Number == winCon) {
        p1Text.style.color = '#8dc91e';
        p2Text.style.color = '#c13e26';
    }

})

p2.addEventListener('click', function() {
    // let scoreP2 = document.querySelector('#scoreP2').innerText;
    // let scoreP2Number = Number(scoreP2);
    scoreP2Number++;
    document.querySelector('#scoreP2').innerText = scoreP2Number;

    if (scoreP2Number == winCon) {
        p1Text.style.color = '#8dc91e';
        p2Text.style.color = '#c13e26';
    }

})

 reset.addEventListener('click', function() {
    // let scoreP1 = document.querySelector('#scoreP1').innerText;
    // let scoreP2 = document.querySelector('#scoreP2').innerText;
    document.querySelector('#scoreP1').innerText = "0";
    document.querySelector('#scoreP2').innerText = "0";
    p1Text.style.color = '#000';
    p2Text.style.color = '#000';

 })

select.addEventListener('change', function(e) {
    winCon = Number(e.target.value);
    console.log(winCon);
})



