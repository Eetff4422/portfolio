/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 693:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// EXTERNAL MODULE: ./node_modules/vue/dist/vue.runtime.esm.js
var vue_runtime_esm = __webpack_require__(471);
// EXTERNAL MODULE: ./node_modules/vue-i18n/dist/vue-i18n.esm.js
var vue_i18n_esm = __webpack_require__(765);
;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/App.vue?vue&type=template&id=0aeb0a89
var render = function render(){var _vm=this,_c=_vm._self._c;return _c('div',{attrs:{"id":"app"}},[_c('nav',{staticClass:"container-fluid custom-nav"},[_c('ul',[_c('li',[_c('strong',[_vm._v(_vm._s(_vm.$t('message.msg_welcome')))])])]),_c('ul',[_c('li',[_c('a',{attrs:{"href":"#/"}},[_vm._v(_vm._s(_vm.$t('message.home_page')))])]),_c('li',[_c('a',{attrs:{"href":"#/projects"}},[_vm._v(_vm._s(_vm.$t('message.projects')))])]),_c('li',[_c('a',{attrs:{"href":"#/contact"}},[_vm._v(_vm._s(_vm.$t('message.contact')))])]),_c('li',[_c('a',{attrs:{"href":"#"},on:{"click":function($event){$event.preventDefault();return _vm.toggleLanguage.apply(null, arguments)}}},[_vm._v(_vm._s(_vm.currentLanguage))])])])]),_c('main',{staticClass:"container custom-container"},[_c('router-view',{key:_vm.$route.fullPath})],1)])
}
var staticRenderFns = []


;// CONCATENATED MODULE: ./src/assets/favicon.webp
const favicon_namespaceObject = __webpack_require__.p + "img/favicon.de7510cc.webp";
;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/App.vue?vue&type=script&lang=js

 

 /* harmony default export */ const Appvue_type_script_lang_js = ({
   data() {
     return {
       currentLanguage: 'EN'
     };
   },
   mounted() {
    // Ajouter dynamiquement le favicon
    const link = document.createElement('link');
    link.rel = 'icon';
    link.href = favicon_namespaceObject;
    document.head.appendChild(link);
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
 });
 
;// CONCATENATED MODULE: ./src/App.vue?vue&type=script&lang=js
 /* harmony default export */ const src_Appvue_type_script_lang_js = (Appvue_type_script_lang_js); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/App.vue?vue&type=style&index=0&id=0aeb0a89&prod&lang=css
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/App.vue?vue&type=style&index=0&id=0aeb0a89&prod&lang=css

// EXTERNAL MODULE: ./node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(656);
;// CONCATENATED MODULE: ./src/App.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  src_Appvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ const App = (component.exports);
// EXTERNAL MODULE: ./node_modules/vue-router/dist/vue-router.esm.js
var vue_router_esm = __webpack_require__(173);
;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/Contact.vue?vue&type=template&id=74676d90&scoped=true
var Contactvue_type_template_id_74676d90_scoped_true_render = function render(){var _vm=this,_c=_vm._self._c;return _c('div',[_c('section',{staticClass:"section-card contact-information"},[_c('h3',[_vm._v(_vm._s(_vm.$t('message.contact_info')))]),_c('div',{staticClass:"contact-card"},[_c('div',{staticClass:"contact-info"},[_c('p',[_c('strong',[_vm._v(_vm._s(_vm.$t('message.phone'))+" :")]),_vm._v(" +33 7 82 14 60 19")]),_c('p',[_c('strong',[_vm._v(_vm._s(_vm.$t('message.email'))+" :")]),_vm._v(" "),_c('a',{attrs:{"href":"mailto:frangiessono1@gmail.com"}},[_vm._v("frangiessono1@gmail.com")])]),_c('p',[_c('strong',[_vm._v(_vm._s(_vm.$t('message.linkedin'))+" :")]),_vm._v(" "),_c('a',{attrs:{"href":"https://www.linkedin.com/in/franklin-essono/","target":"_blank"}},[_vm._v("franklin-essono")])])])])]),_c('section',{staticClass:"section-card contact-form"},[_c('h3',[_vm._v(_vm._s(_vm.$t('message.contact_form')))]),_c('form',{staticClass:"grid",on:{"submit":function($event){$event.preventDefault();return _vm.sendEmail.apply(null, arguments)}}},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.form.from_name),expression:"form.from_name"}],attrs:{"type":"text","id":"from_name","name":"from_name","placeholder":_vm.$t('message.your_name'),"aria-label":"Prénom","required":""},domProps:{"value":(_vm.form.from_name)},on:{"input":function($event){if($event.target.composing)return;_vm.$set(_vm.form, "from_name", $event.target.value)}}}),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.form.reply_to),expression:"form.reply_to"}],attrs:{"type":"email","id":"reply_to","name":"reply_to","placeholder":_vm.$t('message.your_email'),"aria-label":"Email","required":""},domProps:{"value":(_vm.form.reply_to)},on:{"input":function($event){if($event.target.composing)return;_vm.$set(_vm.form, "reply_to", $event.target.value)}}}),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.form.subject),expression:"form.subject"}],attrs:{"type":"text","id":"subject","name":"subject","placeholder":_vm.$t('message.subject'),"aria-label":"Objet","required":""},domProps:{"value":(_vm.form.subject)},on:{"input":function($event){if($event.target.composing)return;_vm.$set(_vm.form, "subject", $event.target.value)}}}),_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.form.message),expression:"form.message"}],attrs:{"id":"message","name":"message","placeholder":_vm.$t('message.your_message'),"aria-label":"Message","required":""},domProps:{"value":(_vm.form.message)},on:{"input":function($event){if($event.target.composing)return;_vm.$set(_vm.form, "message", $event.target.value)}}}),_c('button',{attrs:{"type":"submit"}},[_vm._v(_vm._s(_vm.$t('message.send')))])])])])
}
var Contactvue_type_template_id_74676d90_scoped_true_staticRenderFns = []


// EXTERNAL MODULE: ./node_modules/emailjs-com/es/index.js + 7 modules
var es = __webpack_require__(815);
;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/Contact.vue?vue&type=script&lang=js

 

 /* harmony default export */ const Contactvue_type_script_lang_js = ({
   name: 'Contact',
   data() {
     return {
       form: {
         from_name: '',
         reply_to: '',
         subject: '',
         message: ''
       }
     };
   },
   mounted() {
    document.title = "Contact";
  },
   methods: {
     sendEmail() {
      const serviceID = "service_56x7a4m";
      const templateID = "template_cgzyptj";
      const userID = "qhRd-kgRrYr-2Jr2D";

       const templateParams = {
         from_name: this.form.from_name,
         to_name: 'Franklin Essono',
         message: `Objet: ${this.form.subject}\n\nMessage:\n${this.form.message}`,
         reply_to: this.form.reply_to
       };
       
       es/* default.send */.Ay.send(serviceID, templateID, templateParams, userID)
         .then((response) => {
           console.log('Email sent successfully!', response.status, response.text);
           alert('Message envoyé avec succès !');
         }, (error) => {
           console.log('Failed to send email.', error);
           alert('Échec de l\'envoi du message. Veuillez réessayer.');
         });
     }
   }
 });
 
;// CONCATENATED MODULE: ./src/components/Contact.vue?vue&type=script&lang=js
 /* harmony default export */ const components_Contactvue_type_script_lang_js = (Contactvue_type_script_lang_js); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/Contact.vue?vue&type=style&index=0&id=74676d90&prod&scoped=true&lang=css
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/Contact.vue?vue&type=style&index=0&id=74676d90&prod&scoped=true&lang=css

;// CONCATENATED MODULE: ./src/components/Contact.vue



;


/* normalize component */

var Contact_component = (0,componentNormalizer/* default */.A)(
  components_Contactvue_type_script_lang_js,
  Contactvue_type_template_id_74676d90_scoped_true_render,
  Contactvue_type_template_id_74676d90_scoped_true_staticRenderFns,
  false,
  null,
  "74676d90",
  null
  
)

/* harmony default export */ const Contact = (Contact_component.exports);
;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/Details.vue?vue&type=template&id=52b08328&scoped=true
var Detailsvue_type_template_id_52b08328_scoped_true_render = function render(){var _vm=this,_c=_vm._self._c;return _c('div',[_c('div',{staticClass:"card-container"},[_c('section',{staticClass:"section-card skills"},[_c('h2',[_vm._v(_vm._s(_vm.$t('message.skills')))]),_c('div',{staticClass:"skills"},[_c('ul',[_c('li',[_vm._v("Python")]),_c('li',[_vm._v("JavaScript")]),_c('li',[_vm._v("PHP")]),_c('li',[_vm._v("HTML")]),_c('li',[_vm._v("CSS")]),_c('li',[_vm._v("MySQL")]),_c('li',[_c('strong',[_vm._v("Data Science")]),_vm._v(" ("+_vm._s(_vm.$t('message.data_science_skills_desc'))+")")])])])]),_c('section',{staticClass:"section-card education"},[_c('h2',[_vm._v(_vm._s(_vm.$t('message.education')))]),_c('div',{staticClass:"education"},[_c('p',[_vm._v(_vm._s(_vm.$t('message.education_desc')))]),_c('h3',[_vm._v(_vm._s(_vm.$t('message.esiea_software_engineering')))]),_c('p',[_vm._v(_vm._s(_vm.$t('message.esiea_description')))]),_c('h4',[_vm._v(_vm._s(_vm.$t('message.esiea_points')))]),_c('ul',[_c('li',[_vm._v(_vm._s(_vm.$t('message.esiea_complete_education')))]),_c('li',[_vm._v(_vm._s(_vm.$t('message.esiea_bilingual_teaching')))]),_c('li',[_vm._v(_vm._s(_vm.$t('message.esiea_project_based_learning')))]),_c('li',[_vm._v(_vm._s(_vm.$t('message.esiea_apprenticeship')))])]),_c('h4',[_vm._v(_vm._s(_vm.$t('message.esiea_career_opportunities')))]),_c('p',[_vm._v(_vm._s(_vm.$t('message.esiea_job_titles')))]),_c('ul',[_c('li',[_vm._v(_vm._s(_vm.$t('message.esiea_job1')))]),_c('li',[_vm._v(_vm._s(_vm.$t('message.esiea_job2')))]),_c('li',[_vm._v(_vm._s(_vm.$t('message.esiea_job3')))]),_c('li',[_vm._v(_vm._s(_vm.$t('message.esiea_job4')))]),_c('li',[_vm._v(_vm._s(_vm.$t('message.esiea_job5')))]),_c('li',[_vm._v(_vm._s(_vm.$t('message.esiea_job6')))])]),_c('h4',[_vm._v(_vm._s(_vm.$t('message.esiea_about')))]),_c('p',[_vm._v(_vm._s(_vm.$t('message.esiea_about_desc')))])])]),_c('section',{staticClass:"section-card experience"},[_c('h2',[_vm._v(_vm._s(_vm.$t('message.experience')))]),_c('div',{staticClass:"experience"},[_c('p',[_c('strong',[_vm._v(_vm._s(_vm.$t('message.experience_cea_title')))])]),_c('ul',[_c('li',[_vm._v(_vm._s(_vm.$t('message.experience_cea_desc1')))]),_c('li',[_vm._v(_vm._s(_vm.$t('message.experience_cea_desc2')))]),_c('li',[_vm._v(_vm._s(_vm.$t('message.experience_cea_desc3')))]),_c('li',[_vm._v(_vm._s(_vm.$t('message.experience_cea_desc4')))]),_c('li',[_vm._v(_vm._s(_vm.$t('message.experience_cea_desc5')))]),_c('li',[_vm._v(_vm._s(_vm.$t('message.experience_cea_desc6')))])]),_c('p',[_c('strong',[_vm._v(_vm._s(_vm.$t('message.experience_hemmersbach_title')))])]),_c('ul',[_c('li',[_vm._v(_vm._s(_vm.$t('message.experience_hemmersbach_desc1')))]),_c('li',[_vm._v(_vm._s(_vm.$t('message.experience_hemmersbach_desc2')))])])])]),_c('section',{staticClass:"section-card projects"},[_c('h2',[_vm._v(_vm._s(_vm.$t('message.projects')))]),_c('div',{staticClass:"projects"},[_c('p',[_c('a',{attrs:{"href":"#/projects#carte-france"}},[_vm._v(_vm._s(_vm.$t('message.carte_france')))])]),_c('p',[_c('a',{attrs:{"href":"#/projects#demarche-low-tech"}},[_vm._v(_vm._s(_vm.$t('message.demarche_low_tech')))])])])]),_c('section',{staticClass:"section-card cv"},[_c('h2',[_vm._v(_vm._s(_vm.$t('message.cv')))]),_c('div',{staticClass:"cv"},[_c('p',[_vm._v(_vm._s(_vm.$t('message.msg_cv')))]),_c('a',{attrs:{"href":_vm.cvLink,"target":"_blank"}},[_vm._v(_vm._s(_vm.$t('message.view_cv')))])])])])])
}
var Detailsvue_type_template_id_52b08328_scoped_true_staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/Details.vue?vue&type=script&lang=js

/* harmony default export */ const Detailsvue_type_script_lang_js = ({
  name: 'Details',
  mounted() {
    document.title = "Details";
  },
  computed: {
    cvLink() {
      return this.$t('message.cv_link');
    }
  }
});

;// CONCATENATED MODULE: ./src/components/Details.vue?vue&type=script&lang=js
 /* harmony default export */ const components_Detailsvue_type_script_lang_js = (Detailsvue_type_script_lang_js); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/Details.vue?vue&type=style&index=0&id=52b08328&prod&scoped=true&lang=css
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/Details.vue?vue&type=style&index=0&id=52b08328&prod&scoped=true&lang=css

;// CONCATENATED MODULE: ./src/components/Details.vue



;


/* normalize component */

var Details_component = (0,componentNormalizer/* default */.A)(
  components_Detailsvue_type_script_lang_js,
  Detailsvue_type_template_id_52b08328_scoped_true_render,
  Detailsvue_type_template_id_52b08328_scoped_true_staticRenderFns,
  false,
  null,
  "52b08328",
  null
  
)

/* harmony default export */ const Details = (Details_component.exports);
;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/Home.vue?vue&type=template&id=8fa7012a&scoped=true
var Homevue_type_template_id_8fa7012a_scoped_true_render = function render(){var _vm=this,_c=_vm._self._c;return _c('div',[_c('section',{staticClass:"section-card hero"},[_c('h2',[_vm._v(_vm._s(_vm.$t('message.about')))]),_c('p',[_vm._v(_vm._s(_vm.$t('message.about_msg')))])]),_c('section',{staticClass:"section-card profile"},[_c('h2',[_vm._v(_vm._s(_vm.$t('message.profile')))]),_c('div',{staticClass:"certification-card"},[_c('a',{attrs:{"href":"https://www.institut-f2i.fr/","target":"_blank"}},[_c('img',{staticClass:"certification-logo",attrs:{"src":__webpack_require__(817),"alt":"F2I Logo"}})]),_vm._v("     "),_c('a',{attrs:{"href":"https://www.hemmersbach.com","target":"_blank"}},[_c('img',{staticClass:"certification-logo",attrs:{"src":__webpack_require__(131),"alt":"Hemmersbach Logo"}})]),_vm._v("     "),_c('a',{attrs:{"href":"https://www.cea.fr","target":"_blank"}},[_c('img',{staticClass:"certification-logo",attrs:{"src":__webpack_require__(667),"alt":"CEA Logo"}})]),_vm._v("     "),_c('a',{attrs:{"href":"https://www.esiea.fr","target":"_blank"}},[_c('img',{staticClass:"certification-logo",attrs:{"src":__webpack_require__(219),"alt":"ESIEA Logo"}})])]),_c('button',{on:{"click":_vm.navigateToDetails}},[_vm._v(_vm._s(_vm.$t('message.learn_more')))])]),_c('div',{staticClass:"card-container"},[_c('section',{staticClass:"section-card certifications"},[_c('h2',[_vm._v(_vm._s(_vm.$t('message.certifications')))]),_c('div',{staticClass:"certifications"},[_c('div',{staticClass:"certification-card"},[_c('img',{staticClass:"certification-logo",attrs:{"src":__webpack_require__(708),"alt":"freeCodeCamp Logo"}}),_c('div',{staticClass:"certification-details"},[_c('h4',[_vm._v("Data Analysis with Python")]),_c('p',[_vm._v("freeCodeCamp")]),_c('p',[_vm._v(_vm._s(_vm.$t('message.certifications_desc')))]),_c('a',{attrs:{"href":"https://www.freecodecamp.org/certification/FranklinEssonoEssono/data-analysis-with-python-v7","target":"_blank"}},[_vm._v(_vm._s(_vm.$t('message.view_certification')))])])])])])]),_c('section',{staticClass:"section-card contact-info"},[_c('h2',[_vm._v(_vm._s(_vm.$t('message.contact')))]),_c('div',{staticClass:"contact-info"},[_c('p',[_c('strong',[_vm._v(_vm._s(_vm.$t('message.phone'))+":")]),_vm._v(" +33 7 82 14 60 19")]),_c('p',[_c('strong',[_vm._v(_vm._s(_vm.$t('message.email'))+":")]),_vm._v(" "),_c('a',{attrs:{"href":"mailto:frangiessono1@gmail.com"}},[_vm._v("frangiessono1@gmail.com")])]),_c('p',[_c('strong',[_vm._v(_vm._s(_vm.$t('message.linkedin'))+":")]),_vm._v(" "),_c('a',{attrs:{"href":"https://www.linkedin.com/in/franklin-essono/","target":"_blank"}},[_vm._v("franklin-essono")])])])])])
}
var Homevue_type_template_id_8fa7012a_scoped_true_staticRenderFns = []


;// CONCATENATED MODULE: ./src/components/Home.vue?vue&type=template&id=8fa7012a&scoped=true

;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/Home.vue?vue&type=script&lang=js

/* harmony default export */ const Homevue_type_script_lang_js = ({
  name: 'Home',
  mounted() {
    document.title = "Franklin Essono";
  },
  methods: {
    navigateToDetails() {
      this.$router.push('/details');
    }
  }
});

;// CONCATENATED MODULE: ./src/components/Home.vue?vue&type=script&lang=js
 /* harmony default export */ const components_Homevue_type_script_lang_js = (Homevue_type_script_lang_js); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/Home.vue?vue&type=style&index=0&id=8fa7012a&prod&scoped=true&lang=css
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/Home.vue?vue&type=style&index=0&id=8fa7012a&prod&scoped=true&lang=css

;// CONCATENATED MODULE: ./src/components/Home.vue



;


/* normalize component */

var Home_component = (0,componentNormalizer/* default */.A)(
  components_Homevue_type_script_lang_js,
  Homevue_type_template_id_8fa7012a_scoped_true_render,
  Homevue_type_template_id_8fa7012a_scoped_true_staticRenderFns,
  false,
  null,
  "8fa7012a",
  null
  
)

/* harmony default export */ const Home = (Home_component.exports);
;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/Projects.vue?vue&type=template&id=7353f3a6&scoped=true
var Projectsvue_type_template_id_7353f3a6_scoped_true_render = function render(){var _vm=this,_c=_vm._self._c;return _c('div',[_c('section',{staticClass:"content-section"},[_c('h2',[_vm._v(_vm._s(_vm.$t('message.projects')))]),_c('div',{staticClass:"projects-list"},[_c('div',{staticClass:"project-item",attrs:{"id":"carte-france"}},[_c('h4',[_vm._v(_vm._s(_vm.$t('message.carte_france')))]),_c('p',[_vm._v(_vm._s(_vm.$t('message.carte_france_desc')))]),_c('ul',[_c('li',[_c('strong',[_vm._v(_vm._s(_vm.$t('message.main_features'))+" :")]),_c('ul',[_c('li',[_vm._v(_vm._s(_vm.$t('message.carte_france_main_features')))])])]),_c('li',[_c('strong',[_vm._v(_vm._s(_vm.$t('message.tech_uses_title'))+" :")]),_vm._v(" "+_vm._s(_vm.$t('message.carte_france_tech')))]),_c('li',[_c('strong',[_vm._v("Tests :")]),_vm._v(" "+_vm._s(_vm.$t('message.carte_france_tests')))]),_c('li',[_c('strong',[_vm._v("Documentation :")]),_vm._v(" "+_vm._s(_vm.$t('message.carte_france_docs')))])])]),_c('hr'),_c('div',{staticClass:"project-item",attrs:{"id":"demarche-low-tech"}},[_c('h4',[_vm._v(_vm._s(_vm.$t('message.demarche_low_tech')))]),_c('p',[_vm._v(_vm._s(_vm.$t('message.demarche_low_tech_desc')))]),_c('ul',[_c('li',[_vm._v(_vm._s(_vm.$t('message.demarche_low_tech_steps')))])])])])])])
}
var Projectsvue_type_template_id_7353f3a6_scoped_true_staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/Projects.vue?vue&type=script&lang=js

 /* harmony default export */ const Projectsvue_type_script_lang_js = ({
   name: 'Projects',
   mounted() {
    document.title = "Projects";
  },
 });
 
;// CONCATENATED MODULE: ./src/components/Projects.vue?vue&type=script&lang=js
 /* harmony default export */ const components_Projectsvue_type_script_lang_js = (Projectsvue_type_script_lang_js); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/Projects.vue?vue&type=style&index=0&id=7353f3a6&prod&scoped=true&lang=css
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/Projects.vue?vue&type=style&index=0&id=7353f3a6&prod&scoped=true&lang=css

;// CONCATENATED MODULE: ./src/components/Projects.vue



;


/* normalize component */

var Projects_component = (0,componentNormalizer/* default */.A)(
  components_Projectsvue_type_script_lang_js,
  Projectsvue_type_template_id_7353f3a6_scoped_true_render,
  Projectsvue_type_template_id_7353f3a6_scoped_true_staticRenderFns,
  false,
  null,
  "7353f3a6",
  null
  
)

/* harmony default export */ const Projects = (Projects_component.exports);
;// CONCATENATED MODULE: ./src/router/index.js







vue_runtime_esm/* default */.Ay.use(vue_router_esm/* default */.Ay);

const router = new vue_router_esm/* default */.Ay({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: { title: 'Accueil' }
    },
    {
      path: '/projects',
      name: 'Projects',
      component: Projects,
      meta: { title: 'Projets' }
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact,
      meta: { title: 'Contact' }
    },
    {
      path: '/details',
      name: 'Details',
      component: Details,
      meta: { title: 'Détails' }
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});

// Hook de navigation globale
router.beforeEach((to, from, next) => {
  const title = to.meta.title || 'Mon Portfolio';
  document.title = title;
  next();
});

/* harmony default export */ const src_router = (router);

;// CONCATENATED MODULE: ./src/main.js








vue_runtime_esm/* default */.Ay.config.productionTip = false;

vue_runtime_esm/* default */.Ay.use(vue_i18n_esm/* default */.A);

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

const i18n = new vue_i18n_esm/* default */.A({
  locale: 'fr', // set locale
  fallbackLocale: 'en', // set fallback locale
  messages, // set locale messages
});

const main_link = document.createElement('link');
main_link.rel = 'icon';
main_link.href = favicon_namespaceObject;
document.head.appendChild(main_link);

new vue_runtime_esm/* default */.Ay({
  router: src_router,
  i18n,
  render: h => h(App),
}).$mount('#app');


/***/ }),

/***/ 667:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/CEA_logo_nouveau.4f5946aa.png";

/***/ }),

/***/ 219:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/Logo Esiea Baseline ingenieur - blanc fond bleu (1).e8e03889.png";

/***/ }),

/***/ 817:
/***/ ((module) => {

module.exports = "data:image/jpeg;base64,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";

/***/ }),

/***/ 708:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/logo_freecodecamp.2dc09da0.png";

/***/ }),

/***/ 131:
/***/ ((module) => {

module.exports = "data:image/png;base64,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";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			524: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkportfolio"] = self["webpackChunkportfolio"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [504], () => (__webpack_require__(693)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=app.0f47900b.js.map