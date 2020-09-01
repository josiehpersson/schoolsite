/*because the controller is communicating with a database,
it requires the mssql library and access to
the config file*/
const sql = require('mssql');
//database provider reuses a global instance of mssql every time it's added as a req.
const config = require('./config');

addressesController = () => {
    //adding controllers get-function
get = async (req, res) => {
    try {
    }
    catch (err) {
    return res.status(404);
    }
   };
};

   
module.exports = addressesController;
