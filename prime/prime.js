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
            console.log("It is not a prime number");
        }else{
            output="It is not a prime number";
            document.getElementById('result').value=output;
            console.log("It is not a prime number");
        }
        
    
    return false;
   
}

        