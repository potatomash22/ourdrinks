<?php
	$host 	= 'localhost';
	$user 	= 'root';
	$pass 	= '';
	$db		= 'drinkapp';

	$conn = new mysqli($host, $user, $pass, $db);
	$conn->set_charset('utf8');
?>
