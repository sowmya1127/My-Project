var principle ;
var time ;
var rate ;
var intrest  ;

function simpleintrest(){
      principle=paraInt(document.getElementById('principle').value);
    time=paraIntdocument.getElementById('time').value;)
    rate=paraInt(document.getElementById('rate').value;)
     intrest=principle*time*rate/100;
    document.getElementById('result').value=intrest;
     console.log('simpleintrest is'+ intrest);
    
   
    return false; 
}


