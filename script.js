var guess;
var high;
var max;
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
            realtries.innerHTML = `I got that last one in ${i} try. I'm a genius.`;   
        } else {
            realtries.innerHTML = `I got that last one in ${i} tries. I'm a genius.`;
        };
    };
    guess = Math.round((low+high)/2);
    if (temp === guess && !(id == "right")) {
        if (guess > ((low+high)/2)) {
            guess -= 1;
        } else {
            guess += 1;
        };
    };
    if (guess === low) {
        document.getElementById("high").hidden = true;
    } else {
        document.getElementById("high").hidden = false;
    };
    if (guess === high) {
        document.getElementById("low").hidden = true;
    } else {
        document.getElementById("low").hidden = false;
    };
    temp = guess;
    i+=1;
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
    elements.hidden = true;
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
    console.log(low)
    console.log(high)
    guess = Math.round((low+high)/2);
    console.log(guess)
    if (guess === low) {
        document.getElementById("high").hidden = true;
    } else {
        document.getElementById("high").hidden = false;
    };
    if (guess === high) {
        document.getElementById("low").hidden = true;
    } else {
        document.getElementById("low").hidden = false;
    };
    console.log(guess)
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
    if (i === max) {
        elements.hidden = true;
          if (i === 1) {
            realtries.innerHTML = `Your number was ${guess}. <br> I got that one in ${i} try.`;   
        } else {
            realtries.innerHTML = `Your number was ${guess}. <br> I got that one in ${i} tries.`;
        };
    };
};
