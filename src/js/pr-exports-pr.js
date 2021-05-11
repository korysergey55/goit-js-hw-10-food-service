
console.log('4444444');
//экспорт по default
const test = 'экспорт по default';

function printText(string) {
  const newelement = document.createElement('p');
  newelement.textContent = string;
  newelement.style.color = 'green';
  const enterTo = document.querySelector('.new-p');
  enterTo.append(newelement);
}
printText(test);
export default printText;

//Именованный экспорт 1
// export const test1 = 'Именованный экспорт 1';
// export function printText1(string) {
//   console.log(string);
// }
// printText1(test1);

//Именованный экспорт 2
// const test2 = 'Именованный экспорт 2';
// function printText2(string) {
//   console.log(string);
// }
// printText2(test2);
// export { test2, printText2 };
