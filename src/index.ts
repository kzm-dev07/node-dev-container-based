const list: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 2, 4];

const startTime = new Date().toLocaleString();
console.log(startTime);

// indexOfが毎回配列を先頭から探すため、実質的に二重ループ
const uniqueValues = list.filter((value, i) => list.indexOf(value) === i);

const endTime = new Date().toLocaleString();
console.log(endTime);

console.log(uniqueValues);
