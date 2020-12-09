//Apresentação Modal
setTimeout(ApresentarModal, 5000);
function ApresentarModal() {
    var modal = document.querySelector(".modal");
    if (modal != null) {
        document.querySelector(".modal").style.display = "block";
        document.querySelector(".modal").style.display = "block";
        document.querySelector(".modal a").addEventListener("click", function () { document.querySelector(".modal").style.display = "none"; });
    }

}
//Validação modal Index
if (document.forms["modal_form"] != undefined) {
    var form = document.forms["modal_form"];
    form.addEventListener("submit", validarFormModal);
    form.email.addEventListener("keypress", function () {
        form.email.className = "";
        document.querySelector("span.nao_valido").style.display = "none";
    })

}
function validarFormModal(evt) {

    var form = document.forms["modal_form"];
    var inputEmail = form.email;
    var valorEmail = form.email.value;

    if (!ValidarEmail(valorEmail)) {
        inputEmail.className = "nao_valido";
        document.querySelector("span.nao_valido").style.display = "block";
        evt.preventDefault();
    }
}
//Validação fale conosco
if (document.forms["form_contato"] != undefined) {
    var form = document.forms["form_contato"];
    form.addEventListener("submit", function (evt) {
        var formvalid = true;
        if (!naoVazio(form.Nome_Completo.value)) {
            form.Nome_Completo.className = "nao_valido";
            formvalid = false;
        }
        if (!naoVazio(form.Telefone.value)) {
            form.Telefone.className = "nao_valido";
            formvalid = false;
        }
        if (!naoVazio(form.Mensagem.value)) {
            form.Mensagem.className = "nao_valido";
            formvalid = false;
        }
        if (!ValidarEmail(form.Email.value)) {
            form.Email.className = "nao_valido";
            formvalid = false;
        }
        if (!formvalid) {
            evt.preventDefault();
        }
    });
    var inputs = document.querySelectorAll("form[name=form_contato] input[type =text]")

    for (var index = 0; index < inputs.length; index++) {
        inputs[index].addEventListener("keypress", function () {
            this.className = "";
        })

    }
    var textarea = document.querySelector("form[name=form_contato] textarea ")
    textarea.addEventListener("keyup", function () {
        document.querySelector(".texto").innerHTML = "Caractere(s) " + this.value.length;
    })

}

//Funções
function ValidarEmail(valorEmail) {
    if (valorEmail != "" && valorEmail.indexOf("@") > 3 && valorEmail.lastIndexOf(".") > valorEmail.indexOf("@")) {
        return true;
    }
    return false;
}

function naoVazio(texto) {
    if (texto.trim().length > 0) {
        return true;
    }
    return false;
}
