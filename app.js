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
const btns = document.querySelectorAll('button');
let winCon = Number(select.value); 

p1.addEventListener('click', function() {
    scoreP1Number++;
    document.querySelector('#scoreP1').innerText = scoreP1Number;

    if (scoreP1Number == winCon) {
        p1Text.style.color = '#8dc91e';
        p2Text.style.color = '#c13e26';
        btns[0].disabled = true;
        btns[1].disabled = true;
        btns[0].style.opacity = 0.2;
        btns[1].style.opacity = 0.2;
    }

})

p2.addEventListener('click', function() {
    scoreP2Number++;
    document.querySelector('#scoreP2').innerText = scoreP2Number;

    if (scoreP2Number == winCon) {
        p1Text.style.color = '#c13e26';
        p2Text.style.color = '#8dc91e';
        btns[0].disabled = true;
        btns[1].disabled = true;
        btns[0].style.opacity = 0.2;
        btns[1].style.opacity = 0.2;
        
    }

})

 reset.addEventListener('click', function() {
    scoreP1Number = 0;
    scoreP2Number = 0;
    document.querySelector('#scoreP1').innerText = "0";
    document.querySelector('#scoreP2').innerText = "0";
    p1Text.style.color = '#000';
    p2Text.style.color = '#000';
    btns[0].disabled = false;
    btns[1].disabled = false;
    btns[0].style.opacity = 1;
    btns[1].style.opacity = 1;
 })

select.addEventListener('change', function(e) {
    winCon = Number(e.target.value);
    console.log(winCon);
})



