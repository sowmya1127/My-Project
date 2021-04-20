var principle ;
var time ;
var rate ;
var intrest  ;

function simpleintrest(){
      principle=document.getElementById('principle').value;
    time=document.getElementById('time').value;
    rate=document.getElementById('rate').value;
     intrest=principle*time*rate/100;
    document.getElementById('result').value=int;
     console.log('simpleintrest is'+ intrest);
    
   
     
}

simpleintrest();
