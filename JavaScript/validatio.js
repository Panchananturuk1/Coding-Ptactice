function adds(){  
 
    var num1=document.getElementById("num1").value;
    var num2=document.getElementById("num2").value;
    var sum = parseInt(num1)+parseInt(num2);
    
    if (isNaN(sum)) {
  //  document.getElementById('add').value = sum;
  alert("please enter the value");
  return false;
}else{

  alert("SUM IS: "+sum);
     document.getElementById("add").innerHTML ="Sum is: "+ sum;
}

      
     
}