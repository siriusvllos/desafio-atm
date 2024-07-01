var express = require("express");

var app = express();
var port = 5000;
app.use(express.json());

app.post("/api/saque", async (req, res) => {
  let valorTotal = req.body.valor;

  if (!Number.isInteger(valorTotal) || valorTotal <= 0) {
    return res.status(400).send({ error: "O valor deve ser um número inteiro positivo." });
  } // ^ Verifica se o valor da requisição (valorTotal) é um num inteiro e positivo

  let composicaoSaque = contarNotas(valorTotal);
  if (valorTotal !== 0) {
    return res.status(400).send({error: "O valor não pode ser atendido com as cédulas disponíveis.",});
  } // ^ Verifica se o valor da requisição pode ser repartido pelas notas disponíveis

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
