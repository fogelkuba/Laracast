// function fire(bool){
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

class TaskCollection {
    constructor(tasks=[]){
        this.tasks = tasks;
    }
    log(){
        this.tasks.forEach(function(task){
            console.log(task);
        })
    }
}
class Task{
    constructor(){
        
    }
};

new TaskCollection([
    new Task, new Task, new Task
])
