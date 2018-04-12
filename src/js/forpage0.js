var d = document,
      last_id = 1;

function add_row(){
      // находим нужную таблицу
      var tbody = d.getElementById('tasks').getElementsByTagName('tbody')[0];

      // создаем строку таблицы и добавляем ее
      var row = d.createElement("tr");
      tbody.appendChild(row);

      // создаем ячейки в вышесозданной строке
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

      last_id = last_id + 1;

      td2.innerHTML = last_id;
      td3.innerHTML = '<select><option>Пары</option><option>Еда</option></select>';
      td4.innerHTML = '<input type="range" min="1" max="3" step="1">';
      td5.innerHTML = '<input type="range" min="10" max="18" step="1">';
      td6.innerHTML = '<button id="'+ parseInt(last_id) +'" class="button_delete" onClick="remove_row(this.id)">X</button>';
}

function remove_row(buttonIdToRemove) {
      // находим нужную таблицу
      var tbody = d.getElementById('tasks').getElementsByTagName('tbody')[0];
      //var tbody.removeChild(buttonIdToRemove);
      var toRemove = d.getElementById('tasks').getElementsByTagName('tr')[buttonIdToRemove];
      console.log(toRemove);
      tbody.removeChild(toRemove);
      td2.innerHTML = last_id+1;
      console.log(last_id);
}
