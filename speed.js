let mph = document.getElementById("mph");
let fps = document.getElementById("fps");
let mps = document.getElementById("mps");
let kmph = document.getElementById("kmph");
let knot = document.getElementById("knot");



function mphtoOthers (val){ 
    fps.value = val*1.467;
    mps.value = val/(2.237);
    kmph.value = val*1.609;
    knot.value = val/(1.151);
    
    
}

function fpstoOthers (val){
    mph.value = val/1.467;
    mps.value = val/(3.281);
    kmph.value = val/(1.097);
    knot.value = val/(1.688);
}

function mpstoOthers (val){
    fps.value = val*3.281;
    mph.value = val*2.237;
    kmph.value = val*3.6;
    knot.value = val*1.944;
    }

function kmphtoOthers (val){
    fps.value = val/1.097;
    mps.value = val/(3.6);
    mph.value = val/(1.609);
    knot.value = val/(1.852);
    }

function knottoOthers (val){
    fps.value = val*1.688;
    mps.value = val*1.944;
    kmph.value = val*1.852;
    mph.value = val*1.151;
    }





function convertToOthers(convertFrom,value){    
    switch(convertFrom){
        case "mph" : 
            mphtoOthers (parseFloat(value)); 
            break;
        case "fps" : 
            fpstoOthers (parseFloat(value)); 
            break;
        case "mps" : 
            mpstoOthers (parseFloat(value)); 
            break;
        case "kmph" : 
            kmphtoOthers (parseFloat(value)); 
            break;
        case "knot" : 
            knottoOthers (parseFloat(value)); 
            break;
        
           
    }
}