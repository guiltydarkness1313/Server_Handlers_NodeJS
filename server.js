//Servidor.js
var server = require('http');
var url=require('url');
var fs=require('fs');
function initialize (route) {
    server.createServer(function (request,response) {
       var pathName=url.parse(request.url).pathname;
       //route se encarga de manejar las peticiones de archivos
       switch (pathName){
            case '/':
            case '/index':
               console.log('index.html');
                           var html=fs.readFileSync('./index.html');
                           response.writeHead(200, {'Content-Type': 'text/html'});
                           response.write(html);
                           //route(pathName,request,response,fs);
                           response.end();
               break;
            case '/nosotros':
            case '/contactenos':
            case '/servicios':
                console.log(pathName+'.html');
                fs.readFile('./'+pathName+'.html',function (error,html) {
                    response.write(html);
                    response.end();
                });
                break;
            default:
                //route(pathName,request,response,fs);
                console.log("la pagina no existe");
                break;
       }
    }).listen(8080);
}
exports.initialize=initialize;
