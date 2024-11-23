<template>
    <body class="creations">  
        <h1 class="creations__title">MES PROJETS</h1>
        
        <section class="creations__block">
            <article class="creations__item">
                <img src="../assets/img/logo-cv.png" alt="Logo CV">
                <p>MON CV (HTML/CSS)</p>
            </article>
            <article class="creations__item">
                <img src="../assets/img/logo-commentaire.png" alt="Logo espace commentaire">
                <p>DYNAMISER UN ESPACE COMMENTAIRE (JS)</p>
            </article>
        </section>

    </body>
</template>

<script>
import Modal from '../components/Modal.vue'
</script>

<style>

.creations {
    height:800px;
    padding-top:120px;
    padding-left:300px;
    padding-right:300px;
    background:#c8af7d42;
    text-align:center;
    line-height: 3em;
}

.creations__title {
    font-size:3em;
}

.creations__block {
    display:flex;
    flex-direction:row;
    justify-content:center;
    gap:250px;
    padding-top:120px;
}

.creations__item img {
    height:200px;
    width:200px;
    border-radius:15%;
}

.creations__item img:hover {
    box-shadow: 0.5em 0.5em 5px #c8af7d;
}

.creations__item img:hover + p {
    border-bottom: solid 0.3em #c8af7d;
}


</style>