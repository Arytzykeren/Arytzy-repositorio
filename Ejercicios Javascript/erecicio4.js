let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];

function findCommonCourses(arr1, arr2) {
  
  const commonCourses = arr1.filter(course => arr2.includes(course));
  
  
  console.log("Common courses:", commonCourses);
}

findCommonCourses(student1Courses, student2Courses);