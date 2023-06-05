
let valorHora;
let empleados;
let horas;
let dias;
let sueldoPorDia;
let sueldoMensual;
let sueldoEmpleado;
let repetir;

const calculoSueldoDiario = function (personas, tiempo, precioHora){
    return personas*tiempo*precioHora;
    }
const calculoSueldoMensual = function(sueldoDiario, totalDias){
    return sueldoDiario*totalDias;
    }
const calculoSueldoEmpleado = function (sueldoTotal,headcount){
    return sueldoTotal/headcount;
}

alert('Calcule el sueldo a abonar del total de sus empleados.');

do{
    empleados = parseInt(prompt('Ingrese la cantidad de empleados en su empresa'));
    horas = parseFloat(prompt('Ingrese cantidad de horas trabajadas'));
    valorHora = parseFloat(prompt('Ingrese el monto a abonar por hora trabajada'));
    sueldoPorDia = calculoSueldoDiario(empleados,horas,valorHora);
    console.log('Se abonarán $' + sueldoPorDia + ' por cada día trabajado.');
    dias = parseInt(prompt('Ingrese la cantidad de días trabajados'));
    sueldoMensual = calculoSueldoMensual(sueldoPorDia, dias);
    sueldoEmpleado = calculoSueldoEmpleado(sueldoMensual,empleados);
    console.log('El sueldo a abonar por empleado es de $' + sueldoEmpleado);
    repetir = parseInt(prompt('El sueldo a abonar por ' + empleados + ' empleados que trabajaron ' + dias + ' dias es de $' + sueldoMensual + '.\n Desea realizar otra liquidación de sueldo? Presione "1" para continuar, "2" para terminar.'));
    }
        while(repetir == 1); 