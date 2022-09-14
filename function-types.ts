function add(x:number, y:number):number {
    return  x + y;
}

add(1,2)
// add(1,"2")
// add(1,2,3)

let  result = add(1,2) //result 就变成了number类型

//----------------------------------------------------------------

const add1 = (x:number, y:number):number  =>{
    return  x + y;
}

let add2 : (x: number, y: number) => number = add1  //函数类型

//----------------------------------------------------------------

interface ISum {
    (x:number, y:number):number
}

let add3 : ISum = add1
