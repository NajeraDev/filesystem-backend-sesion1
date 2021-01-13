const fs = require('fs')

fs.unlink('creado.txt', (error,data) => {
    if(error){
        console.error('error: ',error)
        return
    }
    console.log('Archivo removido exitosamente')
})