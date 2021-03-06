'use strict'
// 1行目に記載している 'use strict' は削除しないでください

//1.evenOrOdd という名前の関数を宣言してください。この関数は引数として数値型の要素を持つ配列と、boolean を受け取ります。
// boolean が true の場合は、偶数のみの配列を返し、 false の場合は、奇数のみの配列を返します。

// ここにコードを書きましょう
console.log("課題1")
function evenOrOdd(arrayNumber, boolean){
    if (boolean === true){
        const reslut = arrayNumber.filter(function(num){
            return num % 2 === 0;
        })
        return reslut;
    } else {
        const reslut = arrayNumber.filter(function(num){
            return num % 2 !== 0;
        })
        return reslut;
    }
}

evenOrOdd([1, 2, 3, 4, 5], true); // [2, 4]
evenOrOdd([0, 4, 36], false); // []
evenOrOdd([-1, -2, 4, -5, -7], false); // [-1, -5, -7]

test(evenOrOdd([1, 2, 3, 4, 5], true), [2, 4]);
test(evenOrOdd([0, 4, 36], false), []);
test(evenOrOdd([-1, -2, 4, -5, -7], false), [-1, -5, -7]);


//2 findKeys という名前の関数を宣言してください。この関数は引数としてオブジェクトと “target” (文字列または数値) を受け取り、オブジェクト中、ターゲットにマッチする値を持つ全てのキーを含む新しい配列を返します。

// ここにコードを書きましょう
console.log("課題2")
function findKeys(obj, target){
    const reslut = [];
    for (const key in obj){
        if (obj[key] === target){
            reslut.push(key);
        }
    }
    return reslut;
}

findKeys({ a: 1, b: 2, c: 6, d: 4, e: 2 }, 2); // ["b", "e"]
findKeys({ 1: "h", b: "el", c: "hello", d: "hello", e: "o" }, "hello"); // ["c", "d"]

test(findKeys({ a: 1, b: 2, c: 6, d: 4, e: 2 }, 2), ["b", "e"]);
test(findKeys({ 1: "h", b: "el", c: "hello", d: "hello", e: "o" }, "hello"), ["c", "d"])


//3 buildObject という名前の関数を宣言してください。
//この関数は引数として 2 つの配列を受け取り、新しいオブジェクトを返します。
//リターンするオブジェクトは、第一引数の配列の要素をオブジェクトのキーとして設定し、
//第二引数の配列の要素をオブジェクトの値として設定します。

// ここにコードを書きましょう
console.log("課題3")
function buildObject(key, obj){
    const reslut = obj.reduce((accumulator, currentValue, index) => {
        accumulator[key[index]] = currentValue;
        return accumulator;
      }, {});
      return reslut;
}

buildObject(["a", "b", "c"], [1, 2, 3]); // {"a": 1, "b": 2, "c": 3}
buildObject(["cat", "dog", "duck"], ["meow", "woof", "quack"]); // {"cat": "meow", "dog": "woof", "duck": "quack"}
buildObject(["cat", "dog", "duck"], [null, 0, NaN]); // {"cat": null, "dog": 0, "duck": NaN}
buildObject(["abc", "def", "ghi"], [[0, 1, 2], [3, 4, 5], [6, 7, 8]]);  // {"abc": [0, 1, 2], "def": [3, 4, 5], "ghi": [6, 7, 8]}

test(buildObject(["a", "b", "c"], [1, 2, 3]), {"a": 1, "b": 2, "c": 3});
test(buildObject(["cat", "dog", "duck"], ["meow", "woof", "quack"]), {"cat": "meow", "dog": "woof", "duck": "quack"});
test(buildObject(["cat", "dog", "duck"], [null, 0, NaN]), {"cat": null, "dog": 0, "duck": NaN});
test(buildObject(["abc", "def", "ghi"], [[0, 1, 2], [3, 4, 5], [6, 7, 8]]), {"abc": [0, 1, 2], "def": [3, 4, 5], "ghi": [6, 7, 8]});

//4 add という名前の関数を宣言してください。この関数は引数として 1 つの数値 x を受け取り、
// 引数として 1 つの数値 y を受けとる関数を返します。リターンされた関数は、実行時に ‘x’ と ‘y’ の和を返します。

// ここにコードを書きましょう
console.log("課題4")
function add(x){
    return function(y){
        return x + y;
    }
}

const addTwo = add(2);
addTwo(3); // 5
addTwo(70); // 72

test(addTwo(3), 5);
test(addTwo(70), 72);

const addOneHundred = add(100);
addOneHundred(3); // 103

test(addOneHundred(3), 103);


//5 このコードを実行すると、どの順番で何が表示されるでしょうか？もちろん、コードを実行する前に答えてください。なぜそうなるのか、わからない場合はわかるまで調べましょう！
console.log("課題5")
function simpleHello() {
  console.log("Hello");
}

function anotherGreeting(name) {
  return "Hello, " + name;
}

console.log("一旦コメントアウト")
// const foo = simpleHello();
const bar = anotherGreeting("JavaScript");

// console.log(foo);
console.log(bar);

// あなたの回答と、なぜそうなるのかの説明をここに記載してください
/**
 * Hello
 * undefined
 * Hello, JavaScript
 * 理由：変数fooに関数simpleHello（引数なし）を代入してfooをコンソールに表示させていますが、
 * simpleHelloには、Helloをコンソールに表示させる指示がされているだけで何もreturnされていないので
 * 関数内のHelloを表示させて、foo自体には返り値がないのでundefinedが表示される。
 * 関数anotherGreeting（引数：name）では"Hello, " + nameが返されており、
 * 変数barにはanotherGreetingの引数にJavaScriptが入れられているので、
 * Hello, JavaScriptが表示される。
 * console.log(foo);　→　console.log(bar);　の順番で処理が行われるので、上記の順番で表示される。
 */


//6 クリックしたらページの色が変わるボタンを作りましょう。色はボタンをクリックするたびにランダムで決まります。

// これが完成イメージです。

// example of button that changes background color randomly
// ここで使用する 基本となるコード は既に用意されています。必要な処理を記述するだけです。

// 手順
// このフォルダ からファイルをダウンロードし、それを作業用フォルダに配置してください。

// フォルダ内にあるファイルに注意してください。

// script.js - JavaScript ファイルです。ボタンを実装するためにこのファイルを変更する必要があります。
// index.html - ブラウザで表示するときに使用する HTML ファイルです。おそらくこのファイルを変更する必要は ありません。
// style.css - スタイルシートのファイルです。このファイルはページの見た目をコントロールしています。おそらくこのファイルを変更する必要は ありません。
// コードエディタでファイルを開いてください。

// コードを修正して実装にとりかかりましょう。

// ページの色が変わるボタンの作成が終わっら、新しい要素やボタンを追加して何かおもしろい機能を追加してください。次に例を挙げます。

// 提出物
// この問題では script.js を Gist にアップしてください。もし何かしら変更を加えた場合は index.html、 style.css もアップしてください。ファイル名はそのままで構いません。


// //7 map という名前の関数を宣言してください。
// この関数は引数としてコレクション(オブジェクトまたは配列)とコールバック関数を受け取り、
// コレクション内の各要素に対してコールバック関数を実行した結果を要素に持つ新しい配列を返します。
// コールバック関数は、コレクション内のすべての要素に適用されます。
// ⚠️ 注意：ネイティブメソッド (.forEach, .map) は使用しないでください。

// // ここにコードを書きましょう
console.log("課題7(修正したい)")
function map(object, callback){
    const reslut = [];
    if (Array.isArray(object) == false){
        const newObject = [];
        for (const key in object){
            newObject.push(object[key]);
        }
        for (const obj of newObject){
            reslut.push(callback(obj));
        }
    } else {
        for (const obj of object){
            reslut.push(callback(obj));
        }
    }
    return reslut;
}

function addOne(num) {
  return num + 1;
}

map([1, 2, 3], addOne); // [2, 3, 4]
map({ a: 1, b: 2, c: 3 }, addOne); // [2, 3, 4]

test(map([1, 2, 3], addOne), [2, 3, 4]);
test(map({ a: 1, b: 2, c: 3 }, addOne), [2, 3, 4]);


//8 changeMiddle という名前の関数を宣言してください。
// この関数は引数として「3 つの単語からなる文字列(スペースで区切られる)」「1 単語の文字列」を受け取り、
// 第一引数の中央の単語を第二引数の文字列に置き換えた新しい文字列を返します。

// ここにコードを書きましょう
console.log("課題8")
function changeMiddle(message, word){
    message = message.split(" ");
    message[1] = word;
    return message.join(" ");
}

changeMiddle("I like cats", "love"); // "I love cats"
changeMiddle("red green blue", "yellow"); // "red yellow blue"

test(changeMiddle("I like cats", "love"), "I love cats");
test(changeMiddle("red green blue", "yellow"), "red yellow blue");


//9 countSomething という名前の関数を宣言してください。この関数は引数として数値・文字列・ブーリアンを
//要素にもつ配列を受け取ります。要素の登場回数が最も多い型をチェックし、以下のいずれかの文字列を返してください。
console.log("課題9")
// “BOOL COUNT: x” (ブーリアンが最も多い場合)
// “STRING COUNT: x” (文字列が最も多い場合)
// “NUMBER COUNT: x” （数値が最も多い場合）
// ※ x はその型の要素がが何回出現したかを表す。

// // ここにコードを書きましょう
console.log("通るけど要修正");
function countSomething(arrayType){
    const kara = [];
    for (const type of arrayType){
        kara.push(typeof type);
    }
    let count = {};
    for (let i = 0; i < kara.length; i++) {
        let elm = kara[i];
        count[elm] = (count[elm] || 0) + 1;
    }
    if (count["string"] > count["boolean"] || count["string"] > count["number"]){
        return `STRING COUNT: ${count["string"]}`;
    } else if (count["number"] > count["string"] || count["number"] > count["boolean"]){
        return `NUMBER COUNT: ${count["number"]}`;
    }else {
        return `BOOL COUNT: ${count["boolean"]}`;
    }
}

countSomething(["a", "b", "c", true, false, 2]); // "STRING COUNT: 3"
countSomething([true, true, false, true]); // "BOOL COUNT: 4"
countSomething([true, true, 1, 0, 1, false, 1]); // "NUMBER COUNT: 4"

test(countSomething(["a", "b", "c", true, false, 2]), "STRING COUNT: 3");
test(countSomething([true, true, false, true]), "BOOL COUNT: 4");
test(countSomething([true, true, 1, 0, 1, false, 1]), "NUMBER COUNT: 4");

// 10 each という名前の関数を宣言してください。この関数は引数としてコレクション(オブジェクトまたは配列)と
// コールバック関数を受け取り、コレクション内の各要素に対してコールバック関数を一度だけ実行してください。
// この関数は何もリターンしません。
// ⚠️ 注意：ネイティブメソッド (.forEach, .map) は使用しないでください。

// // ここにコードを書きましょう
console.log("課題10(修正したい)")

function each(object, callback){
    if (Array.isArray(object) == false){
        const newObject = [];
        for (const key in object){
            newObject.push(object[key]);
        }
        for (const obj of newObject){
            callback(obj);
        }
    } else {
        for (const obj of object){
            callback(obj);
        }
    }
}

each({ a: 1, b: 2, c: 3 }, console.log);
each([4, 5, 6], console.log);

// // 上記を実行すると下記を表示するはずです
// 1
// 2
// 3
// 4
// 5
// 6


//11 compose という名前の関数を宣言してください。この関数は引数として funcA と funcB という 2 つの関数を受け取り、
// 新しい関数を返します。リターンされた関数は引数 x を受け取ります。リターンされた関数を実行すると、
// funcA の実行結果を funcB の引数として渡した結果を返します。
// // ここにコードを書きましょう
console.log("課題11")
let x;
const compose = function(funcA, funcB){
    funcA(x)
}
// function compose(funcA, funcB){
//     return funcA();
// }

function multiplyTwo(x) {
  return x * 2;
}

function addOne(x) {
  return x + 1;
}

const foo = compose(multiplyTwo, addOne);
foo(5); // 11
foo(100); // 201

test(foo(5), 11);
test(foo(100), 201);

// 以上で全ての問題は終了です。お疲れ様でした！！ 🤟