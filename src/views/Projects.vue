<template>
    <div class="projects">
        <v-container>
            <h1 class="text--primary">Projects</h1>
            <v-row v-for="(projectRows, index) in chunkedProjectList" :key="index">
                <v-col v-for="project in projectRows" :key="project.title">
                    <v-card class="project-card">
                        <v-card-text>
                            <div>{{ project.technologies }}</div>
                            <p class="text-h4 text--primary">
                                {{ project.title }}
                            </p>
                            <div class="text--primary">
                                {{ project.description }}
                            </div>
                        </v-card-text>
                        <v-card-actions class="project-card-buttons">
                            <v-btn :to="project.route">
                                Learn More
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>

        <v-main>
            <router-view></router-view>
        </v-main>
    </div>
</template>

<script>
  export default {
    data: () => ({
        chunkedProjectList: [],
        projects: [
            {
                title: 'This Website',
                description: 'The current website.',
                technologies: 'Vue, Javascript, HTML, CSS, Vuetify',
                route: '/projects/this-website'
            },
            {
                title: 'Merit Engine',
                description: 'A financial advising tool and API for financial advisors that generates and displays potential portfolios to their clients.',
                technologies: '.Net Core, Vue, MongoDB',
                route: '/projects/merit-engine'
            },
            {
                title: 'WavesFPS',
                description: 'A 3D 3rd person shooting game that gets increasingly more difficult as the game goes on.',
                technologies: 'Unreal Engine 4, C++',
                route: '/projects/wavesfps'
            },
            {
                title: 'Signing Free Agents',
                description: 'Takes in a list of free agent baseball players and returns the best possible players to sign to the team in order to maximize the VORP (value over replacement player) for that team.',
                technologies: 'Python',
                route: '/projects/signing-free-agents'
            },
            {
                title: 'Server Number Guesser',
                description: 'Creates a server that is able to handle multiple clients. Creates a dialogue with the client(s) and guesses a number of their choosing.',
                technologies: 'Java',
                route: '/projects/server-number-guesser'
            },
            {
                title: 'Diamond',
                description: 'A text based adventure game that adapts to the choices that the player makes.',
                technologies: 'Java',
                route: '/projects/diamond'
            },
            {
                title: 'iOS Photo Extractor',
                description: 'Extracts photos off of jailbroken iOS devices on the same network.',
                technologies: 'Python, Paramiko',
                route: '/projects/ios-photo-extractor'
            },
            {
                title: 'NFL Predictor',
                description: 'Pulls live stats from the web to predict outcomes of the upcoming schedule.',
                technologies: 'Python, Pandas',
                route: '/projects/nfl-predictor'
            },
            {
                title: 'Decision Maker',
                description: 'An iOS application that makes decisions for you.',
                technologies: 'Swift',
                route: '/projects/decision-maker'
            },
        ],
    }),
    methods: {
        chunk (arr, len) {
            var chunks = []
            var i = 0
            var n = arr.length

            while (i < n) {
                chunks.push(arr.slice(i, i += len))
            }
            return chunks
        }
    },
    beforeMount() {
        this.chunkedProjectList = this.chunk(this.projects, 3);
    }
  }
</script>

<style scoped>
    .project-card {
        height: 350px;
    }

    .project-card-buttons {
        position: absolute;
        bottom: 5px;
    }
</style>

