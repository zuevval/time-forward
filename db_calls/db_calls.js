window.addEventListener("load", main, false);

function main () {
	document.cookie = "pass="+'qwerty';
	document.cookie = "login="+'zuev';
	check_if_logged_in();
	var raw_events=get_raw_events(login,pass,0);
	var group_id=get_group_id(login,pass);
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
		console.log(res);
		return res;
    };
    oReq.open("get", "php/get_raw_events.php", true);
    oReq.send();
}

function get_group_id(login,pass){
	document.cookie = "pass="+pass;
	document.cookie = "login="+login;
    var oReq = new XMLHttpRequest();
    oReq.onload = function() {
		//console.log(this.responseText);
		var resp=this.responseText;
		resp = resp.replace('0', '');
		console.log('group id is '+resp);
		return resp;
    };
    oReq.open("get", "php/get_group_id.php", true);
    oReq.send();
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