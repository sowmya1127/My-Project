var principle ;
var time ;
var rate ;
var intrest  ;

function simpleintrest(){
      principle=parseInt(document.getElementById('principle').value);
    time=parseIntdocument.getElementById('time').value;)
    rate=parseInt(document.getElementById('rate').value;)
     intrest=principle*time*rate/100;
    document.getElementById('result').value=intrest;
     console.log('simpleintrest is'+ intrest);
    
   
    return false; 
}


