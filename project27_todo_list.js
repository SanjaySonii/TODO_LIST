let add = document.getElementById(`add`);
let todo = document.getElementById(`todo`);
localStorage.clear();
add.addEventListener(`click`, () => {
  let text = prompt("add work to do");
  let Arraytodo = [text];
  let todolist = localStorage.getItem(`todolist`);
  if (todolist == null) {
    todoobj = [];
  } else {
    todoobj = JSON.parse(todolist);
  }

  todoobj.push(Arraytodo);
  localStorage.setItem(`todolist`, JSON.stringify(todoobj));
  showtodo();
});

const showtodo = () => {
  let todolist = localStorage.getItem(`todolist`);
  if (todolist == null) {
    todoobj = [];
  } else {
    todoobj = JSON.parse(todolist);
  }

  let html = `<summary><strong>Works to do</strong></summary>`;
  todoobj.forEach((element, index) => {
    html += `<p>${
      index + 1
    } : ${element} <button class="remove" id="${index}" onclick="deletetodo(this.id)">Remove</button><p>`;
  });
  todo.innerHTML = html;
};

const deletetodo = (index) => {
  let todolist = localStorage.getItem(`todolist`);
  if (todolist == null) {
    todoobj = [];
  } else {
    todoobj = JSON.parse(todolist);
  }

  todoobj.splice(index, 1);

  localStorage.setItem(`todolist`, JSON.stringify(todoobj));
  showtodo();
};
