<template>
   <footer class="bottom">
        <p class="bottom__update"><small>Dernière mise à jour le <time datetime="2024-11-14">14 novembre 2024</time>.</small></p>
        <section class="bottom__link">
            <a href="" class="bottom__media"><img src="" alt=""></a>
            <a href="" class="bottom__media"><img src="" alt=""></a>
            <a href="" class="bottom__media"><img src="" alt=""></a>
        </section>
   </footer>
</template>

<style>

.bottom {
    background-color:#bad6b0;
    color:black;
    padding:13px;
    margin:-8px;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    bottom:0;
    width:100%;
}

.bottom__update {
    padding-left:50px;
}

.bottom__link {
    display:flex;
    flex-direction:row;
    padding-right:50px;
}

</style>