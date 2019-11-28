const helpers = require('../helpers');

exports.getStamp = (req, res) => {
    let { date_string } = req.params;
    if (date_string == undefined) {
        date_string = new Date();
    } else if ( date_string.length > 0) {
        date_string = helpers.convertDate(date_string);
    }
    const date = new Date(date_string);
    const payload = {
        unix: date.getTime(),
        utc: date.toUTCString(),
    }
    res.json(payload);
} 