/*importando o express*/
const express = require("express");

const app = express();

app.listen(8080, 
  ()=>{
    console.log("Servidor iniciado")
  });

app.get("/", (req,res)=>{
  return res.send("seja bem vindo")
});

app.get("/informacoes", (req,res)=>{

  const empresa= {nome: "NET-ONDA",renda:50}
  return res.json(empresa)
});

app.get("/buscar", (req,res)=>{
  const nome=req.query.nome;
  return res.json(
    {nome}
  )
});