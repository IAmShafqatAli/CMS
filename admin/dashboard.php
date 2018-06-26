<?php
@include '../layout/dashboard_header.php';
/* Displays user information and some useful messages */
session_start();

// Check if user is logged in using the session variable
if ($_SESSION['logged_in'] != 1) {
    $_SESSION['message'] = "You must log in before viewing your profile page!";
    header("location: ../login-system/error.php");
} else {
    // Makes it easier to read
    $first_name = $_SESSION['first_name'];
    $last_name = $_SESSION['last_name'];
    $email = $_SESSION['email'];
    $active = $_SESSION['active'];
}
?>

<script>
    $(document).ready(function () {

        $('li[id ^="page_"]').click(function () {
            var new_id = this.id.replace('page_', '');
            // alert(new_id);
            $('#content').load(new_id + '.php')


        });

    });
</script>


<body>
<div class="form">

    <!--	<h1>Welcome</h1>-->

    <p>
        <?php

        // Display message about account verification link only once
        if (isset($_SESSION['message'])) {
            echo $_SESSION['message'];

            // Don't annoy the user with more messages upon page refresh
            unset($_SESSION['message']);
        }

        ?>
    </p>

    <?php

    // Keep reminding the user this account is not active, until they activate
    if (!$active) {
        echo
        '<div class="info">
              Account is unverified, please confirm your email by clicking
              on the email link!
              </div>';
    }

    ?>

    <!--	<h2>--><?php //echo $first_name.' '.$last_name; ?><!--</h2>-->
    <!--	<p>--><? //= $email ?><!--</p>-->

    <!--	<a href="../login-system/logout.php"><button class="button button-block" name="logout"/>Log Out</button></a>-->

</div>


<div id="top-nav" class="navbar navbar-inverse navbar-static-top">
    <div class="container-fluid">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#">Admin Panel</a>
        </div>
        <div class="navbar-collapse collapse">
            <ul class="nav navbar-nav navbar-right">
                <li class="dropdown">
                    <a role="button" data-toggle="dropdown" href="#"><i class="fa fa-user-circle"></i>
                        <?php echo $first_name . ' ' . $last_name; ?><span class="caret"></span></a>
                    <ul id="g-account-menu" class="dropdown-menu" role="menu">
                        <li><a href="#"><i class="fa fa-user-secret"></i> My Profile</a></li>
                    </ul>
                </li>
                <li><a href="../login-system/logout.php"><i class="fa fa-sign-out"></i> Logout</a></li>
            </ul>
        </div>
    </div>
    <!-- /container -->
</div>

<!-- /Header -->

<!-- Main -->

<div class="col-lg-2 col-md-2 col-sm-3 col-xs-12">

    <ul class="nav nav-pills nav-stacked" style="border-right:1px solid black">
        <!--<li class="nav-header"></li>-->
        <li id="page_home"><a><i class="fa fa-dashboard"></i> Home</a></li>
        <li id="page_about"><a><i class="fa fa-tags"></i> About</a></li>
        <li id="page_Gallery"><a><i class="glyphicon glyphicon-picture"></i> Gallery</a></li>
        <li><a href="../login-system/forgot.php"><i class="fa fa-lock"></i> Change Password</a></li>

    </ul>
</div><!-- /span-3 -->
<div class="col-lg-10 col-md-10 col-sm-9 col-xs-12" id="content">
    <!-- Right -->
    <!--    Main Body-->

    <a href="#"><strong><span class="fa fa-dashboard"></span> My Dashboard</strong></a>
    <hr>
</div>


</body>
<!--</html>-->
