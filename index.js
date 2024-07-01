var express = require("express");

var app = express();
var port = 5000;
app.use(express.json());

app.post("/api/saque", async (req, res) => {
    let valorTotal = req.body.valor;
    let composicaoSaque = contarNotas(valorTotal);
  
    res.send(composicaoSaque);
  });

function contarNotas(valorTotal) {
    var denominacoes = [100, 50, 20, 10, 5, 2];
    var composicaoSaque = {};
    denominacoes.forEach(function (nota) {
        var quantNotas = Math.floor(valorTotal / nota);
        composicaoSaque[String(nota)] = quantNotas;
        valorTotal %= nota;
    });
    return composicaoSaque;
}
app.listen(port, function () {
    console.log("app listening on port " + port);
});
