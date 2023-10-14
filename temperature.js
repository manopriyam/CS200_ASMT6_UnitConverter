let kelvin = document.getElementById("kelvin");
let celsius = document.getElementById("celsius");
let fahrenheit = document.getElementById("fahrenheit");

function kelvintoOthers (val) {
    celsius.value = val-273.15; 
    fahrenheit.value = ((val-273.15)*9)/5+32;   
}

function celsiustoOthers (val) {
    kelvin.value = val+273.15; 
    fahrenheit.value = (val*9)/5+32;   
}

function fahrenheittoOthers (val) {
    kelvin.value = val+273.15; 
    celsius.value = (val-32)*5/9+273.15;   
}

function convertToOthers (convertFrom,value) {    
    switch (convertFrom) {
        case "kelvin" : 
            kelvintoOthers (parseFloat(value)); 
            break;
        case "celsius" : 
            celsiustoOthers (parseFloat(value)); 
            break;
        case "fahrenheit" : 
            fahrenheittoOthers (parseFloat(value)); 
            break;
    }
}