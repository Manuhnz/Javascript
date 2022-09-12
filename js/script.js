const nombreUsuario = document.getElementById('nombre');
selectDia = document.querySelector('#dia');
selectMes = document.querySelector('#mes');
btnCalcular = document.getElementById('btnCalcular');
btnBorrar = document.getElementById('btnBorrar');
dias = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'];
meses = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
contenedor = document.querySelector('#contenedorTarjetas');
container = document.querySelector('#cardContainer');

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

    localStorage.setItem('Nombre', nombreUsuario.value);
    localStorage.setItem('Dia de nacimiento', selectDia.value);
    localStorage.setItem('Mes de nacimiento', selectMes.value);
    sessionStorage.setItem('Nombre', nombreUsuario.value);
    sessionStorage.setItem('Dia de nacimiento', selectDia.value);
    sessionStorage.setItem('Mes de nacimiento', selectMes.value);

    const signos = [{
            signo: 'Aries',
            fecha: ((datos.dia >= 21 && datos.mes == 3) || (datos.dia <= 19 && datos.mes == 4))
        },
        {
            signo: 'Tauro',
            fecha: ((datos.dia >= 20 && datos.mes == 4) || (datos.dia <= 20 && datos.mes == 5))
        },
        {
            signo: 'Géminis',
            fecha: ((datos.dia >= 21 && datos.mes == 5) || (datos.dia <= 20 && datos.mes == 6))
        },
        {
            signo: 'Cáncer',
            fecha: ((datos.dia >= 21 && datos.mes == 6) || (datos.dia <= 22 && datos.mes == 7))
        },
        {
            signo: 'Leo',
            fecha: ((datos.dia >= 23 && datos.mes == 7) || (datos.dia <= 22 && datos.mes == 8))
        },
        {
            signo: 'Virgo',
            fecha: ((datos.dia >= 23 && datos.mes == 8) || (datos.dia <= 22 && datos.mes == 9))
        },
        {
            signo: 'Libra',
            fecha: ((datos.dia >= 23 && datos.mes == 9) || (datos.dia <= 22 && datos.mes == 10))
        },
        {
            signo: 'Escorpio',
            fecha: ((datos.dia >= 23 && datos.mes == 10) || (datos.dia <= 21 && datos.mes == 11))
        },
        {
            signo: 'Sagitario',
            fecha: ((datos.dia >= 22 && datos.mes == 11) || (datos.dia <= 21 && datos.mes == 12))
        },
        {
            signo: 'Capricornio',
            fecha: ((datos.dia >= 22 && datos.mes == 12) || (datos.dia <= 19 && datos.mes == 1))
        },
        {
            signo: 'Acuario',
            fecha: ((datos.dia >= 20 && datos.mes == 1) || (datos.dia <= 18 && datos.mes == 2))
        },
        {
            signo: 'Piscis',
            fecha: ((datos.dia >= 19 && datos.mes == 2) || (datos.dia <= 20 && datos.mes == 3))
        },
    ];

    const filtrarSignos = signos.filter((datos, signos) => signos.fecha === datos.dia && signos.fecha === datos.mes);
    const encontrarSigno = filtrarSignos.find((signo) => signo.fecha == true);

    function signoFilter(array) {
        let signo = encontrarSigno.signo;
        if (!signo) {
            return array;
        } else {
            return array.filter((e) => signo === e.signo);
        }
    };

    function createHTML(array) {
        contenedor.innerHTML = ''
        container.innerHTML = ''
        array.forEach((e) => {
            const card = `
                <div class="alert alert-light alert-dismissible fade show position-absolute top-50 start-50 translate-middle" role="alert">
                    <div class="card mb-3 border-0 lh-lg position-absolute top-50 start-50 translate-middle">
                    <div class="row g-0">
                    <div class="col-md-4 imgContainer">
                        <img src="${e.image}" class="img-fluid img" alt="${e.signo}">
                    </div>
                    <div class="textContainer col-md-8">
                        <div class="card-body text-secondary">
                        <h1 class="card-title">Bienvenida/o ${nombreUsuario.value}</h1>
                        <h6 class="card-title">Tu signo es ${e.signo} y su elemento es ${e.elemento}</h6>
                        <h6 class="card-text"></h6>
                        <p class="card-text info"> ${e.caracteristicas}</p>
                        </div>
                    </div>
                    </div>
                    </div>
                <button type="button" class="btn-close btn btn-outline-warning bg-warning p-2 m-3" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>`
            container.innerHTML += card
        })
    };

    fetch('js/data.json')
        .then((response) => response.json())
        .then((data) => {
            createHTML(signoFilter(data))
        });
});

btnBorrar.addEventListener('click', () => {
    sessionStorage.clear();
    localStorage.clear();
    document.getElementById('form').reset();
    swal("Datos borrados con éxito!", {
        buttons: false,
        timer: 2000,
        icon: "success",
    });
});