var number;
var lower;
var upper;
var even;
var odd;
function even(){
    lower=parseInt(document.getElementById('lw').value);
    upper=parseInt(document.getElementById('up').value);

    for (let number = lower; number < upper; number++) {
        if(number%2==0){
            document.getElementById('result').innerText='even';
            console.log('number'+number);
        
    }
    
        
    }
    return false

}
function odd(){
    lower=parseInt(document.getElementById('lw').value);
    upper=parseInt(document.getElementById('up').value);
    for (let number = lower; number < upper; number++) {
        if(number%2!=0){
            document.getElementById('result').innerText='odd';
            console.log('number'+number);

    }
    
    
    }
    return false;

}

 

   
    