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
<html lang="eng"> <!-- сменил ru на eng-->

<head>
    <meta charset="UTF-8">
    <title>Tasks for day</title>
</head>

<body onload="init()">
	<div class="container">
		<div class="nav">
			<ul class="nav nav-pills nav-stacked">
				<li class="profile_text"><a href="#">Алексей</a></li>
				<li><a href="#">Shedule</a></li>
				<li><a href="#">Map of movement</a></li>
				<br>
				<li><a href="output.html">Completed shedule</a></li>
				<li class="byOKStop">&copy; 2018 OK Stop</li>
				<img class="okstop_logo" src="files/img/okstop_logo.png" width=70 height=70>
				<audio controls id="au1" class="aud1">
    				<source src="files/audio/timefwd.mp3" type="audio/mpeg">
				</audio>
			</ul>
		</div>

		<div class="main">
			<p>Chose tasks for day:</p>
			<table class="table_1" id="tasks">
				<thead>
			    	<tr>
			    		<th scope="col">#</th>
			    		<th scope="col">Name of event</th>
			    		<th scope="col">Start</th>
			    		<th scope="col">End</th>
			    		<th scope="col">Description</th>
			    		<th scope="col">Delete</th>
			    	</tr>
				</thead>
				<tbody>
				</tbody>
			</table>
			<div class="buttons">
					<button id="add_task" onClick="add_row()">Add task</button>
					<button id="form_schedule" onClick="form_schedule()">Form shedule</button>
			</div>
		</div>
	</div>
	
    <div id="okno">
		<h4>Add task</h4>
		<p>Chose event, that you want to add:</p>
		<div class="row_sf">
			
			<div class="filtr">
				<input type="checkbox">main classes<br>
				<input type="checkbox">extra events<br>
				<input type="checkbox">meal
			</div>
			<div class="searching">
				<input type="text" value="Search by name">
			</div>
		</div>
		<div class="table_2_container_container">
			<div class="table_2_container">
				<table class="table_2" id="add_task_table">
					<thead>
						<tr>
							<th scope="col">Name of task</th>
							<th scope="col">Start</th>
							<th scope="col">End</th>
							<th scope="col">Description</th>
						</tr>
					</thead>
					<tbody>
						
					</tbody>
				</table>
			</div>
		</div>
		<button id="return_butt" onClick="return_butt()">Back</button>
    </div>
</body>
</html>
