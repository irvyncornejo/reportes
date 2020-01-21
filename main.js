document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems);
  });
function cantidad(){
    numero = document.getElementById('cantidad').value; 
    aniadir(numero);
}

function aniadir(numero){
    let i;
    document.getElementById('formulario').innerHTML = '';
    for (i = 0; i < numero; i++) {
        // Se ejecuta n veces que el usuario desea
        document.getElementById('formulario').innerHTML += `
        <input id="campo${i}" class="input-field" type="text" 
        placeholder="Nombre del alumno">
          `
    }
}

function crearTarjeta(datos){
    document.getElementById('tarjetas').innerHTML = '';
    datos.forEach(element => {
        document.getElementById('tarjetas').innerHTML += `
            <h1 class="diferente"> ${element}</h1>
        `
    });
}

function getData(){
    let i = 0;
    let datos = [];
    const data = document.querySelector('input').value;
        for (i = 0; i < data ; i++){
            let dato = document.getElementById(`campo${i}`).value;
            datos.push(dato);   
        } 
    console.log(datos);
    crearTarjeta(datos);
}

function limpiarCampos(){
    document.getElementById('formulario').innerHTML = '';
    document.getElementById('tarjetas').innerHTML = '';
    let cantidad = document.getElementById('cantidad');
    cantidad.selectedIndex = 0;
    M.FormSelect.init(cantidad);
}