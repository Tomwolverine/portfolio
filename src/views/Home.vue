<template>
  <div class="home">
    <router-view></router-view>
    <Header/>
    <Hero/>
    <div id="aboutMe" class="about-tag"></div>
    <h2 class="about-heading">About Me</h2>
    <AboutMe/>
    <div id="skills" class="scroll-tag"></div>
    <h2 class="section-heading">Skills</h2>
    <Skills/>
    <div id="projects" class="scroll-tag"></div>
    <h2 class="section-heading">Projects</h2>
    <Projects/>
    <div id="workHistory" class="scroll-tag"></div>
    <h2 class="section-heading">Work History</h2>
    <WorkHistory/>
    <div id="education" class="scroll-tag"></div>
    <h2 class="section-heading">Education</h2>
    <Education/>
    <div id="resume" class="scroll-tag"></div>
    <h2 class="section-heading">Resume</h2>
    <Resume/>
    <!-- <NewPost/> -->
    <Contact/>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue';
import Hero from '@/components/Hero.vue';
import AboutMe from '@/components/AboutMe.vue';
import Skills from '@/components/Skills.vue';
import Projects from '@/components/Projects.vue';
import WorkHistory from '@/components/WorkHistory.vue';
import Education from '@/components/Education.vue';
import Resume from '@/components/Resume.vue';
// import NewPost from '@/components/NewPost.vue';
import Contact from '@/components/Contact.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'home',
  components: {
    Header,
    Hero,
    AboutMe,
    Skills,
    Projects,
    WorkHistory,
    Education,
    Resume,
    Contact,
    // NewPost,
    Footer
  }
};
</script>

<style scoped>
@media (max-width: 1024px) {
  .about-tag {
    padding-top: 70px;
    padding-bottom: 30px;
  }
}
@media (min-width: 1025px) {
  .about-tag {
    padding-top: 30px;
    padding-bottom: 30px;
  }
}
.scroll-tag {
  padding-top: 30px;
  padding-bottom: 30px;
}
.about-heading {
  text-align: center;
  padding-top: 50px;
  padding-bottom: 30px;
  font-weight: 700;
  color: #ae0001;
}
.section-heading {
  text-align: center;
  padding-top: 50px;
  padding-bottom: 30px;
  font-weight: 700;
  color: #ae0001;
}
</style>
