// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

const find = (target: number, arr: number[]) => {
  let low = 0;
  let high = arr.length - 1;
  let count = 0;
  while (low < high) {
    let mid = (low + high) / 2;
    if (arr[mid] === target) {
      return count;
    } else if (arr[mid] > target) {
      high = mid;
    } else if (arr[mid] < target) {
      low = mid;
    }
    count++;
  }
  console.log(count);
  return false;
};

let a = find(2, [1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log(a);
