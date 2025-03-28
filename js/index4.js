/*

組込関数

JavaScriptにあらかじめ定義されている関数
*/

(function() {

//文字列と数字の変換
const str = "123";
console.log(str); // "123"
console.log(parseInt(str)); // 123
console.log(parseFloat("123.45")); // 123.45
console.log(parseInt("123abc")); // 123




//数値を文字列に変換
const count = 10;
console.log(count.toString()); // "10"
console.log((17).toString()); // "17"
console.log((17.2).toString()); // "17.2"




//文字列の操作
let greeting = " Hello World";
console.log(greeting);
console.log(greeting.trim()); // "Hello World"
console.log(greeting.toUpperCase()); // "HELLO WORLD"
console.log(greeting.toLowerCase()); // "hello world"
console.log(greeting.includes("World")); // true
console.log(greeting.split(" ")); // [" ", "Hello", "World"]




//Mathオブジェクトの関数
console.log(Math.round(57.71236716783267)); // 58
console.log(Math.max(10, 20, 30)); // 30
console.log(Math.min(10, 20, 30)); // 10
console.log(Math.random()); // 0以上1未満の乱数




//Dateオブジェクトの操作
let today = new Date();
console.log(today.toString()); // 現在の日付と時刻
console.log(today.getFullYear()); // 年を取得　（2025）




//配列操作の組込関数(例1)
let furits = ["Apple", "Banana"];

furits.push("Orange"); //Orangeを追加
console.log(furits); // ["Apple", "Banana", "Orange"]

furits.pop(); //最後の要素Orangeを削除
console.log(furits); // ["Apple", "Banana"]




//配列操作の組込関数(例2)
let numbers = [1, 2, 3, 4];

numbers.forEach((number, index) => {
  console.log(index, number);
});
// 0 1
// 1 2
// 2 3
// 3 4




//データを加工して新しい関数を作る組込関数
let doubled = numbers.map(x => x * 2); //各要素を2倍にする
console.log(doubled); // [2, 4, 6, 8]

let evens = numbers.filter(x => x % 2 === 0); //偶数だけを取り出す
console.log(evens); // [2, 4]




//配列の組込関数を使った応用
function filterNamesBySubstring(names, substring){
  const filteredNames = [];
  for (let i = 0; i < names.length; i++) {
    if (names[i].includes(substring)) {
      filteredNames.push(names[i]);
    }
  }
  return filteredNames;
}
const namesArray = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];
const result = filterNamesBySubstring(namesArray, "a");
console.log(result); // ["Charlie", "David"]

// filterを使うとこんな簡単に実装できる
function filterNamesBySubstring(names, substring){
  return names.filter(name => name.includes(substring));
}

const namesArray2 = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];
const result2 = filterNamesBySubstring(namesArray2, "a");
console.log(result2); // ["Charlie", "David"]

//さらにアロー関数を屈指することで1行で表現できる
const filterNamesBySubstring3 = (names, substring) => names.filter(name => name.includes(substring));

const namesArray3 = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];
const result3 = filterNamesBySubstring3(namesArray3, "a");
console.log(result3); // ["Charlie", "David"]
})();




//オブジェクト操作の組込関数
let user = {
  name: "Alice",
  age: 25,
  isAdmin: true
};

//オブジェクトのすべてのキー(プロパティ名)を配列として取得します。
console.log(Object.keys(user)); // ["name", "age", "isAdmin"]

//オブジェクトのすべての値を配列として取得します。
console.log(Object.values(user)); // ["Alice", 25, true]

//オブジェクトのすべてのキーと値を配列として取得します。
console.log(Object.entries(user)); // [["name", "Alice"], ["age", 25], ["isAdmin", true]]




//オブジェクト操作の組込関数を使った応用
const employees = {
  "alice":{department: "Engineering", salary: 75000},
  "Bob":{department: "HR", salary: 45000},
  "Carol":{department: "Marketing", salary: 55000},
  "David":{department: "Engineering", salary: 60000}
};

//Object.entriesを使用して、給料が50,000以上の従業員の名前と給料を抽出
const highEarningEmployees = Object.entries(employees).filter(([name, details]) => {
  //給料が50,000以上のエントリーのみをフィルタリング
  return details.salary >= 50000;
})
.map(([name, details]) => {
  //フィルタリングされた従業員の名前と給料だけを含む新しいオブジェクトを作成
  return { name: name, salary: details.salary};
});

console.log(highEarningEmployees);