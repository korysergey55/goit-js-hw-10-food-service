import './styles.css';
import './js/first-commit';

 //импорт по default
// import print from './js/first-commit';
// print("hi how are you");
// console.log(print);

// Именованный импорт 1
// import {test, printText} from './js/first-commit';
// console.log(test);
// printText('Именованный импорт');

// Именованный импорт 2
import * as object from './js/first-commit';
console.log(object.test);
object.printText('rdrdfdf');