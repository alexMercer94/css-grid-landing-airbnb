document.addEventListener('DOMContentLoaded', () => {
    const imgHero = document.querySelector('.hero');
    let i = 0;
    let time = 0;

    const images = ['arriba2.jpg', 'arriba.jpg'];

    setInterval(() => {
        imgHero.style.backgroundPositionX = '-' + time + 'px';
        if (time > 40) {
            time = 0;
            imgHero.style.backgroundImage = `url(../img/${images[i]})`;

            if (i === images.length - 1) {
                i = 0;
            } else {
                i++;
            }
        } else {
            time += 1;
        }
    }, 100);

    const btnFlotante = document.querySelector('.btn-flotante');
    btnFlotante.addEventListener('click', (e) => {
        e.preventDefault();
        const footer = document.querySelector('#footer');

        if (footer.classList.contains('activo')) {
            footer.classList.remove('activo');
            btnFlotante.classList.remove('activo');
            btnFlotante.innerText = 'Idioma y Moneda';
        } else {
            footer.classList.add('activo');
            btnFlotante.classList.add('activo');
            btnFlotante.innerText = 'X Cerrar';
        }
    });
});
