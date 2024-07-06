namespace ClassMemo {
    class Person {
        name: string;
        age: number;
        constructor(name: string, age: number) {
            this.name = name;
            this.age = age;
        }

        greet() {
            console.log('My name is ' + this.name + ' and I am ' + this.age + ' years old!');
        }
    }


    const person = new Person('John', 30);
    person.greet();

    // 構造的型付け
    let person2: Person;
    person2 = {
        name: 'John',
        age: 30,
        greet() {
            console.log('My name is ' + this.name + ' and I am ' + this.age + ' years old!');
        }
    }


    // ----- 継承 -----
    class Parent {
        name: string;
        constructor(name: string) {
            this.name = name;
        }
    }

    class Child extends Parent {
        age: number;
        constructor(name: string, age: number) {
            super(name);
            this.age = age;
        }
    }

    // スーパークラスの型が指定されている場合、それを継承するサブクラスは代入可能
    const child: Parent = new Child('John', 30);

    // getter, setter
    class Person3 {
        constructor(private _name: string) { }

        get name() {
            return this._name;
        }

        set name(value: string) {
            this._name = value.toUpperCase();
        }
    }

    const person3 = new Person3('John');
    console.log(person3.name);
    person3.name = 'Tom';
    console.log(person3.name);

}
