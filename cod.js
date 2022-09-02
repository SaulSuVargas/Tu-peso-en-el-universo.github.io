//asignar tanto el valor del Peso y planetas
var peso = document.getElementById('peso')
var tierraPeso = document.getElementById('pesoTierra')
var martePeso = document.getElementById('pesoMarte')
var jupiterPeso = document.getElementById('pesoJupiter')
var mercurioPeso = document.getElementById('pesoMercurio')
var venusPeso = document.getElementById('pesoVenus')
var saturnoPeso = document.getElementById('pesoSaturno')
var neptunoPeso = document.getElementById('pesoNeptuno')
var uranioPeso = document.getElementById('pesoUranio')
var lunaPeso = document.getElementById('pesoLuna')
//disparar el evento del cuadro de texto
peso.addEventListener('keyup', function(e){
    martePeso.innerHTML = planetaPeso(peso.value, 'marte') + 'kg'
    neptunoPeso.innerHTML = planetaPeso(peso.value, 'neptuno') + 'kg'
    venusPeso.innerHTML = planetaPeso(peso.value, 'venus') + 'kg'
    jupiterPeso.innerHTML = planetaPeso(peso.value, 'jupiter') + 'kg'
    mercurioPeso.innerHTML = planetaPeso(peso.value, 'mercurio') + 'kg'
    saturnoPeso.innerHTML = planetaPeso(peso.value, 'saturno') + 'kg'
    uranioPeso.innerHTML = planetaPeso(peso.value, 'uranio') + 'kg'
    lunaPeso.innerHTML = planetaPeso(peso.value, 'luna') + 'kg'
})

//Asiganmos la gravedad de cada planeta
function planetaPeso(peso, planeta){
    var marteG = 3.721
    var tierraG = 9.807
    var jupiterG = 24.79
    var mercurioG = 3.7
    var venusG = 8.87
    var saturnoG = 10.44
    var neptunoG = 11.15
    var uranioG = 8.87
    var lunaG = 1.62
    return calculate(peso, planeta)

    //ahora si la ecuacion
    function calculate(peso, planeta){
        if (planeta === 'marte') return((parseInt(peso) / tierraG) * marteG).toFixed(2)
        if (planeta === 'jupiter') return((parseInt(peso) / tierraG) * jupiterG).toFixed(2)
        if (planeta === 'mercurio') return((parseInt(peso) / tierraG) * mercurioG).toFixed(2)
        if (planeta === 'venus') return((parseInt(peso) / tierraG) * venusG).toFixed(2)
        if (planeta === 'saturno') return((parseInt(peso) / tierraG) * saturnoG).toFixed(2)
        if (planeta === 'neptuno') return((parseInt(peso) / tierraG) * neptunoG).toFixed(2)
        if (planeta === 'uranio') return((parseInt(peso) / tierraG) * uranioG).toFixed(2)
        if (planeta === 'luna') return((parseInt(peso) / tierraG) * lunaG).toFixed(2)
    }
}