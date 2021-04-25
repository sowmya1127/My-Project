var firstNumber=0;
var secondNumber=1;
var i;
var sum;
var n;


function fibonacciSeries(){
    n=parseInt(document.getElementById('num').value);
    console.log(firstNumber);
    console.log(secondNumber);
    var output=firstNumber+" "+secondNumber+" ";
    for(var i=0;i<n;i++){
        sum=firstNumber+secondNumber;
        firstNumber=secondNumber;
        secondNumber=sum;
        output=output+" "+sum;
        document.getElementById('result').value=output;
        console.log(sum);
       
        
        
       
        
    }
    
    

    return false;
    
}