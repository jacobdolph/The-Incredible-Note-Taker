
const fs = require("fs");
const util = require("util");
var dbData = require("../db/db.json");


module.exports = function (app) {

    app.get("/api/db", function (req, res) {
        res.json(dbData)
    });
    app.post("/api/db", function (req, res) {

        console.log(req.body)
        dbData.push(req.body)
        res.json(true)
    });
    // app.delete("api/db/:id", function (req, res) {

    // })

}