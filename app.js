var express = require('express');  // Importa o framework Express
var consign = require('consign');  // Importa o módulo Consign (para carregar módulos automaticamente)

var app = express();  // Cria a instância do Express


app.set('view engine', 'ejs');  // Define o motor de templates para EJS
app.set('views', './scr/views');  // Define o diretório onde os arquivos de view (EJS) estão localizados

// Usa o Consign para incluir rotas, modelos e controladores no app
consign()
  .include('scr/routes')  // Inclui as routes
  .then('scr/models')  // Inclui os models
  .then('scr/controllers')  // Inclui os controllers
  .into(app);  // Injeta tudo no app


// Configura o servidor para rodar na porta 3000
app.listen(3000, function(){
  console.log('APP rodando na porta 3000');
});