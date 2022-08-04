function Usuario(nombre, dia, mes,signo,elemento) {
    this.nombre = nombre;
    this.dia = dia;
    this.mes = mes;
    this.signo = signo;
    this.elemento = elemento;
}  

let nombre = prompt('Ingresá tu nombre');
let dia = parseInt(prompt('Ingresá el día de tu nacimiento'));
let mes = parseInt(prompt('Ingresá el mes de tu nacimiento'));
let signo = '';
let elemento = '';

const usuario1 = new Usuario(nombre, dia, mes, signo, elemento);

const signos = [
    {signo: 'Aries', fecha: ((dia >= 21 && mes == 3) || (dia <= 19 && mes == 4)), elemento: 'Fuego'},
    {signo: 'Tauro', fecha: ((dia >= 20 && mes == 4) || (dia <= 20 && mes == 5)), elemento: 'Tierra'},
    {signo: 'Géminis', fecha: ((dia >= 21 && mes == 5) || (dia <= 20 && mes == 6)), elemento: 'Aire'},
    {signo: 'Cáncer', fecha: ((dia >= 21 && mes == 6) || (dia <= 22 && mes == 7)), elemento: 'Agua'},
    {signo: 'Leo', fecha: ((dia >= 23 && mes == 7) || (dia <= 22 && mes == 8)), elemento: 'Fuego'},
    {signo: 'Virgo', fecha: ((dia >= 23 && mes == 8) || (dia <= 22 && mes == 9)), elemento: 'Tierra'},
    {signo: 'Libra', fecha: ((dia >= 23 && mes == 9) || (dia <= 22 && mes == 10)), elemento: 'Aire'},
    {signo: 'Escorpio', fecha: ((dia >= 23 && mes == 10) || (dia <= 21 && mes == 11)), elemento: 'Agua'},
    {signo: 'Sagitario', fecha: ((dia >= 22 && mes == 11) || (dia <= 21 && mes == 12)), elemento: 'Fuego'},
    {signo: 'Capricornio', fecha: ((dia >= 22 && mes == 12) || (dia <= 19 && mes == 1)), elemento: 'Tierra'},
    {signo: 'Acuario', fecha: ((dia >= 20 && mes == 1) || (dia <= 18 && mes == 2)), elemento: 'Aire'},
    {signo: 'Piscis', fecha: ((dia >= 19 && mes == 2) || (dia <= 20 && mes == 3)), elemento: 'Agua'},
];

const signoTrue = signos.filter(function(Usuario) {
    return signos.fecha == this.mes && signos.fecha == this.dia;
});

const encontrarSigno = signoTrue.find((signo) => signo.fecha == true);
alert('Bienvenido/a ' + nombre + '. Tu signo el Zodiaco es ' + encontrarSigno.signo + '. Y su elemento es ' + encontrarSigno.elemento);

/* 
const signosFuego = signos.filter((signo) => signo.elemento == 'Fuego');
const signosTierra = signos.filter((signo) => signo.elemento == 'Tierra');
const signosAire = signos.filter((signo) => signo.elemento == 'Aire');
const signosAgua = signos.filter((signo) => signo.elemento == 'Agua'); */