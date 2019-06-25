class Car
{
    constructor(name,price)
    {
       this.name=name;
       this.price=price;
    }

    
   disp()
   {
       console.log(this.name+" "+this.price);
     
   }

   disp_Student()
   {

    var student=
    
    [{name:"rupali",roll_no:"1"},
          {name:"pooja",roll_no:"2"},
         {name:"prad",roll_no:"3"}];
    for(var i=0;i<student.length;i++)
    {
      console.log(student[i].name+"  "+student[i].roll_no);
    }
   }

}
 c=new Car("Fiat",1000000);
 c.disp();
 
 c.disp_Student();
 