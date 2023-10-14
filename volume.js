let CubicMeter = document.getElementById("CubicMeter");
let CubicCentimeter = document.getElementById("CubicCentimeter");
let Liter = document.getElementById("Liter");
let Milliliter = document.getElementById("Milliliter");

function CubicMetertoOthers (val){
    CubicCentimeter.value = val*10**6; 
    Liter.value = val*10**3; 
    Milliliter.value= val*(10**6);
}

function LitertoOthers (val){
    CubicCentimeter.value = val*10**3; 
	CubicMeter.value = val*10**(-3); 
    Milliliter.value=val*1000;
}

function CubicCentimetertoOthers (val){
    CubicMeter.value = val*0.000001; 
    Liter.value = val*0.001; 
    Milliliter.value= val*1;
}
    
  function MillilitertoOthers (val){
    CubicCentimeter.value = val*1; 
    CubicMeter.value = val*0.000001; 
    Liter.value= val*0.001;
 }

function convertToOthers(convertFrom,value){    
    switch(convertFrom){
        case "CubicMeter" : 
            CubicMetertoOthers (parseFloat(value)); 
            break;
        case "CubicCentimeter" : 
            CubicCentimetertoOthers (parseFloat(value)); 
            break;
        case "Liter" : 
            LitertoOthers (parseFloat(value)); 
            break;
        case "Milliliter" : 
            MillilitertoOthers (parseFloat(value)); 
            break;
            
         }
      }
         
         
         
