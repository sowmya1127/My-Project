var principle ;
var time ;
var rate ;
var intrest  ;

function simpleintrest(){
     intrest=(principle*time*rate)/100
    document.getElementById('result').innerHTML = 'simpleintrest is ';
    
    principle=document.getElementById('principle').value;
    time=document.getElementById('time').value;
    rate=document.getElementById('rate').value;
    intrest=document.getElementById('intrest').value;
    return false; 
}

simpleintrest();