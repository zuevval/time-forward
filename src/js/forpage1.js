/* Раскомментировать
login=getCookie('login');
pass=getCookie('pass');

var day = 0,
      usr_id = get_id_from_url(),
      events_id = get_raw_events_id(usr_id, day),
      res = get_schedule(usr_id, day);
*/
var d = document,
      res = [['матан', '12.00', '13.40'], ['линал', '14.00', '15.40'],['спм', '16.00', '17.40']];

function init() { // При открытии страницы выполняем:
      // if (login==-1||pass==-1) window.alert("Пожалуйста, авторизуйтесь");
            // Здесь должен быть редирект на страницу логина
}

// Заполним расписание списком res:
var tbody = d.getElementById('tbody');
for (var i = 0; i < res.length; i++) {
      var row = d.createElement('tr');
      console.log(tbody);
      tbody.appendChild(row);
      var td1 = d.createElement('td'),
            td2 = d.createElement('td'),
            td3 = d.createElement('td');
      row.appendChild(td1);
      row.appendChild(td2);
      row.appendChild(td3);
      td1.innerHTML = res[i][0];
      td1.innerHTML = res[i][1];
      td1.innerHTML = res[i][2];
console.log(tbody);
}
