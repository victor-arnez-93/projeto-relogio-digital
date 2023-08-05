const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos')
const segundos = document.getElementById('segundos')


const relogio = setInterval(function time() {
    var dateToday = new Date();
    var hr = dateToday.getHours();
    var min = dateToday.getMinutes()
    var sec = dateToday.getSeconds();
   
    if (hr < 10) h = '0' + hr;
    if (min < 10) m = '0' + min;
    if (sec < 10) s = '0' + sec;

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = sec;

    atualizarFundoEImagens(hr);
}, 1000);

function atualizarFundoEImagens(hr) {

const manhaInicio = 6;
const tardeInicio = 17;
const noiteInicio = 18;

const imagemManha = 'imagens/dia.png'; 
const imagemTarde = 'imagens/tarde.png'; 
const imagemNoite = 'imagens/noite.png'; 

const gradienteManha = 'linear-gradient(to bottom, #1fa3cf, #92cef4)';
const gradienteTarde = 'linear-gradient(to bottom, #98a4ba, #f5ba5e, #f79b4e)';
const gradienteNoite = 'linear-gradient(to bottom, #8468a2, #332a45, #0e0a09)';

    // Altere o fundo de acordo com a hora do dia
    if (hr >= manhaInicio && hr < tardeInicio) {
        // Altere o fundo para o da manhã
        document.body.style.background = gradienteManha;
        document.body.style.backgroundSize = 'cover';
    } else if (hr >= tardeInicio && hr < noiteInicio) {
        // Altere o fundo para o da tarde
        document.body.style.background = gradienteTarde;
        document.body.style.backgroundSize = 'cover';
    } else {
        // Altere o fundo para o da noite
        document.body.style.background = gradienteNoite;
        document.body.style.backgroundSize = 'cover';
    }

     // Altere a imagem de acordo com a hora do dia
    if (hr >= manhaInicio && hr < tardeInicio) {
        // Altere a imagem para a da manhã
        document.getElementById('imagemManha').style.display = 'block';
        document.getElementById('imagemTarde').style.display = 'none';
        document.getElementById('imagemNoite').style.display = 'none';
    } else if (hr >= tardeInicio && hr < noiteInicio) {
        // Altere a imagem para a da tarde
        document.getElementById('imagemManha').style.display = 'none';
        document.getElementById('imagemTarde').style.display = 'block';
        document.getElementById('imagemNoite').style.display = 'none';
    } else {
        // Altere a imagem para a da noite
        document.getElementById('imagemManha').style.display = 'none';
        document.getElementById('imagemTarde').style.display = 'none';
        document.getElementById('imagemNoite').style.display = 'block';
    }
}