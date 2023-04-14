const express = require('express');
const app = express();
const port = 3000;

// Configuración de la vista EJS
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// Importar las rutas de los archivos
const medicoRoutes = require('./routes/medico');
//const citaRoutes = require('./routes/cita');
//const pacienteRoutes = require('./routes/paciente');
//const consultorioRoutes = require('./routes/consultorio');

// Montar las rutas en su ruta base correspondiente

app.use(medicoRoutes);
//app.use(citaRoutes);
//app.use(pacienteRoutes);
//app.use(consultorioRoutes);



// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor iniciado en http://localhost:${port}`);
});

  



