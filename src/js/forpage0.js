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

      td2.innerHTML = last_id;
      td3.innerHTML = '<select><option>Пары</option><option>Еда</option></select>';
      td4.innerHTML = '<input type="range" min="1" max="3" step="1">';
      td5.innerHTML = '<input type="range" min="10" max="18" step="1">';
      td6.innerHTML = '<button id="'+'butId'+parseInt(last_id)+'" class="button_delete" onClick="remove_row(this.id)">X</button>';
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
