<!-- Impossible d'inclure les fenêtres modales au clic de l'image et/ou du texte d'un projet.
-> Ni avec les techniques script VueJS, ni avec les techniques classiques addEventListener JS. -->

<template>
        <section class="modal1">
            <div class="modal__overlay">
                <div class="modal__block1">
                    <span class="modal__top">
                        <h1 class="modal__title">MON CURRICULUM VITAE</h1>
                        <p class="modal__date"><time datetime="2024-09-22">22/09/2024</time></p>
                        <p class="modal__code">HTML & CSS</p>
                        <p class="modal__link"><a href="https://github.com/souczs/Mon_CV/tree/main" target="_blank">Voir le projet</a></p>
                    </span>
                    <span class="modal__bottom">
                        <button type="button" class="modal__close" id="closemodal1">Fermer</button>
                    </span>
                </div>
            </div>
        </section>

        <section class="modal2">
            <div class="modal__overlay">
                <div class="modal__block">
                    <span class="modal__top">
                        <h1 class="modal__title">MON CURRICULUM VITAE</h1>
                        <p class="modal__date"><time datetime="2024-11-02">02/11/2024</time></p>
                        <p class="modal__code">HTML & JS</p>
                        <p class="modal__link"><a href="https://github.com/souczs/DynamiserEspaceComm" target="_blank">Voir le projet</a></p>
                    </span>
                    <span class="modal__bottom">
                        <button type="button" class="modal__close" id="closemodal2">Fermer</button>
                    </span>
                </div>
            </div>
        </section>
</template>

<style>

.modal1 {
    display:n
    one;
    position:fixed;
    width:100%;
    height:100%;
    z-index:1;
}

.modal2 {
    /* display:none; */
    position:fixed;
    width:100%;
    height:100%;
    z-index:1;
}

.modal__overlay {
    position:absolute;
    width:100%;
    height:100%;
    background:#333333d3;
    display:flex;
    justify-content:center;
    align-items:center;
}

.modal__block {
    background:white;
    width:30%;
    height:30%;
    border-radius:7%;
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
    align-items:center;
    text-align:center;
}

.modal__close {
    width:200px;
    background:#c8af7d;
    font-family:"Nunito Sans", sans serif;
    font-weight:bold;
    cursor:pointer;
}

</style>