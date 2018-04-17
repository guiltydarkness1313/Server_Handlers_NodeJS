function route(pathName,request,response,fs) {
    console.log("Nueva petición recibida: "+pathName);
    if(request.method==='GET'){
        let file=fs.readFileSync('./public'+request.url);
            if((request.url).search('png')) {
                response.writeHead(200, {'Content-Type': 'image/png'});
                response.write(file);
                response.end();
            }
            if(request.url.search('css')){
                response.writeHead(200, {'Content-Type': 'text/css'});
                response.write(file);
                response.end();
            }
            if(request.url.search('js')){
                response.writeHead(200, {'Content-Type': 'text/javascript'});
                response.write(file);
                response.end();
            }else{
            response.writeHead(404,{'Content-Type':'text/html'});
            response.write('error');
            response.end();
        }
        /*if(request.url==='/img/diajosac.png'){
            response.writeHead(200,{'Content-Type':'image/png'});
            let img=fs.readFileSync('./public/img/diajosac.png');
            response.write(img);
            response.end();
        }
        if(request.url==='/js/bootstrap.min.js'){
            response.writeHead(200,{'Content-Type':'image/png'});
            let img=fs.readFileSync('./public/img/diajosac.png');
            response.write(img);
            response.end();
        }if(request.url==='/css/bootstrap.min.css'){
            response.writeHead(200,{'Content-Type':'image/png'});
            let img=fs.readFileSync('./public/img/diajosac.png');
            response.write(img);
            response.end();
        }if(request.url==='/js/popper.min.js'){
            response.writeHead(200,{'Content-Type':'image/png'});
            let img=fs.readFileSync('./public/img/diajosac.png');
            response.write(img);
            response.end();
        }if(request.url==='/js/jquery-3.3.1.min.js'){
            response.writeHead(200,{'Content-Type':'image/png'});
            let img=fs.readFileSync('./public/img/diajosac.png');
            response.write(img);
            response.end();
        }else{
            response.writeHead(404,{'Content-Type':'text/html'});
            response.write('error');
            response.end();
        }*/
        }
    }
exports.route=route;