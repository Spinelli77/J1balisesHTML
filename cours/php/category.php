<?php
include_once "init.php";
include_once "include/header.php";
include_once "include/navbar.php";

?>

<body>
    

    <div class="container">

        <h3>Ajouter une catégorie</h3>
        <form action="" method="post">
            <label for="category">Catégorie</label>
            <input type="text" name="name" id="category">
            <button type="submit">Valider</button>

        </form>

    </div>

<?php include_once "include/footer.php" ?>
</body>