function EvenOdd()
{
    var num=document.getElementById("name").value;

   if(num%2==0)
   {
       document.getElementById("number").value="even";
       console.log("number is even");

   }
   else
   {
    document.getElementById("number").value="odd";
    console.log("number is odd");

   }
}