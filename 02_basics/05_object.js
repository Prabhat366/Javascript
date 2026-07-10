const course = {
    courseName : "Javascript",
    courseInstructor : "Prabhat",
    coursePrice : 999
}

// sort cut to print object value

// Destructuring

const {courseInstructor} = course
console.log(courseInstructor);


const {courseInstructor : instr} = course
console.log(instr);
