const mongoose = require('mongoose');
const conexion= "mongodb+srv://KelvinMunoz:kpmladm001@cluster0.0tx2p.mongodb.net/AplicacionesWebII?retryWrites=true&w=majority";

( async ()=>{
    const estadodeConexion = await mongoose.connect(conexion);
    const grupo = mongoose.model("grupo", {nombre:String});
    const permiso = mongoose.model("permiso", {nombre:String});
    const usuario =  mongoose.model("usuario", 
    {
         nombre: String,
         idgrupo: { type: mongoose.Types.ObjectId , ref:"grupo" } ,
        permisos:[
            {
                permiso: { type: mongoose.Schema.Types.ObjectId, ref:"permiso" },
                estado: {type:Boolean}
            }
        ]
    } 
    );
    const primergrupo =  new Grupo({nombre:"Administradores"});
    const guardoGrupo = await  primergrupo.save();
    const permisouno = new Permiso({nombre:"Grabar"});
    const guardopermiso1= await  permisouno.save();
    const permisodos = new Permiso({nombre:"Eliminar"});
    const guardopermiso2 = await permisodos.save();


    const usuario1=  new Usuario(
        {
            nombre:"Prueba sexto A",
            idgrupo: guardoGrupo._id,
            permisos: [
                {permiso: guardopermiso1._id , estado:true},
                {permiso: guardopermiso2._id , estado:true},
            ]
        }
        );
    const guardado=  await usuario1.save();
    const res =  await Usuario.find()
    .populate("idgrupo")
    .populate("permisos.permiso");

    console.log(res[4].permisos)
})();