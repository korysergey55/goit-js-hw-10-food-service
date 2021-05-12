// Задача
// 1) При каждом изменении любого элемента формы, кроме пароля, записывать его новое значение в LocalStorage. Значения всех инпутов должны храниться в объекте (имя инпута: значение)
// 2) При перезагрузке страницы нужно считывать информацию из LocalStorage, и если там есть сохраненные данные - записывать их в значения элементов формы (автозаполнение формы)
// 3) При сабмите формы должна очищаться не только форма, но и LocalStorage
// 4) Считывание данных из LocalStorage должно быть безопасным и вынесено в отдельную функцию

const form = document.querySelector('#sign-in');

form.addEventListener('input', onInput);
form.addEventListener('submit', onSubmit);

const formKey = 'userData';

// let savedData = {
//   address: 'asdasd',
//   city: 'Kyiv',
//   email: 'sdassadas',
// };

// ['address', 'city', 'email'];

let savedData = getLocalStorageData(formKey);

function getLocalStorageData(key) {
  try {
    return JSON.parse(localStorage.getItem(key)) ?? {};
  } catch (error) {
    return {};
  }
}

Object.keys(savedData).forEach(key => {
  form.elements[key].value = savedData[key];
});

// Object.entries(savedData).forEach(([key, value]) => {
//   form.elements[key].value = value;
// });

function onInput(event) {
  const input = event.target;

  if (input.name === 'password') {
    return;
  }

  savedData[input.name] = input.value;

  localStorage.setItem(formKey, JSON.stringify(savedData));

  // savedData = {
  //   ...savedData,
  //   [input.name]: input.value,
  // };
}

function onSubmit(event) {
  event.preventDefault();
  event.currentTarget.reset();
  localStorage.removeItem(formKey);
  savedData = {};
}

//
//

// const formKey = 'form';
// const form = document.querySelector(formKey);
// let formData = getLocalStorageData(formKey);
// Object.keys(formData).forEach(
//   key => (form.elements[key].value = formData[key]),
// );
// form.oninput = e => {
//   const input = e.target;
//   if (input.name === 'password') return;
//   formData[input.name] = input.value;
//   localStorage.setItem(formKey, JSON.stringify(formData));
// };
// form.onsubmit = e => {
//   e.preventDefault();
//   e.currentTarget.reset();
//   formData = {};
//   localStorage.removeItem(formKey);
// };
// function getLocalStorageData(key) {
//   try {
//     return JSON.parse(localStorage.getItem(key)) ?? {};
//   } catch (error) {
//     return {};
//   }
// }
//

// const form = document.querySelector('#sign-in');

// const formDataKey = 'formData';

// form.addEventListener('input', handleInput);
// form.addEventListener('submit', handleSubmit);

// const savedData = getItemFromLocalStorage(formDataKey);

// Object.keys(savedData).forEach(key => {
//   if (form.elements.hasOwnProperty(key)) {
//     form.elements[key].value = savedData[key];
//   }
// });

// function handleInput(event) {
//   const input = event.target;

//   if (input.name === 'password') {
//     return;
//   }

//   const savedData = getItemFromLocalStorage(formDataKey);

//   const formData = {
//     ...savedData,
//     [input.name]: input.value,
//   };

//   localStorage.setItem(formDataKey, JSON.stringify(formData));
// }

// function handleSubmit(event) {
//   event.preventDefault();
//   const form = event.currentTarget;
//   form.reset();
//   localStorage.removeItem(formDataKey);
// }

// function getItemFromLocalStorage(formDataKey) {
//   try {
//     return JSON.parse(localStorage.getItem(formDataKey)) ?? {};
//   } catch (err) {
//     console.log(err.message);
//     return {};
//   }
// }
