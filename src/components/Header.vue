<template>
    <header>
        <nav class="menu">
            <img src="" alt="Revenir en haut de la page" class="menu__img">
            <RouterLink to="/">HOME</RouterLink>
            <RouterLink to="/projets">PROJETS</RouterLink>
            <RouterLink to="/contact">CONTACT</RouterLink>
        </nav>
    </header>
    <RouterView />
</template>

<style>

header {
    background-color:#bad6b0;
    position:fixed;
    top:0;
    left:0;
    width: 100%;
    height:50px;
}

img {
    width:40px;
    height:40px;
    display:flex;
    justify-content:flex-start;
    padding-left:50px;
}

nav {
  /* background-image: linear-gradient(to bottom right, blue, rgba(239, 192, 52, 0.524)) */
  font-size:1.2em;
  display:flex;
  flex-direction:row;
  align-items:center;
  padding-top:5px;
  gap:150px;
}

nav a {
    text-decoration:none;
    color:black;
}

</style>