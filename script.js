var guess;
var high;
var low;
var i = 1;
var temp = 0;

function game(id) {
    if (id === "low") {
        low = guess + 1;
    } else if (id === "high") {
        high = guess - 1;
    } else if (id === "right") {
        elements.hidden = true;
        if (i === 1) {
            realtries.innerHTML = `I got that last one in ${i} try. I'm a genius.`      
        } else {
            realtries.innerHTML = `I got that last one in ${i} tries. I'm a genius.`
        };
        i = 0;
    };
    guess = Math.round((low+high)/2);
    if (temp === guess) {
        if (guess > ((low+high)/2)) {
            guess -= 1;
        } else {
            guess += 1;
        };
    };
    temp = guess;
    number.innerHTML = `Is this your number?: ${guess}`;
    i += 1;
};

function start() {
    low = parseInt(document.getElementById("lowbound").value);
    high = parseInt(document.getElementById("highbound").value);
    elements.hidden = false; 
    console.log(low);
    console.log(high);
    guess = Math.round((low+high)/2);
    console.log(guess);
    if (i === 1) {
        maxtries.innerHTML = `HA! Childs play. This shouldn't take more than ${Math.ceil(Math.log2(high-low+1))} tries.`
    } else {
        maxtries.innerHTML = `HA! Childs play. This shouldn't take more than ${Math.ceil(Math.log2(high-low+1))} try.`
    }
    number.innerHTML = `Is this your number?: ${guess}`;
};
