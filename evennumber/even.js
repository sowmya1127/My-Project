var number ;

function even(){
    number=document.getElementById('A').value;
    if (number%2==0) {
        document.getElementById('result').innerHTML = 'The number is even number';
        console.log("The number is even number");
        
    } else {
        document.getElementById('result').innerHTML = 'The number is not even number';
       console.log("The number is not even number");
        
    }
    return false;
}
