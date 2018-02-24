// Var Let Const
//function fire(bool){
//     if (bool) {
//         let foo = 'bar';
//         console.log(foo);
//     }else{
//         console.log(foo)
//     }
// }
//
// fire(true);
// fire(true);
//
// const names = ['john', 'frank'];
//
// names.push('pete');
//
// console.log(names);


//Arrows
// class TaskCollection {
//     constructor(tasks=[]){
//         this.tasks = tasks;
//     }
//     prepare(){
//         // this.tasks.forEach((task, i) => task.toGulp(i) )
//         this.tasks.forEach((task, i) => console.log(this) )
//     }
// }
// class Task{
//     toGulp(n){
//         console.log('prepare to gulp' + n);
//     }
// };
//
// new TaskCollection([
//     new Task, new Task, new Task
// ]).prepare()

//Default
// function defaultDiscount(){
//     return .20;
// }
// function applyDiscount( cost, discount = defaultDiscount() ){
//     return cost - ( cost * discount );
//
// }
// alert( applyDiscount(100) )

//spread reast operator
// function sum(...numbers){
//     return numbers.reduce(function(prev, curr){
//         return prev + curr
//     });
// }
// console.log(sum(1,2,3,4,5))

function sum(x, y){
    return x + y;
}
let nums = [1,2]

console.log(...nums)
