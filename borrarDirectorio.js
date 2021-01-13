const fs = require('fs')

fs.rmdir("./Archivos",(error)=>{
    if(error){
        console.error("Error: ",error)
        return
    }
    console.log("Directorio eliminado")
})