<template>
  <div>
    <section class="section-card hero">
      <h2>{{ $t('message.about') }}</h2>
      <p>{{ $t('message.about_msg') }}</p>
    </section>

    <section class="section-card profile">
      <h2>{{ $t('message.profile') }}</h2>
      <div class="certification-card">
        <a href="https://www.institut-f2i.fr/" target="_blank">
          <img :src="require('@/assets/f2i_logo.jpg')" alt="F2I Logo" class="certification-logo">
        </a>&nbsp;&nbsp;&nbsp;&nbsp;
        <a href="https://www.hemmersbach.com" target="_blank">
          <img :src="require('@/assets/logo_hemmersbach.png')" alt="Hemmersbach Logo" class="certification-logo">
        </a>&nbsp;&nbsp;&nbsp;&nbsp;
        <a href="https://www.cea.fr" target="_blank">
          <img :src="require('@/assets/CEA_logo_nouveau.png')" alt="CEA Logo" class="certification-logo">
        </a>&nbsp;&nbsp;&nbsp;&nbsp;
        <a href="https://www.esiea.fr" target="_blank">
          <img :src="require('@/assets/Logo Esiea Baseline ingenieur - blanc fond bleu (1).png')" alt="ESIEA Logo" class="certification-logo">
        </a>
      </div>
      
        <button @click="navigateToDetails">{{ $t('message.learn_more') }}</button>
    </section>

    <div class="card-container">
      <section class="section-card certifications">
        <h2>{{ $t('message.certifications') }}</h2>
        <div class="certifications">
          <div class="certification-card">
            <img :src="require('@/assets/logo_freecodecamp.png')" alt="freeCodeCamp Logo" class="certification-logo">
            <div class="certification-details">
              <h4>Data Analysis with Python</h4>
              <p>freeCodeCamp</p>
              <p>{{ $t('message.certifications_desc') }}</p>
              <a href="https://www.freecodecamp.org/certification/FranklinEssonoEssono/data-analysis-with-python-v7" target="_blank">{{ $t('message.view_certification') }}</a>
            </div>
          </div>
        </div>
      </section>
    </div>

    <section class="section-card contact-info">
      <h2>{{ $t('message.contact') }}</h2>
      <div class="contact-info">
        <p><strong>{{ $t('message.phone') }}:</strong> +33 7 82 14 60 19</p>
        <p><strong>{{ $t('message.email') }}:</strong> <a href="mailto:frangiessono1@gmail.com">frangiessono1@gmail.com</a></p>
        <p><strong>{{ $t('message.linkedin') }}:</strong> <a href="https://www.linkedin.com/in/franklin-essono/" target="_blank">franklin-essono</a></p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home',
  mounted() {
    document.title = "Franklin Essono";
  },
  methods: {
    navigateToDetails() {
      this.$router.push('/details');
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

.section-card.profile,
.section-card.certifications,
.section-card.cv,
.section-card.contact-info {
  flex: 1 1 calc(50% - 2rem);
}

.skills, .education, .experience, .projects, .certifications, .cv, .contact-info {
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

.certification-card {
  display: flex;
  align-items: center;
  background-color: #f9f9f9;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.certification-logo {
  width: 50px;
  height: 50px;
  margin-right: 15px;
}

.certification-details h4 {
  margin: 0 0 5px 0;
}

.certification-details p {
  margin: 2px 0;
}

.certification-details a {
  display: inline-block;
  margin-top: 10px;
  padding: 5px 10px;
  background-color: #007bff;
  color: #fff;
  border-radius: 5px;
  text-decoration: none;
}

.certification-details a:hover {
  background-color: #0056b3;
}

.contact-info p {
  margin: 10px 0;
}

.contact-info a {
  color: #007bff;
  text-decoration: none;
}

.contact-info a:hover {
  text-decoration: underline;
}

.contact-info {
  margin-top: 1rem;
  padding: 1rem;
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.cv a {
  display: inline-block;
  margin-top: 10px;
  padding: 5px 10px;
  background-color: #007bff;
  color: #fff;
  border-radius: 5px;
  text-decoration: none;
}

.cv a:hover {
  background-color: #0056b3;
}

button {
  padding: 8px 16px;
  background-color: #007BFF;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
