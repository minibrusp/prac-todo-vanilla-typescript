import { HasFormat } from "../Interface/HasFormat"

export class Listemplate {
  constructor(private container: HTMLUListElement){}

  addButtonDeleteListener(btn: HTMLButtonElement, li: HTMLLIElement) {
    btn.addEventListener('click', () => {
      li.parentNode?.removeChild(li)
    })
  }

  render(todo: HasFormat) {
    const li = document.createElement('li')
    const p = document.createElement('p')
    const DeleteButton = document.createElement('button')

    p.innerText = todo.format()
    li.append(p)

    DeleteButton.innerText = "Delete"
    this.addButtonDeleteListener(DeleteButton, li)
    li.append(DeleteButton)

    this.container.prepend(li)
  }
}