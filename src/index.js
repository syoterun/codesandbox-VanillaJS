/**
 * const,let等の変数宣言
 */
// var変数を宣言
// var val1 = "var変数";
// console.log(val1);
// // var変数は上書き可能
// val1 = "var変数を上書き";
// console.log(val1);
// // var変数は再宣言可能
// var val1 = "var変数を再宣言";
// console.log(val1);

// // let変数を宣言
// let val2 = "let宣言";
// console.log(val2);
// // let変数は上書き可能
// // let変数は再宣言不可能
// val2 = "let変数を上書き";
// console.log(val2);

// // const変数を宣言
// // // const変数は上書き不可能
// // // const変数は再宣言不可能
// const val3 = "const宣言";
// console.log(val3);

// // constでオブジェクトを定義
// const val4 = {
//   name: "taro",
//   age: 28
// };
// // constで定義したオブジェクトのプロパティ(中身)は上書き可能
// val4.name = "ziro";
// val4.age = 26;
// val4.addres = "Shiga";
// console.log(val4);

// // constで配列を定義
// const val5 = ["dog", "cat"];
// // constで定義した配列のプロパティ(中身)は上書き可能
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

/**
 * テンプレート文字列
 */
// const name = "taro";
// const age = 22;
// // 文字列と変数を結合して「私の名前はtaroです．年齢は22歳です．」と出力

// // 従来の方法
// const message1 = "私の名前は" + name + "です．年齢は" + age + "です";
// console.log(message1);

// // テンプレート文字列を用いた方法　バッククオート(Shift+@)で囲んでいる
// const message2 = `私の名前は${name}です．年齢は${age}です`;
// console.log(message2);

// テンプレート文字列を用いたショートコーディング
// console.log("abcde".split``); //["a", "b", "c", "d", "e"]
// console.log([1, 2, 3].join``); // 123

/**
 * アロー関数
 */
//従来の関数
// function func1(str) {
//   return str;
// }
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1です"));

// // アロー関数
// const func2 = (str) => {
//   return str;
// };
// // 処理が1行のみであれば省略可能
// const func2 = (str) => str;
// console.log(func2("func2です"));

// const func3 = (num1, num2) => {
//   return num1 + num2;
// };
// // 処理が1行のみであれば省略可能
// const func2 = (str) => num1 + num2;
// console.log(func3(1, 3));

/**
 * 分割代入
 */
// const myProfile = {
//   name: "taro",
//   age: 22
// };
// // 従来の方法
// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
// console.log(message1);
// // 分割代入
// const { name, age } = myProfile;
// const message2 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);

// // 従来の方法
// const myProfile = ["taro", 22];
// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`;
// console.log(message3);
// // 分割代入
// const [name, age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message4);

/**
 * デフォルト値，引数
 */
// const sayHello = (name = "ゲスト") => console.log(`こんにちは${name}さん！`);
// sayHello();

/**
 * スプレッド構文 ...
 */
// // 配列の展開
// const arr1 = [1, 2];
//console.log(arr1); // [1, 2]
//console.log(...arr1); // 1 2

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]); // 3
// sumFunc(...arr1); // 3

// // まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1); // 1
// console.log(num2); // 2
// console.log(arr3); // [3, 4, 5]

// // 配列のコピー,結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// // コピー
// const arr6 = [...arr4];
// arr6[0] = 100;
// console.log(arr6); // [100, 20]
// console.log(arr4); // [10, 20]

// // 結合
// const arr7 = [...arr4, ...arr5];
// console.log(arr7); // [10, 20, 30, 40]

// // =で配列をコピーすると参照元が同じになるため不具合のもととなる
// const arr8 = arr4;
// arr8[0] = 100;
// console.log(arr8); // [100, 20]
// console.log(arr4); // [100, 20]

/**
 * mapやfilterを使った配列の処理
 */
// 従来の手法
// const nameArr = ["田中", "山田", "高橋"];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(`${index + 1}番目は${nameArr[index]}です。`);
// }

// const nameArr2 = nameArr.map((name) => {
//   return name;
// });
// console.log(nameArr2);

// nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です`));
// nameArr.map((name) => console.log(name));

// const numArr = [1, 2, 3, 4, 5];
// const newnumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// });
// console.log(newnumArr); // [1, 3, 5]

// const newNameArr = nameArr.map((name) => {
//   if (name === "高橋") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(newNameArr); // ["田中さん", "山田さん", "高橋"]

/**
 * 三項演算子
 */
// ある条件 ? 条件がtrueの時 : 条件がfalseの時
// const val1 = 1 < 0 ? "trueです" : "falseです";
// console.log(val1); // falseです

// const num = 1300;

// const formattedNum =
//   typeof num === "number" ? num.toLocaleString() : "数値を入力してください";
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? "100を超えています" : num1 + num2;
// };

// console.log(checkSum(100, 20)); // 100を超えています
// console.log(checkSum(10, 20)); // 30

/**
 * 論理演算子
 */
// const flag1 = true;
// const flag2 = true;
// if (flag1 || flag2) {
//   console.log("1か2はtrueです");
// }
// if (flag1 && flag2) {
//   console.log("1も2はtrueです");
// }

// // || は左側がfalseなら右側を返す。
// const num = null;
// const fee = num || "金額未設定です";
// console.log(fee); // 金額未設定です

// // && は左側がtrueなら右側を返す。
// const num2 = 100;
// const fee2 = num2 && "何か設定されました";
// console.log(fee2); // "何か設定されました"
