/*

if文とfor文

*/

(function () {
	// 比較演算子
	let num1 = 10;
	let num2 = 5;

	// 等価演算子(num1とnum2が等しいかどうかを判定)
	let isEqual = num1 === num2;
	console.log(isEqual); // false

	// 不等価演算子(num1とnum2が等しくないかどうかを判定)
	let isNotEqual = num1 !== num2;
	console.log(isNotEqual); // true

	// 大なり演算子(num1がnum2より大きいかどうかを判定)
	let isGreater = num1 > num2;
	console.log(isGreater); // true

	// 小なり演算子(num1がnum2より小さいかどうかを判定)
	let isLess = num1 < num2;
	console.log(isLess); // false

	// 大なりイコール演算子(num1がnum2以上かどうかを判定)
	let isGreaterOrEqual = num1 >= num2;
	console.log(isGreaterOrEqual); // true

	// 小なりイコール演算子(num1がnum2以下かどうかを判定)
	let isLessOrEqual = num1 <= num2;
	console.log(isLessOrEqual); // false

	// 曖昧な等価比較 (例1)
	let num3 = 10;
	let num4 = "10";

	console.log(num3 == num4); // true
	//値が等しい為、trueが返る
	console.log(num3 === num4); // false
	//値は等しいが、型が違う為、falseが返る

	// 曖昧な等価比較 (例2)
	let num5 = 10;
	let num6 = 10;

	console.log(num3 == num4); // true
	//値が等しい為、trueが返る
	console.log(num3 === num4); // true
	//値も型も等しい為、trueが返る

	// if文 (例1)
	let age = 20;
	if (age < 18) {
		console.log("未成年です");
	}
	// 未成年ではないので、何も表示されない

	// if文 (例2)
	let age2 = 20;
	if (age2 < 18) {
		console.log("未成年です");
	} else if (age2 >= 18 && age2 < 65) {
		console.log("成人です");
	} else {
		console.log("高齢者です");
	}
	// 成人です

	// switch文
	let day = "月曜日";
	switch (day) {
		case "月曜日":
			console.log("月曜日です");
			break;
		case "火曜日":
			console.log("火曜日です");
			break;
		default:
			console.log("その他の曜日です");
			break;
	}
	// 月曜日です

	// for文 (例1)
	for (let i = 0; i <= 5; i++) {
		console.log("現在の値：" + i);
	}
	// 現在の値：0
	// 現在の値：1
	// 現在の値：2
	// 現在の値：3
	// 現在の値：4
	// 現在の値：5

	// for...of文（配列を対象にループ） (例1)
	const fruits = ["りんご", "バナナ", "オレンジ"];
	for (let fruit of fruits) {
		console.log("フルーツ:" + fruit);
	}
	// フルーツ:りんご
	// フルーツ:バナナ
	// フルーツ:オレンジ

	// for...in文（オブジェクトを対象にループ） (例3)
	const person = {
		name: "太郎",
		age: 25,
		city: "東京",
	};
	for (let key in person) {
		console.log(key + ":" + person[key]);
	}
	// name:太郎
	// age:25
	// city:東京

	// 1から9までの数字の中で偶数だけを表示する
	for (let i = 1; i < 10; i++) {
		if (i % 2 === 0) console.log(i + "は偶数です");
	}
	// 配列のlength(要素数)を使ったfor文の例
	const numbers = [10, 20, 30, 40, 50];
	console.log("配列の要素数：" + numbers.length);

	for (let i = 0; i < numbers.length; i++) {
		if (numbers[i] > 30) {
			console.log("要素番号" + i + ":" + numbers[i] + "(30より大きい)");
		} else {
			console.log("要素番号" + i + ":" + numbers[i] + "(30以下)");
		}
	}

	// 特定の文字列を含む場合に (例1)
	const fruits2 = [
		"りんご",
		"バナナ",
		"オレンジ",
		"パイナップル",
		"りんごジュース",
		"バナナジュース",
	];
	for (let fruit of fruits2) {
		if (fruit.includes("りんご")) {
			console.log(fruit);
		}
	}

	// 特定の文字列を含む場合に (例2)
	const lastNames = ["田中", "山田", "鈴木", "佐藤", "岩田", "田村"];
	for (let lastName of lastNames) {
		if (lastName.includes("田")) {
			console.log(lastName);
		}
	}

	// 配列をfor文でループして特定の範囲の条件だけ出力する
	const numbers2 = [5, 12, 3, 8, 20, 9];
	for (let number of numbers2) {
		if (number >= 10 && number <= 15) {
			console.log(number);
		}
	}
	// 12

	// オブジェクトの配列をfor文でループして特定の条件下の時だけ出力する
	const pepole = [
		{ name: "太郎", age: 25, city: "東京" },
		{ name: "花子", age: 30, city: "大阪" },
		{ name: "次郎", age: 20, city: "名古屋" },
	];
	for (let person of pepole) {
		if (person.age >= 25) {
			console.log(person.name + "さんは成人です");
		} else {
			console.log(person.name + "さんは未成年です");
		}
	}
	// 太郎さんは成人です
	// 花子さんは成人です
	// 次郎さんは未成年です

	// 2次元配列とネストした二重のループの列
	const zoo = [
		[
			{ species: "ライオン", habitat: "サバンナ", sound: "ガオー" },
			{ species: "ゾウ", habitat: "ジャングル", sound: "パオーン" },
		],
		[
			{ species: "キリン", habitat: "草原", sound: "モーモー" },
			{ species: "サル", habitat: "森林", sound: "ウキキ" },
		],
	];
	for (let i = 0; i < zoo.length; i++) {
		console.log("エリア" + (i + 1) + "の動物");
		console.log("===========================");

		for (let j = 0; j < zoo[i].length; j++) {
			console.log("種類：" + zoo[i][j].species);
			console.log("生息地：" + zoo[i][j].habitat);
			console.log("鳴き声：" + zoo[i][j].sound);
			console.log("---------------------------");
		}
	}
	// エリア1の動物
	// ===========================
	// 種類：ライオン
	// 生息地：サバンナ
	// 鳴き声：ガオー
	// ---------------------------
	// 種類：ゾウ
	// 生息地：ジャングル
	// 鳴き声：パオーン
	// ---------------------------
	// エリア2の動物
	// ===========================
	// 種類：キリン
	// 生息地：草原
	// 鳴き声：モーモー
	// ---------------------------
	// 種類：サル
	// 生息地：森林
	// 鳴き声：ウキキ
	// ---------------------------
})();
