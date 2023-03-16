
let x = 3
function makeAdder(x) {
    x = 6
    function add(y) {
        return x + y;
    }
    return add;
}
const add5 = makeAdder(5);
const add10 = makeAdder(10);
const add1 = makeAdder(8);

console.log(add5(2))
console.log(add10(6))
console.log(add1)
console.log(makeAdder)


const arr_1 = ['apple', 'orange', 'grape'];
const arr_2 = ['pineapple', 'oerries', 'banana'];

const arr_3 = [].concat(arr_1, arr_2);
arr_3.unshift('guava')
arr_3.push('pear')
arr_3[5] = "strawberry"

console.log(arr_3)


