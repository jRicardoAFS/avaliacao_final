/*importando o express*/
const e = require("express");
const express = require("express");

const app = express();

app.listen(8080,
  () => {
    console.log("Servidor iniciado")
  });

app.get("/", (req, res) => {
  return res.send("seja bem vindo")
});

app.get("/informacoes", (req, res) => {

  const empresa = { nome: "NET-ONDA", renda: 50 }
  return res.json(empresa)
});


let cliente1 = { nome: "zé", email: "seila@gmail" }
let cliente2 = { nome: "chicu", email: "seila@gmail" }
let cliente3 = { nome: "talkitom", email: "seila@gmail" }

let clientes = [cliente1, cliente2, cliente3]

// app.get("/listarclientes", (req, res) => {
//   return res.json(clientes)
// });

app.get("/buscar", (req, res) => {
  const nome = req.query.nome;
  let filtro = clientes.filter((e) => e.nome == nome);

  return res.json(
    filtro
  )
});
// post para salvar
// app.post("/salvar", (req,res)=>{
//   //desestruturar as informacoes/separar
//   const {nome,email}= req.body;
//   let clienteRecebido = {nome, email};
// });

app.post("/salvar", (req, res) => {
  //desestruturar as informacoes/separar
  const nome = req.body.nome;
  const email = req.body.email;
  let clienteRecebido = { nome, email };
  clientes.push(clienteRecebido);
  return res.json(clientes);
});

app.put("/editar/:nome", (req, res) => {
  const params = req.params.nome;
  const { email, nome } = req.body;
  let c = { nome, email }
  let mudado = clientes.filter(
    (e) => { e.nome == nome }
  );
  let valorAtualizar = filtro.map
});




