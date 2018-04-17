var server=require('./server');
var router=require('./router');
server.initialize(router.route);
