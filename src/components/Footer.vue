<template>
   <footer class="bottom">
        <p class="bottom__update"><small>Dernière mise à jour le <time datetime="2024-11-14">14 novembre 2024</time>.</small></p>
        <section class="bottom__link">
            <a href="https://github.com/souczs" target="_blank"><img src="../assets/img/logo-github.png" alt="" class="bottom__media"></a>
            <a href="https://fr.linkedin.com/" target="_blank"><img src="../assets/img/logo-linkedin.png" alt="" class="bottom__media"></a>
            <a href="https://www.instagram.com/" target="_blank"><img src="../assets/img/logo-instagram.png" alt="" class="bottom__media"></a>
        </section>
   </footer>
</template>

<style>

.bottom {
    background-color:#c8af7d;
    color:black;
    padding:13px;
    margin:-8px;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    bottom:0;
    width:100%;
    border-top:solid 0.1em black;;
}

.bottom__update {
    padding-left:50px;
}

.bottom__link {
    display:flex;
    flex-direction:row;
    align-items:center;
    gap:30px;
    padding-right:80px;
}

.bottom__media {
    weight:30px;
    height:30px;
}

</style>