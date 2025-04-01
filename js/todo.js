//todoListという配列を定義し、TODOを保存するためのリストとして使用
let todoList = [];

let filterWord = "";

//入力された新しいTODOの値を取得し、todoList変数に代入する関数
const registerNewTodo = () => {
  //入力されたTODOの値を取得
  const newTodoName = document.getElementById("new-todo-name");
  const newPerson = document.getElementById("new-person");
  const newDeadline = document.getElementById("new-deadline");

  //新しいTODOをオブジェクト { todoName, person, deadline } として作成し、todoList 配列に追加。
  todoList.push({
    id: Date.now(),
    todoName: newTodoName.value,
    person: newPerson.value,
    deadline: newDeadline.value,
  });
  //入力欄をクリアにする
  newTodoName.value = "";
  newPerson.value = "";
  newDeadline.value = "";
};
//TODO一覧を全て削除する関数
const removeTodoListElem = () => {
  const tbodyElem = document.getElementById("todo-list");

  while (tbodyElem.firstChild) {
    tbodyElem.firstChild.remove();
  }
};

//引数にIDを受け取り、todoListの中から該当するtodoを削除する
const removeTodoById = (id) => {
  todoList = todoList.filter((todo) => todo.id !== id);
};

//TODO一覧を表示する関数
const appendTodoListElem = () => {
  removeTodoListElem();
  todoList
    .filter(
      (todo) =>
        todo.todoName.includes(filterWord) || todo.person.includes(filterWord),
    )
    .forEach((todo) => {
      //todoNameのtd要素を生成
      const todoNameTdElem = document.createElement("td");
      todoNameTdElem.textContent = todo.todoName;
      //personのtd要素を生成
      const personTdElem = document.createElement("td");
      personTdElem.textContent = todo.person;
      //deadlineのtd要素を生成
      const deadlineTdElem = document.createElement("td");
      deadlineTdElem.textContent = todo.deadline;

      //削除button要素を生成
      const removeButtonElem = document.createElement("button");
      removeButtonElem.textContent = "削除";
      //削除ボタンがクリックされたときに該当のTODOを削除する
      removeButtonElem.addEventListener("click", () => {
        removeTodoById(todo.id);
        appendTodoListElem();
      });

      //削除ボタンを表示するためのtd要素を生成
      const buttonTdElem = document.createElement("td");
      buttonTdElem.appendChild(removeButtonElem);

      //tr要素を作成し、td要素を挿入
      const trElem = document.createElement("tr");
      trElem.appendChild(todoNameTdElem);
      trElem.appendChild(personTdElem);
      trElem.appendChild(deadlineTdElem);
      trElem.appendChild(buttonTdElem);

      //tbody要素の中に、tr要素を挿入する
      const tbodyElem = document.getElementById("todo-list");
      tbodyElem.appendChild(trElem);
    });
};

//ページが完全に読み込まれたら、以下の処理を実行します。
document.addEventListener("DOMContentLoaded", () => {
  //id="register" のボタン（登録ボタン）を取得し、クリックされたときに処理を実行します。
  const registerButtonElem = document.getElementById("register");

  registerButtonElem.addEventListener("click", () => {
    registerNewTodo();
    appendTodoListElem();
  });

  //絞り込みに入力された場合のイベント定義
  const filterInputElem = document.getElementById("filter");
  filterInputElem.addEventListener("input", () => {
    filterWord = filterInputElem.value;

    appendTodoListElem();
  });
});
