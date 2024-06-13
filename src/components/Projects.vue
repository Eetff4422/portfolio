<template>
   <div>
     <section class="content-section">
         <h2>{{ $t('message.projects') }}</h2>
       <div class="projects-list">
         <div id="carte-france" class="project-item">
           <h4>{{ $t('message.carte_france') }}</h4>
           <p>{{ $t('message.carte_france_desc') }}</p>
           <ul>
             <li><strong>{{ $t('message.main_features') }} :</strong>
               <ul>
                 <li>{{ $t('message.carte_france_main_features') }}</li>
               </ul>
             </li>
             <li><strong>{{ $t('message.tech_uses_title') }} :</strong> {{ $t('message.carte_france_tech') }}</li>
             <li><strong>Tests :</strong> {{ $t('message.carte_france_tests') }}</li>
             <li><strong>Documentation :</strong> {{ $t('message.carte_france_docs') }}</li>
           </ul>
         </div>
         <hr />
         <div id="demarche-low-tech" class="project-item">
           <h4>{{ $t('message.demarche_low_tech') }}</h4>
           <p>{{ $t('message.demarche_low_tech_desc') }}</p>
           <ul>
             <li>{{ $t('message.demarche_low_tech_steps') }}</li>
           </ul>
         </div>
       </div>
     </section>
   </div>
 </template>

 <script>
 export default {
   name: 'Projects',
   mounted() {
    document.title = "Projects";
  },
 };
 </script>

 <style scoped>
 .content-section {
   padding: 20px;
   background-color: #fff;
   border-radius: 10px;
   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
   margin-bottom: 20px;
   text-align: center;
 }

 .projects-list {
   margin-top: 20px;
 }

 .project-item {
   margin-bottom: 20px;
   background-color: #f9f9f9;
   padding: 15px;
   border-radius: 10px;
   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
 }

 h2, h3, h4 {
   color: #333;
   text-align: center;
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
 p, li {
   color: #555;
   text-align: left;
 }

 hr {
   border: none;
   border-top: 2px solid #ddd;
   margin: 20px 0;
 }
 </style>
