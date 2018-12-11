let a = 2;
let b = 5;
let c;
let d = 1000;

for (let i = 0; i < 5; i++) {
    if (i > a && i < b) {
        c = 1000;
    }
    if (i === 3) {
        d *= 2;
    }
}

console.log(a);
console.log(b);
console.log(c);
console.log(d);
