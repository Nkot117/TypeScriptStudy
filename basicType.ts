// number
let age : number = 20;
let hexadecimal : number = 0xff; // 16進数(255)
let non = NaN; // 非数
let infinity = Infinity; // 無限大

// string
let firstName : string = "first"; // 型注釈
let lastName  = 'last'; // 型推論
let greeting = `Hello, ${firstName} ${lastName}`; // テンプレート文字列　型推論でstring

// boolean
let isDone : boolean = false; // 型注釈
let isFlag = true; // 型推論

// リテラル型
let literal : "foo" = "foo"; // "foo"のみ代入可能
const bar = "bar"  // 再代入不可のリテラル型
let adultAge : 18 // 型注釈でリテラル型として指定することも可能
adultAge = 18; 


// Union
let value : string | number = "foo"; // stringかnumberのどちらか
value = 100;

let eventType : "click" | "hover" | "keydown" = "click"; // リテラル型と組み合わせることも可能
eventType = "hover";

// Type Alias
type Role = "Admin" | "User" | "Guest";
let role : Role = "Admin";

type Cat = "Cat";
type Dog = "Dog";
type Animal = Dog | Cat; // 型エイリアスをユニオン型として使用することも可能

// Object
let book: {
    title: string; // オブジェクトのプロパティに型注釈を設定することも可能
    author: string;
    publishedIn: number;
} = {
    title: "Title",
    author: "Author",
    publishedIn: 2021
}

type Address = {
    zipcode: string;
    city: string;
    street: string;
}

let user : {
    name: string;
    age: number;
    address: Address; // オブジェクト型を別の型エイリアスとして定義することも可能
} = {
    name: "Taro",
    age: 20,
    address: {
        zipcode: "000-0000",
        city: "Tokyo",
        street: "Chiyoda"
    }
}

// 過剰プロパティチェック
const alice  = {
    name: "Alice",
    age: 20,
    address: {
        zipcode: "000-0000",
        city: "Tokyo",
        street: "Chiyoda"
    }
}

let user2 : {
    name: string;
    age: number;
} = alice; // 直接代入ではない場合、過剰プロパティチェックは行われない

// Array
let numbers : number[] = [1, 2, 3]; // 型注釈
let names = ["foo", "bar"]; // 型推論
let values : (string | number)[] = ["foo", 100]; // Union型の配列

// Tuple
let tuple : [string, number] = ["foo", 100]; // 配列の要素の型を指定することも可能、要素数は固定
type RGB = [red: number, green: number, blue: number]; // 要素に名前をつけることも可能
let color : RGB = [255, 0, 0];
let color2 = [255, 0, 0]; // 型推論の場合は、Array型として扱われる

// Intersection
type Engine = {
    engineType: string;
    volume: number;
}

type Wheels = {
    wheelCount: number;
}

type Car = Engine & Wheels; // 2つの型を結合するIntersection型
let car : Car = {
    engineType: "Gasoline",
    volume: 2.0,
    wheelCount: 4
}

// 関数型
let greet: (name: string) => string; // 関数の型注釈
greet = function(name: string) {
    return `Hello, ${name}`;
}

const sum:(a:number, b:number) => number = (a,b) => a + b; // 関数の型注釈と実装を同時に行うことも可能


