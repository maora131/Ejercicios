//el menú hamburguesa rota por esta acción
document.querySelector('.hamburger-menu').addEventListener('click', () => {
    document.querySelector('.nav-wrapper').classList.toggle('change');
});
//se le da click al explore me y pasa a la segunda página
document.querySelector('.banner-btn').addEventListener('click', () => {
    document.querySelector('.nav-wrapper').classList.toggle('change');
});