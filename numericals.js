let decimal = document.getElementById("decimal");
let binary = document.getElementById("binary");
let octal = document.getElementById("octal");
let hexadecimal = document.getElementById("hexadecimal");

function decimaltoOthers (val) {
    binary.value = val.toString(2);
    octal.value = val.toString(8); 
    hexadecimal.value = val.toString(16).toUpperCase();
}

function binarytoOthers (val) {
    val = parseInt(val, 2);
    decimal.value = val;
    octal.value = val.toString(8); 
    hexadecimal.value = val.toString(16).toUpperCase();
}

function octaltoOthers (val) {
    val = parseInt(val, 8);
    decimal.value = val;
    binary.value = val.toString(2); 
    hexadecimal.value = val.toString(16).toUpperCase();
}

function hexadecimaltoOthers (val) {
    val = parseInt(val, 16);
    decimal.value = val;
    binary.value = val.toString(2); 
    octal.value = val.toString(8);
}

function convertToOthers (convertFrom,value) {    
    switch (convertFrom) {
        case "decimal" : 
            decimaltoOthers (JSON.parse(value)); 
            break;
        case "binary" : 
            binarytoOthers (JSON.parse(value)); 
            break;
        case "octal" : 
            octaltoOthers (JSON.parse(value)); 
            break;
        case "hexadecimal" : 
            hexadecimaltoOthers (JSON.parse(value)); 
            break;
    }
}