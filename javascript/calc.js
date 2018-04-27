
function calc(login, pass, day){
	var long1 = calc_long(login, pass, day);
	for(var i=0; i<long1.length; i++){
		if(long1[i]==-1)
			long1[i]=0;
	}
	console.log(long1);
	var short1 = calc_short1(long1, login, pass);
	return short1;
}


function calc_long(login,pass,day){ //в общем для полноценного тестировангия нужно будет интегрировать уже на сервер
	var time_gaps=[];
	var Error_log=[];
	for(var i=0; i<288;i++)time_gaps.push(-1);
	var group_id = get_group_id(login,pass);
	var lessons=get_raw_events(login, pass,day); //всё до кучи
	console.log(lessons);
	for (var i=0; i< lessons.length; i++){
		if(lessons[i] > 210 || lessons[i] < 200)
			lessons.pop(i);
	}
	console.log(lessons);
	//lessons=[201, 202, 203];
	console.log(lessons[0]);
	for (var i=0; i< lessons.length; i++){
		var s = get_lesson_start(lessons[i],group_id,day);
		var k = get_lesson_stop(lessons[i],group_id,day);
		for(s; s<=k; s++)
			time_gaps[s]=lessons[i];
	}
	
	var nearest_deadline = get_nearest_online(login,pass);
	//console.log(nearest_deadline);
	var possible_start=0; 
	var count=1;
	var earliest_time = 200;
	// раньше earliest_time не ставятся курсы
	//var nearest_deadline=[0,1488,400,"бесконченость не предел"]
	online_filling:
	{
		for(var i=earliest_time;i<288;i++){
			if (time_gaps[i]==-1){ //проверка на то что пятиминутка не занята
				if(count==1)possible_start=i
				//console.log(count)
				if (count*5>=nearest_deadline[2]){ //предполагю что дано в минутах минимальное время
					console.log(count)
					console.log(possible_start)
					for(var p=possible_start; p<possible_start+count;p++){ //само заполнение
						time_gaps[p]=nearest_deadline[0]
						}
					break online_filling // я заполняю один дедлайн!
				}else count++
			}else count=1
		}Error_log.push("не удалось разместить онлайн курс")
	}
	//console.log(time_gaps)
	//var electives=get_electives()// откуд берётся эта информация?
	// var electives=[[666,0,120]] // это для теста
	// for (var i=0;i<electives.length;i++){
		// var s = electives[i][1]
		// var k = electives[i][2]
		// elective_filling:
		// {
			// for(var p=s; p<=k;p++){
				// if(time_gaps[p]!=-1 ){ //это то что происходит при конфликте
					// if (time_gaps.length<145) time_gaps.push(-2) // что-то там надо добавлять
					// time_gaps.push(electives[i][0])
					// break elective_filling
				// }
			// }
			// for(s;s<=k;s++)time_gaps[s]=electives[i][0]
		// }
	// }
	//console.log(time_gaps)
	return time_gaps
}

/*	time(n,k) выводит по начальной (n) и конечной (k) пятиминутке
	время начала и конца события в нормальном виде*/
	
function time1(n){
	//по номеру пятиминутки с начала дня выводит её время в hh:mm
	var time = n*5;
	var hours = Math.floor(time/60);
	var minutes = time-60*hours;
	//hours = String(hours);
	// if(hours.length==1)
		// hours = '0'+hours;
	// minutes=String(minutes);
	// if(minutes.length==1)
		// minutes = '0'+minutes;
	// return hours+':'+minutes;
	return 100*hours+minutes;
}

function calc_short1(M, login,pass){
	var res = [];
	var t = [];
	var flag=0;
	if(M[0]!=0){
		t.push(get_event_name(M[0], login, pass));
		t.push(time1(flag));
		flag++;
	}
	for (var i=flag; i< M.length-1; i++){
		if(M[i]!=0){ //если что-то стоит...
			if(t.length==0){
				t.push(get_event_name(M[i], login, pass));
				t.push(time1(i));
			}
			if(t.length!=0&&M[i]!=M[i+1]){
				t.push(time1(i));
				res.push(t);
				t=[];
			}
		}
	}
	console.log(res);
	return res;
}

function get_event_name(id, login, pass){
	var group_id = get_group_id(login, pass);
	var name = '';
	if(id>210){
		var online_task = get_online(login,pass,id);
		name=online_task[4];
	} else if (id>200&&id<210){
		name = get_lesson_name(id, group_id, day);
	} else {
		name = 'yet undefined';
	}
	return name;
}