interface Person {
    readonly  id : number;
    name: string;
    age?: number; // ? 代表非必选
}

let viking : Person = {
    id : 1,
    name: 'viking',
    age: 10
}

// viking.id = 1;  //报错,id是只读的,  readonly一般是用在属性上面
