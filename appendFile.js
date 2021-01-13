const fs = require('fs')

fs.appendFile('creado.txt','esta es es append del archivo','utf8', (error) => {
    if(error){
        console.error('error: ',error)
        return
    }
    console.log('Archivo appendado exitosamente')
})