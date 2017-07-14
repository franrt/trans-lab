$("#register").click(function() {

            var password = $("#password").val();

            const validPass = function validarSiNumero(numero) {
                if (!/^([0-9])*$/.test(numero))
                    alert("Tu password solo debe contener números");
            }

            if (password == '') {
                alert("Por favor ingresa una contraseña válida");
            } else if ((password.length) < 8 && password != validPass) {
                alert("Tu password debe tener minimo 8 caracteres");
            } else {
                if (password == validPass && password.length <= 8) {
                    return (url);
                }
            }
        }

        function redirect() {
            var url = "index2.html";
            window.open(url, '_top');
        }