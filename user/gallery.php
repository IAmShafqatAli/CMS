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
        /*padding: 10px;*/
        padding-bottom: 60px; /* Height of the footer */
    }

    #footer {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 60px; /* Height of the footer */
        background: white;
    }
</style>

<div id="container">
    <div id="header">
        <?php
        @include('../layout/header.php');
        ?>
    </div>


    <div id="body">

        <div class="container-fluid" style="background: white ">

            <div class="row">
                <div class="col-lg-12">
                    <div class="containter-fluid">
                        <div class="row">
                            <div class="col-sm-2">
                                <div class="list-group list-cust">
                                    <a href="#" class="list-group-item activate">
                                        Animal
                                    </a>
                                    <a href="#" class="list-group-item text-primary">landscapes</a>
                                    <a href="#" class="list-group-item">Portait</a>
                                    <a href="#" class="list-group-item">Nature</a>
                                    <a href="#" class="list-group-item">Life Style</a>
                                </div>
                            </div>


                            <div class="col-sm-10" style="background: ">
<!--                                                        <div class="fotorama" data-width="contain" data-height="600" data-max-width="100%"-->
<!--                                                             data-nav="thumbs">-->
                                <div class="fotorama"
                                     data-fit="cover" data-nav="thumbs" data-allowfullscreen="true">
                                    <img src="../assets/img/slider_images/big.jpeg">
                                    <img src="../assets/img/slider_images/1.jpg">
                                    <img src="../assets/img/slider_images/2.jpg">
                                    <img src="../assets/img/slider_images/3.jpg">
                                    <img src="../assets/img/slider_images/4.jpg">
                                    <img src="../assets/img/slider_images/5.jpg">
                                    <img src="../assets/img/slider_images/6.jpg">
                                    <img src="../assets/img/slider_images/7.jpg">
                                    <img src="../assets/img/slider_images/8.jpg">
                                    <img src="../assets/img/slider_images/9.jpg">
                                    <img src="../assets/img/slider_images/20.jpg">
                                    <img src="../assets/img/slider_images/12.jpg">
                                    <img src="../assets/img/slider_images/13.jpg">
                                    <img src="../assets/img/slider_images/14.jpg">
                                    <img src="../assets/img/slider_images/15.jpg">
                                    <img src="../assets/img/slider_images/16.jpg">
                                    <img src="../assets/img/slider_images/17.jpg">
                                    <img src="../assets/img/slider_images/18.jpg">
                                    <img src="../assets/img/slider_images/19.jpg">
                                    <img src="../assets/img/slider_images/10.jpg">
                                    <img src="../assets/img/slider_images/11.jpg">
                                    <img src="../assets/img/slider_images/5.png">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
    <div id="footer">
        <?php
        @include('../layout/footer.php');
        ?>
    </div>

</div>




