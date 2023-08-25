const mongoose=require('mongoose')

const dbConnect=(app)=>{
 mongoose
    .connect(
        `mongodb+srv://jhonlook007:${process.env.MONGO_DB_PASS}@development.ylu9mau.mongodb.net/?retryWrites=true&w=majority`
    )
    .then((result)=>{
        const PORT=process.env.PORT
        app.listen(PORT,() => {
            console.log(`Servidor escuchando en el puerto ${PORT}`)
        })
        console.log('Conexion exitosa a la BBDD')
    })
    .catch((err)=>console.log(err))   
}


module.exports=dbConnect