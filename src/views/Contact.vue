<template>
    <body class="contact">
        <h1 class="contact__title">ME CONTACTER</h1>
        <form action="#" method="get" class="contact__form">
            <div class="contact__name">
                <label for="name">Nom & prénom</label><br>
                <input type="text" id="name" name="name" placeholder="Entrez ici votre nom" required>
            </div>
            <div class="contact__email">
                <label for="email">Adresse e-mail</label><br>
                <input type="email" id="email" name="email" placeholder="Entrez ici votre e-mail" required>
            </div>
            <div class="contact__subject">
                <label for="sujet">Objet de la demande</label><br>
                <select name="sujet" id="sujet" required>
                    <option value="" disabled selected hidden>Selectionnez le sujet</option>
                    <option value="devis">Demande de devis</option>
                    <option value="job">Offre d'emploi</option>
                    <option value="informations">Demande d'informations</option>
                    <option value="autre">Autre</option>
                </select>
            </div>
            <div class="contact__textarea">
                <label for="message">Votre message</label><br>
                <textarea id="message" name="message" rows="5" cols="40" placeholder="Bonjour, je vous contacte pour..." required></textarea>
            </div>
            <div class="contact__submit">
                <button type="submit">Soumettre ma demande</button>
            </div>
        </form>
    </body>
</template>

<style>

.contact {
    height:500px;
    padding-top:100px;
    padding-left:30px;
    padding-bottom:50px;
    background:#c8af7d42;
    text-align:center;
}

.contact__title {
    font-size:3em;
}

.contact__form {
    line-height:1.8em;
}

.contact__submit button {
    font-size:1em;
    background:white;
    padding:10px;
}

</style>