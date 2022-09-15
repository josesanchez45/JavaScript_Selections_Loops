console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
for (let i = 1; i < 100; i++) {
  if (i % 2 == 0) {
    continue;
  } else console.log(i);
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
for (let i = 1; i < 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log(i, "FIZZBUZZ");
  } else if (i % 3 == 0) {
    console.log(i, "FIZZ");
  } else if (i % 5 == 0) {
    console.log(i, "BUZZ");
  }
}
//Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");
x = 1;
do {
  console.log(x);
  x += 2;
} while (x < 100);

let i = 1;
while (i <= 100) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log(i, "FIZZBUZZ");
  } else if (i % 3 == 0) {
    console.log(i, "FIZZ");
  } else if (i % 5 == 0) {
    console.log(i, "BUZZ");
  }
  i++;
}
// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");
let value = Math.round(Math.random() * 500);
let n = Math.round(Math.random() * (500 - 100) + 100);
for (let i = 1; i <= n; i++) {
  if (i == value) {
    console.log("Found value!");
    break;
  } else console.log("Did not find value");
}

//Exercise 5 Section bonus
let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
n = Math.round(Math.random() * (1000 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);