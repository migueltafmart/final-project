const MongoClient = require("mongodb").MongoClient;
const url = process.env.URI;
const ObjectId = require("mongodb").ObjectID;
const emailRegEx = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
const idRegEx = /^[0-9a-fA-F]{24}$/;
async function connection() {
    let client;
    try {
        client = await MongoClient(url, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        });

        await client
            .connect()
    } catch (e) {
        console.log(e);
    } finally {
        return client; // Objeto de conexion a la BBDD
    }
}
// TODO TTD
exports.createApiKey = async (userEmail) => {
    const client = await connection();
    let result;
    if (emailRegEx.test(userEmail)) {
        try {
            let user = await client
                .db("G5")
                .collection("apikeys")
                .insertOne({'user': userEmail, 'role': 'admin'});
            result = {
                "email": userEmail,
                "apiKey": user.insertedId
            }
        } catch (err) {
            console.log(err)
            result = null;
        } finally {
            client.close()
            return result;
        }
    } else {
        return {
            mssg: "Wrong email"
        };
    }
};
// TODO TTD
exports.checkApikey = async (apiKey) => {
    let userID; 
    const client = await connection();
    let result = false;
    if (idRegEx.test(apiKey)) {
        try {
            userID = new ObjectId(apiKey);
            result= await client
                .db("G5")
                .collection("apikeys")
                .findOne({'_id': userID});
        } catch (err) {
            console.log(err)
            result = false;
        } finally {
            client.close()
            return result;
        }
    } else {
        return false
    }
}
