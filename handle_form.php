<?php
	$padawan_name = $_POST['name'];
	$padawan_email = $_POST['email'];
	$fecha = $_POST['fecha'];
	$hora = $_POST['hora'];


	$to_email = $padawan_email .',sreveloc@gmail.com';
	$subject = 'Felices 37!';
	$message = 'Tienes una entrada 4DX 3D para tí en el Kinépolis de ciudad de la imagen <br> El día: ' .$fecha .' a las ' .$hora;
	$headers = 'From: sreveloc@gmail.com';
	
	mail($to_email,$subject,$message,$headers);
	

?>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<title>Miwel Skywalker Regalator</title>
		<link rel="stylesheet" href="starwarsintro.css">
	</head>

	<body>
			<div class="stars-bg"></div>
			<article class="starwars">				
				<section class="start">
					<p>
						Muchas Gracias Joven <span><?php echo $padawan_name ?></span> Padawan
						<br> 
						Revisa tu cuenta:
						<br>
						<span><?php echo $padawan_email ?></span>
					</p>
				</section>
		</article>
	</body>
</html>