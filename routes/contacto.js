const express = require('express');
const router = express.Router();

let contactos = [
  { id: 1, nombre: 'Administrador', correo: 'admin@iti.edu.ec', mensaje: 'Examenes Primer Parcial', fecha: new Date() },
]; // Simulación de base de datos en memoria

router.post('/', (req, res) => {
  const { nombre, correo, mensaje } = req.body;

  if (!nombre || !correo || !mensaje) {
    return res.status(400).json({ ok: false, mensaje: 'Todos los campos son requeridos' });
  }

  const nuevoContacto = {
    id: contactos.length + 1,
    nombre,
    correo,
    mensaje,
    fecha: new Date()
  };

  contactos.push(nuevoContacto);
  //res.status(201).json({ ok: true, mensaje: 'Mensaje guardado correctamente' });
  res.status(201).json(nuevoContacto);
});

router.get('/', (req, res) => {
  res.json(contactos);
});

module.exports = router;
