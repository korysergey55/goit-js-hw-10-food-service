import menu from '../menu.json';

//const test = "hello world";
// function printText(string) {
//     console.log(string)
// }
// printText(test);
// console.log(menu);

//экспорт по default
//export default printText;

//Именованный экспорт 1
// export const test = "hello world";
// export function printText(string) {
//     console.log(string)
// }
// printText(test);
// console.log(menu);

//Именованный экспорт 2
const test = 'hello world';
function printText(string) {
  console.log(string);
}
printText(test);
console.log(menu);

export {test, printText};

