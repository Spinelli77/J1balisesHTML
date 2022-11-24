<?php
    require_once "include/header.php";
    require_once 'src/config.php';
    require_once 'init.php';

$sql = "SELECT * FROM user"; //va chercher la table dans la BDD

$stmt = $dbh->query($sql); //execute ca

$users = $stmt->fetchAll(PDO::FETCH_ASSOC); //mets le moi dans un tableau ASSOC que je puissse le lire avec cles valeurs/ sinon tu peux le lire en OBJ avec juste fleche et nom de la colonne

if(isset($GET['yt'])){
    echo multipliepar10($GET['yt']);
}

?>

<body>

<?php
    include_once "include/navbar.php";
?>
<?php
    foreach($tab as $key =>$valeur){

    echo "<a href='index.php?yt=$valeur'>" . 'le lien pour :' . $valeur;
    '</a>';
    echo "<br>";
    }
?>



<h1><?= $variable ?></h1>

<table class="table">
  <thead>
    <tr>
      <th scope="col">Key</th>
      <th scope="col">Valeur</th>
    </tr>
  </thead>
  <tbody>
    <?php
        foreach($users as $user) : ?>{
            <tr>
            <th scope="row"><?= $user['u_number']?></th>
            <td><?= $user['u_first_name'] ?></td>
            </tr>

    <?php endforeach ?>
  </tbody>
</table>


<?php
    require_once __DIR__ . "/include/footer.php";
?>

</body>

</html>

<!-- la diff entre include et require, si require rencontre un pbm il crash-->