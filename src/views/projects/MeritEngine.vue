<template>
    <v-container>
        <h1>Merit Engine</h1>
        <p>This is a closed source project</p>

        <v-divider/><br>

        <h3 id="description">Description</h3>
        <p>A financial advising tool and API for financial advisors that generates and displays hypothetical investment strategies for their clients. This delivers advisors the ability to determine what strategy best fits their clients based on real data visualizations.</p>

        <h3 id="features">Features</h3>
        <ul>
            <li>Generate optimal portfolios curated to any individual investor’s needs</li>
            <li>Ability to take risk assessments to calculate an investors risk tolerance</li>
            <li>Ability to compare up to 5 portfolios at a time</li>
            <li>Ability to create accounts and login</li>
            <li>View expanded details about portfolios that you have generated</li>
        </ul>

        <h3>Authors</h3>
        <ul>
            <li>Cam Dowless</li>
            <li>Erik Sands</li>
            <li>Evan Knapke</li>
            <li>Kade Dentel</li>
        </ul>

        <br>

        <h2>Client Partner Information</h2>
        <v-divider/><br>

        <h3>Company</h3>
        <ul>
            <li>Accutech Systems Corporation, Muncie, IN</li>
        </ul>

        <h3>People</h3>
        <ul>
            <li>Matthew Garrett</li>
            <li>Patrick Spencer</li>
        </ul>

        <br>
        <h2>Other Acknowledgements</h2>
        <v-divider/><br>

        <h3>Professor</h3>
        <ul>
            <li>Dr. Huseyin Ergin</li>
        </ul>

        <h3>Mentor</h3>
        <ul>
            <li>Ryland Babusiak</li>
        </ul>

        <br>
        <h2>Technologies</h2>
        <v-divider/><br>

        <ul>
            <li>ASP.Net</li>
            <li>C#</li>
            <li>Vue.js</li>
            <li>MongoDB</li>
            <li>Node</li>
            <li>JavaScript</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Docker</li>
        </ul>

        <h3>Team Methodologies</h3>
        <ul>
            <li>Agile and Scrum iterative sprint development model</li>
            <li>UML charts for project design</li>
            <li>Test Driven Development</li>
        </ul>

        <br>
        <h2>Screenshots</h2>
        <v-divider/><br>
            
        <div>
            <v-img v-for="(screenshot, i) in screenshots" :key="i"
                max-width="640px" 
                :src="screenshot.path" 
                :alt="screenshot.altText"
            />
        </div>

    </v-container>
</template>

<script>
export default {
  data: () => ({
    screenshots: [
        { path: require("@/assets/merit_engine/merit_signup.png"), altText: "Signup Page Screenshot" },
        { path: require("@/assets/merit_engine/merit_login.png"), altText: "Login Page Screenshot" },
        { path: require("@/assets/merit_engine/merit_create.png"), altText: "Client Creation Form" },
        { path: require("@/assets/merit_engine/merit_new.png"), altText: "New Page Screenshot" },
        { path: require("@/assets/merit_engine/merit_summary.png"), altText: "Summary Page Screenshot" },
        { path: require("@/assets/merit_engine/merit_compare.png"), altText: "Compare Page Screenshot" },
        { path: require("@/assets/merit_engine/merit_risk_home.png"), altText: "Risk Tolerance Home Page Screenshot"},
        { path: require("@/assets/merit_engine/merit_risk_question.png"), altText: "Example Question Screenshot" },
        { path: require("@/assets/merit_engine/merit_risk_results.png"), altText: "Risk Assessment Results Page" }
    ],
  }),
};
</script>
