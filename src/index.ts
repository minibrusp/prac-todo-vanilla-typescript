import { Listemplate } from "./Classes/ListTemplate"
import { Todo } from "./Classes/Todo"

console.log("******************************* loheeee! ! !")

const form = document.querySelector("#new-todo-form") as HTMLFormElement
const newTodo = document.querySelector("#todo") as HTMLInputElement

const ul = document.querySelector('ul')!
const Todos = new Listemplate(ul)


form.addEventListener('submit', (e: Event) => {
  e.preventDefault()

  let todo = new Todo(newTodo.value)

  Todos.render(todo)

  newTodo.value = ""
  
})


