<template>
    <div class="experience">
        <v-container>
            <h1 style="margin-left: 10%;">Experience</h1>
            <v-card class="experience-card" v-for="(experience, index) in experienceCardData" :key="index">
                <v-card-text>
                    <div>
                        <span class="text-h5 text--primary">{{ experience.position }} </span>
                    </div>
                    <div>
                        {{ experience.company }}<br>
                        {{ experience.start }} - {{ experience.end }}
                    </div>
                    <div class="text--primary">
                        <ul>
                            <li v-for="(item, index) in experience.description" :key="index">{{ item }}</li>
                        </ul>
                    </div>
                </v-card-text>
            </v-card>
        </v-container>

        <v-main>
            <router-view></router-view>
        </v-main>
    </div>
</template>

<script>
  export default {
    data: () => ({
        experienceCardData: [
            {
                position: 'Software Developer',
                company: 'Moneytree Software',
                location: 'Muncie, Indiana',
                start: 'May 2021',
                end: 'Current',
                description: [
                    'Design and code features and bug fixes',
                    'Analyze user stories and requirements',
                    'Create and maintain unit and integration testing',
                    'Create and maintain technical documentation as well as documentation of software functionality',
                    'Analyze escalated client technical issues and identify solutions'
                ],
            },
            {
                position: 'Software Developer',
                company: 'Accutech Systems Corporation',
                location: 'Muncie, Indiana',
                start: 'May 2021',
                end: 'Current',
                description: [
                    'Design and code features and bug fixes',
                    'Analyze user stories and requirements',
                    'Create and maintain unit and integration testing',
                    'Create and maintain technical documentation as well as documentation of software functionality',
                    'Analyze escalated client technical issues and identify solutions'
                ],
            },
            {
                position: 'Landscaper',
                company: 'LML Estate Management',
                location: 'Fort Wayne, Indiana',
                start: 'May 2018',
                end: 'August 2020',
                description: [
                    'Lead landscaping crews at high-end Fort Wayne properties',
                    'Discussed with and worked with clients to adhere to their wants and needs',
                    'Ran heavy machinery such as skid loaders and excavators',
                    'Mowed, trimmed, planted, and other various grounds maintenance'
                ],
            },
            {
                position: 'Automotive Mechanic',
                company: 'Meyer Auto Sales Inc.',
                location: 'Monroeville, Indiana',
                start: 'February 2016',
                end: 'August 2017',
                description: [
                    'Ran tests and diagnosed issues with vehicles',
                    'Repaired and replaced faulty or broken parts on customer vehicles',
                    'Removed and replaced various body parts of wrecked vehicles',
                    'Answered the phone when needed and provided customer service'
                ],
            },
        ],
    }),
  }
</script>

<style scoped>
    .experience-card {
        margin-left: 10%;
        margin-right: 10%;
        margin-bottom: 24px;
    }
</style>