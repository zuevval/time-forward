/* Раскомментировать
login=getCookie('login');
pass=getCookie('pass');

var day = 0,
      usr_id = get_id_from_url(),
      events_id = get_raw_events_id(usr_id, day);
*/

// events_for_choosing = raw_events_table(events_id) // Массив всех возможных задач
events_for_choosing = ['матан', 'линал', 'физра', 'матмод', 'физика', 'спм']; // пример

function loginpass() { // При открытии страницы выполняем:
      // if (login==-1||pass==-1) window.alert("Пожалуйста, авторизуйтесь");
      // Здесь должен быть редирект на страницу логина

      // Заполним ячейку выбора в первой строке списком events_for_choosing:
      var select = d.createElement("select");
      for (var i = 0; i < events_for_choosing.length; i++) {
            var option = d.createElement("option");
            option.text = events_for_choosing[i];
            select.appendChild(option);
      }
      select.id = "select"+last_id;
      td1 = d.getElementById('firstRowId');
      td1.appendChild(select);
}

var d = document,
      last_id = 1;

function add_row() {
      // Находим нужную таблицу
      var tbody = d.getElementById('tasks').getElementsByTagName('tbody')[0];

      // Создаем строку таблицы и добавляем ее
      var row = d.createElement("tr");
      row.id = "rowId"+parseInt(last_id+1);
      tbody.appendChild(row);

      // Создаем ячейки в вышесозданной строке
      var td2 = d.createElement("td");
      var td3 = d.createElement("td");
      var td4 = d.createElement("td");
      var td5 = d.createElement("td");
      var td6 = d.createElement("td");
      
      row.appendChild(td2);
      row.appendChild(td3);
      row.appendChild(td4);
      row.appendChild(td5);
      row.appendChild(td6);

      last_id += 1;

      // Создадим меню выбора:
      var select = d.createElement("select");
      for (var i = 0; i < events_for_choosing.length; i++) {
            var option = d.createElement("option");
            option.text = events_for_choosing[i];
            select.appendChild(option);
      }
      select.id = "select"+last_id;
      td3.appendChild(select);

      td2.innerHTML = last_id;
      td4.innerHTML = '<input type="range" min="1" max="3" step="1">';
      td5.innerHTML = '<input type="range" min="10" max="18" step="1">';
      td6.innerHTML = '<button id="butId'+parseInt(last_id)+'" class="button_delete" onClick="remove_row(this.id)">X</button>';
}

function remove_row(buttonIdToRemove) {
      idToRemove = Number(buttonIdToRemove.slice(5,20));
      rowIdToRemove = 'rowId'+idToRemove;

      // Находим нужную таблицу
      var tbody = d.getElementById('tasks').getElementsByTagName('tbody')[0];
      // В таблице удаляем строку с id "buttonIdToRemove"
      var toRemove = d.getElementById('tasks').getElementsByTagName('tr')[idToRemove];
      // Удаляем нужную строку
      tbody.removeChild(toRemove);

      // Обновляем индексы кнопок
      for (var i=idToRemove+1; i<=last_id; i++){ // Пройдемся по строкам,
      // следущими за buttonIdToRemove, и перенесем id каждого на единицу вверх (уменьшим id)
            d.getElementById('butId'+parseInt(i)).id = 'butId'+parseInt(i-1);
      // Обновляем индексы строк в таблице
            d.getElementById('rowId'+parseInt(i)).id = 'rowId'+parseInt(i-1);
      // А теперь обновим числа в столбце "#":
            var nextToRemove = d.getElementById('tasks').getElementsByTagName('tr')[i-1].getElementsByTagName('td')[0];
            nextToRemove.innerHTML = parseInt(i-1);
      }
      
      last_id -= 1;
}

function raw_events_table(events_id) {
      // Возвращает названия задач, чтобы пользователь смог добавить задачи в расписание 
      onlines = []; // Массив названий онлайн-дисциплин
      lesson_names = []; // Массив названий учебных офлайн-занятий
      elective_names = []; // Массив названий учебных дополнительных офлайн-занятий

      for (var i = 0; i < events_id.length; i+=2) {
            onlines.push(get_online(login, pass, events_id[i]));
      }

      for (var i = 0; i < events_id.length; i++) {
            lesson_names.push(get_lesson_name(events_id[i], group_id));
            elective_names.push(get_elective_name(events_id[i], day));
      }

      /*
      Использовал функции:
      get_online(login, pass, online_id);
      get_lesson_name(lesson_id, group_id);
      get_elective_name(elective_id, day);
      */

      var events_for_choosing = onlines+lesson_names+elective_names;
      return events_for_choosing;
}

function form_schedule() {
      /*
            * Возвращает двумерный массив: [row][name, priority, time]
            * Все элементы в массиве нумеруются с 0 !!! А в программе строки имеют
            * своими атрибутами числа 1 и больше. Это значит, чтобы получить доступ
            * к самой первой строке массива, выполняем:
            * >>choosed_events[0][0] // 'первая' строка, 'имя' элемента
      */

      choosed_events = [];
      /*for (var i = 1; )
      d.getElementById("select3").value;*/
      console.log(choosed_events);
      /* Раскомм.
      calc(usr_id, day);
      redirect_to_output_page(usr_id);
      write_raw_events_id(events_id, day);
      */
}
