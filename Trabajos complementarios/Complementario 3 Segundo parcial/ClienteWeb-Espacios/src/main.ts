import './style.css'
import axios from 'axios';
import swal from 'sweetalert';
import { IEspacios, IResEspacios } from '../src/interfaces/IEspacios';
const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML += `<h1>Espacios</h1>`

const httpAxios = axios.create({
  baseURL: `http://localhost:2500/v1/sextoa/api/`
});

const etiqueta = document.createElement("label");
etiqueta.textContent = `ID`;

const input = document.createElement("input");
input.id = "id";

etiqueta.htmlFor="id";

app.appendChild(etiqueta);
app.appendChild(input);


app.innerHTML += `
<br><br><label for='ESPACIO_ID' >Espacio ID </label><input id='ESPACIO_ID' /><br><br>
<label for='ESPACIO_ESTADO' >Espacio Estado </label><input id='ESPACIO_ESTADO' /><br><br>
<label for='ESTABLECIMIENTO_NOMBRE' >Establecimiento Nombre </label><input id='ESTABLECIMIENTO_NOMBRE' /><br><br>
<label for='Estado' >Estado </label><input id='Estado'/><br><br>

<button id="guardar">Guardar</button>
<button id="nuevo">Nuevo</button>
<button id="consultar">Consultar</button><br><br>
<div id="cuerpo"/>
`

const id = document.querySelector<HTMLInputElement>('#id')!
const espacio_id = document.querySelector<HTMLInputElement>('#ESPACIO_ID')!
const espacio_estado = document.querySelector<HTMLInputElement>('#ESPACIO_ESTADO')!
const establecimiento_nombre = document.querySelector<HTMLInputElement>('#ESTABLECIMIENTO_NOMBRE')!
const estado = document.querySelector<HTMLInputElement>('#Estado')!

const nuevo = document.querySelector<HTMLButtonElement>('#nuevo')!
const guardar = document.querySelector<HTMLInputElement>('#guardar')!
const consultar = document.querySelector<HTMLButtonElement>('#consultar')!

const cuerpo = document.querySelector<HTMLDivElement>('#cuerpo')!

nuevo.addEventListener('click', () =>{
  id.value=""
  espacio_id.value=""
  espacio_estado.value=""
  establecimiento_nombre.value=""
  estado.value=""
})

consultar.addEventListener('click', async ()=>{
  const resespacios:IResEspacios = await (await httpAxios.get<IResEspacios>('espacios')).data

  const tabla =  document.createElement('table');
    tabla.id="tabla"
    tabla.border="1"

    tabla.style.marginTop = "50px";
    tabla.style.marginLeft = "33%";
    tabla.style.alignContent = "center";
    tabla.style.width = "80 %";


  console.log(resespacios);
  const { espacios } = resespacios
  console.log(espacios);
 
  const row2 = tabla.insertRow();
  const xcelda = row2.insertCell();
  xcelda.innerHTML = `<p>ESPACIO ID</p>`;
  const xcelda2= row2.insertCell();
  xcelda2.innerHTML=`<p>ESPACIO ESTADO</p>`;
  const xcelda3= row2.insertCell();
  xcelda3.innerHTML=`<p>ESTABLECIMIENTO NOMBRE</p>`;

  for ( const espacio of espacios )
  {
    const row = tabla.insertRow()
    const celda = row.insertCell()
    celda.innerHTML = ` <button class="boton" value='${espacio.ESPACIO_ID}'>${espacio.ESPACIO_ID} </button>`;
    const celda2= row.insertCell()
    celda2.innerHTML=`${espacio.ESPACIO_ESTADO}`
    const celda3= row.insertCell();
    celda3.innerHTML=`${espacio.ESTABLECIMIENTO_NOMBRE}`;
    const celda4= row.insertCell();
    celda4.innerHTML=`<button class="botoneliminar" value='${espacio.ESPACIO_ID}'>ELIMINAR </button>`;
  }
  
  cuerpo.innerHTML=""
  cuerpo.appendChild(tabla)
  
  document.querySelectorAll('.boton').forEach( (ele : Element )  =>{

     ele.addEventListener('click',async ()=>
    {
      const idespacio = (ele as HTMLButtonElement).value;
      const {data} = await httpAxios.get<IEspacios>(`espacios/${idespacio}`);
      console.log(data)
      espacio_estado.value = data.ESPACIO_ESTADO;
      espacio_id.value = data.ESPACIO_ID.toString();
      establecimiento_nombre.value = data.ESTABLECIMIENTO_NOMBRE;
      estado.value = data.Estado!.toString();
      id.value = data._id!
    })
  
  })

  document.querySelectorAll('.botoneliminar').forEach( (ele2 : Element )  =>{

    ele2.addEventListener('click',async ()=>
   { 
     const idespacio = (ele2 as HTMLButtonElement ).value;
     console.log(idespacio);
     const {data} = await httpAxios.delete<IEspacios>(`espacios/${idespacio}`)
     const eliminado = data
     console.log(data);
     console.log(`Espacio eliminado => ${eliminado.ESPACIO_ID}`);
  
   })
  
  })

})

const asignarValores=()=>{
  const data:IEspacios  = {
    ESPACIO_ID: Number (espacio_id.value),
    ESPACIO_ESTADO:espacio_estado.value,
    ESTABLECIMIENTO_NOMBRE:establecimiento_nombre.value,
  }
  return data;
}

guardar.addEventListener('click', async ()=>{
   const data =  asignarValores()
   /* MODIFICACION DE DATOS */
   if ( id.value.trim().length>0 )
   {
      const resespacios:IEspacios = await (await httpAxios.put<IEspacios>(`espacios/${espacio_id.value}`,data )).data
      console.log(`El espacioo ${resespacios.ESPACIO_ID} fue modificado con éxito`);
      return;
   }
   /* FIN DE MODIFICAR DATOS */

   /* CREAR DATOS */
   if(id.value.trim().length===0){
    if ( espacio_id.value.length === 0 ){
      console.log('El espacio se encuentra vacío');
     }
     else{
      try {
        const {data} = await httpAxios.get<IEspacios>(`espacios/${espacio_id.value}`);
        if (espacio_id.value === data.ESPACIO_ID.toString() ){
          console.log('El espacio ya existe, intente insertar uno distinto');
          swal({
            title: "Espacio ID ya existe",
            text: "El ID ingresado ya existe, desea reactivar el ID que se ingresó?",
            icon: "warning",
            buttons: true,
            dangerMode: true, 
          })
          .then(async (willDelete) => {
            if (willDelete) {
              const recovery = espacio_id.value;
              (await httpAxios.put<IEspacios>(`espacios/RecuperarEspacio/${recovery}`))
              swal(`El dato ${recovery} ha sido recuperado, ahora lo podrás visualizar haciendo uso del botón Consultar`, {
                icon: "success",
              });
            } else {
              swal("El dato sigue eliminado, procura ingresar uno distinto");
            }
          });
         }
      } catch (error) {
        try {
          const resespacios:IEspacios =  await (await httpAxios.post<IEspacios>(`espacios`,data)).data
          console.log(`El espacio ${resespacios.ESPACIO_ID} fue insertado con éxito`);
         } catch (error) {
            if (axios.isAxiosError(error))
            {
              console.log(`Error en axios`);
            }
            console.log(error);    
         } 
      }
    }
   }
})