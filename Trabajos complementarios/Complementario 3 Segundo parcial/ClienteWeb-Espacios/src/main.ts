/* IMPORTAMOS LAS DEPENDENCIAS QUE VAYAMOS A UTILIZAR */
import './style.css'
import swal from 'sweetalert';
/*Importamos las funciones que creamos en el archivo de espacios.ts de la carpeta controllers */
import {consul, guarda} from './controllers/espacios'

const app = document.querySelector<HTMLDivElement>('#app')!

/*Insertamos el HTML del sitio */
app.innerHTML += `
<h1>Espacios</h1>
<label for='id' >ID </label><input readonly="readonly" type="text" id='id' /><br><br>
<label for='ESPACIO_ID' >Espacio ID </label><input id='ESPACIO_ID' /><br><br>
<label for='ESPACIO_ESTADO' >Espacio Estado </label><input id='ESPACIO_ESTADO' /><br><br>
<label for='ESTABLECIMIENTO_NOMBRE' >Establecimiento Nombre </label><input id='ESTABLECIMIENTO_NOMBRE' /><br><br>
<label for='Estado' >Estado </label><input readonly="readonly" id='Estado'/><br><br>

<button id="guardar">Guardar/Actualizar</button>
<button id="nuevo">Limpiar</button>
<button id="consultar">Consultar</button><br><br>
<div id="cuerpo"/>
`
/*------------------------------------------------------------------------------------------------ */

/*------------------------------ INGRESO DE DATOS -----------------------------------------------*/
const id = document.querySelector<HTMLInputElement>('#id')!
const espacio_id = document.querySelector<HTMLInputElement>('#ESPACIO_ID')!
const espacio_estado = document.querySelector<HTMLInputElement>('#ESPACIO_ESTADO')!
const establecimiento_nombre = document.querySelector<HTMLInputElement>('#ESTABLECIMIENTO_NOMBRE')!
const estado = document.querySelector<HTMLInputElement>('#Estado')!

/*-------------------------------- BOTONES DE CRUD ----------------------------------------------*/
const nuevo = document.querySelector<HTMLButtonElement>('#nuevo')!
const guardar = document.querySelector<HTMLInputElement>('#guardar')!
const consultar = document.querySelector<HTMLButtonElement>('#consultar')!

/*--------------------------------- CUERPO DEL SITIO ------------------------------------------- */
const cuerpo = document.querySelector<HTMLDivElement>('#cuerpo')!



/*Creamos los eventos de los botones agregados. (nuevo, consultar, guardar)*/

nuevo.addEventListener('click', () =>{
  /*-------------------------- LIMPIAMOS LOS CAMPOS-------------------------- */
  id.value=""
  espacio_id.value=""
  espacio_estado.value=""
  establecimiento_nombre.value=""
  estado.value=""
  swal("Limpieza correcta", "Se han limpiado los campos del formulario", "success");
})

consultar.addEventListener('click', async ()=>{
/*Añadimos las funciones importadas en la línea 5 de este código*/
consul();
})


guardar.addEventListener('click', async ()=>{
  guarda();
})

/*---------------------------------------------------------------------------*/

/*-------------------- EXPORTAMOS LOS CAMPOS A UTILIZAR ---------------------*/
export {id, espacio_id, espacio_estado, establecimiento_nombre, estado, cuerpo}