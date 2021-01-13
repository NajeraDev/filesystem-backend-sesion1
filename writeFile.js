const fs = require('fs')

fs.writeFile('creado.txt','hola desde node :D', 'utf8', (error) => {
    if(error){
        console.error('error: ',error)
        return
    }
    console.log('Archivo escrito exitosamente')
})