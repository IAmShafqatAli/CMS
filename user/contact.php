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
.heading{
    font-size: 50px;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-weight: 400;

}
</style>

<div id="container">
    <div id="header">
        <?php
        @include('../layout/header.php');
        ?>
    </div>
    <div id="body">
        <div class="container">
            <div class="row">
                <div class="col-md-6 col-md-offset-2">
	                <h2 class="text-center">Contact Us</h2>
	                
                    <div class="well well-sm"
                         style="background: none !important; border: none; -webkit-box-shadow: none">
                        <form class="form-horizontal" action="#" method="post" name="form">
                            <fieldset>

                                <!-- Name input-->
                                <div class="form-group">

                                    <label class="col-md-3 control-label" for="name">Name</label>
                                    <div class="col-md-9">
                                        <input id="name" name="vname" type="text" placeholder="Ihre Name"
                                               class="form-control">
                                    </div>
                                </div>

                                <!-- Email input-->
                                <div class="form-group">
                                    <label class="col-md-3 control-label" for="email">E-mail</label>
                                    <div class="col-md-9">
                                        <input id="email" name="vemail" type="text" placeholder="Email"
                                               class="form-control">
                                    </div>
                                </div>

                                <!-- Subject input-->
                                <div class="form-group">
                                    <label class="col-md-3 control-label" for="subject">Thema</label>
                                    <div class="col-md-9">
                                        <input id="subject" name="sub" type="text"
                                               placeholder="Thema"
                                               class="form-control">
                                    </div>
                                </div>

                                <!-- Message body -->
                                <div class="form-group">
                                    <label class="col-md-3 control-label" for="message">Ihre Nachricht</label>
                                    <div class="col-md-9">
                                        <textarea class="form-control" id="message" name="msg"
                                                  placeholder="Bitte geben Sie hier Ihre Nachricht ein ..."
                                                  rows="13"></textarea>
                                    </div>
                                </div>

                                <!-- Form actions -->
                                <div class="form-group">
                                    <div class="col-md-12 text-right">
                                        <button type="submit" name="submit" id="send"
                                                value="" style="background:  #2b90d9;"
                                                class="btn btn-info btn-sm">Send
                                        </button>
                                    </div>
                                </div>
                            </fieldset>
                        </form>
                        <?php @include('../controller/sent_mail.php'); ?>

                    </div>
                </div>
            </div>
        </div>

    </div>


    <div id="footer"><?php @include('../layout/footer.php'); ?></div>
</div>




