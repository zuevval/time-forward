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

// sending query
$table = 'user_data';
$result = mysql_query("SELECT * FROM {$table}");
if (!$result) {
    die("Query to show fields from table failed");
}
$fields_num = mysql_num_fields($result);
$fields = [];
for($i=0; $i<$fields_num; $i++)
{
    $field = mysql_fetch_field($result);
	$fields[$i] = $field;
}
//для каждого поля f в массиве fields (массив столбцов таблицы)
// foreach ($fields as $f){
	// echo $f->name.'<br>';
// }

//обращаемся к первой строке таблицы
$row = mysql_fetch_row($result);
$n=0;
foreach($row as $cell){
    //echo $cell."<br>";
	$n=$cell;
}
$m=$n;
$n=$n+1;
mysql_query("UPDATE user_data SET n=$n WHERE n=$m");
echo json_encode($n);
?>

<?php
function reset_table($table_name){
	$result = mysql_query("TRUNCATE TABLE $table_name");
	if (!$result) {
		die("Query to show fields from table failed");
	} else {
		return result;
	}
}
?>