import Vue from 'vue';
import VueRouter from 'vue-router';

import About from '@/views/About.vue';
import Education from '@/views/Education.vue';
import Experience from '@/views/Experience.vue';
import Home from '@/views/Home.vue';
import Projects from '@/views/Projects.vue';

import DecisionMaker from '@/views/projects/DecisionMaker.vue';
import Diamond from '@/views/projects/Diamond.vue';
import iOSPhotoExtractor from '@/views/projects/iOSPhotoExtractor.vue';
import MeritEngine from '@/views/projects/MeritEngine.vue';
import NFLPredictor from '@/views/projects/NFLPredictor.vue';
import ServerNumberGuesser from '@/views/projects/ServerNumberGuesser.vue';
import SigningFreeAgents from '@/views/projects/SigningFreeAgents.vue';
import ThisWebsite from '@/views/projects/ThisWebsite.vue';
import WavesFPS from '@/views/projects/WavesFPS.vue';

import Coursework from '@/views/education/Coursework.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/education',
    name: 'Education',
    component: Education
  },
  {
    path: '/experience',
    name: 'Experience',
    component: Experience
  },
  {
    path: '/projects/',
    component: Projects,
  },
  {
    path: '/projects/decision-maker',
    name: 'Decision Maker',
    component: DecisionMaker
  },
  {
    path: '/projects/diamond',
    name: 'Diamond',
    component: Diamond
  },
  {
    path: '/projects/ios-photo-extractor',
    name: 'iOS Photo Extractor',
    component: iOSPhotoExtractor
  },
  {
    path: '/projects/merit-engine',
    name: 'Merit Engine',
    component: MeritEngine
  },
  {
    path: '/projects/nfl-predictor',
    name: 'NFL Predictor',
    component: NFLPredictor
  },
  {
    path: '/projects/server-number-guesser',
    name: 'Server Number Guesser',
    component: ServerNumberGuesser
  },
  {
    path: '/projects/signing-free-agents',
    name: 'Singing Free Agents',
    component: SigningFreeAgents
  },
  {
    path: '/projects/wavesfps',
    name: 'WavesFPS',
    component: WavesFPS
  },
  {
    path: '/projects/this-website',
    name: 'evanknapke.com',
    component: ThisWebsite
  },
  {
    path: '/education/coursework',
    name: 'Coursework',
    component: Coursework
  }
]

const router = new VueRouter({
  routes
})

export default router
