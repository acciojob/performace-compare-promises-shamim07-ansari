// Array of API URLs to fetch data from
const apiUrls = [
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/todos/2",
  "https://jsonplaceholder.typicode.com/todos/3",
  "https://jsonplaceholder.typicode.com/todos/4",
  "https://jsonplaceholder.typicode.com/todos/5",
  "https://jsonplaceholder.typicode.com/todos/6",
  "https://jsonplaceholder.typicode.com/todos/7",
  "https://jsonplaceholder.typicode.com/todos/8",
  "https://jsonplaceholder.typicode.com/todos/9",
  "https://jsonplaceholder.typicode.com/todos/10",
];

// You can write your code here
let promises = new Array(5);

for (let i = 0; i < promises.length; i++) {
      promises[i] = fetch(apiUrls[i]);
}

let outputAll = document.getElementById('output-all');

let d1 = new Date();
Promise.all(promises).then((res) =>{
  let d2 = new Date();
  outputAll.innerText = d2-d1;
})

let outputAny = document.getElementById('output-any');
let d3 = new Date();
Promise.any(promises).then((res)=>{
  let d4 = new Date();
  outputAny.innerText = d4-d3;
})