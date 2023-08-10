const express = require('express');
const router = express.Router();
const recadosData = require('../data/recados.json');

// Rota para listar todos os recados
router.get('/', (req, res) => {
  res.json(recadosData);
});

module.exports = router;