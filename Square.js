function Square()
{
    var num=document.getElementById("number").value;
    if(num=="")
    {
        alert("enter number");
       
    }
    else
    if(num>='a' && num<='z')
    {
        alert("Enter only numberic values");
        
    }
    else{
    var result;
    result=num*num;
    document.getElementById("output").value=result;
    //console.log(result);
}
    
}

function reset()
{
    document.getElementById("number").value="";
    document.getElementById("output").value="";
}
