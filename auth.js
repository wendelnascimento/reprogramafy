var usuario = localStorage.usuario;
if (usuario) {
    document.querySelector("#botao").innerHTML = usuario;
} else {
    alert("Não autorizado!");
}
