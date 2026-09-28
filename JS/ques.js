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