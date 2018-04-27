<?php
//requires php 5.x
$db_host = 'localhost';
$db_user = 'root';
$db_pwd = '';
$database = 'time-forward';
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
$table1 = "usr_".$user_data['user_id']."_".$suffix;
$target_field=$_COOKIE["field"];
$field_value=$_COOKIE["field_value"];
$res1 = mysql_query("SELECT * FROM {$table1} WHERE $target_field=$field_value");
if (!$res1) {
    die('|error*no such fieldname|');
}
$rows1_num =  mysql_num_rows($res1);
if ($rows1_num == 0) {
	$res=mysql_query("INSERT INTO {$table1} ($target_field) VALUES ($field_value)");
    if (!$res) {
    	die("|error*failed to create new row in table|");
    }
}
$data = array(
	'id' => 215,
	'day_deadline' => 5,
	'min_time' => 12,
); // пример
//echo $data['id'];
$row = $_GET['row'];
//echo $row['id'];
$value1 = $row['id'];
echo "|check*$value1|";
$fields_num = mysql_num_fields($res1);
$fields = [];
for($i=0; $i<$fields_num; $i++)
{
    $field = mysql_fetch_field($res1);
	$fields[$i] = $field;
}

foreach ($fields as $field){
	$fieldname = $field->name;
	if($row[$fieldname]){
		$fieldvalue=$row[$fieldname];
		echo "|$fieldname *replaced|";
		$resj=mysql_query("UPDATE {$table1} SET ".$fieldname." = ".$fieldvalue." WHERE $target_field=$field_value");
	}
}
?>