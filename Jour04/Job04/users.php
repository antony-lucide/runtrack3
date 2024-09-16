
<?php 

$host = 'localhost';
$dbname = 'utilisateurs';
$username = 'root'; 
$password = '';    

try {

    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);


    $stmt = $pdo->query('SELECT * FROM utilisateurs');


    $users = $stmt->fetchAll(PDO::FETCH_ASSOC);

    header('Location: index.php');
    echo json_encode($users);

} catch (PDOException $e) {

    echo 'Erreur de connexion : ' . $e->getMessage();
}
?>




<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Scripts JS</title>
</head>
<body>
    <form action="" method="post">
        <input type="text" name="id">
        <input id="name" type="text" name="nom">
        <select name="type" id="">Select</select>
        <input type="button" value="" name="Filtrers">
    </form>
    <button id="btn">Fetch Documents</button>

    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.min.js"></script>
    <script src="scripts.js"></script> 
</body>
</html>
