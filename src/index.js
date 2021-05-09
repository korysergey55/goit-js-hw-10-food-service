import './styles.css';
import './js/first-commit';
import menu from './menu.json';

 //импорт по default
import printText from './js/first-commit';
printText('импорт по default');
console.log(printText);

// Именованный импорт 1
import {test1, printText1} from './js/first-commit';
printText1(test1);

// Именованный импорт 2
import * as object from './js/first-commit';
object.printText2(object.test2);