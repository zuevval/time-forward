<?php
?>

<script type="text/javascript" src="javascript/db_calls.js"></script>
<script type="text/javascript" src="javascript/index_page.js"></script>
<script type="text/javascript" src="javascript/calc.js"></script>

<!-- Bootstrap -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap-theme.min.css"> 
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js"></script>
	<link rel="stylesheet" href="css/index.css">

<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8">
    <title>Задачи на день</title>
</head>

<body onload="init()">
	<div class="container">
		<div class="nav">
			<ul class="nav nav-pills nav-stacked">
				<li class="profile_text"><a href="#">Алексей</a></li>
				<li><a href="#">Расписание</a></li>
				<li><a href="#">Карта перемещений</a></li>
				<br>
				<li><a href="output.html">Готовое расписание</a></li>
				<li class="byOKStop">&copy; 2018 OK Stop</li>
				<img class="okstop_logo" src="files/img/okstop_logo.png" width=70 height=70>
				<audio controls id="au1" class="aud1">
    				<source src="files/audio/timefwd.mp3" type="audio/mpeg">
				</audio>
			</ul>
		</div>

		<div class="main">
			<p>Выберите задачи на день:</p>
			<table class="table_1" id="tasks">
				<thead>
			    	<tr>
			    		<th scope="col">#</th>
			    		<th scope="col">Имя события</th>
			    		<th scope="col">Начало</th>
			    		<th scope="col">Конец</th>
			    		<th scope="col">Описание</th>
			    		<th scope="col">Удалить</th>
			    	</tr>
				</thead>
				<tbody>
				</tbody>
			</table>
			<div class="buttons">
					<button id="add_task" onClick="add_row()">Добавить задачу</button>
					<button id="form_schedule" onClick="form_schedule()">Сформировать расписание</button>
			</div>
		</div>
	</div>
	
    <div id="okno">
		<h4>Добавить задачу</h4>
		<p>Выберите событие, которое хотите добавить:</p>
		<div class="row">
			<div class=".col-md-6">
				<div class="searching">
					<input type="text" value="поиск по имени">
				</div>
			</div>
			<div class=".col-md-6">
				<div class="filtr">
					<input type="checkbox" value="поиск по имени">
				</div>
			</div>
		</div>
		<div class="table_2_container">
			<table class="table_2" id="add_task_table">
				<thead>
					<tr>
						<th scope="col">Имя события</th>
						<th scope="col">Начало</th>
						<th scope="col">Конец</th>
						<th scope="col">Описание</th>
					</tr>
				</thead>
				
			</table>
		</div>
		<button id="choose_task" onClick="choose_task()">Подтвердить</button>
    </div>
</body>
</html>
