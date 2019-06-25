function displaySubjectInfo(subjectId)
{
    
   var subject=getSubject(subjectId);
   document.getElementById("name").innerHTML=subject.name;
   document.getElementById("father").innerHTML=subject.father;
   document.getElementById("year").innerHTML=subject.year;

}

function getSubject(subjectId)
{
    var subjects=[{
        
        name:"java",
        father:"JamesGosling",
        year:"1995"
    },
    {
        name:"c++",
        father:"xyz",
        year:"1994"
    },
    {
        name:"angular",
        father:"Misko Havry",
        year:"2016"
    }
];


var subject={
    name="",
    father="",
    year=0
};
for(var i=0;i<3;i++)
{
    if(subjectId==subjects[i].name)
    {
        subject=subjects[i]
    }
}
return subject;
}