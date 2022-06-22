const servidor = require ('./src/app')

servidor.listen(process.env.PORT || 3000, ()=> {
    console.log(`servidor monolítico funcionando en el puerto ${process.env.PORT || 3000}`);
})