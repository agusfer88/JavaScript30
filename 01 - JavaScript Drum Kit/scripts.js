
function playSound(e){
        // consulto si hay algun elementeo audio que contenga un data-key y le paso el parametro de qué key code buscar
            const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        // consulto si hay algun elemento con clase key y que tenga el key code que le paso por parametro
            const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  
        // condicion para salir de la funcion
            if (!audio) return;
        // rewid to the start
            audio.currentTime = 0;
        // llama a la funcion que reproduce el audio
            audio.play();
        // agrega class playing al div seleccionado en const key
            key.classList.add('playing');
};

function removeTransition(e){
if(e.propertyName !== 'transform') return;
this.classList.remove('playing');
};

// consulto todos los elementos que tienen class key y los lupea para agregar un listener 
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener("keydown", playSound);
