import { data, registerNewTodo, appendTodoListElem } from "./_todo"
import "../css/style.css";

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
		data.filterWord = filterInputElem.value;

		appendTodoListElem();
	});
});
