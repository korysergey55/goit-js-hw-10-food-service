// Task 1
// Вывести следующую разметку по данным ниже в див с классом content-placeholder:

// import makeMarkup from '../../templates/tasks.hbs';
// const container = document.querySelector('.content-placeholder');

/* <h1>London</h1>
<p>Baker Street</p>
<p>221B</p> */

// const context = {
//   city: 'London',
//   street: 'Baker Street',
//   number: '221B',
// };

// const markup = makeMarkup(context);
// container.innerHTML = markup;

//////////////////////////////////////////////////

// Task 2
// Вывести следующую разметку по данным studentsData из db в див с классом content-placeholder:

// import { studentsData } from '../../db/data';
// import makeStudentsMarkup from '../../templates/tasks.hbs';
// const markup = makeStudentsMarkup(studentsData);
// const placeholder = document.querySelector('.content-placeholder');

// placeholder.insertAdjacentHTML('beforeend', markup);
// placeholder.innerHTML = markup;

/* <h3>Students</h3>
  <ul> 
     <li>Homer Simpson</li>
     ...
  </ul>
  <h3>Courses</h3>
  <ul>
    <li>HTML</li>
    ...
  </ul> */

//////////////////////////////////////////////////

// Task 3
// Вывести следующую разметку по данным peopleData из db в ul с классом list-placeholder (использовать два варианта - reduce / map или сразу массив передаем ):

// import { peopleData } from '../../db/data';
// import makeMarkup from '../../templates/tasks.hbs';
// const listRef = document.querySelector('.list-placeholder');

// 1
//  <li>{{firstName}} {{lastName}}</li>
// const markup = peopleData.reduce((acc, elem) => acc + makeMarkup(elem), '');
// const markup = peopleData.map(elem => makeMarkup(elem)).join('');
// const markup = peopleData.map(makeMarkup).join('');

// 2
// {{#each this}}
//   <li>{{firstName}} {{lastName}}</li>
// {{/each}}
// const markup = makeMarkup(peopleData);

// listRef.innerHTML = markup;
/* <li>Homer Simpson</li> */

//////////////////////////////////////////////////

// Task 4
// Вывести следующую разметку по данным animalsData из db в див с классом content-placeholder.
// Если животное издает звук - выводить его - "Says: moooo".
// Если животное доброе - выводить "Kind animal ❤️",
// а если нет - выводить "Stay away from this animal! 😠"

// import makeAnimalsList from '../../templates/tasks.hbs';
// import { animalsData } from '../../db/data';
// const listRef = document.querySelector('.content-placeholder');

// const animalsList = makeAnimalsList(animalsData);
// listRef.innerHTML = animalsList;

/* <h3>Animals</h3>
<ul> 
  <li>
     <h4>cow</h4>
     <p>Says: moooo</p>
     <p>Kind animal ❤️</p>
  </li>
  ...
</ul> */
