/*

関数

関数とはプログラミングの基本であり、コードを効率的に再利用する手法

function greet() {
  console.log('Hello world!');
  }

  関数の呼び出し
  greet(); // Hello world!

関数は、特定のタスクを実行するコードのブロックです。
これらを定義し、必要に応じて何度でも呼び出すことができる。

*/

(function () {
	//関数の基本定義
	function greet() {
		console.log("Hello world!");
		console.log("Goodbye world!");
	}
	greet();
	greet();
	greet();
	// Hello world!
	// Goodbye world!
	// Hello world!
	// Goodbye world!
	// Hello world!
	// Goodbye world!

	//パラメーターと引数
	function greetWithName(name) {
		console.log("Hello " + name + "!");
	}

	greetWithName("Alice"); // Hello Alice!
	greetWithName("Bob"); // Hello Bob!
	//関数にはパラメータを設定することができ、これにより呼び出し時に異なる引数を渡すことができ、関数の汎用性が高まる。

	//戻り値
	function add1(x, y) {
		return x + y;
	}

	let result = add1(5, 3);
	let result2 = add1(10, 16);
	console.log(result); // 8
	console.log(result2); // 26
	//関数は、計算や処理の結果をを返すことができ、return文を使ってこれらを実現する。

	//for文・if文と組み合わせた関数の例
	function filterNamesBySubstring(names, substring) {
		const filteredNames = [];
		for (let i = 0; i < names.length; i++) {
			if (names[i].includes(substring)) {
				filteredNames.push(names[i]);
			}
		}
		return filteredNames;
	}

	const namesArray = ["Alice", "Bob", "Charlie", "David", "Eve"];
	const result3 = filterNamesBySubstring(namesArray, "i");
	console.log(result3); // ['Alice', 'Charlie', 'David']
	const result4 = filterNamesBySubstring(namesArray, "v");
	console.log(result4); // ['David', 'Eve']

	/*

関数の変数への代入と無名関数

const sampleFunc = function() {
  // 何かしらの処理
  }

*/
	const add = function (a, b) {
		return a + b;
	};
	const subtract = function (a, b) {
		return a - b;
	};
	const calculate = {
		add: add,
		subtract: subtract,
	};
	const result5 = calculate.add(10, 15);
	console.log(result5); // 25
	const result6 = calculate.subtract(10, 15);
	console.log(result6); // -5
	//意味合いごとに関数をまとめることができるなどコードの可読性が上がるメリットがある

	/*

アロー関数

1."function"という語を削除し、引数と本体の開始中括弧の間に矢印を配置する。
const addHundred = (a) => {
  return a + 100;
  }

2.本体の中括弧と"return"という語を削除
const addHundred = (a) => a + 100;

3.引数が1つの場合、引数の括弧を省略できる
const addHundred = a => a + 100;

*/

	const addHundred = (a) => a + 100;
	const result7 = addHundred(10);
	console.log(result7); // 110

	/*

クロージャー

関数のスコープにある変数にアクセスできる現象をクロージャと呼ぶ
*/

	function outerFunc() {
		let value = 1;
		function innerFunc() {
			value++;
			console.log(value);
		}
		innerFunc();
	}
	outerFunc(); // 2
})();

/*

コールバック関数

関数を別の関数に引数として渡し、後で実行するための関数です
*/
function greetingWithName2(name) {
	alert(`hello, ${name}`);
}

function processUserInput(callback) {
	const name = prompt("Please enter your name.");
	callback(name);
}
processUserInput(greetingWithName2);
