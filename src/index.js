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
