var jsonServer = require('json-server')
var server = jsonServer.create()
var db = {
  users: [{
        id: 0,
        firstname: "Arne",
        lastname: "Arnesen",
        email: "arne@arnesen.no",
        bonuspoints: 2000
    }, {
        id: 1,
        firstname: "Test",
        lastname: "Testesen",
        email: "test@testesen.no",
        bonuspoints: 150
    }]
}
var router = jsonServer.router(db)
var middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)
server.listen(3000, function () {
  console.log('JSON Server is running')
})