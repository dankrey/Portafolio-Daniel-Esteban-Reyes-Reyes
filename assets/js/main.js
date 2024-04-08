/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 





// Logica del formulario

// Obtener elementos del formulario y los mensajes de error
const nombre = document.getElementById('nombre');
const email = document.getElementById('email');
const asunto = document.getElementById('asunto');
const mensaje = document.getElementById('mensaje');

const nombreError = document.getElementById('nombreError');
const emailError = document.getElementById('emailError');
const asuntoError = document.getElementById('asuntoError');
const mensajeError = document.getElementById('mensajeError');

// Obtener el botón de enviar
const enviarBtn = document.getElementById('enviarBtn');

// Función para validar el correo electrónico
const validarEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};

// Función para validar el formulario
const validarFormulario = () => {
    let hayErrores = false;

    // Validación del campo Nombre
    if (nombre.value.trim() === '') {
        nombreError.textContent = 'Por favor, ingrese su nombre';
        hayErrores = true;
    } else if (nombre.value.trim().length > 50) {
        nombreError.textContent = 'El nombre no debe superar los 50 caracteres';
        hayErrores = true;
    } else {
        nombreError.textContent = '';
    }

    // Validación del campo Correo Electrónico
    if (email.value.trim() === '') {
        emailError.textContent = 'Por favor, ingrese su correo electrónico';
        hayErrores = true;
    } else if (!validarEmail(email.value.trim())) {
        emailError.textContent = 'Por favor, ingrese un correo electrónico válido';
        hayErrores = true;
    } else {
        emailError.textContent = '';
    }

    // Validación del campo Asunto
    if (asunto.value.trim() === '') {
        asuntoError.textContent = 'Por favor, ingrese el asunto';
        hayErrores = true;
    } else if (asunto.value.trim().length > 50) {
        asuntoError.textContent = 'El asunto no debe superar los 50 caracteres';
        hayErrores = true;
    } else {
        asuntoError.textContent = '';
    }

    // Validación del campo Mensaje
    if (mensaje.value.trim() === '') {
        mensajeError.textContent = 'Por favor, ingrese su mensaje';
        hayErrores = true;
    } else if (mensaje.value.trim().length > 300) {
        mensajeError.textContent = 'El mensaje no debe superar los 300 caracteres';
        hayErrores = true;
    } else {
        mensajeError.textContent = '';
    }

    // Habilitar o deshabilitar el botón de enviar
    enviarBtn.disabled = hayErrores;
};

// Event listeners para validar el formulario
nombre.addEventListener('input', validarFormulario);
email.addEventListener('input', validarFormulario);
asunto.addEventListener('input', validarFormulario);
mensaje.addEventListener('input', validarFormulario);
// Función para enviar la información del formulario a WhatsApp
const enviarMensajeWhatsApp = () => {
    const mensajeWhatsApp = `¡Nuevo mensaje de contacto!\n\n` +
        `Nombre: ${nombre.value.trim()}\n` +
        `Correo electrónico: ${email.value.trim()}\n` +
        `Asunto: ${asunto.value.trim()}\n` +
        `Mensaje: ${mensaje.value.trim()}`;

    const urlWhatsApp = `https://wa.me/573148606948?text=${encodeURIComponent(mensajeWhatsApp)}`;

    window.open(urlWhatsApp);
};

// Event listener para enviar el formulario a WhatsApp cuando se haga clic en el botón
enviarBtn.addEventListener('click', enviarMensajeWhatsApp);
