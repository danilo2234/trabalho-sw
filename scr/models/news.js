var fs = require('fs'); // Importa o módulo de manipulação de arquivos

function news() {}

// Define um método 'getLastNews' para o protótipo da função 'news', que será utilizado para obter as últimas notícias
news.prototype.getLastNews = function(callback) {
  fs.readFile('./data/noticias.json', 'utf8', function(err, result) {
    var data = [];

    if (!err) {
      var obj = JSON.parse(result);

    // Verifica o número de notícias e define até onde percorrerá o array 'noticias'
      if (obj.noticias.length > 4) {
        var i = 4;
      } else {
        var i = (obj.noticias.length - 1);
      }
    // Itera sobre o array de notícias e seleciona as últimas 4 (ou menos, dependendo do tamanho)
      obj.noticias.forEach(function(noticia) {
        if (i >=  0) {
          data[i] = noticia;
	  i--;
        }
      });
    }	   
    callback(err, data);
  });
};

module.exports = function(){
  return news;
}