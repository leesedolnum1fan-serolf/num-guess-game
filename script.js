var guess;
var high;
var max;
var low;
var i = 1;
var temp = 0;
var lowElement = document.getElementById("lowbound").value;
var highElement = document.getElementById("highbound").value;

function game(id) {
    if (id === "low") {
        low = guess + 1;
    } else if (id === "high") {
        high = guess - 1;
    } else if (id === "right") {
        elements.hidden = true;
        if (i === 1) {
            realtries.innerHTML = `I got that last one in ${i} try. I'm a genius.`;   
        } else {
            realtries.innerHTML = `I got that last one in ${i} tries. I'm a genius.`;
        };
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
    if (i === max) {
        elements.hidden = true;
          if (i === 1) {
            realtries.innerHTML = `Your number was ${guess}. <br> I got that one in ${i} try.`;   
        } else {
            realtries.innerHTML = `Your number was ${guess}. <br> I got that one in ${i} tries.`;
        };
    } else {
        number.innerHTML = `Is this your number?: ${guess}`;    
    };
    i += 1;
};

function start() {
    i = 1;
    if (lowElement > highElement) {
        alert("I'll swap those for you ;)")
        highElement = lowElement;
        lowElement = highElement;
    } else if (parseInt(lowElement+highElement) === NaN) {
        alert("Please enter a integer.")
        return
    } else {
        low = parseInt(lowElement)
        high = parse(highElement)
    };
    elements.hidden = false; 
    console.log(low);
    console.log(high);
    guess = Math.round((low+high)/2);
    console.log(guess);
    max = Math.ceil(Math.log2(high-low+1));
    if (max < 2) {
        max += 1;
    };
    if (i === 1) {
        maxtries.innerHTML = `HA! Childs play. This shouldn't take more than ${max} tries.`
    } else {
        maxtries.innerHTML = `HA! Childs play. This shouldn't take more than ${max} try.`
    };
    number.innerHTML = `Is this your number?: ${guess}`;
};
