<style>
    html,
    body {
        margin: 0;
        padding: 0;
        height: 100%;
    }

    #container {
        min-height: 100%;
        position: relative;
    }

    #body {
        padding: 10px;
        padding-bottom: 60px; /* Height of the footer */
    }

    #footer {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 60px; /* Height of the footer */

    }
</style>

<div id="container">
    <div id="header"><?php @include "../layout/header.php";?></div>

    <div id="body"></div>


    <div id="footer">
        <?php @include('footer.php'); ?>
    </div>
</div>



