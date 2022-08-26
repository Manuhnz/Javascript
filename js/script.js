const nombreUsuario = document.getElementById('nombre');
      selectDia = document.querySelector('#dia');
      selectMes = document.querySelector('#mes');
      btnCalcular = document.getElementById('btnCalcular');
      btnBorrar = document.getElementById('btnBorrar');
      input = document.querySelector('#inputBox');
      dias = ['01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31'];
      meses = ['01','02','03','04','05','06','07','08','09','10','11','12'];

function cargarSelect(array, select) {
    array.forEach(element => {
        let option = `<option>${element}</option>`
        select.innerHTML += option;
    })
};
    
cargarSelect(dias, selectDia);
cargarSelect(meses, selectMes);

btnCalcular.addEventListener('click', (event) => {
    event.preventDefault();

    const datos = {
        nombre: nombreUsuario.value,
        dia: parseInt(selectDia.value),
        mes: parseInt(selectMes.value),
    }; 
  
    const signos = [
        {signo: 'Aries', fecha: ((datos.dia >= 21 && datos.mes == 3) || (datos.dia <= 19 && datos.mes == 4)), elemento: 'Fuego'}, 
        {signo: 'Tauro', fecha: ((datos.dia >= 20 && datos.mes == 4) || (datos.dia <= 20 && datos.mes == 5)), elemento: 'Tierra'},
        {signo: 'Géminis', fecha: ((datos.dia >= 21 && datos.mes == 5) || (datos.dia <= 20 && datos.mes == 6)), elemento: 'Aire'},
        {signo: 'Cáncer', fecha: ((datos.dia >= 21 && datos.mes == 6) || (datos.dia <= 22 && datos.mes == 7)), elemento: 'Agua'},
        {signo: 'Leo', fecha: ((datos.dia >= 23 && datos.mes == 7) || (datos.dia <= 22 && datos.mes == 8)), elemento: 'Fuego'},
        {signo: 'Virgo', fecha: ((datos.dia >= 23 && datos.mes == 8) || (datos.dia <= 22 && datos.mes == 9)), elemento: 'Tierra'},
        {signo: 'Libra', fecha: ((datos.dia >= 23 && datos.mes == 9) || (datos.dia <= 22 && datos.mes == 10)), elemento: 'Aire'},
        {signo: 'Escorpio', fecha: ((datos.dia >= 23 && datos.mes == 10) || (datos.dia <= 21 && datos.mes == 11)), elemento: 'Agua'},
        {signo: 'Sagitario', fecha: ((datos.dia >= 22 && datos.mes == 11) || (datos.dia <= 21 && datos.mes == 12)), elemento: 'Fuego'},
        {signo: 'Capricornio', fecha: ((datos.dia >= 22 && datos.mes == 12) || (datos.dia <= 19 && datos.mes == 1)), elemento: 'Tierra'},
        {signo: 'Acuario', fecha: ((datos.dia >= 20 && datos.mes == 1) || (datos.dia <= 18 && datos.mes == 2)), elemento: 'Aire'},
        {signo: 'Piscis', fecha: ((datos.dia >= 19 && datos.mes == 2) || (datos.dia <= 20 && datos.mes == 3)), elemento: 'Agua'},
    ];
    
    let encontrar = signos.filter((datos,signos) => signos.fecha === datos.dia && signos.fecha === datos.mes);
       
    const encontrarSigno = encontrar.find((signo) => signo.fecha == true);
 
    let signo = encontrarSigno.signo;
    let elemento = encontrarSigno.elemento;

    swal({
        title: "Bienvenido/a " + nombreUsuario.value +"!",
        text: "Tu signo es " + encontrarSigno.signo + '. Y su elemento es ' + encontrarSigno.elemento,
        icon: "success",
        buttons: ["OK", "Leer mas"],
      });

      localStorage.setItem('Nombre',nombreUsuario.value);
      localStorage.setItem('Dia de nacimiento',selectDia.value);
      localStorage.setItem('Mes de nacimiento',selectMes.value);
      sessionStorage.setItem('Nombre',nombreUsuario.value);
      sessionStorage.setItem('Dia de nacimiento',selectDia.value);
      sessionStorage.setItem('Mes de nacimiento',selectMes.value);
});

btnBorrar.addEventListener('click',()=>{
    sessionStorage.clear();
    localStorage.clear();
    document.getElementById('form').reset();
    swal("Datos borrados con éxito!", {
        buttons: false,
        timer: 2000,
        icon: "success",
      });
});

fetch('https://jsonplaceholder.typicode.com/posts')
.then((Response)=>Response.json())
.then((data)=>{
    console.log(data);
})
