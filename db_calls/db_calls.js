window.addEventListener("load", main, false);

function main () {
	document.cookie = "pass="+'qwerty';
	document.cookie = "login="+'zuev';
	//предыдущие строки следует заменить на чтение из полей ввода
	check_if_logged_in();
	var raw_events=get_raw_events(login,pass,0);
	console.log('raw events are '+raw_events);
	var group_id=get_group_id(login,pass);
	console.log('group id is '+group_id);
	var lesson_start=get_lesson_start(201,group_id,0);
	//возвращает номер пятиминутки
	console.log('lesson starts at '+lesson_start);
	var lesson_stop=get_lesson_stop(201,group_id,0);
	//возвращает номер пятиминутки
	console.log('lesson ends at '+lesson_stop);
	var lesson_name=get_lesson_name(201,group_id,0);
	console.log("lesson is "+lesson_name);
}
function check_if_logged_in(){
	login=getCookie('login');
	pass=getCookie('pass');
	console.log(login);
	if(login==-1||pass==-1){
		window.alert("пожалуйста, авторизуйтесь");
	}
}
function get_raw_events(login,pass,day){
	document.cookie = "pass="+pass;
	document.cookie = "login="+login;
	document.cookie = "day="+day;
	var raw_events = [];
    var oReq = new XMLHttpRequest();
    oReq.onload = function() {
		//console.log(this.responseText);
		var resp=this.responseText;
		resp = resp.replace('0', '');
		var res = resp.split(' ');
		for (var i=0; i<res.length; i++){
			res[i]=res[i].trim();
			res[i] = res[i].replace(' ', '');
			res[i]=Number(res[i]);
		}
		//console.log(res);
		raw_events=res;
    };
    oReq.open("get", "php/get_raw_events.php", false);
    oReq.send();
    return raw_events;
}

function get_group_id(login,pass){
	document.cookie = "pass="+pass;
	document.cookie = "login="+login;
	var group_id=0;
    var oReq = new XMLHttpRequest();
    oReq.onload = function() {
		//console.log(this.responseText);
		var resp=this.responseText;
		resp = resp.replace('0', '');
		//console.log('group id is '+resp);
		if(resp.length !=6) return -1;
		group_id = Number(resp);
    };
    oReq.open("get", "php/get_group_id.php", false);
    oReq.send();
    return group_id;
}

function get_lesson_start(lesson_id,group_id,day){
	var lesson_num=lesson_id%10;
	var res=get_timetable(group_id,day);
	for (var i=0; i<res.length; i++) 
		res[i]=Number(res[i]);
	return res[lesson_num*3-1];
}

function get_lesson_stop(lesson_id,group_id,day){
	var lesson_num=lesson_id%10;
	var res=get_timetable(group_id,day);
	for (var i=0; i<res.length; i++) 
		res[i]=Number(res[i]);
	return res[lesson_num*3];
}
function get_lesson_name(lesson_id,group_id,day){
	var lesson_num=lesson_id%10;
	var res=get_timetable(group_id,day);
	return res[lesson_num+16];
}

function get_timetable(group_id,day){
	document.cookie = "group_id="+group_id;
	document.cookie = "day="+day;
	var timetable=[];
	var oReq = new XMLHttpRequest();
    oReq.onload = function() {
		var resp=this.responseText;
		resp = resp.replace('0', '');
		var res = resp.split(' ');
		for (var i=0; i<res.length; i++){
			res[i]=res[i].trim();
			res[i] = res[i].replace(' ', '');
		}
		//console.log(res);
		timetable=res;
    };
    oReq.open("get", "php/get_timetable.php", false);
    oReq.send();
    return timetable;
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return -1;
}