var jsonServer = require('json-server')
var server = jsonServer.create()
var db = {
  users: [{
        id: 0,
        firstname: "Navn",
        lastname: "Navnesen",
        email: "arne@arnesen.no",
        bonuspoints: 2000
    }],
    bookings: [{
        startDate: "2017-05-10",
        endDate: "2017-05-17",
        room: "Standard",
        hotel: "Fawlty Towers"
    }, {
        startDate: "2017-05-25",
        endDate: "2017-05-29",
        room: "Deluxe",
        hotel: "Fawlty Towers"
    }]
}
var router = jsonServer.router(db)
var middlewares = jsonServer.defaults()

var port = process.env.PORT || 8080;

server.use(middlewares)
server.use(router)
server.listen(port, function () {
  console.log('JSON Server is running')
})