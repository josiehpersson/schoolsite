/*because the controller is communicating with a database,
it requires the mssql library and access to
the config file*/
const sql = require('mssql');
//database provider reuses a global instance of mssql every time it's added as a req.
const config = require('./config');

actorsController = () => {
    //adding controllers get-function
get = async (req, res) => {
    try {
        let query = req.params.Id > 0 ? `EXEC GetActor ${req.params.Id}` : 'EXEC GetActors';
        //skapar en förfrågan som kollar om vi lagt med ett ID i förfrågan eller ej
        //Om ID är angett så "hämta actor med det ID:et" annars "hämta alla actors"
    }
    catch (err) {
    return res.status(404);
    }
   };
};
//SIDA 28
   
module.exports = addressesController;