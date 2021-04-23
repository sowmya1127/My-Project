var prime;
var int;
function primeNum(){
    prime=parseInt(document.getElementById('num').value);
    for( var int=2;int<=prime/2;int++){
        if(prime%int!=0){
            document.getElementById("result").innerHTML='It is a primeNumber';
            console.log('It is a primeNumber');
          
            
        }
    }
return false;
}
