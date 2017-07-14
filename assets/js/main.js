$(document).ready(function() {
    //inicialización del navbar
    $(".button-collapse").sideNav();

    $('.collapsible').collapsible();

    $('select').material_select();


    //Validar el botón y pasar a sgte pág

    $('#btnValidate').click(function() {
        var sEmail = $('#txtEmail').val();

        var pass = $("#validarPass").val();

        // Chequear q no haya un input vacío
        if ($.trim(sEmail).length == 0 || $.trim(pass).length == 0) {
            alert('Completa los campos');
        }
        if (validateEmail(sEmail) && validarSiNumero(pass)) {
            console.log("Correo válido y pass valido");

        } else {
            return (window.open("index2.html"));
        }
    });


    // Función para validar correo con una expresión regular.
    function validateEmail(sEmail) {
        var filter = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
        if (filter.test(sEmail)) {
            return true;
        } else {
            return false;
        }
    }

    //funcion para validar solo numeros
    var nums = (/^[0-9]+$/.test(passW));
    var passW = $("#validarPass").val();

    function validarSiNumero(numeros) {
        if (passW.length <= 8 && passW == nums) {
            console.log("Password válido");
        } else if (passW.length > 8 && passW != nums)
            alert("Tu password debe contener maximo 8 números");

    }

    //Local Storage

    // guardar
    var correoE = $('#txtEmail').val();
    localStorage.correoE = correoE;

    //mostrar el mail del usuario en el perfil

    $(location).attr("user-mail", "index2.html");



    //llamando a la api
    function ajaxBip(saldo) {
        $.ajax({
                url: 'https://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip=123456',
                type: 'GET',
                dataType: 'json',
            })
            .done(function(response) {
                console.log("YAY!");
                console.log(response);

            })
            .fail(function() {
                console.log("error");
            })
            .always(function() {
                console.log("complete");
            })

        var saldo = this.saldoTarjeta;
        console.log(saldo);
    }



    $("#saldo").click(function(e) {
        console.log(":)");
        $("#muestraSaldo").empty();
        var saldo = this.saldoTarjeta;
        console.log(saldo);
        ajaxBip(saldo);
    })
});