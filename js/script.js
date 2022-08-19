const signos = [
    {signo: 'Aries', fecha: ((dia >= 21 && mes == 03) || (dia <= 19 && mes == 04)), elemento: 'Fuego'},
    {signo: 'Tauro', fecha: ((dia >= 20 && mes == 04) || (dia <= 20 && mes == 05)), elemento: 'Tierra'},
    {signo: 'Géminis', fecha: ((dia >= 21 && mes == 05) || (dia <= 20 && mes == 06)), elemento: 'Aire'},
    {signo: 'Cáncer', fecha: ((dia >= 21 && mes == 06) || (dia <= 22 && mes == 07)), elemento: 'Agua'},
    {signo: 'Leo', fecha: ((dia >= 23 && mes == 07) || (dia <= 22 && mes == 08)), elemento: 'Fuego'},
    {signo: 'Virgo', fecha: ((dia >= 23 && mes == 08) || (dia <= 22 && mes == 09)), elemento: 'Tierra'},
    {signo: 'Libra', fecha: ((dia >= 23 && mes == 09) || (dia <= 22 && mes == 10)), elemento: 'Aire'},
    {signo: 'Escorpio', fecha: ((dia >= 23 && mes == 10) || (dia <= 21 && mes == 11)), elemento: 'Agua'},
    {signo: 'Sagitario', fecha: ((dia >= 22 && mes == 11) || (dia <= 21 && mes == 12)), elemento: 'Fuego'},
    {signo: 'Capricornio', fecha: ((dia >= 22 && mes == 12) || (dia <= 19 && mes == 01)), elemento: 'Tierra'},
    {signo: 'Acuario', fecha: ((dia >= 20 && mes == 01) || (dia <= 18 && mes == 02)), elemento: 'Aire'},
    {signo: 'Piscis', fecha: ((dia >= 19 && mes == 02) || (dia <= 20 && mes == 03)), elemento: 'Agua'},
];

const nombreUsuario = document.getElementById('nombre');
      selectDia = document.querySelector('#dia');
      selectMes = document.querySelector('#mes');
      btnCalcular = document.getElementById('btnCalcular');
      btnBorrar = document.getElementById('btnBorrar');
      dias = ['01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31']
      meses = ['01','02','03','04','05','06','07','08','09','10','11','12']

function cargarSelect(array, select) {
    array.forEach(element => {
        let option = `<option>${element}</option>`
        select.innerHTML += option;
    })
}
    
cargarSelect(dias, selectDia);
cargarSelect(meses, selectMes);

btnCalcular.addEventListener('click', (event) => {
    event.preventDefault();

    const datos = {
        nombre: nombreUsuario.value,
        dia: selectDia.value,
        mes: selectMes.value,
    }; 
    console.log(datos);
  
    const signoTrue = signos.filter(function(datos) {
        return signos.fecha == datos.dia && signos.fecha == datos.mes;
    }); 
    console.log(signoTrue); 

    //Comento esta parte hasta resolver el filtrado, una vez que eso funcione esto tambien deberia funcionar correctamente.

    /* const encontrarSigno = signoTrue.find((signo) => signo.fecha == true);
    console.log(encontrarSigno);
 
    let signo = encontrarSigno.signo;
    let elemento = encontrarSigno.elemento; */

    swal({
        title: "Bienvenido/a " + nombreUsuario.value +"!",
        text: "Tu signo es ",
        icon: "success",
        button: "OK",
      });
})

/* 
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

    swal("Datos borrados");
}); */