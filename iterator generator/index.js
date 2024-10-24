const iterator = (limit) => {
    let count = 0;
    return {
        next: function() {
            if(count < limit){
                return { value: ++count, done: false};
            }else{
                return {value: undefined, done: true};
            }
        },
    };
};
const it = iterator(5);
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

function* generator(limit) {
    let val = 1;
    while(val <= limit) yield val++;
}

const gen = generator(5);
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());


