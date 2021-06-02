//menu up a down.
let bottonUp = document.getElementById('menu-click');
let menuContainer = document.getElementById('menu-down');
let estadoUp = 0;

const cambio = () => {
    if (estadoUp == 0) {
        menuContainer.classList.add('topnav__menu-container-up');
        estadoUp = 1;
    } else {
        menuContainer.classList.remove('topnav__menu-container-up');
        estadoUp = 0;
    };
};
bottonUp.addEventListener('click', cambio, true);

//cambio de imagenes y color de los puntos del section 1
let bottonchange = document.getElementById('change');
let dot1 = document.getElementById('dot1');
let dot2 = document.getElementById('dot2');
let dot3 = document.getElementById('dot3');
let serv1 = document.getElementById('serv1');
let serv2 = document.getElementById('serv2');
let serv3 = document.getElementById('serv3');
let pro1 = document.getElementById('pro1');
let pro2 = document.getElementById('pro2');
let pro3 = document.getElementById('pro3');
let ins1 = document.getElementById('ins1');
let ins2 = document.getElementById('ins2');
let ins3 = document.getElementById('ins3');
let vid1 = document.getElementById('vid1');
let vid2 = document.getElementById('vid2');
let vid3 = document.getElementById('vid3');
let estado = 0;
const cambio1 = () => {
    if (estado == 0) {
        dot1.classList.remove('new-color');
        dot2.classList.add('new-color');
        serv1.classList.add('none');
        serv2.classList.remove('none');
        pro1.classList.add('none');
        pro2.classList.remove('none');
        ins1.classList.add('none');
        ins2.classList.remove('none');
        vid1.classList.add('none');
        vid2.classList.remove('none');
        estado = 1;
    } else if (estado == 1) {
        dot2.classList.remove('new-color');
        dot3.classList.add('new-color');
        serv2.classList.add('none');
        serv3.classList.remove('none');
        pro2.classList.add('none');
        pro3.classList.remove('none');
        ins2.classList.add('none');
        ins3.classList.remove('none');
        vid2.classList.add('none');
        vid3.classList.remove('none');
        estado = 2;
    } else {
        dot3.classList.remove('new-color');
        dot1.classList.add('new-color');
        serv3.classList.add('none');
        serv1.classList.remove('none');
        pro3.classList.add('none');
        pro1.classList.remove('none');
        ins3.classList.add('none');
        ins1.classList.remove('none');
        vid3.classList.add('none');
        vid1.classList.remove('none');
        estado = 0;
    };
};
bottonchange.addEventListener('click', cambio1, true);
setInterval(cambio1, 6000);
//cambio de imagenes segun botones  del section 2
let buttonLeft = document.getElementById('button-left');
let buttonRight = document.getElementById('button-right');
let promo1 = document.getElementById('promo1');
let promo2 = document.getElementById('promo2');
let promo3 = document.getElementById('promo3');
let estado1 = 1;
const cambioRight = () => {
    if (estado1 == 1) {

        promo1.classList.add('none');
        promo2.classList.remove('none');
        estado1 = 2;
    } else if (estado1 == 2) {

        promo2.classList.add('none');
        promo3.classList.remove('none');
        estado1 = 3;
    } else {

        promo3.classList.add('none');
        promo1.classList.remove('none');
        estado1 = 1;
    };
};
buttonRight.addEventListener('click', cambioRight, true);
setInterval(cambioRight, 6000);
const cambioLeft = () => {
    if (estado1 == 1) {

        promo1.classList.add('none');
        promo3.classList.remove('none');
        estado1 = 3;
    } else if (estado1 == 3) {

        promo3.classList.add('none');
        promo2.classList.remove('none');
        estado1 = 2;
    } else {

        promo2.classList.add('none');
        promo1.classList.remove('none');
        estado1 = 1;
    };
};
buttonLeft.addEventListener('click', cambioLeft, true);