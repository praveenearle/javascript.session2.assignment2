function numbers() {
    var displayVal = '';
    var finalval= 'false';
    var secondval=false;
    for (i = 1; i <= 100; i++) {
        if (i % 3 == 0) {
            finalval= 'true';
        } else {
            finalval = 'false';
        }
           
        if (i % 5 == 0) {
            secondval = 'true';
        } else {
            secondval = 'false';
        }
            
        if (finalval === 'true' && secondval === 'true') {
            displayVal += "FizzBuzz <br>";
        }
        else if (finalval === 'true') {
            displayVal += "Fizz" + "<br>";
           
        }
        else if (secondval === 'true') {
            displayVal += "Buzz" + "<br>";
            
        } else {
            displayVal += i + '<br>';
        }
        
     
    }
    document.getElementById("virat").innerHTML = displayVal;
}