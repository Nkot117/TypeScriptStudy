namespace AdvancedType {
    // ----- 型ガード -----
    const unknown: unknown = "Hello World!";
    if(typeof unknown === 'string') {
        // typeofにより、この中ではstringに絞り込まれる
        console.log(unknown.toUpperCase());
    }
    
    
    // ----- ユーザー定義型ガード -----
    function isString(value: unknown): value is string { // ユーザー独自に型ガードを定義できる
        return typeof value === 'string';
    }

    function printValue(value: string | number) {
        if (isString(value)) {
            // ユーザー定義型ガードを使って、valueの型を絞り込むことができる
            console.log(value.toUpperCase());
        } else {
            console.log(value);
        }
    }

    // ----- 型アサーション -----
    const value: unknown = "Hello World!";
    let text: string;
    text = value as string; // 型アサーションを使って、valueの型をstringに上書きする

    // 型アサーションはサブタイプ・スーパータイプの関係にあるものが使える
    const foo: number = 1;
    const bar: string = foo as string; // これはエラーとなる

    // constアサーション

    const obj = { foo: 'foo', bar: 'bar' } as const;
    obj.foo = 'bar';

    // ----- 型演算子 -----
    // keyof演算子
    interface User {
        name: string;
        age: number;
        location: string;
    }

    type UserKey = keyof User; // Userのプロパティ名を取得し、ユニオン型として返す
    // UserKeyは "name" | "age" | "location"

    function getProp(obj: User, key: UserKey) { // UserKeyを使って、Userに定義されているプロパティ名のみを受け付けるように制限できる
        return obj[key];
    }

    const user: User = {
        name: 'Taro',
        age: 20,
        location: 'Tokyo'
    };


    console.log(getProp(user, 'name')); 

    // ----- typeof演算子 -----
    const obj2 = {
        foo: 'foo',
        bar: 'bar'
    };

    type ObjType = typeof obj2; // obj2の型情報を取得する
    // ObjTypeは { foo: string, bar: string }

    // ----- keyofとtypeofの組み合わせ -----
    function getProp2(obj:typeof obj2, key: keyof typeof obj2) { // keyofとtypeofを組み合わせて、オブジェクトのプロパティ名を取得し、そのプロパティの型を取得する
        // 型情報(interfaceやtype)がなくても、オブジェクトからプロパティ名を取得し、そのプロパティの型を取得できる
        return obj[key];
    }
}
