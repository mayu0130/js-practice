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
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error("Fetch error:", error));




/*

Promise

1.JavaScriptで非同期処理を扱うための仕組みです。
2.非同期処理の完了や失敗を表現し、成功時と失敗時の両方を適切にハンドリングできます。
3.チェーン可能な処理を行うことができ、エラーハンドリングも簡潔に行えます。

*/

//Promiseを使った非同期処理の例
const promiseTestFunc = () => {
  return new Promise((resolve, reject) =>{
    setTimeout(() => {
      const success = true;
      if (success) {
        resolve("非同期処理に成功しました。");
      }else{
        reject(new Error("非同期処理に失敗しました。"));
      }
    }, 2000);
  });
}

promiseTestFunc()
  .then(data => console.log(data))
  .catch(error => console.error("Error:",error));