// トップレベルにimportがあるため、moduleとして扱われ、exportしないと外部からアクセスできない
// トップレベルにimportがない場合はスクリプトとして扱われ、グローバルアクセスが可能
import {
    P1,
    square,
    Rectangle,
    type Point,
    type LengthUnit
} from './calc';

console.log(P1); // 3.14

const result = square(5);
console.log(result); // 25

const rect = new Rectangle(10, 20);
console.log(rect.getArea()); // 200

const point: Point = { x: 10, y: 20 };
let unit: LengthUnit = 'cm';