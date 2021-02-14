const mongo = require('../models/apiKeys')
// GET a Home
exports.getHome = async (req, res) => {
    //Si el usuario existe en la base de datos
    if (await mongo.checkApikey(req.query.apiKey)) {
        return res
            .status(200)
            .json({
                "status": true,
                "mssg": "information"
            })
    // Si no existe en la base de datos
    } else if (req.query.apiKey) {
        return res
            .status(403)
            .json({
                "status": false,
                "mssg": "Wrong API Key"
            })
    // Si no ha introducido query
    } else {
        return res
            .status(403)
            .json({
                "status": false,
                "mssg": "No API Key provided"
            })
    }

};
// POST a Home
exports.postHome = async (req, res) => {
    //Llamada a mongoDB
    let user = await mongo.checkApikey(req.query.apiKey);
    //Si el usuario existe en la base de datos
    if (user) {
        //Si el usuario existente es administrador
        if (user.role === "admin") {
            return res
                .status(200)
                .json({
                    "status": true,
                    "mssg": "information"
                });
        //Si no tiene los permisos requeridos
        } else {
            return res
                .status(403)
                .json({
                    "status": false,
                    "mssg": "Not an admin"
                });
        }
    //Si el usuario no está en la base de datos
    } else if (req.query.apiKey) {
        return res
            .status(403)
            .json({
                "status": false,
                "mssg": "Wrong API Key"
            });
    //Si no se ha pasado query
    } else {
        return res
            .status(403)
            .json({
                "status": false,
                "mssg": "No API Key provided"
            });
    }
};
// PUT a Home
exports.putHome = async (req, res) => {
    if (await mongo.checkApikey(req.query.apiKey)) {
        return res
            .status(200)
            .json({
                "status": true,
                "mssg": "information"
            })
    } else if (req.query.apiKey) {
        return res
            .status(403)
            .json({
                "status": false,
                "mssg": "Wrong API Key"
            })
    } else {
        return res
            .status(403)
            .json({
                "status": false,
                "mssg": "No API Key provided"
            })
    }
};
// DELETE a Home
exports.deleteHome = async (req, res) => {
    if (await mongo.checkApikey(req.query.apiKey)) {
        return res
            .status(200)
            .json({
                "status": true,
                "mssg": "information"
            })
    } else if (req.query.apiKey) {
        return res
            .status(403)
            .json({
                "status": false,
                "mssg": "Wrong API Key"
            })
    } else {
        return res
            .status(403)
            .json({
                "status": false,
                "mssg": "No API Key provided"
            })
    }
};