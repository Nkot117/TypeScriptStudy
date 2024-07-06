// ----- Interface -----
interface Person {
    readonly name: string;
    age: number;
    greet(): void;
}

const person: Person = {
    name: 'John',
    age: 30,
    greet() {
        console.log('My name is ' + this.name + ' and I am ' + this.age + ' years old!');
    }
};

person.greet();

// ----- インデックスシグネチャ -----
interface FruitStock {
    [i: string]: number; // index signature キー名は動的に設定可能
}

const fruit: FruitStock = {}
fruit.apple = 10;
fruit.banana = 20;
console.log(fruit);


interface Product {
    [i: `product_${number}`]: string; // キー名をテンプレート文字列で制限
}

const product: Product = {}
product.product_1 = 'apple';
product.product_2 = 'banana';
console.log(product);

// ----- インターフェースの拡張 -----
interface Vehicle {
    speed: number;
}

interface Bike extends Vehicle {
    wheels: number;
}

const bike: Bike = {
    speed: 30,
    wheels: 2
};

// ----- インターフェースのマージ -----
interface Student {
    name: string;
}

interface Student {
    degree: string;
}

// ２つの同名のインターフェースは自動的にマージされる
const student: Student = {
    name: 'Alice',
    degree: 'Bachelor'
};