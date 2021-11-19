document.querySelector('.pag1 button').addEventListener('click', () => {
    document.querySelector('.pag1').style.display = 'none';
    document.querySelector('.todo').style.cssText = 'opacity: 1; visibility: visible';
    document.querySelector('.pasafotos').style.animation = 'pasafotos 24s infinite';
})