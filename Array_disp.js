function Show()
{
   /*  Employee={eid:"79",ename:"fff"}
student=[{name:"rupali",roll_no:"1"},
{name:"pooja",roll_no:"2"},
{name:"prad",roll_no:"3"}]; */
 var student={ name:"pradnya",
    roll_no:1,
    marks:[90,90,90],
    address:{
        city:"pune",
        pincode:411003
    }

}



    console.log(student.name+"  "+student.roll_no+" "+student.marks[0]+" "+student.marks[1]+" "+student.marks[2]+" "+student.address.city+" "+student.address.pincode);
     for(var i=0;i<student.marks.length;i++)
     {
         console.log(student.marks[i]+" ");
     }   

//console.log(Employee);
}

Show();