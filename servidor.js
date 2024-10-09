const express = require('express');
const app = express();
const port = 3001;

// Array para almacenar las tareas (simulación de una base de datos)
let todos = [
  { id: 1, tarea: 'Comprar leche' },
  { id: 2, tarea: 'Hacer la cama' },
  { id: 3, tarea: 'Comer' },
  { id: 4, tarea: 'Hacer la tarea' },
  { id: 5, tarea: 'Hacer ejercicio' },
];

// Ruta para obtener todas las tareas
app.get('/todos', (req, res) => {
  res.json(todos);
});

// Inicializacion del servidor
app.listen(port, () => {
    console.log('Servidor ejecutando en http://localhost:${PORT}');
});


app.get('/todoss/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const todo = todos.find(e => e.id === id);
    if (todo) {
        res.json(todo);
    } else {
        res.status(404).send('Tarea no encontrada')
    }
});

app.post('/todos', (req, res) => {
    const nuevaTarea = {
        id: todos.length + 1,
        tarea: req.body.tarea
    };
    todos.push(nuevaTarea);
    res.status(201).json(nuevaTarea);
});


app.put('/todos/:id', (req, res) => {
    const todo = todos.find(e => e.id === id);
    if (todo) {
        todos.tarea = req.body.name;
        res.json(tarea);
    } else {
        res.status(404).send('Tarea no encontrada');
    }
});

app.delete('/tareas/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const tareaIndex = tareas.findIndex(t => t.id === id);
    if (tareaIndex !== -1) {
      tareas.splice(tareaIndex, 1);
      res.json({ message: 'Tarea eliminada' });
    } else {
      res.status(404).json({ message: 'Tarea no encontrada' });
    }
  });