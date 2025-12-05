
// Counter Program

const number = document.getElementById("num");
const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");
const increase = document.getElementById("increase");
let count = 0;


decrease.onclick = function(){
    count--;
    num.textContent = count;
}

reset.onclick = function(){
    count=0;
    num.textContent = count;
}

increase.onclick = function(){
    count++;
    num.textContent = count;
}

// Random Number Generator

const roll = document.getElementById("dice")
const result = document.getElementById("result");

roll.onclick = function(){
    let randomnum = Math.floor(Math.random()*6) + 1;
    result.textContent = randomnum;
}

// If-Else Statements

const ageinp = document.getElementById("ageinp");
const sumbit = document.getElementById("submit");
const reply = document.getElementById("reply");

let age;

submit.onclick = function(){

    age = ageinp.value;
    age= Number(age);

    if(age >= 100){
        reply.textContent = `Dang, you old!`
    }

    else if(age >= 18){
        reply.textContent = `Major!`
    }

     else if(age == 0){
        reply.textContent = `You were just born, broski!`
    }

    else if(age <= 0){
        reply.textContent = `You don't exist yet...`
    }

    else{
        reply.textContent = `Minor!`
    }

}
