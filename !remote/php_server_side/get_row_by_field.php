<?php
//requires php 5.x
$db_host = 'localhost';
$db_user = 'zuevzuevva';
$db_pwd = 'verystrongpass';
$database = 'zuevzuevva';
echo json_encode(0);	
if (!mysql_connect($db_host, $db_user, $db_pwd))
    die('|error*cant connect to db|');
if (!mysql_select_db($database))
    die('|error*cant select db|');
$pass=$_COOKIE["pass"];
$login=$_COOKIE["login"];
$table='users';
$usr_res = mysql_query("SELECT * FROM {$table} WHERE login='$login' AND pass='$pass'");
if (!$usr_res) {
    die('|error*cant find table with user info|');
}
$rows_num =  mysql_num_rows($usr_res);
if ($rows_num == 0) {
	die('|error*no such user|');
}
$user_data = mysql_fetch_array($usr_res);
$suffix=$_COOKIE["suffix"];
$value=$_COOKIE["field_value"];//значение, по которому находим нужный ряд
$table_type=$_COOKIE["table_type"];
//echo $table_type;
if($table_type=='usr'){
	$table1 = "usr_".$user_data['user_id']."_".$suffix;
} else if ($table_type=='grp'){
	$table1 = "grp_".$user_data['group_id']."_".$suffix;
} else if ($table_type == 'events_other'){
	$table1 = "events_other";
} else if ($table_type == 'users'){
	$group=$user_data['group_id'];
	echo "|group*$group|";
	//в дальнейшем добавить возвращение username и др.
	return;
} else {
	die('|error*no such table type|');
}
$field=$_COOKIE["field"];
$field_value=$_COOKIE["field_value"];
$res1 = mysql_query("SELECT * FROM {$table1} WHERE $field=$field_value");
if (!$res1) {
    die('|error*no such fieldname|');
}
$rows1_num =  mysql_num_rows($res1);
if ($rows1_num == 0) {
	die('|error*no field with specified value|');
}

$data1=mysql_fetch_assoc($res1);
$i = 0;
$n = mysql_num_fields($res1);
while($i<$n){
	$meta = mysql_fetch_field($res1, $i);
	$field = $meta->name;
	echo $field.'*';
	//encoding for remote server
	$temp = $data1[$field];
	$temp = iconv("windows-1251", "UTF-8", "$temp");
	echo $temp.'|';
	$i++;
}
?>