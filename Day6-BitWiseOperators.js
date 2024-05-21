'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on('end', (_) => {
  inputString = inputString
    .trim()
    .split('\n')
    .map((string) => {
      return string.trim();
    });

  main();
});

function readLine() {
  return inputString[currentLine++];
}

function getMaxLessThanK(n, k) {
  let maxValue = 0;
  for (let b = n; b > 1; b--) {
    for (let a = b - 1; a > 0; a--) {
      let currentAnd = a & b;
      if (currentAnd < k && currentAnd > maxValue) {
        maxValue = currentAnd;
      }

      if (maxValue === k - 1) {
        return maxValue;
      }
    }
  }
  return maxValue;
}

function main() {
  const q = +readLine();

  for (let i = 0; i < q; i++) {
    const [n, k] = readLine().split(' ').map(Number);

    console.log(getMaxLessThanK(n, k));
  }
}
