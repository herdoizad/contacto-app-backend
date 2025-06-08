const express = require('express');
const router = express.Router();

let contactos = []; // Simulación de base de datos en memoria

router.post('/', (req, res) => {
  const { nombre, correo, mensaje } = req.body;

  if (!nombre || !correo || !mensaje) {
    return res.status(400).json({ ok: false, mensaje: 'Todos los campos son requeridos' });
  }

  const nuevoContacto = {
    id: mensajes.length + 1,
    nombre,
    correo,
    mensaje,
    fecha: new Date()
  };

  mensajes.push(nuevoContacto);
  res.status(201).json({ ok: true, mensaje: 'Mensaje guardado correctamente' });
});

router.get('/', (req, res) => {
  res.json(contactos);
});

module.exports = router;
