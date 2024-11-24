<template>
    <body class="contact">
        <h1 class="contact__title">ME CONTACTER</h1>
        <form @submit.prevent="sendEmail" class="contact__form">
            <div class="contact__name">
                <label for="name">Nom & prénom</label><br>
                <input type="text" id="name" v-model="form.name" placeholder="Entrez ici votre nom" required>
            </div>
            <div class="contact__email">
                <label for="email">Adresse e-mail</label><br>
                <input type="email" id="email" v-model="form.email" placeholder="Entrez ici votre e-mail" required>
            </div>
            <div class="contact__subject">
                <label for="subject">Objet de la demande</label><br>
                <select id="subject" v-model="form.subject" required>
                    <option value="" disabled selected hidden>Selectionnez le sujet</option>
                    <option value="devis">Demande de devis</option>
                    <option value="job">Offre d'emploi</option>
                    <option value="informations">Demande d'informations</option>
                    <option value="autre">Autre</option>
                </select>
            </div>
            <div class="contact__textarea">
                <label for="message">Votre message</label><br>
                <textarea id="message" name="message" rows="5" cols="40" v-model="form.message" placeholder="Bonjour, je vous contacte pour..." required></textarea>
            </div>
            <div class="contact__submit">
                <button type="submit">Soumettre ma demande</button>
            </div>
        </form>
        <section class="contact__result">
        <p v-if="successMessage" class="contact__success">{{successMessage}}</p>
        <p v-if="errorMessage" class="contact__error">{{errorMessage}}</p>
        </section>
    </body>
</template>

<script>
import emailjs from '@emailjs/browser'

export default {
  name: "Contact",
  data() {
    return {
      form: {
        name: "",
        email: "",
        subject: "",
        message: "",
      },
      successMessage: "",
      errorMessage: "",
    };
  },
  methods: {
    async sendEmail() {
      try {
        const response = await emailjs.send(
          "Portfolio2411", // Service ID
          "Portfolio2411", // Template ID
          {
            name: this.form.name,
            email: this.form.email,
            subject: this.form.subject,
            message: this.form.message,
          },
          "pEj7evGwv1dIoukTn" // Public key
        );
        if (response.status === 200) {
          this.successMessage = "Votre message a été envoyé avec succès.";
          this.errorMessage = "";
          this.form = { name: "", email: "", message: "" }; // Réinitialiser le formulaire
        }
      } catch (error) {
        this.errorMessage = "Une erreur s'est produite lors de l'envoi du message.";
        this.successMessage = "";
        console.error("EmailJS Error:", error);
      }
      setTimeout(() => {
        this.successMessage = "";
        this.errorMessage = "";
      }, 2000);
    },
  },
};

</script>

<style scoped>

.contact {
    height:600px;
    padding-top:20px;
    padding-left:30px;
    padding-bottom:10px;
    background:#c8af7d42;
    text-align:center;
}

.contact__title {
    font-size:3em;
    padding-bottom:30px;
}

.contact__form {
    line-height:1.8em;
}

.contact__submit button {
    font-size:1em;
    background:white;
    padding:10px;
    margin-top:30px;
    border-radius:7%;
    cursor:pointer;
}

.contact__result{
    padding-top:20px;
}

</style>