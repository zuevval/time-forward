<?php
//requires php 5.x
$db_host = 'localhost';
$db_user = 'root';
$db_pwd = '';
$database = 'time-forward';
echo json_encode(0);	
if (!mysql_connect($db_host, $db_user, $db_pwd))
    die('-1');
if (!mysql_select_db($database))
    die('-2');
$pass=$_COOKIE["pass"];
$login=$_COOKIE["login"];
$table='users';
$usr_res = mysql_query("SELECT * FROM {$table} WHERE login='$login' AND pass='$pass'");
if (!$usr_res) {
    die('-3');
}
$rows_num =  mysql_num_rows($usr_res);
if ($rows_num == 0) {
	die('-4');
}
$user_data = mysql_fetch_array($usr_res);
//echo $user_data['group_id'];
$suffix=$_COOKIE["suffix"];
$table1 = "usr_".$user_data['user_id']."_".$suffix;
$id=$_COOKIE["id"];
$res1 = mysql_query("SELECT * FROM {$table1} WHERE id=$id");
if (!$res1) {
    die('-5');
}
$rows1_num =  mysql_num_rows($res1);
if ($rows1_num == 0) {
	die('-6');
}

$data1=mysql_fetch_assoc($res1);
$i = 0;
$n = mysql_num_fields($res1);
while($i<$n){
	$meta = mysql_fetch_field($res1, $i);
	$field = $meta->name;
	echo $field.'*';
	echo $data1[$field].'|';
	$i++;
}
?>