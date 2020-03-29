//MongoDB Atlas connection
//<--USERNAME--> = Your MongoDB Altas username
//<--PASSWORD--> = Your MongoDB Atlas password

dbPassword = 'mongodb+srv://<--USERNAME-->:<--PASSOWORD-->@cluster1-tdlj2.mongodb.net/test?retryWrites=true&w=majority';

module.exports = {
    mongoURI: dbPassword
};
