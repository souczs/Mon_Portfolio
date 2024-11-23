<template>
    <header>
        <nav class="menu">
            <RouterLink to="/home" class="menu__link"><img src="../assets/img/home.png" alt="Revenir en haut de la page" class="menu__img"></RouterLink>
            <RouterLink to="/presentation" class="menu__link">PRESENTATION</RouterLink>
            <RouterLink to="/projets" class="menu__link">PROJETS</RouterLink>
            <RouterLink to="/contact" class="menu__link">ME CONTACTER</RouterLink>
        </nav>
    </header>
</template>

<style scoped>

header {
    background-color:#c8af7d;
    position:fixed;
    top:0;
    left:0;
    width: 100%;
    height:50px;
    border-bottom:solid 0.1em black;
}

.menu {
  /* background-image: linear-gradient(to bottom right, blue, rgba(239, 192, 52, 0.524)) */
  font-size:1.2em;
  display:flex;
  flex-direction:row;
  align-items:center;
  padding-top:5px;
  gap:150px;
}

.menu__img {
    width:40px;
    height:40px;
    display:flex;
    justify-content:flex-start;
    padding-left:50px;
}

.menu__link {
    text-decoration:none;
    color:black;
}

.menu__link:active {
    text-decoration: underline;
    color: black;
}

</style>