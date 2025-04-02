import "../css/style.css";
/*

同期処理

1.プログラムが一連の命令を順番に実行し、前の処理が完了するまで次の処理を開始しません。
2.1つの処理が終了するまで、次の処理が実行されないという特徴があります。
*/

//同期処理の例
const syncFunction = () => {
	console.log("1番目");
	console.log("2番目");
	console.log("3番目");
};
syncFunction();

/*

非同期処理

1.処理がすぐには結果を返さず、後で結果が戻ってくる可能性がある操作のことです。
2.待ち時間中に他の処理を行うことができ、アプリケーション全体のパフォーマンスが向上します。
*/

//非同期処理の例
setTimeout(() => {
	console.log("１番目");
}, 2000);

console.log("2番目");

/*

fetch

1.Web開発でよく使用される非同期通信を行うためのAPIです。
2.主にHTTPリクエストを送信し、サーバーからデータを取得する際に利用されます。
3.fetchはPromiseベースであり、シンプルかつ柔軟な方法でHTTPリクエストを行うことができます。
*/

//fetchを使ってデータを取得する例
fetch("https://jsonplaceholder.typicode.com/users")
	.then((response) => response.json())
	.then((data) => console.log(data))
	.catch((error) => console.error("Fetch error:", error));

/*

Promise

1.JavaScriptで非同期処理を扱うための仕組みです。
2.非同期処理の完了や失敗を表現し、成功時と失敗時の両方を適切にハンドリングできます。
3.チェーン可能な処理を行うことができ、エラーハンドリングも簡潔に行えます。

*/

//Promiseを使った非同期処理の例
const promiseTestFunc = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const success = true;
			if (success) {
				resolve("非同期処理に成功しました。");
			} else {
				reject(new Error("非同期処理に失敗しました。"));
			}
		}, 2000);
	});
};

promiseTestFunc()
	.then((data) => console.log(data))
	.catch((error) => console.error("Error:", error));

/*

await・async

非同期処理をより直感的に扱うための機能

await
1.非同期処理が完了するまで処理を一時停止し、その後で処理を再開するためのキーワードです。
2.Promiseが解決されるまで、その後の処理が待機されます。

async
1.関数の前に付けてその関数が非同期であることを示します。
2.async関数内ではawaitキーワードを使用して非同期処理の完了を待つことができます。

*/

//async/awaitを使った非同期処理の例

async function fetchDataAsync() {
	const response = await fetch("https://jsonplaceholder.typicode.com/users");
	if (!response.ok) {
		console.error("Fetch error:", error);
	}
	const data = await response.json();
	console.log(data);

	//上記で受け取ったjsonをDOMでHTML形式表示をする
	data.forEach((user) => {
		//各データのtdを作成する
		const idTdElem = document.createElement("td");
		idTdElem.textContent = user.id;

		const nameTdElem = document.createElement("td");
		nameTdElem.textContent = user.name;

		const usernameTdElem = document.createElement("td");
		usernameTdElem.textContent = user.username;

		const phoneTdElem = document.createElement("td");
		phoneTdElem.textContent = user.phone;

		const emailTdElem = document.createElement("td");
		emailTdElem.textContent = user.email;

		const websiteTdElem = document.createElement("td");
		websiteTdElem.textContent = user.website;

		//trを作成する
		const trElem = document.createElement("tr");
		trElem.appendChild(idTdElem);
		trElem.appendChild(nameTdElem);
		trElem.appendChild(usernameTdElem);
		trElem.appendChild(phoneTdElem);
		trElem.appendChild(emailTdElem);
		trElem.appendChild(websiteTdElem);

		const userListElem = document.getElementById("user-list");
		userListElem.appendChild(trElem);
	});
}
fetchDataAsync();
