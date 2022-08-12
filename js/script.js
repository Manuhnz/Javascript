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

let nombreUsuario = document.getElementById('nombre');
let diaUsuario = document.getElementById('dia');
let mesUsuario = document.getElementById('mes');
let btnCalcular = document.getElementById('btnCalcular');
let btnBorrar = document.getElementById('btnBorrar');

btnCalcular.addEventListener('click',()=>{
    localStorage.setItem('Nombre',nombreUsuario.value);
    localStorage.setItem('Dia de nacimiento',diaUsuario.value);
    localStorage.setItem('Mes de nacimiento',mesUsuario.value);
    sessionStorage.setItem('Nombre',nombreUsuario.value);
    sessionStorage.setItem('Dia de nacimiento',diaUsuario.value);
    sessionStorage.setItem('Mes de nacimiento',mesUsuario.value);
});

btnBorrar.addEventListener('click',()=>{
    sessionStorage.clear();
    localStorage.clear();
});

const fechaUsuario = [
    dia = parseInt(diaUsuario),
    mes = parseInt(mesUsuario)
];

const signoTrue = signos.filter(function(fechaUsuario){
    return signos.fecha == fechaUsuario.dia && signos.fecha == fechaUsuario.mes;
});
/* 
const encontrarSigno = signoTrue.find((signo) => signo.fecha == true);
let signo = encontrarSigno.signo;
let elemento = encontrarSigno.elemento; */
