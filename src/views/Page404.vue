<template>
    <body class="errorpage">
        <h1 class="errorpage__title">Page 404</h1>

        <section class="errorpage__content">
            <p class="errorpage__textarea">La page que vous recherchez n'existe pas.</p>
            <p>Vous serez redirigés dans 3 secondes vers la page d'accueil.</p>
            <img src="../assets/img/erreur.png" alt="Page non trouvée" class="errorpage__img">
        </section>
    </body>
</template>

<style scoped>

.errorpage {
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    text-align:center;
    height:800px;
}

.errorpage__content {
    padding-top: 10px;
}

.errorpage img {
    width:600px;
    height:600px;
    padding-top:40px;
    padding-bottom:40px;
}

.errorpage__returnhome {
    color:black;
}


</style>