document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('italy').onclick = function () {
        //console.log('cio')
        document.getElementById('myself').innerHTML = 'Ciao. Mi chiamo Marco Falasca e sono uno sviluppatore Front-End.';
        document.getElementById('cta').innerHTML = 'E sono pronto a collaborare con Te!'
    }
    document.getElementById('spain').onclick = function () {
        //console.log('cio')
        document.getElementById('myself').innerHTML = 'Hola me llamo marco y soy desarrollador front end.';
        document.getElementById('cta').innerHTML = '¡Y estoy dispuesto a cooperar contigo!'
    }
    document.getElementById('britain').onclick = function () {
        //console.log('cio')
        document.getElementById('myself').innerHTML = 'Hello, My name is <span>Marco Falasca and i am a Front-End Developer.';
        document.getElementById('cta').innerHTML = "And i/'m ready to collaborate on projects for YOU!"
    }
})