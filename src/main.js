import Vue from 'vue';
import VueI18n from 'vue-i18n';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

Vue.use(VueI18n);

const messages = {
  en: {
    message: {
      home_page_title: 'Home - My Portfolio',
      projects_page_title: 'Projects - My Portfolio',
      contact_page_title: 'Contact - My Portfolio',
      details_page_title: 'Details - My Portfolio',
      msg_welcome: 'Welcome',
      about: 'About Me',
      profile: 'Professional profile',
      about_msg: 'I\'m Franklin Essono, a work-study engineer specialising in software development and data science. I\'m passionate about digital transformation and technological innovation.',
      skills: 'Skills',
      data_science_skills_desc: 'data management and processing, data interpretation and visualisation',
      education: 'Education',
      education_desc: 'Apprenticeship engineering course at ESIEA specialising in software engineering and DevOps culture.',
      experience: 'Experience',
      experience_cea_title: 'From 13 September 2022 to 31 August 2025 - Work-linked research engineer at CEA Granoble',
      experience_cea_desc1: 'Data management and analysis: In-depth data collection and cleansing to ensure data integrity and relevance.',
      experience_cea_desc2: 'In-depth analysis of data to extract significant insights, using advanced processing and analysis tools.',
      experience_cea_desc3: 'Interpretation and presentation of results: Interpreting analyses to transform raw data into clear strategic information.',
      experience_cea_desc4: 'Preparation and presentation of detailed reports to effectively communicate findings to stakeholders.',
      experience_cea_desc5: 'Technological skills: Using Visual Studio Code to develop and maintain analysis scripts.',
      experience_cea_desc6: 'Project management via Tuleap to monitor and coordinate data-related tasks.',
      experience_hemmersbach_title: 'IT Technician, from 1 February 2022 to 28 February 2022 in Hemmersbach France for an internship',
      experience_hemmersbach_desc1: 'Development of a material management application: Design and deployment of a web application to facilitate material management for technicians, using Visual Studio Code for development in PHP, HTML and CSS.',
      experience_hemmersbach_desc2: 'Database management: Configuration and administration of a MySQL database via phpMyAdmin to support the operations of the hardware management application.',
      home_page: 'Home',
      projects: 'Projects',
      contact: 'Contact',
      contact_info: 'Contact Information',
      contact_form: 'Contact Form',
      learn_more: 'Find out more',
      phone: 'Phone',
      email: 'Email',
      linkedin: 'LinkedIn',
      your_name: 'Your Name',
      your_email: 'Your Email',
      subject: 'Subject',
      your_message: 'Your Message',
      send: 'Send',
      certifications: 'Certifications',
      certifications_desc: 'Issue date : March 2024',
      view_certification: 'Display ID',
      cv: 'CV',
      view_cv: 'View my CV',
      cv_link: 'https://drive.google.com/file/d/1rs_IuL1gbDKgNHK-phjF78o6Dvo-h3hc/view?usp=drive_link',
      msg_cv: 'You can view my full CV by clicking on the following link:',
      carte_france: 'Interactive Map of France',
      demarche_low_tech: 'Low Tech Approach (CSR)',
      carte_france_desc: 'This project involves creating a web application using the full version of French cities in CSV format (more than 2,000 in total). On the left, a clickable map of metropolitan France. When a user clicks anywhere on the map, a request is made to an API you have written, sending the coordinates of the clicked point. The API then makes a request to the database and returns the result, which is processed asynchronously on the client side.',
      demarche_low_tech_desc: 'This project took place over 3 consecutive days. The first day, we had a workshop presentation, formed teams, and assigned the CSR action to defend. The second day, we set up the stand. The third day was the presentation to a jury. With my team, we worked on the Low Tech approach. The goal was to create a stand simulation where we had to present our idea to encourage a company to adopt the low tech approach.',
      tech_uses_title: 'Technologies used',
      features: 'Features',
      main_features: 'Main Features',
      carte_france_main_features: 'The retrieved cities are displayed on the map; On hover of a city, a frame appears with its details and the distance from the targeted point; The list of cities is displayed in a compact form in a side frame; Configuration form for the maximum number of cities, maximum distance, and minimum population',
      carte_france_tech: 'API REST, Database (optional), C# (ASP.NET Core) or Java (Spring), Docker, Cypress, Selenium, CI in GitLab',
      carte_france_tests: 'Unit tests, acceptance tests',
      carte_france_docs: 'README.md, comprehensive API documentation, architecture diagrams (PlantUML)',
      demarche_low_tech_steps: 'We created a card game with different scenarios where choices were represented by cards; The game had 3 rounds, each round offering two choices (2 cards): a low-tech approach and a high-tech approach; The goal was to encourage participants to choose the low-tech approach without forcing them',
      esiea_software_engineering: 'ESIEA - Software Engineering Program',
      esiea_description: 'ESIEA offers a cutting-edge software engineering program, perfect for future digital transformation leaders. This major aims to train highly skilled engineers with a strong IT culture covering several essential areas:',
      esiea_points: 'Key points of the Software Engineering Major:',
      esiea_complete_education: 'Complete Education: Courses include big data application development, cloud architecture, information systems, web and mobile application programming, SQL and NoSQL databases, as well as software engineering and DevOps.',
      esiea_bilingual_teaching: 'Bilingual Teaching: Available in English and French on the Paris/Ivry-sur-Seine campus, and in French in Laval.',
      esiea_project_based_learning: 'Project-Based Learning: Students undertake several scientific and technical projects from the first year, collaborating with companies in the 2nd and 3rd years.',
      esiea_apprenticeship: 'Apprenticeship Pathway: The major is accessible through an apprenticeship, allowing the combination of theory and practice in a professional environment.',
      esiea_career_opportunities: 'Career Opportunities:',
      esiea_job_titles: 'Graduates can pursue various careers, such as:',
      esiea_job1: 'Software Project Manager',
      esiea_job2: 'Cloud Computing Engineer',
      esiea_job3: 'Big Data Application Developer',
      esiea_job4: 'Mobile or Web Application Developer',
      esiea_job5: 'Information System Architect',
      esiea_job6: 'Technical Consultant',
      esiea_about: 'About ESIEA:',
      esiea_about_desc: 'Located in Paris/Ivry-sur-Seine and Laval, ESIEA is a renowned engineering school known for its practice-oriented and innovative training. It supports its students throughout their academic and professional journey by providing high-quality education tailored to market needs.'
    }
  },
  fr: {
    message: {
      home_page_title: 'Accueil - Mon Portfolio',
      projects_page_title: 'Projets - Mon Portfolio',
      contact_page_title: 'Contact - Mon Portfolio',
      details_page_title: 'Détails - Mon Portfolio',
      msg_welcome: 'Bienvenue',
      about: 'À propos de moi',
      profile: 'Profil professionnel',
      about_msg: 'Je suis Franklin Essono, ingénieur chercheur en alternance spécialisé en développement logiciel et sciences des données. Passionné par la transformation numérique et l\'innovation technologique.',
      skills: 'Compétences',
      data_science_skills_desc: 'gestion et traitement des données, interprétation des données et visualisation des données',
      education: 'Formation',
      education_desc: 'Cycle ingénieur en apprentissage à l\'ESIEA avec une spécialisation en software engineering et culture DevOps.',
      experience: 'Expérience',
      experience_cea_title: 'Du 13 septembre 2022 au 31 août 2025 - Ingénieur chercheur en alternance au CEA de Grenoble',
      experience_cea_desc1: 'Gestion et analyse des données : Collecte et nettoyage approfondi de données pour garantir leur intégrité et leur pertinence.',
      experience_cea_desc2: 'Analyse approfondie des données pour extraire des insights significatifs, en utilisant des outils avancés de traitement et d’analyse.',
      experience_cea_desc3: 'Interprétation et présentation des résultats : Interprétation des analyses pour transformer les données brutes en informations stratégiques claires.',
      experience_cea_desc4: 'Préparation et présentation de rapports détaillés pour communiquer efficacement les conclusions aux parties prenantes.',
      experience_cea_desc5: 'Compétences technologiques : Utilisation de Visual Studio Code pour le développement et la maintenance de scripts d\'analyse.',
      experience_cea_desc6: 'Gestion de projets via Tuleap pour assurer le suivi et la coordination des tâches liées aux données.',
      experience_hemmersbach_title: 'Technicien en informatique, du 1er février 2022 au 28 février 2022 à Hemmersbach France pour un stage',
      experience_hemmersbach_desc1: 'Développement d\'une application de gestion de matériel : Conception et déploiement d\'une application web destinée à faciliter la gestion du matériel pour les techniciens, en utilisant Visual Studio Code pour le développement en PHP, HTML et CSS.',
      experience_hemmersbach_desc2: 'Gestion de la base de données : Configuration et administration d\'une base de données MySQL via phpMyAdmin pour soutenir les opérations de l\'application de gestion de matériel.',
      home_page: 'Accueil',
      projects: 'Projets',
      contact: 'Contact',
      contact_info: 'Informations de contact',
      contact_form: 'Formulaire de contact',
      learn_more: 'En savoir plus',
      phone: 'Téléphone',
      email: 'Email',
      linkedin: 'LinkedIn',
      your_name: 'Votre prénom',
      your_email: 'Votre email',
      subject: 'Objet',
      your_message: 'Votre message',
      send: 'Envoyer',
      certifications: 'Certifications',
      certifications_desc: 'Date de délivrance : mars 2024',
      view_certification: 'Afficher l\'identifiant',
      cv: 'CV',
      view_cv: 'Voir mon CV',
      cv_link: 'https://drive.google.com/file/d/130x5q3oCT_ey7BAnpkwXNetFIswe2khT/view?usp=drive_link',
      msg_cv: 'Vous pouvez consulter mon CV complet en cliquant sur le lien suivant :',
      carte_france: 'Carte de France interactive',
      demarche_low_tech: 'Démarche low tech (RSE)',
      carte_france_desc: 'Ce projet consiste à réaliser une application Web utilisant la version complète des villes françaises au format CSV (plus de 2 000 au total). À gauche, la carte de France métropolitaine cliquable. Lorsqu\'un utilisateur clique n\'importe où sur la carte, une requête est effectuée vers une API que nous avons écrite, en envoyant les coordonnées du point cliqué. L\'API fait à son tour une requête à la base de données et renvoie le résultat, qui est traité en asynchrone côté client.',
      demarche_low_tech_desc: 'Ce projet s\'est déroulé sur 3 jours successifs. Le premier jour, nous avons eu une présentation de l\'atelier, constitué des équipes, et attribué l\'action RSE à défendre. Le deuxième jour, nous avons mis en place le stand. Le troisième jour, c\'était la soutenance devant un jury. Avec mon équipe, nous avons travaillé sur la démarche Low Tech. L\'objectif était de faire une simulation de stand où nous devions présenter notre idée pour inciter une entreprise à adopter la démarche low tech.',
      tech_uses_title: 'Technologies utilisées',
      features: 'Fonctionnalités',
      main_features: 'Fonctionnalités principales',
      carte_france_main_features: 'Les villes récupérées sont représentées sur la carte; Sur hover d\'une ville, un cadre s\'affiche avec ses détails et la distance du point ciblé; La liste des villes est affichée dans un cadre latéral sous forme compacte; Formulaire de paramétrage pour le nombre maximal de villes, distance maximale et population minimale',
      carte_france_tech: 'API REST, Base de données (au choix), C# (ASP.NET Core) ou Java (Spring), Docker, Cypress, Selenium, CI dans GitLab',
      carte_france_tests: 'Tests unitaires, tests d\'acceptation',
      carte_france_docs: 'README.md, documentation exhaustive de l\'API, diagrammes d\'architecture (PlantUML)',
      demarche_low_tech_steps: 'Nous avons créé un jeu de cartes avec différents scénarios où les choix étaient représentés par des cartes; Le jeu comportait 3 manches, chaque manche proposant deux choix (2 cartes) : une démarche low tech et une démarche high tech; L\'objectif était d\'inciter les interlocuteurs à choisir la démarche low tech sans les forcer',
      esiea_software_engineering: 'ESIEA - Formation en Software Engineering',
      esiea_description: 'L\'ESIEA propose une formation de pointe en ingénierie logicielle, idéale pour les futurs acteurs de la transition numérique. Cette majeure vise à former des ingénieurs hautement qualifiés grâce à une solide culture informatique couvrant plusieurs domaines essentiels :',
      esiea_points: 'Les points forts de la Majeure Software Engineering :',
      esiea_complete_education: 'Formation Complète : Les cours incluent le développement d’applications big data, l\'architecture cloud, les systèmes d’information, la programmation d’applications web et mobile, les bases de données SQL et NoSQL, ainsi que l\'ingénierie logicielle et DevOps.',
      esiea_bilingual_teaching: 'Enseignement Bilingue : Disponible en anglais et en français sur le campus de Paris/Ivry-sur-Seine, et en français à Laval.',
      esiea_project_based_learning: 'Apprentissage Par Projet : Les étudiants réalisent plusieurs projets scientifiques et techniques dès la première année, en collaboration avec des entreprises en 2ème et 3ème années.',
      esiea_apprenticeship: 'Voie de l’Apprentissage : La majeure est accessible en apprentissage, permettant de combiner théorie et pratique en entreprise.',
      esiea_career_opportunities: 'Débouchés Professionnels :',
      esiea_job_titles: 'Les diplômés de cette formation peuvent prétendre à divers métiers, tels que :',
      esiea_job1: 'Chef de projet logiciel',
      esiea_job2: 'Ingénieur en cloud computing',
      esiea_job3: 'Développeur d’applications big data',
      esiea_job4: 'Développeur d’applications mobile ou web',
      esiea_job5: 'Architecte système d’information',
      esiea_job6: 'Consultant technique',
      esiea_about: 'À Propos de l’ESIEA :',
      esiea_about_desc: 'L’ESIEA, située à Paris/Ivry-sur-Seine et à Laval, est une école d\'ingénieurs reconnue pour sa formation axée sur la pratique et l\'innovation. Elle accompagne ses étudiants tout au long de leur parcours académique et professionnel en leur offrant une formation de haute qualité adaptée aux besoins du marché.'
    }
  }
};

const i18n = new VueI18n({
  locale: 'fr', // set locale
  fallbackLocale: 'en', // set fallback locale
  messages, // set locale messages
});

new Vue({
  router,
  i18n,
  render: h => h(App),
}).$mount('#app');