function fun(operation){


    var num1= document.getElementById("num1").value;
    var num2= document.getElementById("num2").value;

    var num3= document.getElementById("num3").value;
    var num4= document.getElementById("num4").value;

    var num5= document.getElementById("num5").value;
    var num6= document.getElementById("num6").value;

    var num7= document.getElementById("num7").value;
    var num8= document.getElementById("num8").value;

//  var res = document.getElementById("res").value;

 if(operation === 'add'){
     var result = parseInt(num1)+parseInt(num2);
     document.getElementById("res").value = result;
 }

 if(operation === 'substract'){
    var result = parseInt(num3)-parseInt(num4);
    document.getElementById("res").value = result;
}

if(operation === 'multiply'){
    var result = parseInt(num5)*parseInt(num6);
    document.getElementById("res").value = result;
}

if(operation === 'division'){
    var result = parseInt(num7)/parseInt(num8);
    document.getElementById("res").value = result;
}

}