<template>
   <div>
     <section class="section-card contact-information">
         <h3>{{ $t('message.contact_info') }}</h3>
       <div class="contact-card">
         <div class="contact-info">
           <p><strong>{{ $t('message.phone') }} :</strong> +33 7 82 14 60 19</p>
           <p><strong>{{ $t('message.email') }} :</strong> <a href="mailto:frangiessono1@gmail.com">frangiessono1@gmail.com</a></p>
           <p><strong>{{ $t('message.linkedin') }} :</strong> <a href="https://www.linkedin.com/in/franklin-essono/" target="_blank">franklin-essono</a></p>
         </div>
       </div>
    </section>
    <section class="section-card contact-form">
       <h3>{{ $t('message.contact_form') }}</h3>
       <form class="grid" @submit.prevent="sendEmail">
         <input type="text" id="from_name" name="from_name" v-model="form.from_name" :placeholder="$t('message.your_name')" aria-label="Prénom" required />
         <input type="email" id="reply_to" name="reply_to" v-model="form.reply_to" :placeholder="$t('message.your_email')" aria-label="Email" required />
         <input type="text" id="subject" name="subject" v-model="form.subject" :placeholder="$t('message.subject')" aria-label="Objet" required />
         <textarea id="message" name="message" v-model="form.message" :placeholder="$t('message.your_message')" aria-label="Message" required></textarea>
         <button type="submit">{{ $t('message.send') }}</button>
       </form>
    </section>
   </div>
 </template>

 <script>
 import emailjs from 'emailjs-com';

 export default {
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
   methods: {
     sendEmail() {
      const serviceID = process.env.VUE_APP_SERVICE_ID;
      const templateID = process.env.VUE_APP_TEMPLATE_ID;
      const userID = process.env.VUE_APP_USER_ID;

       const templateParams = {
         from_name: this.form.from_name,
         to_name: 'Franklin Essono',
         message: `Objet: ${this.form.subject}\n\nMessage:\n${this.form.message}`,
         reply_to: this.form.reply_to
       };
       
       emailjs.send(serviceID, templateID, templateParams, userID)
         .then((response) => {
           console.log('Email sent successfully!', response.status, response.text);
           alert('Message envoyé avec succès !');
         }, (error) => {
           console.log('Failed to send email.', error);
           alert('Échec de l\'envoi du message. Veuillez réessayer.');
         });
     }
   }
 };
 </script>

 <style scoped>
 .section-card {
   padding: 20px;
   background-color: #fff;
   border-radius: 10px;
   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
   margin-bottom: 20px;
   text-align: center;
 }

 .contact-card {
   display: flex;
   align-items: center;
   justify-content: center;
   background-color: #f9f9f9;
   padding: 15px;
   border-radius: 10px;
   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
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

 h2, h3 {
   color: #333;
   text-align: center;
 }

 p {
   color: #555;
   text-align: left;
 }

   h3 {
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      margin-bottom: 1rem;
    }

    h3::before,
    h3::after {
      content: '';
      flex: 1;
      border-bottom: 2px solid #333;
      margin: 0 1rem;
    }
 form {
   display: flex;
   flex-direction: column;
 }

 input, textarea, button {
   margin-bottom: 10px;
 }

 textarea {
   resize: vertical;
   min-height: 100px;
 }
 </style>
