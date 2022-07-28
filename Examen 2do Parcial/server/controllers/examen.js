let datos = [];

function createPrestamo(req, res) {
    const {body } = req;

    const prestamo_save = datos.push(body);

    if (prestamo_save) {
        res.status(200).send({
            message: "Se registró el exonerado correctamente",
            data: body
        });
    } else {
        res.status(400).send({
            message: "No se registró el exonerado"
        });
    };

};

function readPrestamo(req, res) {

    res.status(200).send({ data: datos });

};

function readPrestamoIdSoli(req, res) {
    const { iduser } = req.params;
    console.log(iduser);
    let solicitud = req.body;
    console.log(solicitud);

    solicitud = datos.filter(i => i.iduser === iduser);
    solicitud2 = datos.filter(e => e.estado === 2);
    if (solicitud.length === 0 || solicitud2.length === 0) {
        res.status(400).send({
            message: `No se encontró el solicitante con el id de usuario: ${iduser} o su solicitud no está aceptada`
        });
    } else {
        res.status(200).send({
            message: `Solicitante con id de usuario ${iduser} encontrado:`,
            data: solicitud2
        });
    };
};


function updatePrestamo(req, res) {
    const { iduser } = req.params
    const { estado } = req.body;

    if (datos.filter(i => i.iduser === iduser).length === 0) {
        return res.status(400).send({
            message: `No se encuentra el solicitante con el id de usuario: ${iduser}`
        });
    };

    let solicitud = datos.filter(i => i.iduser === iduser)[0];

    if (estado == 4) {
        if (solicitud.estado == 1 || solicitud.estado == 3) {

            return res.status(400).send({
                message: `El usuario con el id user ${iduser} no puede ser Informado porque su estado es rechazado o pendiente`
            })

        } else {
            solicitud.estado = estado;
        }
    } else {
        solicitud.estado = estado;
    }

    res.status(200).send({
        message: "Solicitud modificada con éxito",
        data: { estado }
    });


};

function deletePrestamo(req, res) {
    const iduser = req.params['iduser'];

    datos = datos.filter(i => i.iduser !== iduser);

    res.status(200).send({
        message: `El solicitante con id de usuario ${iduser} fué eliminado con éxito`
    });

};

module.exports = {
    createPrestamo,
    readPrestamo,
    readPrestamoIdSoli,
    updatePrestamo,
    deletePrestamo
}