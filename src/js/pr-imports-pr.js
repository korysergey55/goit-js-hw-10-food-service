//импорт по default
import printText from './pr-exports-pr';
printText('импорт по default');
console.log(printText);

// Именованный импорт 1
import { test1, printText1 } from './pr-exports-pr';
printText1(test1);

// Именованный импорт 2
import * as object from './pr-exports-pr';
object.printText2(object.test2);
