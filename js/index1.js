/*

データ型、演算子、型変換、変数宣言と代入

Javascriptの書き方
①htmlファイルにscriptタグで直接記述
<script>
  console.log('Hello World');
</script>


②外部ファイルに記述して読み込む
htmlファイルとは別に作成したjsファイルを読み込む
<script src="js/index.js"></script>
*/

(function () {
  // データ型
  let str = "Hello"; // 文字列
  let num = 42; // 数値型
  let bool = true; // 真偽値型
  let nul = null; // null型
  let undef = undefined; // undefined型

  console.log(str); // Hello
  console.log(num); // 42
  console.log(bool); // true
  console.log(nul); // null
  console.log(undef); // undefined

  let obj = { name: "alice", age: 30 }; // オブジェクト型
  let arr = [1, 2, 3]; // 配列型

  console.log(obj); // {name: "alice", age: 30}
  console.log(arr); // [1, 2, 3]

  // 演算子
  let a = 5;
  let b = 2;
  let sum = a + b; // 足し算
  let diff = a - b; // 引き算
  let product = a * b; // 掛け算
  let quotient = a / b; // 割り算
  let remainder = a % b; // 余り

  console.log(sum); // 7
  console.log(diff); // 3
  console.log(product); // 10
  console.log(quotient); // 2.5
  console.log(remainder); // 1

  // インクリメント演算子
  let count = 0;
  count++; // count = count + 1と同じ
  console.log(count); // 1

  // 三項演算子(? :)と論理演算子(&&)

  let age = 20;
  let meesage = age >= 18 ? "成人です" : "未成年です";
  let isAdult = age >= 18 && true;

  console.log(meesage); // 成人です
  console.log(isAdult); // true

  // 型変換
  let strNum = "42";
  let intNum = parseInt(strNum); // 文字列を数値に変換
  let floatNum = parseFloat("3.14"); // 文字列を浮動小数点数に変換
  let boolVal = Boolean(0); // 数値から真偽値へ変換
  let strBool = String(true); // 真偽値から文字列へ変換

  console.log(intNum); // 42
  console.log(floatNum); // 3.14
  console.log(boolVal); // false
  console.log(strBool); // "true"

  // 変数の宣言と代入型の代入 (例1)
  let x = 5; // 再代入可能な変数宣言
  const PI = 3.14; // 再代入不可能な変数宣言

  x = 10;
  console.log(x); // 10
  // PI = 3.14159;
  // PIは再代入不可能なのでエラーが発生

  // 変数の宣言と代入型の代入 (例2)
  let count2 = 0;
  count2++;
  console.log(count2); // 1
  // カウンターの値は変更されるため、letを使用

  // 変数の宣言と代入型の代入 (例3)
  const name2 = "John";
  console.log(name2); // John
  // 名前は変更されないため、constを使用
})();
