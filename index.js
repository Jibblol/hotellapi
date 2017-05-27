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
        booking_id: 0,
        user_id: 0,
        startDate: "2017-05-10",
        endDate: "2017-05-17",
        room: "Standard",
        hotel: {
        name: "Fawlty Towers",
            map: {
                lat: "-43.9509",
                lng: "-34.4618"
            }
        }
    }, {
        booking_id: 1,
        user_id: 0,
        startDate: "2017-05-25",
        endDate: "2017-05-29",
        room: "Deluxe",
        hotel: {
            name: "Fawlty Towers",
            map: {
                lat: "-43.9509",
                lng: "-34.4618"
            }
        }
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