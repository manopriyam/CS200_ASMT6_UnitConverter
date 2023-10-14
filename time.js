let seconds = document.getElementById("seconds");
let minutes = document.getElementById("minutes");
let hours = document.getElementById("hours");
let days = document.getElementById("days");
let weeks = document.getElementById("weeks");
let months = document.getElementById("months");
let years = document.getElementById("years");


function secondstoOthers (val){ 
    minutes.value = val/60;
    hours.value = val/(60**2);
    days.value = val/(86400);
    weeks.value = val/(604800);
    months.value = val/(2628000);
    years.value = val/(31540000);
    
}

function minutestoOthers (val){
    seconds.value = val*60;
    hours.value = val/(60);
    days.value = val/(1440);
    weeks.value = val/(10080);
    months.value = val/(43800);
    years.value = val/(525600);
}

function hourstoOthers (val){
    minutes.value = val*60;
    seconds.value = val*(60**2);
    days.value = val/(24);
    weeks.value = val/(168);
    months.value = val/(730);
    years.value = val/(8760);
    }

function daystoOthers (val){
    minutes.value = val*1440;
    hours.value = val*24;
    seconds.value = val*(86400);
    weeks.value = val/(7);
    months.value = val/(30.417);
    years.value = val/(365);
    }

function weekstoOthers (val){
    minutes.value = val*10080;
    hours.value = val*168;
    days.value = val*7;
    seconds.value = val*(604800);
    months.value = val/(4.345);
    years.value = val/(52.143);
    }

function monthstoOthers (val){
        minutes.value = val*43800;
        hours.value = val*730;
        days.value = val*30.417;
        weeks.value = val*4.345;
        seconds.value = val*(2628000);
        years.value = val/(12);
        }

function yearstoOthers (val){
            minutes.value = val*525600;
            hours.value = val*8760;
            days.value = val*365;
            weeks.value = val*52.143;
            months.value = val*12;
            seconds.value = val*(31540000);
            }



function convertToOthers(convertFrom,value){    
    switch(convertFrom){
        case "seconds" : 
            secondstoOthers (parseFloat(value)); 
            break;
        case "minutes" : 
            minutestoOthers (parseFloat(value)); 
            break;
        case "hours" : 
            hourstoOthers (parseFloat(value)); 
            break;
        case "days" : 
            daystoOthers (parseFloat(value)); 
            break;
        case "weeks" : 
            weekstoOthers (parseFloat(value)); 
            break;
        case "months" : 
            monthstoOthers (parseFloat(value)); 
            break;
        case "years" : 
            yearstoOthers (parseFloat(value)); 
            break;
           
    }
}