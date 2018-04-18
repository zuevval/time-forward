function calc_long(login,pass,day){ //в общем для полноценного тестировангия нужно будет интегрировать уже на сервер
	var time_gaps=[];
	var Error_log=[];
	for(var i=0; i<144;i++)time_gaps.push(-1);
	// group = get_user_info(login,pass); вот это точно пока не надо
	//lessons=get_schedule(login,pass,day); ето потом тестим
	lessons=["sample_name",10,20]
	//console.log(lessons[0][1])
	var i=0
	while(lessons[3*i]!=undefined){
		//var id_lesson=get_lesson_name(lessons[3*i][0],group,day); // мне нужен айди события, а функция получения расписания выдаёт название (мне кажется лучше передавать id события + имя в доп ячейкии массива или вообще передавать только id и сделать функцию получения  по id имени
		var id_lesson=236
		var s=lessons[3*i+1]
		console.log(s)
		var k=lessons[3*i+2] //тут творится чертовщина
		for( /* t=lessons[i][1] */s; s<=k/* t<=lessons[i][2] */;/* i++ */s++)time_gaps[s]=id_lesson;// подумать о s<=k, верно ли?
		i++
	}
	//var nearest_deadline = get_nearest_online(login,pass)
	var possible_start=0;
	var count=1
	var nearest_deadline=[0,1488,400,"бесконченость не предел"]
	online_filling:
	{
		for(var i=0;i<144;i++){
			if (time_gaps[i]==-1){ //проверка на то что пятиминутка не занята
				if(count==1)possible_start=i
				//console.log(count)
				if (count*5>=nearest_deadline[2]){ //предполагю что дано в минутах минимальное время
					console.log(count)
					console.log(possible_start)
					for(var p=possible_start; p<possible_start+count;p++){ //само заполнение
						time_gaps[p]=nearest_deadline[1]
						}
					break online_filling // я заполняю один дедлайн!
				}else count++
			}else count=1
		}Error_log.push("не удалось разместить онлайн курс")
	}
	//console.log(time_gaps)
	//var electives=get_electives()// откуд берётся эта информация?
	var electives=[[666,0,120]] // это для теста
	for (var i=0;i<electives.length;i++){
		var s = electives[i][1]
		var k = electives[i][2]
		elective_filling:
		{
			for(var p=s; p<=k;p++){
				if(time_gaps[p]!=-1 ){ //это то что происходит при конфликте
					if (time_gaps.length<145) time_gaps.push(-2) // что-то там надо добавлять
					time_gaps.push(electives[i][0])
					break elective_filling
				}
			}
			for(s;s<=k;s++)time_gaps[s]=electives[i][0]
		}
	}
	console.log(time_gaps)
	return time_gaps
}
