var count1 = 0;
var output1 = document.getElementById('output');
        
var count2 = 0;
var output2 = document.getElementById('output2');

var limit = 0;

var numberInput = document.getElementById("number");
var resetButton = document.getElementById("three");

function countClicks(player) {
    if (limit > 0) {
        if (player === 'one') {
            count1++;
            output1.innerHTML = count1;
        } else if (player === 'two') {
            count2++;
            output2.innerHTML = count2;
        }
        if (count1 === limit || count2 === limit) {
            output1.style.color = 'green';
            output2.style.color = 'red';
            document.getElementById('one').disabled = true;
            document.getElementById('two').disabled = true;
            alert("Tu laimėjai!")
            resetButton.disabled = false;
        }
    }
}

function updateLimit() {
    limit = parseInt(numberInput.value);
    document.getElementById("value").innerHTML = limit;
}      

function resetCount() {
    count1 = 0;
    count2 = 0;
    output1.innerHTML = count1;
    output2.innerHTML = count2;
    output1.style.color = 'black';
    output2.style.color = 'black';
    document.getElementById('one').disabled = false;
    document.getElementById('two').disabled = false;
    resetButton.disabled = true;
}