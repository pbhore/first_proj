function checked_ch()
{
    
  var check=document.getElementById("check");
  var text=document.getElementById("text");
   if(check.checked==true)
   {
      text.style.display="block";
     
   }
  else{
    text.style.display="none";
  } 
}

 