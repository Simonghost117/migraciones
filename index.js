const express = require('express');
const dotenv = require('dotenv');
const publicacionesRoute = require('./routes/publicacionRouter')

dotenv.config();
const App = express();
const port = process.env.PORT;

App.use(express.json());
App.use('/api', publicacionesRoute);
const startDB = async () => {
    try {
     
      App.listen(port, () => {
        console.log(`El servidor se está ejecutando en el puerto ${port}`);
      });
    } catch (e) {
      console.error('Error al conectar la base de datos:', e.message);
      process.exit(1); // Finaliza la ejecución si falla la conexión
    }
  };
  
  startDB();






























