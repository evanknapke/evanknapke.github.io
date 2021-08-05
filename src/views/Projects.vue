<template>
    <div class="projects">
        <h1 style="text-align:center;">Projects</h1>
        <v-container>
            <v-row>
                <v-col>
                    <v-card max-width="344">
                        <v-card-text>
                            <div>.Net Core, Vue, MongoDB</div>
                            <p class="text-h4 text--primary">
                                Merit Engine
                            </p>
                            <div class="text--primary">
                                A financial advising tool and API for financial advisors that generates and displays potential portfolios to their clients.
                            </div>
                        </v-card-text>
                        <v-card-actions>
                            <v-btn to="/projects/merit-engine">
                                Learn More
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                    <br>
                    <v-card max-width="344">
                        <v-card-text>
                            <div>Unreal Engine 4</div>
                            <p class="text-h4 text--primary">
                                WavesFPS
                            </p>
                            <div class="text--primary">
                                A 3D 3rd person shooting game that gets increasingly more difficult as the game goes on.
                            </div>
                        </v-card-text>
                        <v-card-actions>
                            <v-btn to="/projects/wavesfps">
                                Learn More
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                    <br>
                    <v-card max-width="344">
                        <v-card-text>
                            <div>Python</div>
                            <p class="text-h4 text--primary">
                                Signing Free Agents
                            </p>
                            <div class="text--primary">
                                Takes in a list of free agent baseball players and returns the best possible players to sign to the team in order to maximize the VORP (value over replacement player) for that team.
                            </div>
                        </v-card-text>
                        <v-card-actions>
                            <v-btn to="/projects/signing-free-agents">
                                Learn More
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>
                <br>
                <v-col>
                    <v-card max-width="344">
                        <v-card-text>
                            <div>Java</div>
                            <p class="text-h4 text--primary">
                                Server Number Guesser
                            </p>
                            <div class="text--primary">
                                Creates a server that is able to handle multiple clients. Creates a dialogue with the client(s) and guesses a number of their choosing.
                            </div>
                        </v-card-text>
                        <v-card-actions>
                           <v-btn to="/projects/server-number-guesser">
                                Learn More
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                    <br>
                    <v-card max-width="344">
                        <v-card-text>
                            <div>Java</div>
                            <p class="text-h4 text--primary">
                                Diamond
                            </p>
                            <div class="text--primary">
                                A text based adventure game that adapts to the choices that the player makes.
                            </div>
                        </v-card-text>
                        <v-card-actions>
                            <v-btn to="/projects/diamond">
                                Learn More
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                    <br>
                    <v-card max-width="344">
                        <v-card-text>
                            <div>Python</div>
                            <p class="text-h4 text--primary">
                                iOS Photo Extractor
                            </p>
                            <div class="text--primary">
                                Extracts photos off of jailbroken iOS devices on the same network.
                            </div>
                        </v-card-text>
                        <v-card-actions>
                            <v-btn to="/projects/ios-photo-extractor">
                                Learn More
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>
                <br>
                <v-col>
                    <v-card max-width="344">
                        <v-card-text>
                            <div>Python, Pandas</div>
                            <p class="text-h4 text--primary">
                                NFL Predictor
                            </p>
                            <div class="text--primary">
                                Pulls live stats from the web to predict outcomes of the upcoming schedule.
                            </div>
                        </v-card-text>
                        <v-card-actions>
                            <v-btn to="/projects/nfl-predictor">
                                Learn More
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                    <br>
                    <v-card max-width="344">
                        <v-card-text>
                            <div>Swift</div>
                            <p class="text-h4 text--primary">
                                Decision Maker
                            </p>
                            <div class="text--primary">
                                An iOS application that makes decisions for you.
                            </div>
                        </v-card-text>
                        <v-card-actions>
                            <v-btn to="/projects/decision-maker">
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
