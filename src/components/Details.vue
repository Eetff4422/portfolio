<template>
  <div>
    <div class="card-container">
      <section class="section-card skills">
        <h2>{{ $t('message.skills') }}</h2>
        <div class="skills">
          <ul>
            <li>Python</li>
            <li>JavaScript</li>
            <li>PHP</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>MySQL</li>
            <li><strong>Data Science</strong> ({{ $t('message.data_science_skills_desc') }})</li>
          </ul>
        </div>
      </section>

      <section class="section-card education">
        <h2>{{ $t('message.education') }}</h2>
        <div class="education">
          <p>{{ $t('message.education_desc') }}</p>
          <h3>{{ $t('message.esiea_software_engineering') }}</h3>
          <p>{{ $t('message.esiea_description') }}</p>
          <h4>{{ $t('message.esiea_points') }}</h4>
          <ul>
            <li>{{ $t('message.esiea_complete_education') }}</li>
            <li>{{ $t('message.esiea_bilingual_teaching') }}</li>
            <li>{{ $t('message.esiea_project_based_learning') }}</li>
            <li>{{ $t('message.esiea_apprenticeship') }}</li>
          </ul>
          <h4>{{ $t('message.esiea_career_opportunities') }}</h4>
          <p>{{ $t('message.esiea_job_titles') }}</p>
          <ul>
            <li>{{ $t('message.esiea_job1') }}</li>
            <li>{{ $t('message.esiea_job2') }}</li>
            <li>{{ $t('message.esiea_job3') }}</li>
            <li>{{ $t('message.esiea_job4') }}</li>
            <li>{{ $t('message.esiea_job5') }}</li>
            <li>{{ $t('message.esiea_job6') }}</li>
          </ul>
          <h4>{{ $t('message.esiea_about') }}</h4>
          <p>{{ $t('message.esiea_about_desc') }}</p>
        </div>
      </section>

      <section class="section-card experience">
        <h2>{{ $t('message.experience') }}</h2>
        <div class="experience">
          <p><strong>{{ $t('message.experience_cea_title') }}</strong></p>
          <ul>
            <li>{{ $t('message.experience_cea_desc1') }}</li>
            <li>{{ $t('message.experience_cea_desc2') }}</li>
            <li>{{ $t('message.experience_cea_desc3') }}</li>
            <li>{{ $t('message.experience_cea_desc4') }}</li>
            <li>{{ $t('message.experience_cea_desc5') }}</li>
            <li>{{ $t('message.experience_cea_desc6') }}</li>
          </ul>
          <p><strong>{{ $t('message.experience_hemmersbach_title') }}</strong></p>
          <ul>
            <li>{{ $t('message.experience_hemmersbach_desc1') }}</li>
            <li>{{ $t('message.experience_hemmersbach_desc2') }}</li>
          </ul>
        </div>
      </section>

      <section class="section-card projects">
        <h2>{{ $t('message.projects') }}</h2>
        <div class="projects">
          <p><a href="#/projects#carte-france">{{ $t('message.carte_france') }}</a></p>
          <p><a href="#/projects#demarche-low-tech">{{ $t('message.demarche_low_tech') }}</a></p>
        </div>
      </section>
      <section class="section-card cv">
        <h2>{{ $t('message.cv') }}</h2>
      <div class="cv">
        <p>{{ $t('message.msg_cv') }}</p>
        <a :href="cvLink" target="_blank">{{ $t('message.view_cv') }}</a></div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Details',
  computed: {
    cvLink() {
      return this.$t('message.cv_link');
    }
  }
};
</script>

<style scoped>
.section-card {
  background-color: #f8f8f8;
  padding: 2rem;
  text-align: center;
  margin-bottom: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
}

.section-card.skills,
.section-card.education,
.section-card.experience,
.section-card.projects {
  flex: 1 1 calc(50% - 2rem);
}

.skills, .education, .experience, .projects {
  margin-bottom: 20px;
}

.skills ul {
  list-style-type: none;
  padding: 0;
}

.skills li {
  margin: 5px 0;
  padding: 5px;
  background-color: #f0f0f0;
  border-radius: 5px;
}

.skills li strong {
  color: #007bff;
}

h2 {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-bottom: 1rem;
}

h2::before,
h2::after {
  content: '';
  flex: 1;
  border-bottom: 2px solid #333;
  margin: 0 1rem;
}

h2, h3 {
  color: #333;
}

h1 {
  font-size: 2.5em;
  color: #2c3e50;
}

p, ul, li {
  color: #555;
}
  .section-card.cv p {
    margin: 2px 0;
  }

  .section-card.cv a {
    display: inline-block;
    margin-top: 10px;
    padding: 5px 10px;
    background-color: #007bff;
    color: #fff;
    border-radius: 5px;
    text-decoration: none;
  }

  .section-card.cv a:hover {
    background-color: #0056b3;
  }
</style>
