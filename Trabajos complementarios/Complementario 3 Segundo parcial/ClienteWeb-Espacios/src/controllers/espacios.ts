import { IEspacios, IResEspacios } from "../interfaces/IEspacios";
import axios from 'axios';
import swal from 'sweetalert';
import {id, espacio_id, espacio_estado, establecimiento_nombre, estado, cuerpo} from '../main';
const httpAxios = axios.create({
    baseURL: `http://localhost:2500/v1/sextoa/api/`
  });

const consul = async ()=>{
    /* ---------------------- CONSULTA GENERAL ---------------------- */
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
    swal("Consulta correcta", "Se han listado todos los datos disponibles\n Recuerda que dando click en el ID del espacio puedes seleccionar cuál quieres editar así como también en el botón a su derecha de Eliminar podrás borrarlo", "success");
    cuerpo.innerHTML=""
    cuerpo.appendChild(tabla)
    
    /* ************************ FIN CONSULTA GENERAL ******************** */
  
    /* ---------------------- CONSULTA ESPECIFICA ---------------------- */

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
  
    /************************ FIN CONSULTA ESPECIFICA *********************/
  
    /* ------------------------ ELIMINAR ------------------------ */

    document.querySelectorAll('.botoneliminar').forEach( (ele2 : Element )  =>{
  
      ele2.addEventListener('click',async ()=>
     { 
       const idespacio = (ele2 as HTMLButtonElement ).value;
       console.log(idespacio);
       const {data} = await httpAxios.delete<IEspacios>(`espacios/${idespacio}`)
       const eliminado = data
       console.log(data);
       console.log(`Espacio eliminado => ${eliminado.ESPACIO_ID}`);
       consul();
    /* ********************** FIN ELIMINAR ************************** */
    })
    } )
  };

const guarda = async () => {
  
  const asignarValores=()=>{
    const data:IEspacios  = {
      ESPACIO_ID: Number (espacio_id.value),
      ESPACIO_ESTADO:espacio_estado.value,
      ESTABLECIMIENTO_NOMBRE:establecimiento_nombre.value,
    }
    return data;
  }
   const data =  asignarValores()
   /* ----------------------------- MODIFICACION DE DATOS ------------------------------------- */
   if ( id.value.trim().length>0 )
   {
      const resespacios:IEspacios = await (await httpAxios.put<IEspacios>(`espacios/${espacio_id.value}`,data )).data
      console.log(`El espacioo ${resespacios.ESPACIO_ID} fue modificado con éxito`);
      consul();
      return;
      
   }
   /* ***************************** FIN DE MODIFICAR DATOS ***********************************/

   /*--------------------------------- CREAR DATOS --------------------------------------*/
   if(id.value.trim().length===0){
    if ( espacio_id.value.length === 0 ){
      console.log('El espacio se encuentra vacío');
      swal("Espacio Vacío", "El espacio se encuentra vacío, asegúrate de completar todos los campos", "info");
     }
     else{
      try {
        const {data} = await httpAxios.get<IEspacios>(`espacios/${espacio_id.value}`);
        if (espacio_id.value === data.ESPACIO_ID.toString() ){
        console.log('El espacio ya existe');
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
              consul();
            } else {
              swal("El dato sigue eliminado, procura ingresar uno distinto");
            }
          });
         }
      } catch (error) {
        try {
          const resespacios:IEspacios =  await (await httpAxios.post<IEspacios>(`espacios`,data)).data
          console.log(`El espacio ${resespacios.ESPACIO_ID} fue insertado con éxito`);
          consul();
         } catch (error) {
            if (axios.isAxiosError(error))
            {
              console.log(`Error en axios`);
            }
            console.log(error);    
         } 
      }
    }
    /* ************************* FIN CREAR ************************ */
   }
};

export {consul, guarda}