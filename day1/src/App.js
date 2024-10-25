import { obj } from "./Data";

console.log(obj.age);

const App = () => {
  return <>hi</>;
};

export default App;

console.log(obj);
//CallBack Function
function greeting(fname, callback) {
  console.log(`Hi ${fname}`);
  callback();
}
function appre() {
  console.log("Great Work");
}

greeting("Masha", appre);

//asynchrono
//const Asy = () => {}; //Arroe Function

console.log("Start");
setTimeout(() => {
  console.log("After Some Delay");
}, 2000);
console.log("Stop");

//Destructuring
const { name, age } = obj;
console.log(name);

//rest like spread  it use (...)
const { dept, ...others } = obj;
console.log(dept);
console.log(others);
