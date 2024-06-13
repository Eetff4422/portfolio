 <template>
   <div id="app">
     <nav class="container-fluid custom-nav">
       <ul>
         <li><strong>{{ $t('message.msg_welcome') }}</strong></li>
       </ul>
       <ul>
         <li><a href="#/">{{ $t('message.home_page') }}</a></li>
         <li><a href="#/projects">{{ $t('message.projects') }}</a></li>
         <li><a href="#/contact">{{ $t('message.contact') }}</a></li>
         <li><a href="#" @click.prevent="toggleLanguage">{{ currentLanguage }}</a></li>
       </ul>
     </nav>
     <main class="container custom-container">
       <router-view :key="$route.fullPath"></router-view>
     </main>
   </div>
 </template>

 <script>
 export default {
   data() {
     return {
       currentLanguage: 'EN'
     };
   },
   methods: {
     toggleLanguage() {
       if (this.$i18n.locale === 'fr') {
         this.$i18n.locale = 'en';
         this.currentLanguage = 'FR';
       } else {
         this.$i18n.locale = 'fr';
         this.currentLanguage = 'EN';
       }
     }
   }
 };
 </script>

 <style>
   @import 'https://cdn.jsdelivr.net/npm/@picocss/pico@1/css/pico.min.css';
   
   #app {
     display: flex;
     justify-content: center;
     align-items: center;
     min-height: 100vh;
     background-image: url('~@/assets/background.webp'); 
     background-size: cover;
     background-position: center;
     background-attachment: fixed;
     margin: 0;
     padding-top: 60px; 
     height: 100%;
   }

   .custom-container {
     background-color: rgba(255, 255, 255, 0.9);
     padding: 20px;
     border-radius: 10px;
     box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
     margin-top: 20px;
   }

   h2, h3 {
     color: #333;
   }

   p, ul, li {
     color: #555;
   }

   nav ul {
     display: flex;
     list-style-type: none;
     justify-content: space-around;
   }

   nav ul li button a {
     text-decoration: none;
   }

   nav ul li button {
     background-color: rgba(215, 213, 213, 0.95);
     color: #fff;
     border: none;
     padding: 10px 20px;
     text-align: center;
     text-decoration: none;
     display: inline-block;
     font-size: 16px;
     cursor: pointer;
   }

   nav ul li button:hover {
     background-color: rgba(226, 226, 226, 0.95);
   }

   nav {
     position: fixed;
     top: 0;
     left: 0;
     width: 100%;
     background-color: rgba(255, 255, 255, 0.95);
     z-index: 1000;
     box-shadow: 0 2px 4px rgba(0,0,0,0.1);
     padding: 10px 20px;
   }
 </style>
