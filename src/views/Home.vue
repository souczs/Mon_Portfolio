<template>
    <body class="welcome">
        <img src="../assets/img/logo-ordinateur.png" alt="" class="welcome__photo">
        <section class="welcome__text">
            <h1 class="welcome__name">&lt;&gt;SONIA EL BOURI&lt;/&gt;</h1><br>
            <h2 class="welcome__job">Développeuse Web junior</h2><br>
            <p>Bienvenue sur mon portfolio !</p><br>
            <p>Ce portfolio est une vitrine de mon travail, combinant à la fois créativité, technicité et souci du détail.</p>
            <p>Vous y trouverez mes projets récents, où j’ai appliqué mes compétences en HTML/CSS & JS pour concevoir des solutions web sur mesure.</p><br>
            <p>N’hésitez pas à explorer, et contactez-moi si vous avez des questions ou souhaitez collaborer.</p>
            <p>Bonne visite !</p>
        </section>
    </body>
</template>

<style>

* {
    margin:0;
    padding:0;
}

.welcome {
    height:800px;
    padding-left:50px;
    padding-right:50px;
    gap:50px;
    background:#c8af7d42;
    text-align:justify;
    display:flex;
    flex-direction:row;
    justify-content:flex-start;
    align-items:center;
}

.welcome__photo {
    width:300px;
    height:350px;
    /* border-radius:20%;
    box-shadow: 1em 1em 12px black; */
    padding-top:2%;
}

.welcome__name{
    font-size:3em;
}

.welcome__job {
    font-size:2em;
}

.welcome__text p {
    font-size:1.2em;
}

</style>