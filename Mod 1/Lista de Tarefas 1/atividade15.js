let a = 0
let b = 1

console.log(a); // 0
console.log(b); // 1

for (let i = 2; i < 10; i++) {
    const c = a + b
    console.log(c)
    a = b;
    b = c
}
