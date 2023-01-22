//ex-1
// ### 1. ****[Скрыть элемент по нажатию кнопки](https://learn.javascript.ru/introduction-browser-events#skryt-element-po-nazhatiyu-knopki)****
// Добавьте JavaScript к кнопке `button`, чтобы при нажатии элемент `<div id="text">Remove me</div>` исчезал.
/* <body>
<input type="button" id="hider" value="Нажмите, чтобы спрятать текст" />
<div id="text">Текст</div>
<script> */
  /* ваш код */
  document.getElementById('hider').onclick = ()=> {
    document.getElementById('text').hidden = true;
  }
// </script>
// </body>

//ex-2
// ### 2. ****[Какой обработчик запустится?](https://learn.javascript.ru/introduction-browser-events#kakoy-obrabotchik-zapustitsya)****
// В переменной `button` находится кнопка. Изначально на ней нет обработчиков.
// Который из обработчиков запустится? Что будет выведено при клике после выполнения кода?
button.addEventListener("click", () => alert("1"));
button.removeEventListener("click", () => alert("1"));
button.onclick = () => alert(2);
//Answer: both of them: 1 and 2, due to the 1st added eventListener was not saved

//ex-3
// ### 3. ****[Добавить кнопку закрытия](https://learn.javascript.ru/introduction-browser-events#dobavit-knopku-zakrytiya)****
// Есть список сообщений.
// При помощи JavaScript для каждого сообщения добавьте в верхний правый угол кнопку закрытия.
// Результат, который должен получится можете [посмотреть по ссылке](https://learn.javascript.ru/task/hide-message).

let neededClasses = document.querySelectorAll('.pane');

    for(let eachClass of neededClasses) {
      eachClass.insertAdjacentHTML("afterbegin", '<button class="remove-button">[x]</button>');
      // кнопка становится первым потомком плитки (pane)
      eachClass.firstChild.onclick = () => eachClass.remove();
    }
//in CSS added in h3 and p: text-align: start;
// and in .pane:
// display: block;
// justify-content: flex-end;
// text-align: end;
