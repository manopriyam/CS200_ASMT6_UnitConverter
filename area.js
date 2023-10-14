let SquareMeter = document.getElementById("SquareMeter");
let SquareCentimeter = document.getElementById("SquareCentimeter");
let SquareKilometer = document.getElementById("SquareKilometer");
let SquareMillimeter = document.getElementById("SquareMillimeter");
let SquareInch = document.getElementById("SquareInch");
let SquareFoot = document.getElementById("SquareFoot");
let SquareMile = document.getElementById("SquareMile");

function SquareMetertoOthers (val){
    SquareCentimeter.value = val*10000; 
    SquareKilometer.value = val*0.000001; 
    SquareMillimeter.value= val*(1000000);
    SquareInch.value= val*1550;
    SquareFoot.value=  val*10.7639;
    SquareMile.value=  val*0.000000386102;
  }

 function SquareKilometertoOthers (val){
    SquareCentimeter.value = val*100000; 
    SquareMeter.value = val*1000000; 
    SquareMillimeter.value=val*1000000000000;
   SquareInch.value=val*1.55*1000000000;
    SquareFoot.value=  val*1.076*10000000;
    SquareMile.value=  val*0.386102;
}

function SquareCentimetertoOthers (val){
    SquareMeter.value = val*0.0001; 
    SquareKilometer.value = val*0.0000000001; 
    SquareMillimeter.value= val*100;
    SquareInch.value= val*0.155;
    SquareFoot.value=  val*0.00107639;
    SquareMile.value=  val*0.0000000000386102;
    }
    
  function SquareMillimetertoOthers (val){
    SquareCentimeter.value = val*0.01; 
    SquareMeter.value = val*0.000001; 
    SquareKilometer.value= val*0.000000000001;
    SquareInch.value= val*0.00155;
    SquareFoot.value= val*1.0764*0.00001;
    SquareMile.value=  val*0.000000000000386102;
    }
    
 function SquareInchtoOthers (val){
    SquareCentimeter.value = val*6.4516; 
    SquareKilometer.value = val*6.5416*0.0000000001; 
    SquareMillimeter.value= val*645.16;
    SquareMeter.value= val*0.00064516;
    SquareFoot.value= val*0.00694444;
    SquareMile.value=  val*0.000000000249098;
    }
    
 function SquareFoottoOthers (val){
    SquareCentimeter.value = val*929.03; 
    SquareKilometer.value = val*9.2903*0.00000001; 
    SquareMillimeter.value=val*92903;
    SquareInch.value=val*144;
    SquareMeter.value= val*0.092903;
    SquareMile.value=  val*0.0000000358701;
    }
    
  function SquareMiletoOthers (val){
    SquareCentimeter.value = val*2590000; 
    SquareKilometer.value = val*2.58999; 
    SquareMillimeter.value=val*2560000000000;
    SquareInch.value=val*4014000000;
    SquareMeter.value= val*2560000;
    SquareFoot.value= val*27880000; 
    }

function convertToOthers(convertFrom,value){    
    switch(convertFrom){
        case "SquareMeter" : 
            SquareMetertoOthers (parseFloat(value)); 
            break;
        case "SquareCentimeter" : 
            SquareCentimetertoOthers (parseFloat(value)); 
            break;
        case "SquareKilometer" : 
            SquareKilometertoOthers (parseFloat(value)); 
            break;
        case "SquareMillimeter" : 
            SquareMillimetertoOthers (parseFloat(value)); 
            break;
        case "SquareInch" : 
            SquareInchtoOthers (parseFloat(value)); 
            break;    
        case "SquareFoot" : 
            SquareFoottoOthers (parseFloat(value)); 
            break;
        case "SquareMile" : 
            SquareMiletoOthers (parseFloat(value)); 
            break;
            
         }
      }
         
         
         
