/*Declaracion de las principales variables buscadas por su id*/
var nombre = document.getElementById('nombre');
var formulario = document.getElementById('formulario');


/* Evento  al presionar el 'Enviar'*/
formulario.addEventListener('submit', function(enviar){//Esta linea copiala tal cual, solo cambiando "formulario"
  //Que es la variable que almacena el id que tiene el <form>
  ImprimirDatosEnConsola();
  OcultarFormulario();
  OcultarTitulo();
  MostarMensaje();
  ImprimirNombre();
  enviar.preventDefault();
});


function MostarMensaje() {
  var mensaje = document.getElementById('mensaje');//id del div del mensaje oculto
  mensaje.classList.remove('mensaje-oculto');//Esto elimina la clase que mantiene oculta el mensaje
  mensaje.classList.add('mensaje-visible');//Y le asigna una nueva clase que si muestra el mensaje
}

function ImprimirNombre() {
  var saludo = document.getElementById('saludo');//id donde esta se escribe el nombre del usuario
  saludo.innerHTML = 'Hola ' + nombre.value + '!';//Sobreescribe todo el texto donde figura el saludo.
}

function OcultarFormulario() {
  formulario.style.width = '0';//Modifica el css para que el tamaño del div que contiene el formulario sea 0
  formulario.style.height = '0';
  formulario.style.overflow = 'hidden';//Todo lo que sobresale del div, cuyo tamaño es 0, queda oculto.
}

function OcultarTitulo() {//Esto solo oculta otro div
  var titulo = document.getElementById('titulo');
  titulo.style.width = '0';
  titulo.style.height = '0';
  titulo.style.overflow = 'hidden';
}


function ImprimirDatosEnConsola(){//Ignora esto, lo que ahce es imprimir todos los datos a la consola
  var telefono = document.getElementById('telefono');
  var invitados = document.getElementById('invitados');
  var comentario = document.getElementById('comentario');
  var mail = document.getElementById('mail');
  console.log('Datos enviados');
  console.log('Nombre: ' + nombre.value);
  console.log('Email: ' + mail.value);
  console.log('Telefono: ' + telefono.value);
  console.log('Invitados: ' + invitados.value);
  console.log('Comentario: ' + comentario.value);
}