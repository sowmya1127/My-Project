var prime;
var int;
function primeNum(){
    prime=parseInt(document.getElementById('num').value);
    for( var int=2;int<=prime/2;int++){
        if(prime%int!=0){
            output='It is a primeNumber'
            document.getElementById("result").value=output;
            console.log('It is a primeNumber');
          
            
        }else{
            output='It is   not primeNumber'
            document.getElementById("result").value=output;
            console.log('It is not primeNumber');

        }
    }
return false;
}
