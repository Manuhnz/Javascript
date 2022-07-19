function entrada () {
    nombre = prompt('Ingresá tu nombre')
    alert('Bienvendio/a ' + nombre + '! Vamos a calcular tu signo del Zodiaco')
    
    dia = parseInt(prompt('Ingresá el día de tu nacimiento'));
    mes = parseInt(prompt('Ingresá el mes de tu nacimiento'));   
}

function procesamiento (valor) {
    if ((dia>=21&&mes==3) || (dia<=19&&mes==4)) {
        alert('Tu signo del Zodiaco es Aries');
    }   
    else if ((dia>=20&&mes==4) || (dia<=20&&mes==5)) {
        alert('Tu signo del Zodiaco es Tauro');
    } 
    else if ((dia>=21&&mes==5) || (dia<=20&&mes==6)) {
        alert('Tu signo del Zodiaco es Gemins');
    }   
    else if ((dia>=21&&mes==6) || (dia<=22&&mes==7)) {
        alert('Tu signo del Zodiaco es Cáncer');
    } 
    else if ((dia>=23&&mes==7) || (dia<=22&&mes==8)) {
        alert('Tu signo del Zodiaco es Leo');
    } 
    else if ((dia>=23&&mes==8) || (dia<=22&&mes==9)) {
        alert('Tu signo del Zodiaco es Virgo');
    } 
    else if ((dia>=23&&mes==9) || (dia<=22&&mes==10)) {
        alert('Tu signo del Zodiaco es Libra');
    } 
    else if ((dia>=23&&mes==10) || (dia<=21&&mes==11)) {
        alert('Tu signo del Zodiaco es Escorpio');
    } 
    else if ((dia>=22&&mes==11) || (dia<=21&&mes==12)) {
        alert('Tu signo del Zodiaco es Sagitario');
    } 
    else if ((dia>=22&&mes==12) || (dia<=19&&mes==1)) {
        alert('Tu signo del Zodiaco es Capricornio');
    } 
    else if ((dia>=20&&mes==1) || (dia<=18&&mes==2)) {
        alert('Tu signo del Zodiaco es Acuario');
    } 
    else if ((dia>=19&&mes==2) || (dia<=20&&mes==3)) {
        alert('Tu signo del Zodiaco es Piscis');
    } 
    else {
        alert('Error');
    }
}

function salida (valor) {
    alert('Gracias por participar')
} 

salida(procesamiento(entrada()));