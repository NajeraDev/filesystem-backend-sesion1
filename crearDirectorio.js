const fs = require('fs')

fs.mkdir('Archivos', (error)=>{
    if (error){
        console.error(error.message)
        return    
    }
    console.log("Directorio creado")
})