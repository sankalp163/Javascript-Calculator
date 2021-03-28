var keys=document.getElementsByClassName("key");
var display=document.getElementById("output-content");
var background= document.getElementById("body1");
var operand1 = 0;
var operand2 = null;
var operator = null;

function isOperator(value) {
    return value == "+" || value == "-" || value == "*" || value == "/";
}

for(var i = 0; i < keys.length; i++){
    keys[i].addEventListener('click', function(){
        
        var value=this.getAttribute('data-value');
        var text= display.textContent.trim();

        if (isOperator(value)){
            operator=value;
            operand1=parseFloat(text);
            display.textContent="";
        } else if (value == "ac") {
            display.textContent ="";
        } else if (value == "sign") {
            operand1 = parseFloat(text);
            operand1 = -1 * operand1;
            display.textContent = operand1; 
        } else if (value == ".") {
            if( text.length && !text.includes('.')) {
                display.textContent = text + '.';
            }
        } else if (value == "%") {
            operand1 = parseFloat(text);
            operand1 = operand1 / 100;
            display.textContent = operand1;
        } else if (value == "=") {
            operand2 = parseFloat(text);
            var result = eval( operand1 + ' ' + operator + ' ' + operand2);

            if ( result) {
                display.textContent = result;
                operand1 = result;
                operand2 = null;
                operator = null;
            }
        } else if( value == "D/L") {
            let darkMode = document.getElementById("key-theme");
            let theme = document.getElementById("theme");

            if(theme.getAttribute("href") == "calculator-style.css") {
                theme.href = "calculator-style-dark.css";
                darkMode.innerHTML = "Light 🌞 "
            } else {
                theme.href = "calculator-style.css";
                darkMode.innerHTML = "Dark 🌙"
            }
        } 
        else {
            display.textContent += value;
        }
    });
}
