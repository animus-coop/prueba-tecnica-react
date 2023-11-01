# Animus Coop. | Prueba Técnica React

## Instrucciones

1. Clonar el repositorio
2. Instalar dependencias: `npm install`
3. Correr el proyecto: `npm run dev`

## Objetivos

### 1. Obtener data de la API

Crear un custom hook que obtenga la lista de ToDos de la API. El hook debe devolver un objeto con 2 elementos: `todos` y `refresh`.

```javascript
const { todos, refresh } = useFetchToDos();
```

`todos` debe ser un array con los ToDos obtenidos de la API.

`refresh` debe ser una función que permita refrezcar la lista de ToDos.

Usar dicho hook en la vista `Home` para obtener la lista de ToDos y mostrarlos en pantalla.

Opcional: agregar un boton para refrezcar la lista de ToDos.

### 2. Maquetación
Maquetar el componente `ToDoItem` de acuerdo al diseño proporcionado.

![ToDoItem](src/assets/todo-item.png)

El aspecto definitivo del home debe ser el siguiente:

![Home Example](src/assets/full-design.png)

A su vez, el *title* del componente debe tacharse al estar completado.


### 3. POSTear data en la API

Crear una función que permita POSTear un nuevo ToDo en la API. La función debe recibir como parámetro el **title** del ToDo y el **emoji**. La funcion debe devolver una promesa que resuelva con el nuevo ToDo creado.

```javascript
const createToDo = (title, emoji) => {
  // ...
}
```

Usar dicha función en la vista `AddNewTask` para crear un nuevo ToDo al hacer click en el botón de crear, mediante el formulario proporcionado.

Al agregar satisfactoriamente un nuevo ToDo, se deberá volver al home y se deberá actualizar automáticamente la lista.

### 4. Borrar data de la API

Crear una función que permita borrar un ToDo de la API. La función debe recibir como parámetro el **id** del ToDo. La funcion debe devolver una promesa que resuelva con el **id** del ToDo borrado.

```javascript
const deleteToDo = (id) => {
  // ...
}
```

Usar dicha función en el componente `ToDoItem` para borrar el ToDo al hacer click en el botón de borrar.

Actualizar la lista de ToDos al borrar un ToDo.