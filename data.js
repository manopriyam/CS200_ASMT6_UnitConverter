let bits = document.getElementById("bits");
let bytes = document.getElementById("bytes");
let kilobytes = document.getElementById("kilobytes");
let megabytes = document.getElementById("megabytes");
let gigabytes = document.getElementById("gigabytes");
let terabytes = document.getElementById("terabytes");

function bitstoOthers (val) {
    bytes.value = val/(1024); 
    kilobytes.value = val/(1024*1024);
    megabytes.value = val/(1024*1024*1024);
    gigabytes.value = val/(1024*1024*1024*1024);
    terabytes.value = val/(1024*1024*1024*1024*1024);   
}

function bytestoOthers (val) {
    bits.value = val*1024;
    kilobytes.value = val/(1024);
    megabytes.value = val/(1024*1024);
    gigabytes.value = val/(1024*1024*1024);
    terabytes.value = val/(1024*1024*1024*1024);   
}

function kilobytestoOthers (val) {
    bits.value = val*1024*1024;
    bytes.value = val*1024; 
    megabytes.value = val/(1024);
    gigabytes.value = val/(1024*1024);
    terabytes.value = val/(1024*1024*1024);   
}

function megabytestoOthers (val) {
    bits.value = val*1024*1024*1024;
    bytes.value = val*1024*1024; 
    kilobytes.value = val*1024;
    gigabytes.value = val/(1024);
    terabytes.value = val/(1024*1024);   
}

function gigabytestoOthers (val) {
    bits.value = val*1024*1024*1024*1024;
    bytes.value = val*1024*1024*1024; 
    kilobytes.value = val*1024*1024;
    megabytes.value = val*1024;
    terabytes.value = val/(1024);   
}

function terabytestoOthers (val) {
    bits.value = val*1024*1024*1024*1024*1024;
    bytes.value = val*1024*1024*1024*1024; 
    kilobytes.value = val*1024*1024*1024;
    megabytes.value = val*1024*1024;
    gigabytes.value = val*1024;
}

function convertToOthers (convertFrom,value) {    
    switch (convertFrom) {
        case "bits" : 
            bitstoOthers (parseFloat(value)); 
            break;
        case "bytes" : 
            bytestoOthers (parseFloat(value)); 
            break;
        case "kilobytes" : 
            kilobytestoOthers (parseFloat(value)); 
            break;
        case "megabytes" : 
            megabytestoOthers (parseFloat(value)); 
            break;
        case "gigabytes" : 
            gigabytestoOthers (parseFloat(value)); 
            break;
        case "terabytes" : 
            terabytestoOthers (parseFloat(value)); 
            break;    
    }
}