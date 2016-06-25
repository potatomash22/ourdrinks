<?php
	require 'connection.php';
	require 'Slim/Slim.php';
	\Slim\Slim::registerAutoloader();

	$app = new \Slim\Slim();

	/* api routing */
	$app->get('/rooms', function() use($app, $conn) {
	    
		// Fetch & populate room array
		$sql = 'SELECT id, roomNo, fname, lname FROM rooms WHERE active = 1';
		$stmt = $conn->prepare($sql);
		$stmt->execute();
		$stmt->bind_result($id, $roomno, $fname, $lname);

		$rooms = '['; // Start of json string
		while($stmt->fetch()) {
			$rooms .= $rooms != '[' ? ',' : '';
			$rooms .= '{"id":' . $id . ',"number":' . $roomno . ',"firstname":"' . $fname . '","lastname":"' . $lname . '"}';
		}
		$rooms .= ']';

		echo $rooms;
	});

	/* api routing */
	$app->get('/drinks', function() use($app, $conn) {
	    
		// Fetch & populate room array
		$sql = 'SELECT drinks.id, title, price, imageUrl FROM prices, drinks WHERE prices.id = drinks.fk_priceId';
		$stmt = $conn->prepare($sql);
		$stmt->execute();
		$stmt->bind_result($id, $title, $price, $imageurl);

		$drinks = '['; // Start of json string
		while($stmt->fetch()) {
			$drinks .= $drinks != '[' ? ',' : '';
			$drinks .= '{"id":' . $id . ',"title":"' . $title. '","price":' . $price . ',"imageurl":"' . $imageurl . '"}';
		}
		$drinks .= ']';

		echo $drinks;
	});

	/* api routing */
	$app->get('/rooms/:userid/orders', function($userid) use($app, $conn) {

		// Fetch & populate room array
		$sql = 'SELECT id, price, (UNIX_TIMESTAMP(regdate) * 1000) FROM orders WHERE fk_roomId = ?';
		$stmt = $conn->prepare($sql);
		$stmt->bind_param('i', $userid);
		$stmt->execute();
		$stmt->bind_result($id, $price, $date);

		$orders = '['; // Start of json string
		while($stmt->fetch()) {
			$orders .= $orders != '[' ? ',' : '';
			$orders .= '{"id":' . $id . ',"price":' . $price. ',"date":"' . $date . '"}';
		}
		$orders .= ']';

		echo $orders;
	});

	/* execute routing */
	$app->run();
?>