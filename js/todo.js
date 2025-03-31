//todoList という配列を定義し、TODOを保存するためのリストとして使用します。l
let todoList = [];

//ページが完全に読み込まれたら、以下の処理を実行します。
document.addEventListener("DOMContentLoaded", () => {
  //id="register" のボタン（登録ボタン）を取得し、クリックされたときに処理を実行します。
  const registerButtonElem = document.getElementById("register");

  registerButtonElem.addEventListener("click", () => {
    //入力されたTODOの値を取得
    const newTodoName = document.getElementById("new-todo-name");
    const newPerson = document.getElementById("new-person");
    const newDeadline = document.getElementById("new-deadline");

    //新しいTODOをオブジェクト { todoName, person, deadline } として作成し、todoList 配列に追加。
    const newTodoObject = {
      todoName: newTodoName.value,
      person: newPerson.value,
      deadline: newDeadline.value,

    };
    todoList.push(newTodoObject);

    //TODO一覧を全て削除
    const tbodyElem = document.getElementById("todo-list");

    while(tbodyElem.firstChild){
      tbodyElem.firstChild.remove();
    }

    //todoListにあるすべてのTODOを、一覧に追加する処理を実行。
    todoList.forEach((todo) => {
      //td（表のセル）を作成し、TODOのデータを入れる。
      const todoNameTdElem = document.createElement("td");
      todoNameTdElem.textContent = todo.todoName;
      const personTdElem = document.createElement("td");
      personTdElem.textContent = todo.person;
      const deadlineTdElem = document.createElement("td");
      deadlineTdElem.textContent = todo.deadline;

      //tr（表の行）を作成し、セルを追加。
      const trElem = document.createElement("tr");
      trElem.appendChild(todoNameTdElem);
      trElem.appendChild(personTdElem);
      trElem.appendChild(deadlineTdElem);


      //tbody に追加して、表に新しいTODOを表示。
      tbodyElem.appendChild(trElem);
    });

  });
});