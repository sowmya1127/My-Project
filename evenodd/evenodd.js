var number;
var lower;
var upper;
var even;
var odd;
function even(){
    lower=parseInt(document.getElementById('lower').value.number);
    upper=parseInt(document.getElementById('upper').value.number);
    if(number%2==0){
        document.getElementById('result').value=number;
        console.log('number'+number);
    }

}
function odd(){
    lower=parseInt(document.getElementById('lower').value.number);
    upper=parseInt(document.getElementById('upper').value.number);
    if(number%2!=0){
        document.getElementById('result').value=number;
        console.log('number'+number);
    }

}
 

   
    