function add()
{
    var a=document.getElementById("var1").value;
    var b=document.getElementById("var2").value;
    c=parseFloat(a);
    d=parseFloat(b);
    var3.value=c+d;
    var e=document.getElementById("var3").value;
    if(e=="NaN"){
        alert("please enter values")

    }
    if(e=="NaN"){
        var3.value="";

    }


}





function sub()
{
    var a=document.getElementById("var1").value;
    var b=document.getElementById("var2").value;
    c=parseFloat(a);
    d=parseFloat(b);
    var3.value=c-d;
    var e=document.getElementById("var3").value;
    if(e=="NaN"){
        alert("please enter values")
    }
    if(e=="NaN"){
        var3.value="";

    }
}
function mul()
{
    var a=document.getElementById("var1").value;
    var b=document.getElementById("var2").value;
    c=parseFloat(a);
    d=parseFloat(b);
    var3.value=c*d;
    var e=document.getElementById("var3").value;
    if(e=="NaN"){
        alert("please enter values")
    }
    if(e=="NaN"){
        var3.value="";

    }
}
function div()
{
    var a=document.getElementById("var1").value;
    var b=document.getElementById("var2").value;
    c=parseFloat(a);
    d=parseFloat(b);
    var3.value=c/d;
    var e=document.getElementById("var3").value;
    if(e=="NaN"){
        alert("please enter values")
    }
    if(e=="NaN"){
        var3.value="";

    }
}
function reset()
{
var1.value="";
var2.value="";
var3.value="";


}