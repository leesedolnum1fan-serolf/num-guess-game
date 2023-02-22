var guess;
var high;
var max;
var low;
var i = 1;
var temp = 0;

function game(id) {
    i += 1;
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
};

function start() {
    i = 1;
    low = parseInt(lowbound.value);
    high = parseInt(highbound.value);
    if (low > high) {
        alert("I'll swap those for you ;)")
        lowbound.value = high;
        highbound.value = low;
        low = parseInt(lowbound.value);
        high = parseInt(highbound.value);
    } else if (isNaN(low+high)) {
        alert("Please only enter numbers.")
        return
    };
    elements.hidden = false;
    guess = Math.round((low+high)/2);
    max = Math.ceil(Math.log2(high-low+1));
    if (max < 2) {
        max += 1;
    };
    if (max === 1) {
        maxtries.innerHTML = `HA! Childs play. This shouldn't take more than ${max} try.`
    } else {
        maxtries.innerHTML = `HA! Childs play. This shouldn't take more than ${max} tries.`
    };
    number.innerHTML = `Is this your number?: ${guess}`;
};
