namespace Generics {
    // ----- 関数の型パラメータ -----
    // Tは型パラメータ
    function getLastItem<T>(array: T[]): T {
        return array[array.length - 1];
    }

    const stringArray = ['a', 'b', 'c'];
    const numberArray = [1, 2, 3];

    // 明示的に型パラメータを指定することも可能
    const lastString = getLastItem<string>(stringArray);

    // 型注釈を省略しても型推論により型パラメータが推論される
    const lastNumber = getLastItem(numberArray);


    // 複数の型パラメータを持つ関数、デフォルトの型パラメータを指定することも可能
    function createPair<T = number, U = string>(first: T, second: U): { first: T, second: U } {
        return { first, second };
    }

    const stringNumberPair = createPair(1, 'a');


    // ----- インターフェースの型パラメータ -----
    // interface
    interface Pair<T> {
        first: T;
        second: T;
    }

    let stringPair: Pair<string> = {
        first: 'a',
        second: 'b'
    };


    let numberPair: Pair<number> = {
        first: 1,
        second: 2
    };

    // ----- クラスの型パラメータ -----
    class DataStorage<T> {
        private items: T[] = [];

        add(item: T) {
            this.items.push(item);
        }

        getItem(index: number): T {
            return this.items[index];
        }

        getAllItems(): T[] {
            return this.items;
        }
    }

    let numberStorage = new DataStorage<number>();
    numberStorage.add(1);
    console.log(numberStorage.getAllItems());

    let stringStorage = new DataStorage<string>();
    stringStorage.add('a');
    console.log(stringStorage.getAllItems());


    class PairData<T, U> {
        private first: T;
        private second: U;

        constructor(first: T, second: U) {
            this.first = first;
            this.second = second;
        }
    }

    let pair = new PairData(1, 'a');

    // ジェネリッククラスの継承も可能
    class DataStorageLogger extends DataStorage<number> {
        printAll() {
            console.log(this.getAllItems());
        }
    }

    let numberStorageLogger = new DataStorageLogger();
    numberStorageLogger.add(1);
    numberStorageLogger.printAll();

    // ジェネリックインターフェースのimplements
    interface IStorage<T> {
        add(item: T): void;
        getItem(index: number): T;
        getAllItems(): T[];
    }

    class Storage<T> implements IStorage<T> {
        private data: T[] = [];
        add(item: T): void {
            this.data.push(item);
        }

        getItem(index: number): T {
            return this.data[index];
        }

        getAllItems(): T[] {
            return this.data;
        }
    }

    let storage = new Storage<number>();
    storage.add(1);
    console.log(storage.getAllItems());


    // ----- ジェネリック型の制約 -----
    // extendsで型パラメータの制約を指定する
    function getFirstItem<T extends string | number>(array: T[]): T {
        return array[0];
    }

    // keyof演算子との組み合わせ

    const person = {
        name: 'Taro',
        age: 30
    };

    function getProp<T, K extends keyof T>(obj: T, key: K): T[K] {
        return obj[key];
    }

    let name = getProp(person, 'name');
} 