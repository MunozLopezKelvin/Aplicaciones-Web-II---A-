const { Schema, model } = require ('mongoose');
const EstablecimientosSchema = Schema({
    ESTABLECIMIENTO_ID:{
        type: Number,
        required: [true,'El ID del establecimiento es obligatiro'],
        unique: true
    },

    ESTABLECIMIENTO_NOMBRE:{
        type: String,
        required: true
    },

    ESTABLECIMIENTO_DESCRIPCION:{
        type: String
    },

    Estado: {
        type : Boolean,
        required: true,
        default: true,
    }

});

module.exports = model('Establecimiento', EstablecimientosSchema)



