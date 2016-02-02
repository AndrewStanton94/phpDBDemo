<html lang="en">
	<head>
		<meta http-equiv="content-type" content="text/html; charset=utf-8">
		<title>PHP demo</title>
		<script type="text/javascript" charset="utf-8" src="lib/ajax.js"></script>
		<script type="text/javascript" charset="utf-8" src="lib/main.js"></script>
	</head>

	<body>
		<h1>phpDBDemo</h1>
		<section>
			<p>An example application showing connection to an SQL database using php.</p>

			<p>Showing Creation and Reading</p>
		</section>

		<h2>The Data</h2>
		<ul id="retrievedData">
		</ul>

		<h2>Add new data</h2>
		<form id="newData">
			<label for="newName">Next name</label>
			<input type="text" name="newName">
			<input type="submit" name="" value="Upload">
		</form>
	</body>
</html>
