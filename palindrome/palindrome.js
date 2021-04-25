var num;
var rem;
var rev=0;
var org;
 
function palinDrome(){
    num=parseInt(document.getElementById('number').value);
    org=num;
    while (num>0) {
        rem=num%10;
        num=parseInt(num/10);
        rev=rev*10+rem;
        
    }
    if(rev==org){
        output='It is a  palindrome';
        document.getElementById('result').value=output;
        console.log('It is  a palindrome');
    }else{
        output='It is not a palindrome';
        document.getElementById('result').value=output;
        console.log('It is not a palindrome');

    }
    return false;
}
