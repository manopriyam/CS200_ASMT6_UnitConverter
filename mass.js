let tonnes = document.getElementById("tonnes");
let kilograms = document.getElementById("kilograms");
let grams = document.getElementById("grams");
let pounds = document.getElementById("pounds");
let ounces = document.getElementById("ounces");

function tonnestoOthers (val){
    kilograms.value = val*(1000); 
    grams.value = val*(10**6);
    pounds.value = val*(2204.62);
    ounces.value = val*(35274);
}

function kilogramstoOthers (val){
    tonnes.value = val/1000;
    grams.value = val*(1000);
    pounds.value = val*(2.20462);
    ounces.value = val*(35.274);
}

function gramstoOthers (val){
    tonnes.value = val/(10**6);
    kilograms.value = val/1000; 
    pounds.value = val/(453.6);
    ounces.value = val/(28.35);
}

function poundstoOthers (val){
    tonnes.value = val/2205;
    kilograms.value = val/2.205; 
    grams.value = val*453.6;
    ounces.value = val*16;
}

function ouncestoOthers (val){
    tonnes.value = val/35270;
    kilograms.value = val*.0283495; 
    grams.value = val*28.35;
    pounds.value = val/16;
}

function convertToOthers (convertFrom,value) {    
    switch (convertFrom) {
        case "tonnes" : 
            tonnestoOthers (parseFloat(value)); 
            break;
        case "kilograms" : 
            kilogramstoOthers (parseFloat(value)); 
            break;
        case "grams" : 
            gramstoOthers (parseFloat(value)); 
            break;
        case "pounds" : 
            poundstoOthers (parseFloat(value)); 
            break;
        case "ounces" : 
            ouncestoOthers (parseFloat(value)); 
            break;
    }
}
