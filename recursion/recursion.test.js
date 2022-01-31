/* Write a function to do the division operation without using the built-in division*/

function division(number, dividedBy) {
  if (dividedBy == 0 || number == 0) {
    return 0;
  } else if (number < dividedBy) {
    return 0;
  } else {
    let x = 0;
    number -= dividedBy;
    x++;
    return x + division(number, dividedBy);
  }
}

/* Write a function that implement Math.pow(x,n) but using recursion
Example:
pow(2,4) = 16
*/

function pow(x, n) {
  if (n === 0) {
    return 1;
  } else if (n == 1) {
    return x;
  } else {
    return x * pow(x, n - 1);
  }
}

/* The Fibonacci Series is a numeric series starting with the integers 0 and 1. In this series,
the next integer is determined by summing the previous two. This gives us:

0, 1, 1, 2, 3, 5, 8, 13, ...

Write a function that take n as parameter and return the nth element in the Fibonacci Series

Example: n = 4 ==> 3, n= 0 ==> 0, n = 3 ==> 2 */

function fibonacci(n) {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

/* The set [1, 2, 3, ..., n] contains a total of n! unique permutations.

By listing and labeling all of the permutations in order, we get the following sequence for n = 3:

"123"
"132"
"213"
"231"
"312"
"321"
Given n and k, return the kth permutation sequence.

Example: 
Input: n = 3, k = 3
Output: "213" */

function permutations(n) {
  let arr = [];
  if (n.length == 0) return [];
  if (n.length == 1) return [n];
  for (let i = 0; i < n.length; i++) {
    const currentN = n[i];
    const remainingN = n.slice(0, i).concat(n.slice(i + 1));
    const remainingNumsPermuted = permute(remainingN);
    for (let j = 0; j < remainingNumsPermuted.length; j++) {
      permutedArray = [currentN].concat(remainingNumsPermuted[j]);
      arr.push(permutedArray);
    }
    return arr(n);
  }
}
//   arr=+^(?:([1-n])(?!.*1)){n}$
//   return arr;
// }

describe("Test division", () => {
  test("Return the division result", () => {
    expect(division(10, 2)).toStrictEqual(5);
    expect(division(10, 0)).toStrictEqual(0);
    expect(division(0, 10)).toStrictEqual(0);
  });
});

describe("Test pow", () => {
  test("It should work as Math.pow(x,n)", () => {
    expect(pow(10, 2)).toStrictEqual(100);
    expect(pow(10, 0)).toStrictEqual(1);
    expect(pow(0, 0)).toStrictEqual(1);
  });
});

describe("Test fibonacci", () => {
  test("It should implement fibonacci series logic", () => {
    expect(fibonacci(0)).toStrictEqual(0);
    expect(pow(1)).toStrictEqual(1);
    expect(pow(2)).toStrictEqual(1);
    expect(pow(3)).toStrictEqual(2);
    expect(pow(4)).toStrictEqual(3);
  });
});

describe("Test permutations", () => {
  test("It should return a list of possible combinations", () => {
    expect(permutations([1, 2, 3], 3)).toStrictEqual([
      "123",
      "132",
      "213",
      "231",
      "312",
      "321",
    ]);
    expect(permutations[(1, 2, 3)], 0).toStrictEqual([]);
  });
});
