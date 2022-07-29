//CODIGO NUEVO

function Usuario (nombre, dia, mes, signo) {
    this.nombre = nombre;
    this.dia = dia;
    this.mes = mes;
    this.signo = signo;
}  

let nombre = prompt('Ingresá tu nombre');
let dia = parseInt(prompt('Ingresá el día de tu nacimiento'));
let mes = parseInt(prompt('Ingresá el mes de tu nacimiento'));
let signo = ('');

const usuario1 = new Usuario (nombre, dia, mes, signo);

const signos = [
    signosFuego = [
    {signo: 'Aries', fecha: ((dia >= 21 && mes == 3) || (dia <= 19 && mes == 4))},
    {signo: 'Leo', fecha: ((dia >= 23 && mes == 7) || (dia <= 22 && mes == 8))},
    {signo: 'Sagitario', fecha: ((dia >= 22 && mes == 11) || (dia <= 21 && mes == 12))}
    ],

    signosTierra = [
        {signo: 'Tauro', fecha: ((dia >= 20 && mes == 4) || (dia <= 20 && mes == 5))},
        {signo: 'Virgo', fecha: ((dia >= 23 && mes == 8) || (dia <= 22 && mes == 9))},
        {signo: 'Capricornio', fecha: ((dia >= 22 && mes == 12) || (dia <= 19 && mes == 1))}
    ],

    signosAire = [
        {signo: 'Géminis', fecha: ((dia >= 21 && mes == 5) || (dia <= 20 && mes == 6))},
        {signo: 'Libra', fecha: ((dia >= 23 && mes == 9) || (dia <= 22 && mes == 10))},
        {signo: 'Acuario', fecha: ((dia >= 20 && mes == 1) || (dia <= 18 && mes == 2))}
    ],
    
    signosAgua = [
        {signo: 'Cáncer', fecha: ((dia >= 21 && mes == 6) || (dia <= 22 && mes == 7))},
        {signo: 'Escorpio', fecha: ((dia >= 23 && mes == 10) || (dia <= 21 && mes == 11))},
        {signo: 'Piscis', fecha: ((dia >= 19 && mes == 2) || (dia <= 20 && mes == 3))}
    ]];

console.log(usuario1);

 
/* const signosFuego = [
    {signo: 'Aries', fecha: ['((dia >= 21 && mes == 3) || (dia <= 19 && mes == 4))']},
    {signo: 'Leo', fecha: ['((dia >= 23 && mes == 7) || (dia <= 22 && mes == 8))']},
    {signo: 'Sagitario', fecha: ['((dia >= 22 && mes == 11) || (dia <= 21 && mes == 12))']}
];

const signosTierra = [
    {signo: 'Tauro', fecha: ['((dia >= 20 && mes == 4) || (dia <= 20 && mes == 5))']},
    {signo: 'Virgo', fecha: ['((dia >= 23 && mes == 8) || (dia <= 22 && mes == 9))']},
    {signo: 'Capricornio', fecha: ['((dia >= 22 && mes == 12) || (dia <= 19 && mes == 1))']}
];

const signosAire = [
    {signo: 'Géminis', fecha: ['((dia >= 21 && mes == 5) || (dia <= 20 && mes == 6))']},
    {signo: 'Libra', fecha: ['((dia >= 23 && mes == 9) || (dia <= 22 && mes == 10))']},
    {signo: 'Acuario', fecha: ['((dia >= 20 && mes == 1) || (dia <= 18 && mes == 2))']}
];

const signosAgua = [
    {signo: 'Cáncer', fecha: ['((dia >= 21 && mes == 6) || (dia <= 22 && mes == 7))']},
    {signo: 'Escorpio', fecha: ['((dia >= 23 && mes == 10) || (dia <= 21 && mes == 11))']},
    {signo: 'Piscis', fecha: ['((dia >= 19 && mes == 2) || (dia <= 20 && mes == 3))']}
]; */

//CODIGO VIEJO
/* function entrada() {
    nombre = prompt('Ingresá tu nombre')
    alert('Bienvendio/a ' + nombre + '! Vamos a calcular tu signo del Zodiaco')

    dia = parseInt(prompt('Ingresá el día de tu nacimiento'));
    mes = parseInt(prompt('Ingresá el mes de tu nacimiento'));
}   */
/* const signos = ['Aries', 'Tauro', 'Géminis', 'Cáncer','Leo','Virgo','Libra', 'Escorpio','Sagitario','Capricornio','Acuario','Piscis'] */ 
/* 
function procesamiento(valor) {
    if ((dia >= 21 && mes == 3) || (dia <= 19 && mes == 4)) {
        alert('Tu signo del Zodiaco es ' + signosFuego[0]);
    } else if ((dia >= 20 && mes == 4) || (dia <= 20 && mes == 5)) {
        alert('Tu signo del Zodiaco es ' + signosTierra[0]);
    } else if ((dia >= 21 && mes == 5) || (dia <= 20 && mes == 6)) {
        alert('Tu signo del Zodiaco es ' + signosAire[0]);
    } else if ((dia >= 21 && mes == 6) || (dia <= 22 && mes == 7)) {
        alert('Tu signo del Zodiaco es ' + signosAgua[0]);
    } else if ((dia >= 23 && mes == 7) || (dia <= 22 && mes == 8)) {
        alert('Tu signo del Zodiaco es ' + signosFuego[1]);
    } else if ((dia >= 23 && mes == 8) || (dia <= 22 && mes == 9)) {
        alert('Tu signo del Zodiaco es ' + signosTierra[1]);
    } else if ((dia >= 23 && mes == 9) || (dia <= 22 && mes == 10)) {
        alert('Tu signo del Zodiaco es ' + signosAire[1]);
    } else if ((dia >= 23 && mes == 10) || (dia <= 21 && mes == 11)) {
        alert('Tu signo del Zodiaco es ' + signosAgua[1]);
    } else if ((dia >= 22 && mes == 11) || (dia <= 21 && mes == 12)) {
        alert('Tu signo del Zodiaco es ' + signosFuego[2]);
    } else if ((dia >= 22 && mes == 12) || (dia <= 19 && mes == 1)) {
        alert('Tu signo del Zodiaco es ' + signosTierra[2]);
    } else if ((dia >= 20 && mes == 1) || (dia <= 18 && mes == 2)) {
        alert('Tu signo del Zodiaco es ' + signosAire[2]);
    } else if ((dia >= 19 && mes == 2) || (dia <= 20 && mes == 3)) {
        alert('Tu signo del Zodiaco es ' + signosAgua[2]);
    } else {
        alert('Error');
    }
}
*/

/* function salida(valor) {
    alert('Gracias por participar!');
}

salida(procesamiento(entrada()));  */