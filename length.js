let Meter = document.getElementById("Meter");
let Centimeter = document.getElementById("Centimeter");
let Kilometer = document.getElementById("Kilometer");
let Millimeter = document.getElementById("Millimeter");
let Inches = document.getElementById("Inches");
let Foot = document.getElementById("Foot");
let Mile = document.getElementById("Mile");

function MetertoOthers (val){
    Centimeter.value = val*100; 
    Kilometer.value = val*0.001; 
    Millimeter.value= val*1000;
    Inches.value= val*39.3701;
    Foot.value=  val*3.28084;
    Mile.value=  val*0.000621371;
}

function KilometertoOthers (val){
    Centimeter.value = val*100000; 
    Meter.value = val*1000; 
    Millimeter.value=val*1000000;
    Inches.value=val*39370.1;
    Foot.value=  val*3280.84;
     Mile.value=  val*0.621371;
}

function CentimetertoOthers (val){
    Meter.value = val*0.01; 
    Kilometer.value = val*0.00001; 
    Millimeter.value= val*10;
    Inches.value= val*0.393701;
    Foot.value=  val*0.0328084;
     Mile.value=  val*0.0000062137;
    }
    
  function MillimetertoOthers (val){
    Centimeter.value = val*0.1; 
    Meter.value = val*0.001; 
    Kilometer.value= val*0.000001;
    Inches.value= val*0.0393701;
    Foot.value= val*0.00328084;
     Mile.value=  val*0.00000062137;
    }
    
 function InchestoOthers (val){
    Centimeter.value = val*2.54; 
    Kilometer.value = val*2.54*10^-5; 
    Millimeter.value= val*25.4;
    Meter.value= val*0.0254;
    Foot.value= val*0.0833333;
     Mile.value=  val*0.000015783;
    }
    
 function FoottoOthers (val){
    Centimeter.value = val*30.48; 
    Kilometer.value = val*0.0003048; 
    Millimeter.value=val*304.8;
    Inches.value=val*12;
    Meter.value= val*0.3048;
     Mile.value=  val*0.000189394;
    }
  function MiletoOthers (val){
    Centimeter.value = val*160934; 
    Kilometer.value = val*1.60934; 
    Millimeter.value=val*1609000;
    Inches.value=val*63360;
    Meter.value= val*1609.34;
    Foot.value=val*5280;
    }

function convertToOthers(convertFrom,value){    
    switch(convertFrom){
        case "Meter" : 
            MetertoOthers (parseFloat(value)); 
            break;
        case "Centimeter" : 
            CentimetertoOthers (parseFloat(value)); 
            break;
        case "Kilometer" : 
            KilometertoOthers (parseFloat(value)); 
            break;
        case "Millimeter" : 
            MillimetertoOthers (parseFloat(value)); 
            break;
        case "Inches" : 
            InchestoOthers (parseFloat(value)); 
            break;    
        case "Foot" : 
            FoottoOthers (parseFloat(value)); 
            break;
        case "Mile" : 
            MiletoOthers (parseFloat(value)); 
            break;
            
         }
      }
         
         
         
