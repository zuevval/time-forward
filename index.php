<?php
//requires php 5.x
$n=0;
?>
<html>
	<header>
	Заголовок
	</header>
	<body>
	Страница открыта <span id="myText"></span> раз. </br>
	<input type=button id=reset value="reset">
	</body>
</html>
<script language="javascript" type="text/javascript">
    function reqListener () {
      console.log(this.responseText);
    }

    var oReq = new XMLHttpRequest(); //New request object
    oReq.onload = function() {
		var n=this.responseText;
		document.getElementById("myText").innerHTML = n;
        //alert(this.responseText); //Will alert: n value
    };
    oReq.open("get", "server_side.php", true);
    oReq.send();
</script>	
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