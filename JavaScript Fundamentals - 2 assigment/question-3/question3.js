const students=[
    {
        studentName:"nitish",
        marks:98
    },
    {
        studentName:"navneet",
        marks:99
    },
    {
        studentName:"Mohit",
        marks:85
    },
    {
        studentName:"Rohit",
        marks:81
    },
    {
        studentName:"Kunal",
        marks:87
    }
]

// method one

// const result=students.filter((student)=>student.marks>=90
// )
// for (let index = 0; index < result.length; index++) {
//     console.log(`Congratulations ${result[index].studentName} You have cleared the exam.`)
// }


//method 2

function searchStudent(student){
    let index = 0;

    for (;index < students.length; index++) {
        
        if (students[index].studentName==student && students[index].marks>90) {
            console.log(`Congratulations ${students[index].studentName} You have cleared the exam.`)
            break;
        }
        else if (students[index].studentName==student && students[index].marks<90) {
            
            console.log(`sorry ! ${students[index].studentName} You have not cleared the exam.`)
            break
        }

    }

    if (index>=students.length) {
     return   console.log(console.log(` ${student} is a invalid user`));
    }

}

searchStudent("nitish")
searchStudent("Mohit")
searchStudent("rocky")