var login=getCookie('login');
var pass=getCookie('pass');

var day = 0;
var group_id = get_group_id(login,pass);
var events_id = get_tmtbl_id(group_id, day);
events_id=events_id.concat(get_raw_events(login, pass, day));

var res = get_schedule(login, pass, day);

var events_for_choosing = raw_events_table(events_id, group_id, day); // Массив всех возможных задач
var d = document,
      last_id_okno = 0,
      last_id_index = 0;

function init() { // При открытии страницы выполняем:
      check=check_if_logged_in();
      if (check==-1) {
            window.location.replace("login.html");
      }
      adding_rows_okno(events_for_choosing);
      // плюс в этой функции нужно выводить время не в пятиминутках
}

function return_butt() {
      window.location.replace("#");
}

function add_row() {
      window.location.replace("#okno"); // По нажатии кнопки
}

function adding_rows_okno(events_for_choosing) {

      // Создаем строки в таблице в окне, чтобы мы могли добавить событие в расписание
      for (var r=0; r<events_for_choosing.length; r++) {
            var tbody = d.getElementById('add_task_table').getElementsByTagName('tbody')[0];
            var row = d.createElement("tr");
            row.id = "rowIdOkno"+parseInt(last_id_okno);
            tbody.appendChild(row);
            var td1 = d.createElement("td");
            var td2 = d.createElement("td");
            var td3 = d.createElement("td");
            var td4 = d.createElement("td");
            var td5 = d.createElement("td");
            row.appendChild(td1);
            row.appendChild(td2);
            row.appendChild(td3);
            row.appendChild(td4);
            row.appendChild(td5);
            td1.innerHTML = events_for_choosing[r];
            td4.innerHTML = '<input type="range" min=1 max=3 value=2>';
            td5.innerHTML = '<button id="buttonIdOkno'+parseInt(last_id_okno)+'" class="button_add" onClick="to_index_table(this.id)">+</button>';
            last_id_okno++;
      }
}

function to_index_table(btnId) {
      // Создание в index строки с данными из okno

      idBtnRight = Number(btnId.slice(12,30));
      var row_to_copy = d.getElementById('rowIdOkno'+parseInt(idBtnRight));
      var row = d.createElement("tr");
      row.id = "rowIdIndex"+parseInt(last_id_index);
      var tbody = d.getElementById('tasks').getElementsByTagName('tbody')[0];
      tbody.appendChild(row);

      var td1 = d.createElement("td");
      var td2 = d.createElement("td");
      var td3 = d.createElement("td");
      var td4 = d.createElement("td");
      var td5 = d.createElement("td");
      
      row.appendChild(td1);
      row.appendChild(td2);
      row.appendChild(td3);
      row.appendChild(td4);
      row.appendChild(td5);


      td1.innerHTML = row_to_copy.getElementsByTagName('td')[0].textContent;
      td2.innerHTML = row_to_copy.getElementsByTagName('td')[1].textContent;
      td3.innerHTML = row_to_copy.getElementsByTagName('td')[2].textContent;
      td4.innerHTML = row_to_copy.getElementsByTagName('td')[3].textContent;
      td5.innerHTML = '<button id="buttonIdIndex'+parseInt(last_id_index)+'" class="button_delete" onClick="remove_row_index(this.id)">X</button>';
      last_id_index += 1;

      window.location.replace("#");
}

function remove_row_index(buttonIdToRemove) {
      idToRemove = Number(buttonIdToRemove.slice(13,20));
      rowIdToRemove = 'rowIdIndex'+idToRemove;
      // Находим нужную таблицу
      var tbody = d.getElementById('tasks').getElementsByTagName('tbody')[0];
      // В таблице удаляем строку с id "buttonIdToRemove"
      var toRemove = d.getElementById('tasks').getElementsByTagName('tr')[idToRemove+1];
      // Удаляем нужную строку
      tbody.removeChild(toRemove);
      last_id_index -= 1;


      // Обновляем индексы кнопок
      for (var i=idToRemove; i<last_id_index; i++){ // Пройдемся по строкам,
      // следущими за buttonIdToRemove, и перенесем id каждого на единицу вверх (уменьшим id)
            d.getElementById('buttonIdIndex'+parseInt(i+1)).id = 'buttonIdIndex'+parseInt(i);
      // Обновляем индексы строк в таблице
            d.getElementById('rowIdIndex'+parseInt(i+1)).id = 'rowIdIndex'+parseInt(i);
      }

      /*
      // Здесь нумерация строк на будущее.
      // А теперь обновим числа в столбце "#":
            var nextToRemove = d.getElementById('tasks').getElementsByTagName('tr')[i-1].getElementsByTagName('td')[0];
            nextToRemove.innerHTML = parseInt(i-1);
      }
      */
}

function raw_events_table(events_id, group_id, day) {
      // Возвращает названия задач, чтобы пользователь смог добавить задачи в расписание 
      var onlines = []; // Массив названий онлайн-дисциплин
      var lesson_names = []; // Массив названий учебных офлайн-занятий
      var elective_names = []; // Массив названий учебных дополнительных офлайн-занятий

      for (var i = 0; i < events_id.length; i+=2) {
            if(events_id[i]>210)
            onlines.push(get_online(login, pass, events_id[i])[0]);
      }

      for (var i = 0; i < events_id.length; i++) {
            //console.log(events_id[i]);
            if(events_id[i]>200&&events_id[i]<=210)
            lesson_names.push(get_lesson_name(events_id[i], group_id, day));
            //elective_names.push(get_elective_name(events_id[i], day));
            //такой функции (elective_names) пока нет
      }
      console.log(lesson_names);
      var events_for_choosing = lesson_names.concat(elective_names, onlines);
      return events_for_choosing;
}

function form_schedule() {
      var choosed_events_names = [];
      for (var i = 0; i < last_id_index; i++) {
            choosed_events_names.push(d.getElementById("rowIdIndex"+parseInt(i)).getElementsByTagName("td")[0].textContent);
      }
      console.log(choosed_events_names);
      var choosed_events_id = [];
      for (var i=0; i < choosed_events_names.length; i++){
            for (var j=0; j < events_for_choosing.length; j++){
                  if (events_for_choosing[j]==choosed_events_names[i]){
					  choosed_events_id.push(events_id[j]);
					  break;
				  }
            }
      }
      
      console.log(choosed_events_id);
      if (choosed_events_id.length>12)
            window.alert("Не многовато? Выберите двенадцать событий или меньше! Тринадцатое несчастливое");
      else {
            write_raw_events(login, pass, day, choosed_events_id);
			var res1 = calc(login, pass, day);
			write_schedule(login, pass, day, res1);
			console.log(res1);
            window.location.replace("output.html");
      }
}