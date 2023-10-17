// 2. Perform sorting of an array in descending order.

function sortDescending(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] < arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
}

const numbers = [5, 2, 9, 1, 5, 6];

sortDescending(numbers);

console.log(numbers); // O/p: [9, 6, 5, 5, 2, 1]
