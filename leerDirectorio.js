const fs = require('fs')


console.log("Inicializando lectura")
fs.readdir("./",(error, files)=>{
    if(error){
        console.error('Error: ',error)
        return
    }
    console.log("Finalizando lectura")
    console.log(files)
})