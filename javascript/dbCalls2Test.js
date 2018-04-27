window.addEventListener("load", main, false);

//documentation in dbCalls2_doc.txt

function main () {
	document.cookie = "pass="+'qwerty';
	document.cookie = "login="+'zuev';
	
	//пример: как узнать номер группы студента
	var database_params={
		'login':getCookie('login'),
		'pass':getCookie('pass'),
		'tableType':'users',
		'tableSuffix':'',
		'fieldName':'',
		'fieldValue':'',
	};
	var user_data = get_row_by_field(database_params);
	var group_id = user_data['group'];
	console.log('group id is ' + group_id);
	
	//Пример: как узнать по ID онлайн-урока его данные (имя, дедлайн...)
	database_params={
		'login':getCookie('login'),
		'pass':getCookie('pass'),
		'tableType':'usr',
		'tableSuffix':'online',
		'fieldName':'id',
		'fieldValue':213,
	};
	var online1 = get_row_by_field(database_params);
	console.log(online1);
	console.log('online lesson name: '+online1['name']);
	
	//Пример: как узнать расписание группы, в которой учится студент
	var today=0;
	database_params={
		'login':getCookie('login'),
		'pass':getCookie('pass'),
		'tableType':'grp',
		'tableSuffix':'timetable',
		'fieldName':'day',
		'fieldValue':today,
	};
	var timetable = get_row_by_field(database_params);
	console.log('timetable for today: ');
	console.log(timetable);
	
	//пример вывода ошибки
	database_params['tableType'] = 'non-existing_type';
	var row1 = get_row_by_field(database_params);
	console.log('example of error when table type is wrong: '+row1);
	
	//Пример: использование функции записи
	// Внимание: в аргументах массива row необходимо заключать
	// элементы-строки в две пары кавычек (двойные и одинарные внутри)
	var tomorrow=1;
	database_send_params={
		'login':getCookie('login'),
		'pass':getCookie('pass'),
		'tableSuffix':'online',
		'fieldName':'day_deadline',
		'fieldValue':tomorrow,
		'row':{id: "214", day_deadline: tomorrow, min_time: "12",
		max_time: "12", name: "'практика по экономике'"},
	};
	res_write = write_row_by_field(database_send_params);
	console.log(res_write);
	
	//Примеры использования старых функций, переделанных как оболочки новых:
	var login=getCookie('login');
	var pass=getCookie('pass');
	group_id = get_group_id(login,pass);
	console.log('group id is '+group_id);
}