<?php
//requires php 5.x
$db_host = 'localhost';
$db_user = 'root';
$db_pwd = '';
$database = 'time-forward';

if (!mysql_connect($db_host, $db_user, $db_pwd))
    die("Can't connect to database");
if (!mysql_select_db($database))
    die("Can't select database");
$pass=$_COOKIE["pass"];
$login=$_COOKIE["login"];
$table='users';
$usr_res = mysql_query("SELECT * FROM {$table} WHERE login='$login' AND pass='$pass'");
if (!$usr_res) {
    die("Query to show fields from table failed");
}
$user_data = mysql_fetch_array($usr_res);
echo json_encode(0);
//echo $user_data['group_id'];
$table1 = "usr_".$user_data['user_id']."_raw";
$day=$_COOKIE["day"];
$day=0;
$raw_res = mysql_query("SELECT * FROM {$table1} WHERE day=$day");
if (!$raw_res) {
    die("Query to show fields from table failed");
}
while ($data = mysql_fetch_array($raw_res)) {
        echo $data['event_id'].' ';
    }
?>