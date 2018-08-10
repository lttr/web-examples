// see http://www.ecma-international.org/ecma-262/6.0/#sec-for-statement-runtime-semantics-labelledevaluation

for (let i = 0; i < 3; i++) {
    console.log(i);
} // 0, 1, 2

for (var i = 0; i < 3; i++) {
    console.log(i);
} // 0, 1, 2

for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i));
} // 0, 1, 2

for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i));
} // 4, 4, 4

for (let i = 0; i < 3; i++) {
    console.log(i);
    i++;
} // 0, 2

for (var i = 0; i < 3; i++) {
    console.log(i);
    i++;
} // 0, 2

for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i));
    i++;
} // 1, 3

for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i));
    i++;
} // 4, 4