const students = [
  {
    id: 1,
    name: "Rahul",
    age: 21,
    course: "MERN",
    isPlaced: true,
    skills: ["HTML", "CSS", "JavaScript", "React"],
    marks: {
      frontend: 85,
      backend: 78,
      database: 82
    },
    projects: [
      {
        title: "E-commerce App",
        tech: ["React", "Node", "MongoDB"],
        rating: 4.5
      },
      {
        title: "Chat App",
        tech: ["Socket.io", "Express"],
        rating: 4.2
      }
    ],
    address: {
      city: "Delhi",
      location: {
        lat: 28.61,
        lng: 77.23
      }
    },
    attendance: [true, true, false, true]
  },
  {
    id: 2,
    name: "Anjali",
    age: 23,
    course: "Python",
    isPlaced: true,
    skills: ["Python", "Django", "SQL"],
    marks: {
      frontend: 70,
      backend: 90,
      database: 88
    },
    projects: [
      {
        title: "Blog API",
        tech: ["Django", "PostgreSQL"],
        rating: 4.7
      }
    ],
    address: {
      city: "Mumbai",
      location: {
        lat: 19.07,
        lng: 72.87
      }
    },
    attendance: [true, true, true, true]
  },
  {
    id: 3,
    name: "Vikas",
    age: 20,
    course: "MERN",
    isPlaced: false,
    skills: ["HTML", "CSS"],
    marks: {
      frontend: 60,
      backend: 55,
      database: 58
    },
    projects: [],
    address: {
      city: "Noida",
      location: {
        lat: 28.57,
        lng: 77.32
      }
    },
    attendance: [false, true, false, true]
  },
  {
    id: 4,
    name: "Sneha",
    age: 22,
    course: "Data Analytics",
    isPlaced: true,
    skills: ["Excel", "Power BI", "SQL"],
    marks: {
      frontend: 75,
      backend: 80,
      database: 92
    },
    projects: [
      {
        title: "Sales Dashboard",
        tech: ["Power BI"],
        rating: 4.8
      }
    ],
    address: {
      city: "Pune",
      location: {
        lat: 18.52,
        lng: 73.85
      }
    },
    attendance: [true, false, true, true]
  }
];
// 1.Add averageMarks field using nested marks.
// const averageMarks= students.filter(())
const averageMarks = students.map((currentValue, index) => {
    const avg =
      (currentValue.marks.frontend +
       currentValue.marks.backend +
       currentValue.marks.database) / 3;
    return avg;
});
console.log(averageMarks);

// 2.Return {name, city, totalProjects}.
const info = students.map((currentValue, index) => {
   return {
   name: currentValue.name,
   city: currentValue.address.city,
   totalProjects: currentValue.projects.length
};
});
console.log(info);
// 3.Convert all student names to uppercase.
const uppercase = students.map((currentValue)=>{
  return {
    name : currentValue.name.toUpperCase()
  };
});
console.log(uppercase);

// 4.Add a field hasProject (true/false).
const hasProject = students.map((currentValue)=>{
  return {
    hasProject : currentValue.projects.length>0
  };
});
console.log(hasProject);
// 5.Add attendancePercentage.
const attendancePercentage = students.map((currentValue) => {
    let present = 0;
    for (let i = 0; i < currentValue.attendance.length; i++) {
        if (currentValue.attendance[i] === true) {
            present++;
        }
    }
    const attendance =(present/currentValue.attendance.length) * 100;
    return attendance;
});
console.log(attendancePercentage);
// - Students who have React skill.
const React = students.filter((currentValue) => {
  let name;
    for (let i = 0; i < currentValue.skills.length; i++) {
        if (currentValue.skills[i] == "React") {
           name = currentValue.name;
        }
    }
    return name;
})
.map((currentValue) => currentValue.name);
console.log(React);
// - Students with no projects.
const NoProj = students.filter((currentValue) => {
  let name;
        if (currentValue.projects.length == 0 ) {
           name = currentValue.name;
        }
    return name;
})
.map((currentValue) => currentValue.name);
console.log(NoProj);
// Students whose backend marks < 60.
const backendmarkslow = students.filter((currentValue) => {
  let name;
        if (currentValue.marks.backend < 60 ) {
           name = currentValue.name;
        }
    return name;
})
.map((currentValue) => currentValue.name);
console.log(backendmarkslow);
// - Students from Delhi or Mumbai AND placed.
const DorMANDP = students.filter((currentValue) => {
  let name;
        if ((currentValue.address.city == "Delhi" ||currentValue.address.city == "Mumbai") && currentValue.isPlaced == true ) {
           name = currentValue.name;
        }
    return name;
})
.map((currentValue) => currentValue.name);
console.log(DorMANDP);
// - Students with attendance < 75%.
const attendancePercentagelow = students.filter((currentValue) => {
    let present = 0;
    for (let i = 0; i < currentValue.attendance.length; i++) {
        if (currentValue.attendance[i] === true) {
            present++;
        }
    }
    const attendance =(present/currentValue.attendance.length) * 100;
      if(attendance < 75){
        return currentValue.name;
      }
})
.map((currentValue)=> currentValue.name);
console.log(attendancePercentagelow);
// - Total number of projects across all students.
  let count =0 ;
  for (let i = 0 ; i < students.length ; i++){
    count+= students[i].projects.length;
  }
console.log(count);
// - Average frontend marks of all students.
  let avg = 0;
    for (let i = 0 ; i < students.length ; i++){
    avg+= students[i].marks.frontend;
  }
  avg /= students.length;
console.log(avg);

// - Find student with highest project rating overall.
// - Count students per course.
// - Total number of skills across all students.
// - Get all unique skills.
// - Find top-rated project among all students.
// - Group students by city.
// - Get students sorted by average marks (descending).
// - Check if every student has at least one skill.
// - Check if any student has rating > 4.7.
// - Find student with best attendance.
// - Get list of students who worked on MongoDB.
// - Flatten all project titles into one array.
// - Find most common skill among students.

