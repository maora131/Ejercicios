// JavaScript del heading en el que las letras aparecen poco a poco
const heading = '¡Te damos la bienvenida al estudio!';
let i = 0;

const typing = () => {
	if(i < heading.length){
		document.querySelector('.heading').innerHTML += heading.charAt(i);
		i++;
		
		setTimeout(typing, 150);
	}
}

typing();


