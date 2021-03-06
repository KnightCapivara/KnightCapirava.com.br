const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

const DARK_THEME = 'dark'
const LIGHT_THEME = 'light'

// Escolha da imagem em modo dark ou light 
function imageMode(color){
    image1.src = `img/undraw_proud_coder_${color}.svg`;
    image2.src = `img/undraw_conceptual_idea_${color}.svg`;
    image3.src = `img/undraw_feeling_proud_${color}.svg`;
}

// função para alternar o modo escuro/claro e alterar as tags e elementos 
function toogleDarkLightMode(isDark) {
    nav.background = isDark ? 'rgb(0 0 0 / 50%)' : 'rgb(255 255 255 / 50%)' ;
    textBox.style.background = isDark ? 'rgb( 255 255 255 /50%)' : 'rgb(0 0 0 / 50%)';
    toggleIcon.children[0].textContent = isDark ? 'Dark Mode' : 'Light Mode';
    isDark ? toggleIcon.children[1].classList.replace('fa-sun' ,'fa-moon' ): toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
    isDark ? imageMode(DARK_THEME) : imageMode(LIGHT_THEME);
}

// Altera o tema
function switchTheme(event) {
    if (event.target.checked) {
        document.documentElement.setAttribute('data-theme', DARK_THEME);
        localStorage.setItem('theme', DARK_THEME);
        toogleDarkLightMode(DARK_THEME)
    }else {
        document.documentElement.setAttribute('data-theme', LIGHT_THEME);
        localStorage.setItem('theme',LIGHT_THEME);
        toogleDarkLightMode(LIGHT_THEME);
    }
}

// Evento
toggleSwitch.addEventListener('change',switchTheme);

// Verificar armazenamento local do tema 
const currentTheme = localStorage.getItem('theme');
if(currentTheme) {
    document.documentElement.setAttribute('data-theme',currentTheme);
    if(currentTheme === 'dark') {
        toggleSwitch.checked = true;
        toogleDarkLightMode(LIGHT_THEME)
    }
}