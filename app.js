const express = require('express');
const app = express();
const port = 3000;

app.use(express.json()); // Permite receber JSON nas requisições

const recadosRouter = require('./routes/recados');
app.use('/recados', recadosRouter);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});