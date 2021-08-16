<template>
    <v-container>
        <h1>Coursework</h1>
        <!-- 
            - use a computed property to cycle through the different lists
            - combine lists? 
        -->
        <v-data-table
            :headers="headers"
            :items="universityCoreCurriculum" 
            item-key="course"
            :items-per-page="15"
        >
        </v-data-table>
    </v-container>
</template>

<script>
export default {
  data: () => ({
    headers: [
        { text: 'Course', value: 'course' },
        { text: 'Title', value: 'title' },
        { text: 'Grade', value: 'grade' }
    ],
    universityCoreCurriculum: [
        {
            course: "ENG 103",
            title: "Rhetoric & Writing",
            grade: "T"
        },
        {
            course: "ENG 104",
            title: "Composing Research",
            grade: "A"
        },
        {
            course: "COMM 210",
            title: "Fundamentals of Public Communication",
            grade: "B+"
        },
        {
            course: "HIST 150",
            title: "The West in the World",
            grade: "A"
        },
        {
            course: "MATH 165",
            title: "Calculus 1",
            grade: "T"
        },
        {
            course: "FIN 101",
            title: "Personal Finance for Fiscal Wellness",
            grade: "A"
        },
        {
            course: "PFW 103",
            title: "Walking",
            grade: "A-"
        },
        {
            course: "AHS 100",
            title: "Introduction to Art",
            grade: "A"
        },
        {
            course: "ENG 206",
            title: "Reading Literature",
            grade: "T"
        },
        { 
            course: "GEOL 101",
            title: "Planet Earth Geol Environment",
            grade: "A"
        },
        {
            course: "ISOM 125",
            title: "Micro Apps for Business",
            grade: "A-"
        },
        {
            course: "MUHI 107",
            title: "Rock and Roll in America",
            grade: "B+"
        },
        {
            course: "GEOL 201",
            title: "Earth, Life, and Time",
            grade: "B+"
        },
        {
            course: "CS 498",
            title: "Software Engineering 2",
            grade: "A"
        },
        {
            course: "WPP 392",
            title: "Writing Proficiency Exam",
            grade: "CR"
        }
    ],
    majorInComputerScience: [
        {
            course: "CS 120",
            title: "Computer Science 1",
            grade: "A"
        },
        {
            course: "CS 121",
            title: "Computer Science 2",
            grad: "A"
        },
        {
            course: "CS 124",
            title: "Discrete Structures",
            grade: "A"
        },
        {
            course: "CS 222",
            title: "Advanced Programming",
            grade: "A"
        },
        {
            course: "CS 224",
            title: "Design and Analysis of Algorithms",
            grade: "A"
        },
        {
            course: "CS 230",
            title: "Computer Organization and Architecture",
            grade: "A-"
        },
        {
            course: "CS 239",
            title: "Social and Professional Issues",
            grade: "A"
        },
        {
            course: "CS 315",
            title: "Game Programming",
            grade: "B-"
        },
        {
            course: "CS 380",
            title: "Theory of Computation 1",
            grade: "A"
        },
        {
            course: "CS 410",
            title: "Web Programming",
            grade: "A"
        },
        {
            course: "CS 416",
            title: "Computer Networks",
            grade: "A"
        },
        {
            course: "CS 418",
            title: "Database Design",
            grade: "B"
        },
        {
            course: "CS 419",
            title: "Operating Systems",
            grade: "B"
        },
        {
            course: "CS 421",
            title: "Data Analytics",
            grade: "A"
        },
        {
            course: "CS 431",
            title: "Programming Languages",
            grade: "A"
        },
        {
            course: "CS 455",
            title: "Data Mining",
            grade: "A"
        },
        {
            course: "CS 495",
            title: "Software Engineering 1",
            grade: "A"
        },
        {
            course: "CS 498",
            title: "Software Engineering 2",
            grad: "A"
        },
        {
            course: "GEOL 201",
            title: "Earth, Life, and Time",
            grade: "B+"
        },
        {
            course: "MATH 181",
            title: "Elementary Probability and Statistics",
            grade: "B+"
        },
        {
            course: "MATH 162",
            title: "Applied Calculus 2",
            grade: "B+"
        },
        {
            course: "MATH 165",
            title: "Calculus 1",
            grade: "T"
        }
    ],
    minorInComputerInformationSystems: [
        {
            course: "CIS 450",
            title: "E-Commerce Design Applications",
            grade: "A"
        },
        {
            course: "ISOM 125",
            title: "Micro Applications for Business",
            grade: "A-"
        },
        {
            course: "ISOM 210",
            title: "Business Information Systems",
            grade: "A-"
        },
        {
            course: "ISOM 300",
            title: "Project Management",
            grade: "A"
        },
        {
            course: "ISOM 351",
            title: "Operations Management",
            grade: "A"
        },
        {
            course: "LCSM 361",
            title: "Simulation, Modeling, Optimization",
            grade: "A"
        }
    ]
  }),
  computed: [
    //   selectedList()
  ]
};
</script>