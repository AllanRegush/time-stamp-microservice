const helpers = require('../helpers');

exports.getStamp = (req, res) => {
    const { date_string = "" } = req.params;
    
    const date = helpers.handleDateString( date_string ) ;
    let payload;
    if (! helpers.isValidDate( date ) ) {
        payload = {
            error: "Invalid Date"
        }
    } else {
        payload = {
            unix: date.getTime(),
            utc: date.toUTCString(),
        }
    }
    res.json(payload);
} 