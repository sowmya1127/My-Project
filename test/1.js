var num;
var int;
var prime;
function primeNum(){
    prime=1;
    num=parseInt(document.getElementById('num').value);
    for(var int=2;int<num;int++){
        if(num%int==0){
            prime=0;
 
        }
    }
        if(prime==1){
            output='It is a prime number';
            document.getElementById('result').value=output;
            console.log("It is  a prime number");
        }else if(num%2==0){
            output="It is even  number";
            document.getElementById('result').value=output;
            console.log("It is even number");
        }else{
            output='It is odd';
            document.getElementById('result').value=output;
            console.log("It is odd number");
        }
        
    
    return false;
}
   