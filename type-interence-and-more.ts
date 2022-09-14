//类型推断
let str = 'str';

let numberOrString : number | string;

function getLength(input: string | number) : number {
    const str = input as string; //as 类型断言, 强制为某个类型
    if(str.length) {
        return str.length
    }else {
        const number = input as number;
        return number.toString().length;
    }
}

//----------------------------------------------------------------
function getLength2(input: string | number) : number {
    if(typeof input === 'string') {  //ts在条件语句中智能推荐了类型
        return input.length
    }
}
