const servidor = require ('./src/app')

servidor.listen(process.env.PORT, () => {
    console.log(`Microservicio de clientes funcionando en el puerto ${process.env.PORT}`);
})