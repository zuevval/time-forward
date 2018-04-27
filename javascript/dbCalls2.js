
//documentation in dbCalls2_doc.txt
function get_row_by_field(params){
	var login=params['login'];
	var pass=params['pass'];
	var tableType = params['tableType'];
	var tableSuffix=params['tableSuffix'];
	var fieldName=params['fieldName'];
	var fieldValue= params['fieldValue'];
	document.cookie = "table_type="+tableType;
	document.cookie = "suffix="+tableSuffix;
	document.cookie = "pass="+pass;
	document.cookie = "login="+login;
	document.cookie = "field="+fieldName;
	document.cookie = "field_value="+fieldValue;
	var res=0;
    var oReq = new XMLHttpRequest();
    oReq.onload = function() {
		var resp=this.responseText;
		//	console.log(resp);
		resp = resp.replace('0', '');
		var arr1=resp.split('|');
		arr1.pop();
		//console.log(arr1);
		var arr2 = {};
		for(var i=0; i<arr1.length; i++){
			var t=arr1[i].split('*');
			var name=t[0];
			var value=t[1];
			arr2[name]=value;
		}
		if(arr2['error'] == undefined) res=arr2;
		else res = arr2['error'];
    };
    oReq.open("get", "../php_server_side/get_row_by_field.php", false);
    oReq.send();
    return res;
}

function write_row_by_field(params){
	function obj2url(prefix, obj) {
        var args=new Array();
        if(typeof(obj) == 'object'){
            for(var i in obj)
                args[args.length]=prefix+'['+encodeURIComponent(i)+']='+obj[i];
        }
        else
            args[args.length]=prefix+'='+encodeURIComponent(obj);
        return args.join('&');
    }
	var login=params['login'];
	var pass=params['pass'];
	var row = params['row'];
	var urlToSend = "../php_server_side/write_row_by_field.php?";
	urlToSend += obj2url('row', row);
	console.log(urlToSend);
	var tableSuffix=params['tableSuffix'];
	var fieldName=params['fieldName'];
	var fieldValue= params['fieldValue'];
	//document.cookie = "table_type="+tableType;
	document.cookie = "suffix="+tableSuffix;
	document.cookie = "pass="+pass;
	document.cookie = "login="+login;
	document.cookie = "field="+fieldName;
	document.cookie = "field_value="+fieldValue;
	var res=0;
    var oReq = new XMLHttpRequest();
    oReq.onload = function() {
		var resp=this.responseText;
		console.log(resp);
		resp = resp.replace('0', '');
		var arr1=resp.split('|');
		arr1.pop();
		//console.log(arr1);
		var arr2 = {};
		for(var i=0; i<arr1.length; i++){
			var t=arr1[i].split('*');
			var name=t[0];
			var value=t[1];
			arr2[name]=value;
		}
		if(arr2['error'] == undefined) res=arr2;
		else res = arr2['error'];
    };
    oReq.open("get", urlToSend, false);
    oReq.send();
    return res;
}

//documentation in dbCalls2_doc.txt
function get_group_id(login,pass){
	var database_params={
		'login':login,
		'pass':pass,
		'tableType':'users',
		'tableSuffix':'',
		'fieldName':'',
		'fieldValue':'',
	};
	var user_data = get_row_by_field(database_params);
	var group_id = user_data['group'];
	return Number(group_id);
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