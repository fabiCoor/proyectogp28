const servidorWeb = require("express");
const app = servidorWeb();
const puerto = 3001;

app.get('/', (req, res) => { 
    res.send("Estas consultando la raiz de la API");
});

app.get('/persona', (req, res) => { 
    let Persona = {
        "nombre": "juan carlos",
        "apellido": "Zambrano",
        "estadoCivil": "casado",
        "ntieneHijos": true
    }

    res.send(Persona);
});

app.listen(puerto, ()=> {
    console.log("el servidor esta en ejecucion en el puerto" + puerto);
});