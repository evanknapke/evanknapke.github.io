<template>
    <v-container>
        <h1>Coursework</h1>
        <v-select
          class="selector"
          :items="sectionOptions"
          item-text="displayText"
          item-value="id"
          @change="optionSelected"
          label="Section"
        ></v-select>
        <v-data-table
            :headers="headers"
            :items="selectedList" 
            item-key="course"
            :items-per-page="15"
            :sort-by="sortBy"
        >
        </v-data-table>
    </v-container>
</template>

<script>
export default {
  data: () => ({
    currentList: [],
    sortBy: "title",
    headers: [
        { text: 'Course', value: 'course' },
        { text: 'Title', value: 'title' },
        { text: 'Grade', value: 'grade' }
    ],
    sectionOptions: [
        { id: 0, displayText: "All Courses" },
        { id: 1, displayText: "University Core Curriculum" },
        { id: 2, displayText: "Major in Computer Science" },
        { id: 3, displayText: "Minor in Computer Information Systems" },
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
            grade: "A",
            professor: "Karl Mesarosh"
        },
        {
            course: "CS 121",
            title: "Computer Science 2",
            grade: "A",
            professor: "Dave Largent"
        },
        {
            course: "CS 124",
            title: "Discrete Structures",
            grade: "A",
            professor: "Brad Shutters"
        },
        {
            course: "CS 222",
            title: "Advanced Programming",
            grade: "A",
            professor: "Dave Largent"
        },
        {
            course: "CS 224",
            title: "Design and Analysis of Algorithms",
            grade: "A",
            professor: "Nicolas Renet"
        },
        {
            course: "CS 230",
            title: "Computer Organization and Architecture",
            grade: "A-",
            professor: "Jeff Zhang"
        },
        {
            course: "CS 239",
            title: "Social and Professional Issues",
            grade: "A",
            professor: "Dave Largetn"
        },
        {
            course: "CS 315",
            title: "Game Programming",
            grade: "B-",
            professor: "Paul Gestwicki"
        },
        {
            course: "CS 380",
            title: "Theory of Computation 1",
            grade: "A",
            professor: "Samuel Hsieh"
        },
        {
            course: "CS 410",
            title: "Web Programming",
            grade: "A",
            professor: "Vinayak Tanksale"
        },
        {
            course: "CS 416",
            title: "Computer Networks",
            grade: "A",
            professor: "Xin Sun"
        },
        {
            course: "CS 418",
            title: "Database Design",
            grade: "B",
            professor: "Nicolas Renet"
        },
        {
            course: "CS 419",
            title: "Operating Systems",
            grade: "B",
            professor: ""
        },
        {
            course: "CS 421",
            title: "Data Analytics",
            grade: "A",
            professor: "Fu-Shing Sun"
        },
        {
            course: "CS 431",
            title: "Programming Languages",
            grade: "A",
            professor: "Paul Buis"
        },
        {
            course: "CS 455",
            title: "Data Mining",
            grade: "A",
            professor: "Fu-Shing Sun"
        },
        {
            course: "CS 495",
            title: "Software Engineering 1",
            grade: "A",
            professor: "Huseyin Ergin"
        },
        {
            course: "CS 498",
            title: "Software Engineering 2",
            grade: "A",
            professor: "Huseyin Ergin"
        },
        {
            course: "GEOL 201",
            title: "Earth, Life, and Time",
            grade: "B+",
            professor: "Carolyn DOwnling"
        },
        {
            course: "MATH 181",
            title: "Elementary Probability and Statistics",
            grade: "B+",
            professor: ""
        },
        {
            course: "MATH 162",
            title: "Applied Calculus 2",
            grade: "B+",
            professor: "John"
        },
        {
            course: "MATH 165",
            title: "Calculus 1",
            grade: "T",
            professor: "High School"
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
  methods: {
    optionSelected(value) {
        console.log(value);
        switch(value) {
            case (1):
                this.currentList = this.universityCoreCurriculum;
                break;
            case (2):
                this.currentList = this.majorInComputerScience;
                break;
            case (3):
                this.currentList = this.minorInComputerInformationSystems;
                break;
            default:
                this.currentList = this.getAllCourses();
                break;
        }
    },
    getAllCourses() {
        // TODO: Works, but terrible way of doing it. Use a better way.
        var allCourses = this.universityCoreCurriculum;
        this.majorInComputerScience.forEach(course => {
            if (!allCourses.some(x => x.course == course.course))
                allCourses.push(course);
        });
        this.minorInComputerInformationSystems.forEach(course => {
            if (!allCourses.some(x => x.course, course.course))
                allCourses.push(course);
        });

        return allCourses;
    }
  },
  computed: {
      selectedList() {
        return this.currentList.length == 0 ? this.getAllCourses() : this.currentList;
      }
  }
};
</script>
<style scoped>
    .selector {
        max-width: 300px;
    }
</style>>